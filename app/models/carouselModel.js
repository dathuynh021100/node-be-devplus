module.exports = (mongoose) => {
  var CarouselSchema = mongoose.Schema(
    {
      author: String,
      img: String,
      job: String,
      title: String,
    },
    { timestamps: true }
  );

  CarouselSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  module.exports = mongoose.model("Carousel", CarouselSchema);
};
