const express = require("express");
const router = express.Router();
const controller = require("../controllers/taxiDriver.controller");

router.get("/", controller.findAll); // ดึง driver ทั้งหมด

module.exports = router;
