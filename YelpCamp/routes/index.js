const express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    User = require('../models/user'),
    CampGround = require('../models/CampGround'),
    middleware = require('../middleware');


//ROOT ROUTE
router.get('/', function (req, res) {
    res.render('landing');
});

//SHOW REGISTER FORM
router.get('/register', function (req, res) {
    res.render('authenticate/register');
});
//REGISTER LOGIC
router.post('/register', function (req, res) {
    const newUser = new User({ 
        username: req.body.username, 
        email: req.body.email
    });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            req.flash('error', "User already exists.");
            return res.render('authenticate/register');
        }
        passport.authenticate('local')(req, res, function () {
            req.flash('success', 'Sign Up Successful');
            res.redirect('/campgrounds');
        });
    });
});

//SHOW LOGIN FORM 
router.get('/login', function (req, res) {
    res.render('authenticate/login');
});
//LOGIN LOGIC
router.post('/login', passport.authenticate('local', {
    successRedirect: '/campgrounds',
    failureRedirect: '/login'
}), function (req, res) {
});

//LOGOUT ROUTE/ LOGOUT LOGIC
router.get('/logout', function (req, res) {
    req.logout();
    req.flash('success', 'You have been logged out.');
    res.redirect('/campgrounds');
});

//USER PROFILE

//USER PROFILE ROUTE
router.get('/users/:id', middleware.isLoggedIn, function(req, res) {
    User.findById(req.params.id, function (err, foundUser) {
        if(err) {
            req.flash('error', 'Something Went Wrong!');
            return res.redirect('/campgrounds');
        } 
        CampGround.find().where('author.id').equals(foundUser._id).exec(function(err, campgrounds) {
            if(err) {
                req.flash('error', 'Something Went Wrong!');
                return res.redirect('/campgrounds');
            } 
            res.render('users/show', {user: foundUser, campgrounds: campgrounds});
        })
        
    });
});

//USER EDIT ROUTE
router.get('/users/:id/edit', middleware.checkProfileOwnership, function (req, res) {
    User.findById(req.params.id, function (err, foundUser) {
        if(err) {
            req.flash('error', 'Something Went Wrong!');
            return res.redirect('/campgrounds');
        } 
        res.render('users/edit', {user: foundUser});
    });
});

//USER UPDATE ROUTE
router.put('/users/:id', middleware.checkProfileOwnership, function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body.user, function (err, updatedUser) {
        if (err) {
            res.redirect('back');
        } else {
            req.flash('success', 'Profile Updated!')
            res.redirect('/users/' + req.params.id);
        };
    });
});

//INVALID ROUTE
router.get('*', function (req, res) {
    res.send('* ERROR 404, PAGE NOT FOUND * ( ͡° ͜ʖ ͡°)');
});

module.exports = router;