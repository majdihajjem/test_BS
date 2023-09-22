const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
//register user
exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password, role, agence } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser)
      return res.status(400).json({ msg: "user already registered" });
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      username,
      email,
      password: hash,
      role,
      agence,
    });
    const token = jwt.sign({ sub: newUser._id }, process.env.jwt_SECRET);
    res.json({ seccess: true, token });
  } catch (error) {
    console.log("error");
    res.status(500).json({ msg: "something went wrong." });
  }
};
//login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (!existUser)
      return res.status(400).json({ msg: "you should register first" });
    var validate = await bcrypt.compare(password, existUser.password);
    if (!validate) return res.status(400).json({ msg: "invalid password" });

    const token = jwt.sign({ sub: existUser._id }, process.env.jwt_SECRET);
    res.json({ seccess: true, token });
  } catch (error) {
    console.log("error");
    res.status(500).json({ msg: "something went wrong." });
  }
};
//get user info
exports.getUserInfo = async (req, res) => {
  try {
    const userInfo = await User.findById(req.userId).select("-password -__v");
    res.json(userInfo);
  } catch (error) {
    console.log("error");
    res.status(500).json({ msg: "something went wrong." });
  }
};
<<<<<<< HEAD
=======
//get userList for user Management
exports.getUserList = async (req, res) => {
  try {
    const userList = await User.find({ role: "adminAgence" });
    res.json(userList);
  } catch (error) {
    console.log("error");
    res.status(500).json({ msg: "something went wrong." });
  }
};
//delete user
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user || user.role === "admin")
      return res.status(403).send("Id not found ");

    await User.deleteOne({ _id: userId });

    return res.send(userId);
  } catch (error) {
    console.log("error");
    res.status(500).json(error);
  }
};
>>>>>>> 9221dbe (commit 9)
