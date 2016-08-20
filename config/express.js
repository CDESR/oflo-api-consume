/* ~~~~ Requiring installed modules ~~~~ */
var express           = require('express'),
    expressLayouts    = require('express-ejs-layouts');

module.exports = function() {

  // Instantiate express
  var app = express();

  /* ~~~~ Setup for EJS views ~~~~ */
  app.set('views', './app/views');
  app.set('view engine', 'ejs');
  app.use(expressLayouts);
  app.use(express.static('public'));

  /* ~~~~ Setting up routes ~~~~ */
  require('../app/routes/staticpage.routes')(app);
  require('../app/routes/users.routes')(app);
  require('../app/routes/sessions.routes')(app);
  require('../app/routes/questions.routes')(app);
  require('../app/routes/commonquestions.routes')(app);

  return app;
};
