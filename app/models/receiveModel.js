module.exports = (mongoose) => {
  var ReceiveSchema = mongoose.Schema(
    {
      img: String,
      title: String,
      detail: String,
    },
    { timestamps: true }
  );

  ReceiveSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  module.exports = mongoose.model("Receive", ReceiveSchema);
};
