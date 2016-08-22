/* ~~~~ Requiring installed modules ~~~~ */
var express           = require('express'),
    expressLayouts    = require('express-ejs-layouts'),
    flash             = require('connect-flash'),
    cookie            = require('cookie-parser'),
    session           = require('express-session');

module.exports = function() {

  // Instantiate express
  var app = express();

  /* ~~~~ Setup for EJS views ~~~~ */
  app.set('views', './app/views');
  app.set('view engine', 'ejs');
  app.use(expressLayouts);
  app.use(express.static('public'));

  app.use(cookie());
  app.use(session({
    secret: "NYANYANYNAYCAt",
    resave: true,
    saveUninitialized: true
  }));
  app.use(flash());

  /* ~~~~ Setting up routes ~~~~ */

  require('../app/routes/staticpage.routes')(app);
  require('../app/routes/questions.routes')(app);
  require('../app/routes/commonquestions.routes')(app);
  require('../app/routes/sessions.routes')(app);
  require('../app/routes/users.routes')(app);

  return app;
};
