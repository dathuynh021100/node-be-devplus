const Carousel = require("../models/carouselModel");
// Create and Save a Carousel
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Carousel
  const carousel = new Carousel({
    author: req.body.author,
    img: req.body.img,
    job: req.body.job,
    title: req.body.title,
  });

  // Save Carousel in the database
  carousel
    .save(carousel)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Carousel.",
      });
    });
};

// Retrieve all Carousel from the database.
exports.findAll = (req, res) => {
  const item = req.query.title;
  var condition = item
    ? { item: { $regex: new RegExp(item), $options: "i" } }
    : {};

  Carousel.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Carousel.",
      });
    });
};

// Find a single Carousel with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Carousel.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Carousel with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Carousel with id=" + id });
    });
};

// Update a Carousel by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Carousel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Carousel with id=${id}. Maybe Carousel was not found!`,
        });
      } else res.send({ message: "Carousel was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Carousel with id=" + id,
      });
    });
};

// Delete a Carousel with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Carousel.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Carousel with id=${id}. Maybe Carousel was not found!`,
        });
      } else {
        res.send({
          message: "Carousel was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Carousel with id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Carousel.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Carousel were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Carousel.",
      });
    });
};

// Find all published Carousel
exports.findAllPublished = (req, res) => {
  Carousel.find({ published: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Carousel.",
      });
    });
};
