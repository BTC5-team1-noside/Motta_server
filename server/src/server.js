const express = require('express');
const apiRoute = require('./routes');
const cors = require('cors');
const setUpServer = () => {
  const app = express();
  app.use(express.json());

  app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
    })
  );
  // app.use(express.urlencoded({ extended: true }));

  //   app.use(
  //     express.static(path.join(__dirname, '../../client/team2-client/dist'))
  //   );

  app.use('/api/v1', apiRoute);

  return app;
};

module.exports = { setUpServer };
