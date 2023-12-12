const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const path = require('path')
const rfs = require('rotating-file-stream') // version 2.x
const uuid = require('node-uuid')



// create a write stream (in append mode)
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
})

const indexRouter = require('./routes/index');

const errorHandler = require('./middleware/errorHandler');

const customLogFormat = (tokens, req, res) => {
  req.id = uuid();
  // Extract relevant information from the request and response
  const method = tokens.method(req, res);
  const url = tokens.url(req, res);
  const status = tokens.status(req, res);
  const responseTime = tokens['response-time'](req, res);
  const timestamp = tokens.date(req, res, 'iso');

  const logFormat = {
    timestamp,
    method,
    URI: url,
    status,
    requestBody:req.body,
    responseTime
  }
  return JSON.stringify(logFormat);
};
const app = express();

app.use(helmet()); // https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// setup the logger
app.use(logger(customLogFormat, { stream: accessLogStream }))

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError.NotFound());
});

// pass any unhandled errors to the error handler
app.use(errorHandler);

module.exports = app;
