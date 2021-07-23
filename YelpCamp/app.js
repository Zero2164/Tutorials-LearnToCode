require('dotenv').config();
const
    // hostname            = '127.0.0.1',
    // hostname         = '192.168.20.2',
    // port = 3000,
    port = process.env.PORT || 3000,
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    User = require('./models/user'),
    methOverride = require('method-override'),
    //Requiring Routes
    commentRoutes = require('./routes/comments'),
    campgroundRoutes = require('./routes/campgrounds'),
    indexRoutes = require('./routes/index'),
    url = process.env.DATABASEURL || process.env.DATABASENONPROD,
    flash = require('connect-flash');
    // seedDB = require('./seeds.js');     //Seed the database


mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to YelpCamp DB!');
}).catch(error => {
    console.log('ERROR', error.message);
});


mongoose.set('useFindAndModify', false);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/lib'));
app.use(methOverride('_method'));
app.use(flash());
app.set('view engine', 'ejs');
//require moment
app.locals.moment = require('moment');
// seedDB(); //seed the database


//PASSPORT CONFIG
app.use(require('express-session')({
    secret: "Ace is my fav kitty",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    res.locals.warning = req.flash('warning');
    next();
});

app.use('/campgrounds/:id/comments', commentRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/', indexRoutes);



app.listen(port, () => {
    console.log("Server Has Started!");
});



