module.exports = (mongoose) => {
  var BannerSchema = mongoose.Schema(
    {
      title: String,
      content: String,
    },
    { timestamps: true }
  );

  BannerSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  module.exports = mongoose.model("Banner", BannerSchema);
};
