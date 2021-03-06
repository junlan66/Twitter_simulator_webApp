'use strict';
var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var Users = require('../src/models/user_schema');
var config = require('./settings');

// Setup work and export for the JWT passport strategy
var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret_key
};
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    console.log("IN PASSPORT JS<<<<JWT Payload:", jwt_payload);
    Users.findOne({ email: jwt_payload.email }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            console.log("GOT RESULT "+user);
            delete user.password;
            console.log("Authentication valid");
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));

module.exports = passport;