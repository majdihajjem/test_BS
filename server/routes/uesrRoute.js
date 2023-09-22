const express = require("express");
const {
  register,
  login,
  getUserInfo,
<<<<<<< HEAD
=======
  getUserList,
  deleteUser,
>>>>>>> 9221dbe (commit 9)
} = require("../controllers/userControllers");
const router = express.Router();
const { body } = require("express-validator");
const { authMiddleware } = require("../middlewares/authMiddleware");
router.post("/login", login);
router.post(
  "/register",
  body("email", "please enter a valid email").isEmail(),
  body("password", "password must be at least 8 characters").isLength(8),
  register
);
<<<<<<< HEAD
=======
//get list of users
router.get("/userList", authMiddleware, getUserList);
//delete user
router.delete("/:id", authMiddleware, deleteUser);
>>>>>>> 9221dbe (commit 9)
//getUserInfo route
router.get("/", authMiddleware, getUserInfo);
module.exports = router;
