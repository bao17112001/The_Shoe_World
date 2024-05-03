const express = require("express");
const router = express.Router();

const ProductsController = require("../app/controllers/ProductsControllers");

// router.get("/:slug", ProductsController.show);
router.get("/", ProductsController.index);

module.exports = router;
