const express = require('express');
const upload = require('../utils/upload');
const router = express.Router();
const ProductController = require('../Controllers/products.controller');

router.get('/product', ProductController.getDocuments);
router.get('/product/phone', ProductController.getPhone);
router.get('/product/laptop', ProductController.getLaptop);
router.get('/product/accessory', ProductController.getAccessory);
router.get('/product/pc', ProductController.getPC);
// router.get('/product/search/:name', ProductController.getSearch);
router.get('/product/search/:name', ProductController.searchProduct);
router.get('/product/getid/:id', ProductController.getProductByID);
router.post('/add', upload.single('img'), ProductController.addProduct);
module.exports = router;
