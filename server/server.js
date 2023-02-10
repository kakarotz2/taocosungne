const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const db = require('./config/db');
const user = require('./routers/user');
const product = require('./routers/products');
db.Connect();
// Use the middleware in a protected route

app.use(cors());
app.use(express.json());
app.use('/api', user);
app.use('/api', product);
app.get('/', (req, res) => {
  res.send('Server Runing');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
