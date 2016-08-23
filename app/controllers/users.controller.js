module.exports = {
  new: function(req, res) {
    res.render('users/new', {
      title: 'Sign Up'
    });
  },
  edit: function(req, res, next) {
    // show user profile (edit)
    res.render('users/edit', {
      title: 'Edit Profile'
    });
  },
  login: function(req, res) {
      console.log('anything');
      res.render('sessions/new', {
        title: 'Login to OFlo'
      });
    }

};
