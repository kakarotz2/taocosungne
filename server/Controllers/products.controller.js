const ProductSchema = require('../models/product.model');
require('dotenv').config();
exports.getDocuments = (req, res) => {
  ProductSchema.find({}, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(result);
    }
  });
};
exports.searchProduct = (req, res) => {
  const query = req.query.query;
  ProductSchema.find({ name: { $regex: query, $options: '$i' } }, (error, results) => {
    if (error) {
      res.send(error);
    } else {
      res.send(results);
    }
  });
};
exports.addProduct = (req, res) => {
  const { name, img, price, descreption, trademark } = req.body;
  ProductSchema.create({ name, img, price, descreption, trademark })
    .then(() => {
      res.json({ msg: 'Add Succsess!' });
    })
    .catch((err) => {
      res.json({ msg: 'Add fail!' });
    });
};
exports.getSearch = (req, res) => {
  const pathName = req.params.name;
  // console.log('pathName: ' + pathName);
  ProductSchema.find({ name: pathName }, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(result);
    }
  });
};
