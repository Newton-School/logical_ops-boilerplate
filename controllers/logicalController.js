const router = require('express').Router();
const Product = require('../models/logicalModel');

//Get all products where price is 2000 or name is 'product1'
const or = async (req, res) => {
  try {
    const products = await Product.find({
      $or: [{ price: 2000 }, { name: 'product1' }],
    });
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(404).send(error);
  }
};

//Get all products where price is 2000 and name is 'product1'
const and = async (req, res) => {
  try {
    const products = await Product.find({
      $and: [{ price: 2000 }, { name: 'product1' }],
    });
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(404).send(error);
  }
};

//Get all products where price is not greater than 2000 (i.e. less than or equal to 2000)
const not = async (req, res) => {
  try {
    const products = await Product.find({
      price: { $not: { $gt: 2000 } },
    });
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(404).send(error);
  }
};

//Get all products except those where price is 2000 or name is 'product1'
const nor = async (req, res) => {
  try {
    const products = await Product.find({
      $nor: [{ price: 2000 }, { name: 'product1' }],
    });
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(404).send(error);
  }
};
module.exports = { or, and, not, nor };
