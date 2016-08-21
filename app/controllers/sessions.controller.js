module.exports = {
  new: function(req, res) {
    res.render('sessions/new', {
      title: 'Login to OFlo'
    });
  },
  create: function(req, res, next) {
    // create new session (log in)
  },
  /* -- users/questions related -- */
  edit: function(req, res, next) {
    // show user profile (edit)
    res.render('users/edit', {
      title: 'Edit Profile'
    });
  },
  update: function(req, res, next) {
    // update user
  },
  destroy: function(req, res, next) {
    // delete session (log out)
  }

};
