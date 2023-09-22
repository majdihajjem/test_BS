const express = require("express");
const app = express();
require("dotenv").config();
//body parser
app.use(express.json());
require("./config/connectDB");
const cors = require("cors");
app.use(cors());
app.use("/api/v1/users", require("./routes/uesrRoute"));
<<<<<<< HEAD
=======
// app.use("/api/v1/userList", require("./routes/uesrRoute"));
>>>>>>> 9221dbe (commit 9)
app.use("/api/v1/products", require("./routes/productRoute"));
app.use("/api/v1/agences", require("./routes/AgenceRoute"));
app.use("/my-images", express.static("my-images"));
app.listen(process.env.PORT, () =>
  console.log("listening on port", process.env.PORT)
);
