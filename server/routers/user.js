const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/user.controller');
// lấy dữ liệu người dùng
router.get('/user', UserController.getDocuments);

// gửi yêu cầu đăng kí đăng nhập
router.post('/register', UserController.register);
router.post('/login', UserController.login);

// thay đổi thông tin
router.put('/update', UserController.update);

// xóa
router.delete('/delete', UserController.delete);

module.exports = router;
