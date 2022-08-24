const Banner = require("../models/bannerModel.js");
// Create banner
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Banner
  const banner = new Banner({
    title: req.body.title,
    content: req.body.content,
  });

  // Save Tutorial in the database
  banner
    .save(banner)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Banner.",
      });
    });
};
// Retrieve all Banner from the database.
exports.findAll = (req, res) => {
  const item = req.query.title;
  var condition = item
    ? { item: { $regex: new RegExp(item), $options: "i" } }
    : {};

  Banner.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Update a Banner by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Banner.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Banner with id=${id}. Maybe Banner was not found!`,
        });
      } else res.send({ message: "Banner was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Reveive with id=" + id,
      });
    });
};
