const router = require('express').Router();
const Product = require('../models/logicalModel');

// TODO: Implement logical operators for querying products

// Get all products where price is 2000 or name is 'product1'
const or = async (req, res) => {
  try {
    // TODO: Write a query to find products matching the given conditions using the $or operator
    // TODO: Use $or to find products where price is 2000 or name is 'product1'
  } catch (error) {
    res.status(404).send(error);
  }
};

// Get all products where price is 2000 and name is 'product1'
const and = async (req, res) => {
  try {
    // TODO: Write a query to find products matching the given conditions using the $and operator
    // TODO: Use $and to find products where price is 2000 and name is 'product1'
  } catch (error) {
    res.status(404).send(error);
  }
};

// Get all products where price is not greater than 2000 (i.e., less than or equal to 2000)
const not = async (req, res) => {
  try {
    // TODO: Write a query to find products where price is not greater than 2000 using the $not and $gt operators
  } catch (error) {
    res.status(404).send(error);
  }
};

// Get all products except those where price is 2000 or name is 'product1'
const nor = async (req, res) => {
  try {
    // TODO: Write a query to find products except those where price is 2000 or name is 'product1' using the $nor operator
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { or, and, not, nor };
