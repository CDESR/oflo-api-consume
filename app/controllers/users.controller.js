module.exports = {
  new: function(req, res) {
    res.render('users/new', {
      title: 'Sign Up'
    });
  },
  edit: function(req, res, next) {
    // show user profile (edit)
    res.render('users/:user_id', {
      title: 'Edit Profile'
    });
  },
  user_by_id: function(req, res, next, id) {
    // getting user_id , do something
    // delete user here? not sure yet
  }
};
