const agence = require("../models/agenceModel");
//add new agence
exports.addAgence = async (req, res) => {
  try {
    const { agenceName, desc } = req.body;
    console.log(req.file);
    const imagePath = `http://localhost:5000/${req.file.path}`;
    const newAgence = await agence.create({
      agenceName,
      desc,
      image: imagePath,
      owner: req.userId,
    });
    res.json(newAgence);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "somthing whent wrong" });
  }
};
//get agence list
exports.getAgences = async (req, res) => {
  try {
    const agenceList = await agence.find().populate("owner", "-password");
    res.json(agenceList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "somthing whent wrong" });
  }
};
//delete agence ById
exports.deleteAgence = async (req, res) => {
  try {
    const Agence = await agence.findById(req.params.id);
    const agenceId = Agence.owner.toString();
    if (agenceId !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });
    await agence.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "somthing whent wrong" });
  }
};
//update agence
exports.updateAgence = async (req, res) => {
  try {
    const Agence = await agence.findById(req.params.id);
    const agenceId = Agence.owner.toString();
    if (agenceId !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });
    await agence.findByIdAndUpdate(req.params.id, { ...req.body });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "somthing whent wrong" });
  }
};
//update agenceImage
exports.updateAgenceImage = async (req, res) => {
  try {
    const Agence = await agence.findById(req.params.id);
    const agenceId = Agence.owner.toString();
    if (agenceId !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });
    console.log(req.file);
    const imagePath = `http://localhost:5000/${req.file.path}`;
    await agence.findByIdAndUpdate(req.params.id, { image: imagePath });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "somthing whent wrong" });
  }
};
