module.exports = {
  index: function(req, res) {
    res.render('questions/index', {
      title: 'Question Board'
    });
  },
  new: function(req, res, next) {
    // new question form
    res.render('questions/new', {
      title: 'Post a question'
    });
  },
  show: function(req, res, next) {
    // show student past posted question (individual)
    res.render('questions/show');
  }
};
