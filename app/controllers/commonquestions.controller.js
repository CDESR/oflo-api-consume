module.exports = {
  index: function(req, res, next) {
    res.render('commonquestions/index', {
      title: "Question Board"
    });
  },
  new: function(req, res, next) {
    // post new common question
    res.render('commonquestions/new', {
      title: 'Collate to common question'
    });
  },
  show: function(req, res, next) {
    // show ITA past posted common question (individual)
    res.render('commonquestions/show');
  },
  destroy: function(req, res, next) {
    // delete common question
  }

};
