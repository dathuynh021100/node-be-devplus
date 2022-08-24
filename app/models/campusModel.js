module.exports = (mongoose) => {
  var CampusSchema = mongoose.Schema(
    {
      img: String,
      item: String,
    },
    { timestamps: true }
  );

  CampusSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  module.exports = mongoose.model("Campus", CampusSchema);
};
