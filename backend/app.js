var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//passport config
const session = require("express-session");
const passport = require("passport");
// require("./helpers/passport");
const User = require('./models//User');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var index = require('./routes/index');
var comentarios = require('./routes/comentarios');
const entrada = require('./routes/entrada');
const auth =  require('./routes/auth');

var index = require('./routes/index');


var app = express();

const options = {
  credentials:true,
  origin:true
}

app.use(require("cors")(options));

//db
require("mongoose").connect("mongodb://localhost/sueño"); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//passport 
app.use(session({
  secret: 'frii',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true }
}));

app.use(passport.initialize());
app.use(passport.session());

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api/comentarios', comentarios);
app.use('/api/entradas', entrada);
app.use('/api', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
