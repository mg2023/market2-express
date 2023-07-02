const express = require("express");
const productService = require("../services/productService");

const getAllProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.send({ status: "OK", data: products });
};

const getOneProduct = (req, res) => {
  const product = productService.getOneProduct(req.params.productId);
  res.send({ status: "OK", data: product });
};

const createProduct = (req, res) => {
  const { body } = req;

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }

  const newProduct ={
    name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
  }

  console.log("llega a controller js");
  const createdProduct = productService.createProduct(newProduct);
  console.log(createdProduct);
  res.status(201).send({ status: "OK", data: createdProduct });
};

const updateProduct = (req, res) => {
  const updatedProduct = productService.updateProduct(req.params.productId);
  res.send(`Update product ${req.params.productId}`);
};

const deleteProduct = (req, res) => {
  const deletedProduct = productService.deleteProduct(req.params.productId);
  res.send(`Delete product ${req.params.productId}`);
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
