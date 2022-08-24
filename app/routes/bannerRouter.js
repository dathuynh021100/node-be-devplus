module.exports = (app) => {
  const banner = require("../controllers/bannerController.js");

  var router = require("express").Router();
  // Create a new Banners
  router.post("/", banner.create);

  // Retrieve all Banners
  router.get("/", banner.findAll);

  // Update a Banner with id
  router.put("/:id", banner.update);

  app.use("/api/banner", router);
};
