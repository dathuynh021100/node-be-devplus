const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.receives = require("./receiveModel.js")(mongoose);
db.campus = require("./campusModel.js")(mongoose);
db.carousels = require("./carouselModel.js")(mongoose);
db.banners = require("./bannerModel.js")(mongoose);
module.exports = db;
