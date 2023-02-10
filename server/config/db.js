const mongoose = require('mongoose');
const uri = 'mongodb+srv://rinh:1234567a@database.avgk8ad.mongodb.net/Data?retryWrites=true&w=majority';
function Connect() {
  mongoose.connect(uri, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Connected to MongoDB Success!');
  });
}
module.exports = { Connect };
