const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
<<<<<<< HEAD
    enum: ["admin", "adminAgence", "customer"],
    default: "customer",
=======
    enum: ["admin", "adminAgence"],
    default: "adminAgence",
>>>>>>> 9221dbe (commit 9)
  },
  agence: {
    type: String,
  },
});
module.exports = mongoose.model("User", userSchema);
