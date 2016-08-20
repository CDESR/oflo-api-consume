module.exports = function(app) {
  var commonquestionsController  = require('../controllers/commonquestions.controller');

  //restful common questions routes
  app.route('/commonquestions')
    .get(commonquestionsController.new)
    .post(commonquestionsController.create)
    .delete(commonquestionsController.destroy);
};
