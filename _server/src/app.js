const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');

const { wordRouter } = require('./controllers/word.route');

const app = express();
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
  }));
app.use(json());

app.use('/word', wordRouter);

app.use((error, req, res, next) => {
    res.status(500).send({ success: false, message: error.message });
});

module.exports = { app };