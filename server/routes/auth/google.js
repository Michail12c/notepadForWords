const passport = require('passport');

module.exports = (router) => {
  router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

  router.get("/google/callback", passport.authenticate("google", { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect("/");
    });

}