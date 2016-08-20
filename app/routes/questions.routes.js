module.exports = function(app) {
  var questionsController  = require('../controllers/questions.controller');

  //restful questions routes
  app.route('/')
    .get(questionsController.index);

  app.route('/questions')
    .get(questionsController.new)
    .post(questionsController.create)
    .delete(questionsController.destroy);
};
