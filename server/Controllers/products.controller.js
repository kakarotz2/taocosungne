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
exports.searchProduct = async (req, res) => {
  const keyword = req.params.name;

  try {
    const products = await ProductSchema.find({
      $or: [{ name: { $regex: keyword, $options: 'i' } }, { category: { $regex: keyword, $options: 'i' } }],
    });
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
exports.addProduct = (req, res) => {
  const filename = req.file.filename;
  const { name, price, descreption, trademark, origin, category } = req.body;
  // const url = req.protocol + '://' + req.get('host');
  // const err = req.fileValidationError;
  // console.log(filename);
  // console.log(err);
  if (req.fileValidationError) {
    return res.json({
      msg: res.fileValidationError,
    });
  }
  ProductSchema.create({
    name,
    img: '/image/' + filename,
    price,
    descreption,
    trademark,
    origin,
    category,
  })
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
exports.getProductByID = (req, res) => {
  const productId = req.params.id;

  ProductSchema.findOne({ _id: productId }, (err, product) => {
    if (err) {
      res.status(500).send(err);
    } else if (!product) {
      res.status(404).send('Product not found');
    } else {
      res.send(product);
    }
  });
};

exports.getPhone = async (req, res) => {
  try {
    const phone = await ProductSchema.find({ category: 'Điện thoại' }).sort({ date: -1 }).exec();
    res.send(phone);
  } catch (error) {
    res.status(500).send(error);
  }
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
  ProductSchema.find({ category: 'pc' }, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(result);
    }
  });
};

exports.getAccessory = (req, res) => {
  ProductSchema.find({ category: 'accesory' }, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(result);
    }
  });
};
