module.exports = {
  new: function(req, res) {
    res.render('sessions/new', {
      title: 'Log In'
    });
  },
  create: function(req, res, next) {
    // create new session (log in)
  },
  /* -- users/questions related -- */
  show: function(req, res, next) {
    // show user profile and past questions posted (able to edit user)
  },
  update: function(req, res, next) {
    // update user
  },
  destroy: function(req, res, next) {
    // delete session (log out)
  }

};
