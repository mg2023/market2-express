const express = require("express");
const router = express.Router();
const productsController = require("../../controllers/productController");

router
  .get("/", productsController.getAllProducts)
  .get("/:productId", productsController.getOneProduct)
  .post("/", productsController.createProduct)
  .patch("/:productId", productsController.updateProduct)
  .delete("/:productId", productsController.deleteProduct);

module.exports = router;
