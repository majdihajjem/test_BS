const jwt = require("jsonwebtoken");
exports.authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) return res.status(401).json({ msg: "you are not authorized" });
    const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(verifyToken);
    req.userId = verifyToken.sub;
    next();
  } catch (error) {
    console.log("error");
    res.status(500).json({ msg: error });
  }
};
