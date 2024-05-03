const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteControllers");

router.get("/", siteController.slider);
router.get("/", siteController.index);

module.exports = router;
