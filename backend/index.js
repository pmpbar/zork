const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const expressWinston = require('express-winston');
const config = require('./config.json');
const log = require('./log');

const app = express();

app.use(cors());
app.use(expressWinston.logger({
  winstonInstance: log,
  meta: false,
  colorize: true,
}));

// Help endpoint needs to be embellished
app.get('/', (req, res) => {
  res.json({ status: 'OK', data: 'hello world!' });
});

app.listen(config.express.port, () => log.info(`Server listening on ${config.express.port}`));
