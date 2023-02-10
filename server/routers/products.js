const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/products.controller');
router.get('/product', ProductController.getDocuments);
// router.get('/search/', ProductController.searchProduct);
router.get('/product/:name', ProductController.getSearch);
router.post('/add', ProductController.addProduct);
module.exports = router;
