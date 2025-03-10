var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var util = require("../config/util.js");
var User = mongoose.model("User");
var router = express.Router();
// Handle wallet login
router.get("/wallet-login",async (req, res) => {
  try {
    const { address } = req.body;
    if (!address)
      return res
        .status(400)
        .json({ success: false, message: "Wallet address is required." });

    let user =  User.findOne({ walletAddress: address });
    if (!user) {
      user = new User({ walletAddress: address });
      await  user.save();
    }

    req.session.user = user; // Save user session
    return res.json({
      success: true,
      message: "Wallet connected successfully.",
      user,
    });
  } catch (error) {
    console.error("Wallet login error:", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
});
module.exports = router;
