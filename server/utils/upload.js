const multer = require('multer');
const uuidv4 = require('uuid').v4;
const DIR = './uploads/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ');
    cb(null, uuidv4() + '-' + fileName);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new Error('Only PNG and JPEG files are allowed'));
    }
    cb(null, true);
  },
});
module.exports = upload;
