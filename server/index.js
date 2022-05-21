require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const serverPort = process.env.SERVER_PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Its works!!!' });
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(serverPort, () => console.log(`Server started on port ${serverPort}`));
  } catch (e) {
    console.log(e);
  }
};

start();
