const mongoose = require("mongoose");

const agenceSchema = mongoose.Schema({
  agenceName: {
    type: "String",
    required: true,
  },
  image: { type: "String", required: true },
  desc: { type: "String" },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("agence", agenceSchema);
