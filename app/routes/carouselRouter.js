module.exports = (app) => {
  const carousel = require("../controllers/carouselController.js");

  var router = require("express").Router();

  // Create a new Carousel
  router.post("/", carousel.create);

  // Retrieve all Carousel
  router.get("/", carousel.findAll);

  // Retrieve all published Carousel
  router.get("/published", carousel.findAllPublished);

  // Retrieve a single Carousel with id
  router.get("/:id", carousel.findOne);

  // Update a Carousel with id
  router.put("/:id", carousel.update);

  // Delete a Carousel with id
  router.delete("/:id", carousel.delete);

  // Create a new Carousel
  router.delete("/", carousel.deleteAll);

  app.use("/api/carousel", router);
};
