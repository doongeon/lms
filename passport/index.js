const passport = require('passport');
const google = require('./google');
const User = require('../models/user');

module.exports = () => {

    passport.serializeUser((user, done) => {
        `
        req.session객체에 어떤 데이터를 저장할지 정하는 메서드
        `
        done(null, user.id);
    })

    passport.deserializeUser((id, done) => {
        User.findOne({ where: { id }})
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    // local();
    google();
}