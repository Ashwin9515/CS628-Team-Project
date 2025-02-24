const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  token = token.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Not authorized" });
  }
};

module.exports = { protect };
