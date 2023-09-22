const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: "String",
    required: true,
  },
  image: { type: "String", required: true },
  agence: { type: "String", required: true },
  desc: { type: "String" },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  // createdAt: { type: Date, required: true, default: Date.now },
});
module.exports = mongoose.model("product", productSchema);
