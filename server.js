/**
 * Requires Modules
 */ 
var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');

// create the express app
var app = express();

// session
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(bodyParser.urlencoded({extended: true}));
// static content
app.use(express.static(__dirname));
// setting up ejs and our views folder
app.set('views', (__dirname+'/views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view

app.get('/assignments/counter/', function(req, res) {
    /* Ensures that it has value when page is loaded for the first time */
    if(!req.session.count){
        req.session.count = 0;
    }
    res.render("index", {session: req.session.count++});
});
app.get('/assignments/counter/add', function(req, res) {
    req.session.count += 1;
    res.redirect('/assignments/counter/');
});
app.get('/assignments/counter/reset', function(req, res) {
    req.session.count = 0;
    res.redirect('/assignments/counter/');                                      
});

// tell the express app to listen on port 3001
app.listen(3001);
