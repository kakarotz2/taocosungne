const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
require('dotenv').config();

exports.authUser = (req, res, next) => {
  console.log(!req.body);
  if (req.body) {
    return res.status(404).json({ success: false, message: 'You need to sign in' });
  }
  next();
};
exports.checkAdmin = (req, res, next) => {
  const { email, password } = req.body;

  // Find user by email
  UserModel.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ success: false, message: 'Email not found' });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // Create JWT payload
        const payload = {
          id: user.id,
          name: user.name,
        };

        // Sign token
        jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: '48h' }, (err, token) => {
          res.json({
            success: true,
            token: `Bearer ${token}`,
            user,
            role: user.role.trim(),
          });
        });
      } else {
        return res.status(400).json({ success: false, message: 'Password incorrect' });
      }
    });
  });
};
