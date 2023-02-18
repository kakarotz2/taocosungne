const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

exports.getDocuments = (req, res) => {
  UserModel.find({}, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(result);
    }
  });
};

//register API
exports.register = async (req, res) => {
  await UserModel.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'Email đã tồn tại' });
    } else {
      const newUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        phone: req.body.phone,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
};

// login API
exports.login = (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  UserModel.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ message: 'Email not found' });
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
        jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: `Bearer ${token}`,
            user,
          });
        });
      } else {
        return res.status(400).json({ message: 'Password incorrect' });
      }
    });
  });
};

// API delete
exports.delete = async (req, res, next) => {
  const { id } = req.body;
  await UserModel.findOneAndDelete({ _id: id })
    .then(() => {
      res.json({ status: true, message: `Xóa Username thành công với id:${id}` });
    })
    .catch((err) => {
      res.json({ status: false, massage: 'Xóa Username thất bại ' + err });
    });
};
// API update
exports.update = (req, res) => {
  const { name, email, password, address } = req.body;
};
// change pass
exports.changePassword = (req, res) => {
  const { name, email, passwrod, address } = req.body;
};
