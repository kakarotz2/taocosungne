const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  descreption: {
    type: String,
    required: true,
  },
  trademark: {
    type: String,
    default: 'Chưa xác định',
  },
  origin: {
    type: String,
    default: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('products', ProductSchema);
