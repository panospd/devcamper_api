const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");

const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
  logout
} = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", protect, getMe);
router.put("/updateDetails", protect, updateDetails);
router.put("/updatePassword", protect, updatePassword);
router.post("/forgotPassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);

module.exports = router;
