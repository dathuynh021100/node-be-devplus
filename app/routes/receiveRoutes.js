module.exports = (app) => {
  const receive = require("../controllers/receiveController.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", receive.create);

  // Retrieve all Tutorials
  router.get("/", receive.findAll);

  // Retrieve all published Tutorials
  router.get("/published", receive.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", receive.findOne);

  // Update a Tutorial with id
  router.put("/:id", receive.update);

  // Delete a Tutorial with id
  router.delete("/:id", receive.delete);

  // Create a new Tutorial
  router.delete("/", receive.deleteAll);

  app.use("/api/receive", router);
};
