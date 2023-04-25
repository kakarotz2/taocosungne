const express = require('express');
const router = express.Router();
const AdminController = require('../utils/auth');
router.post('/login', AdminController.checkAdmin);

module.exports = router;
