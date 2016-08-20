module.exports = function(app) {
  var sessionsController  = require('../controllers/sessions.controller');

  // logged in routes (session)
  app.route('/login')
    .get(sessionsController.new)
    .post(sessionsController.create);

  // use sessionsController ==> accessible only after logged in
  app.route('/:user_id')
      .get(sessionsController.show)
      .put(sessionsController.update)
      .delete(sessionsController.destroy);
 };
