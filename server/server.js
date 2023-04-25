const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const db = require('./config/db');
const user = require('./routers/user');
const product = require('./routers/products');
const loginAdmin = require('./routers/admin');
db.Connect();

app.use(cors());
app.use(express.json());
app.use('/api', user);
app.use('/api', product);
app.use('/image', express.static('uploads'));
app.use('/admin', loginAdmin);
app.get('/', (req, res) => {
  res.send('Server Runing ');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
