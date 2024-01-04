const express = require('express');
const apiRoute = require('./routes');
const cors = require('cors');
const setUpServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors()); // 全てのアクセスを許可
  app.use('/api/v1', apiRoute);

  return app;
};

module.exports = { setUpServer };
