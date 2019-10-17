// app.js

const express = require('express');
const app = express();
const path = require("path");
require('./db');
const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
const Review = mongoose.model('Review');
const publicPath = path.resolve(__dirname, "public");

app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next) {
	console.log("Method: " + req.method + "\n");
	console.log("Path: " + req.path + "\n");
	console.log("Query: ");
	console.log(req.query);
	console.log("\n");
	next();
});

app.use(express.static(publicPath));

app.set('view engine', 'hbs');
app.get("/", (req, res) => {
	Review.find({}, function(err, result, count) {
		if (err) {
			console.log(err);
			return;
		}
		console.log(result);
		res.render('allreviews', {dataEntry: result});
		//res.render('layout', 'body':'hello');
	});
});





app.listen(3000);
console.log("Server started; type CTRL+C to shut down\n");

