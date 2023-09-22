const product = require("../models/productModel");
//add new product
exports.addProduct = async (req, res) => {
  try {
    const { title, desc,agence } = req.body;
    console.log(req.file);
    const imagePath = `http://localhost:5000/${req.file.path}`;
    const newProduct = await product.create({
      title,
      agence,
      desc,
      image: imagePath,
      owner: req.userId,
    });
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "somthing whent wrong" });
  }
};
//get product list
exports.getProducts = async (req, res) => {
  try {
    const productList = await product.find().populate("owner", "-password");
    res.json(productList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "somthing whent wrong" });
  }
};
//delete product ById
exports.deleteProduct = async (req, res) => {
  try {
    const Product = await product.findById(req.params.id);
    const productId = Product.owner.toString();
    if (productId !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });
    await product.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "somthing whent wrong" });
  }
};
//update product
exports.updateProduct = async (req, res) => {
  try {
    const Product = await product.findById(req.params.id);
    const productId = Product.owner.toString();
    if (productId !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });
    await product.findByIdAndUpdate(req.params.id, { ...req.body });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "somthing whent wrong" });
  }
};
//update productImage
exports.updateProductImage = async (req, res) => {
  try {
    const Product = await product.findById(req.params.id);
    const productId = Product.owner.toString();
    if (productId !== req.userId)
      return res.status(401).json({ msg: "you are not authorized" });
    console.log(req.file);
    const imagePath = `http://localhost:5000/${req.file.path}`;
    await product.findByIdAndUpdate(req.params.id, { image: imagePath });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "somthing whent wrong" });
  }
};
