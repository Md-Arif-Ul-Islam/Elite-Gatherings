const express = require("express");
const { registerUser, loginUser, getProfile, forgotPassword, resetPassword } = require("../controller/authController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);
router.post("/forgotPassword", forgotPassword);
router.put("/resetPassword", resetPassword);

module.exports = router;