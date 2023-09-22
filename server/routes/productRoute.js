const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const multer = require("multer");
const {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  updateProductImage,
} = require("../controllers/productControllers");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "my-images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
router.post(
  "/addProduct",
  authMiddleware,
  upload.single("productImg"),
  addProduct
);
router.get("/", getProducts);
router.delete("/:id", authMiddleware, deleteProduct);
router.put("/:id", authMiddleware, updateProduct);
router.put(
  "/image/:id",
  authMiddleware,
  upload.single("productImg"),
  updateProductImage
);
module.exports = router;
