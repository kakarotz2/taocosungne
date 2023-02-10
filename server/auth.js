const jwt = require('jsonwebtoken');
const { model } = require('mongoose');

exports.checkAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
      if (err) return res.status(401).json({ error: 'Unauthorized' });

      if (decoded.role === 'admin') {
        req.user = decoded;
        next();
      } else return res.status(401).json({ error: 'Unauthorized' });
    });
  } else return res.status(401).json({ error: 'Unauthorized' });
};
