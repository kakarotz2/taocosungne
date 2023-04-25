const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
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
  phone: {
    type: Number,
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
  note: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = User = mongoose.model('order', OrderSchema);
