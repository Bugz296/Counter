// require express
var express = require("express");

// create the express app
var app = express();

// static content
app.use(express.static(__dirname));
// setting up ejs and our views folder
app.set('views', (__dirname+'/views'));
app.set('view engine', 'ejs');
let x = 0;
// root route to render the index.ejs view
app.get('/', function(req, res) {
    x+=1;
    res.render("index", {session: x});
});
app.get('/add', function(req, res) {
    x+=2;
    res.render("index", {session: x});
});
app.get('/reset', function(req, res) {
    x=0;
    res.render("index", {session: x});
});

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});