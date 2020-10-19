const passport = require('passport');

module.exports = (router) => {
  router.get('/registration/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
}