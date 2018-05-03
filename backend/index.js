const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const expressWinston = require('express-winston');
const MongoClient = require('mongodb').MongoClient;
const config = require('./config.json');
const Zork = require('./zork.js');
const log = require('./log');

// const z = new Zork();
const zorks = {};

const app = express();
app.use(session({
  secret: 'zork is super fun!',
  resave: true,
  saveUninitialized: true,
  // cookie: { secure: true },
}))
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(expressWinston.logger({
  winstonInstance: log,
  meta: false,
  colorize: true,
}));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // stub for real login structure
  const validLogins = {'asdf': 'asdf'}
  console.log(req.sessionID);
  if (validLogins[username] === password) {
    zorks[req.sessionID] = new Zork(username);
    res.json({ status: 'OK', msg: 'Good login' });
  } else {
    res.json({ status: 'OK', msg: 'Bad login' });
  }
});

app.get('/output', (req, res) => {
  console.log(req.sessionID);
  res.json({ status: 'OK', output: zorks[req.sessionID].lastOutput() });
});

app.post('/submit', (req, res) => {
  const { submission } = req.body;
  if (submission) {
    console.log(req.sessionID);
    zorks[req.sessionID].write(submission);
    res.json({ status: 'OK' });
  } else {
    res.json({ status: 'err', msg: 'Not enough arguments' });
  }
});

app.get('/', (req, res) => {
  res.json({ status: 'OK', data: 'hello world!' });
});

if (config.express.local) {
  app.listen(config.express.port, 'localhost', () => log.info(`Server listening locally on ${config.express.port}`));
} else {
  app.listen(config.express.port, () => log.info(`Server listening on ${config.express.port}`));
}

