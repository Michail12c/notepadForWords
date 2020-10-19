const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../../models/User');
require('dotenv').config();

module.exports = (passport) => {

  let user = {};

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(new GoogleStrategy({
   clientID: process.env.CLIENT_ID,
   clientSecret: process.env.CLIENT_SECRET,
   callbackUrl: process.env.CALL_BACK_URL,
  },
   async (accessToken, refreshToken, profile, done) => {
    console.log(JSON.stringify(profile));
    user = { ...profile };
    return cb(null, profile);
   }
  ))

}