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
  const { name, img, price, descreption, trademark, origin, category } = req.body;
  ProductSchema.create({ name, img, price, descreption, trademark, origin, category })
    .then(() => {
      res.json({ msg: 'Thêm sản phẩm thành công!' });
    })
    .catch((err) => {
      res.json({ msg: 'Thêm sản phẩm thất bại!' });
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
// lấy sản phẩm
exports.getPhone = (req, res) => {
  ProductSchema.find({ category: 'Điện thoại' }, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(result);
    }
  });
};
exports.getLaptop = (req, res) => {
  ProductSchema.find({ category: 'laptop' }, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(result);
    }
  });
};
exports.getPC = (req, res) => {
  ProductSchema.find({ category: 'PC' }, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(result);
    }
  });
};
exports.getAccessory = (req, res) => {
  ProductSchema.find({ category: 'phụ kiện' }, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(result);
    }
  });
};
