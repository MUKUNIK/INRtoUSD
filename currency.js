var express = require("express");
var bodyparser = require("body-parser");
//var angular = require("angular");

app = express();
app.use(bodyparser.urlencoded({extended:true}));


app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", function(req, res){
	res.render("Currency");
});


app.listen(9000,process.env.IP);
