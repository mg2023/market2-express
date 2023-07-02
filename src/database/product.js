const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllProducts = () => {
  return DB.workouts;
};
const getOneProduct = (productId) => {
  console.log(productId);
  return DB.workouts[productId];
};

const createProduct = (newProduct) => {
  console.log("llega a product js");
  console.log(newProduct);
  const isAlreadyAdded = DB.workouts.findIndex(
    (workout) => workout.name === newProduct.name
  ) > -1;

  console.log(isAlreadyAdded);

  if (isAlreadyAdded) {
    console.log("is already added");
    return;
  }

  DB.workouts.push(newProduct);
  saveToDatabase(DB);

  return newProduct;
};

const updateProduct = (productId) => {
  res.send(`Update product ${req.params.productId}`);
};

const deleteProduct = (productId) => {
  res.send(`Delete product ${req.params.productId}`);
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
