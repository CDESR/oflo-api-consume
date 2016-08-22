module.exports = function(app) {
  var sessionsController  = require('../controllers/sessions.controller');

  // logged in routes (session)
  app.route('/login')
    .get(sessionsController.new);

 };
