const { types, string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  }
});

const ProductModel = mongoose.model('Product' ,ProductSchema);
module.exports =ProductModel;
