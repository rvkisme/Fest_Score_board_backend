require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
/*  db connection */
const connectDB = require('./db/connect');
connectDB();
/* Routes */
const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"], // add more origins if needed
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

// middlewares
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// routes
app.use('/api', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, 'Not Found'));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
    // only expose full error in development
    ...(req.app.get('env') === 'development' && { error: err })
  });
});

module.exports = app;
