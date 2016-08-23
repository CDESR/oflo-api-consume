module.exports = function(app) {
  var commonquestionsController  = require('../controllers/commonquestions.controller');

  //restful common questions routes
  app.route('/commonquestions/index')
    .get(commonquestionsController.index);

  app.route('/commonquestions/new')
    .get(commonquestionsController.new);

  app.route('/commonquestions/show')
    .get(commonquestionsController.show);
};
