const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");
/**
 * App Routes
 */
router.get("/register", userController.register);
router.get("/login", userController.login);
router.post("/register", userController.registerOnPost);
router.post("/login", userController.loginOnPost);
module.exports = router;
