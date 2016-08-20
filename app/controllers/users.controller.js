module.exports = {
  new: function(req, res) {
    res.render('users/new', {
      title: 'Sign Up'
    });
  },
  create: function(req, res, next) {
    // create new user (sign up)
  },
  user_by_id: function(req, res, next, id) {
    // getting user_id , do something
    // delete user here? not sure yet
  }
};
