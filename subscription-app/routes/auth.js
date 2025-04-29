const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user'); // Assuming a User model exists
const router = express.Router();

// Register route
router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            req.flash('error', 'Username already exists');
            return res.redirect('/register');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            password: hashedPassword
        });

        await newUser.save();

        req.flash('success', 'Registration successful! Please log in.');
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        req.flash('error', 'Something went wrong. Please try again.');
        res.redirect('/register');
    }
});

// Login route
router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/subscriptions',
    failureRedirect: '/login',
    failureFlash: true
}));

// Logout route
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/login');
    });
});

module.exports = router;