const express = require("express");
const router = express.Router();
const multer = require("multer");
const { authMiddleware } = require("../middlewares/authMiddleware");
const {
  addAgence,
  getAgences,
  deleteAgence,
  updateAgence,
  updateAgenceImage,
} = require("../controllers/AgenceControllers");
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
  "/addAgence",
  authMiddleware,
  upload.single("agenceImg"),
  addAgence
);
router.get("/", getAgences);
router.delete("/:id", authMiddleware, deleteAgence);
router.put("/:id", authMiddleware, updateAgence);
router.put(
  "/image/:id",
  authMiddleware,
  upload.single("agenceImg"),
  updateAgenceImage
);
module.exports = router;
