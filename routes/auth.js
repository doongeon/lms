const express = require('express');
const passport = require('passport');

const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const { login, logout } = require('../controllers/auth');

const router = express.Router();

// POST /auth/join
// router.post('/join', isNotLoggedIn, join);

// POST /auth/login
router.post('/login', isNotLoggedIn, login);

// GET /auth/logout
router.get('/logout', isLoggedIn, logout);

// GET /auth/google
router.get('/google', isNotLoggedIn, passport.authenticate('google',  { scope: ['profile'] }));

// GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/?loginError=구글로그인 실패',
}), (req, res) => {
    res.redirect('/');
})

module.exports = router;