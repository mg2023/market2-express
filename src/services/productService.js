const {v4: uuidv4} = require("uuid");
const product = require("../database/product");

const getAllProducts = () => {
  const allProducts = product.getAllProducts();
  return allProducts;
};

const getOneProduct = (productId) => {
  console.log(productId);
  const oneProduct = product.getOneProduct(productId);
  return oneProduct;
};

const createProduct = (newProduct) => {

  console.log("llega a product service");
  const productToInsert = {
    ...newProduct,
    id: uuidv4(),
    createProductdAt: new Date().toLocaleString("en-US",{timeZone:'America/Santiago'}),
    updateProductdAt: new Date().toLocaleString("en-US",{timeZone:'America/Santiago'})
    }
  const createdProduct = product.createProduct(productToInsert);
  return createdProduct

};

const updateProduct = (req, res) => {
  res.send(`Update product ${req.params.productId}`);
};

const deleteProduct = (req, res) => {
  res.send(`Delete product ${req.params.productId}`);
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
