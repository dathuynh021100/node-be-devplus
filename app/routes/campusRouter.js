module.exports = (app) => {
  const campus = require("../controllers/campusController.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", campus.create);

  // Retrieve all Tutorials
  router.get("/", campus.findAll);

  // Retrieve all published Tutorials
  router.get("/published", campus.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", campus.findOne);

  // Update a Tutorial with id
  router.put("/:id", campus.update);

  // Delete a Tutorial with id
  router.delete("/:id", campus.delete);

  // Create a new Tutorial
  router.delete("/", campus.deleteAll);

  app.use("/api/campus", router);
};
