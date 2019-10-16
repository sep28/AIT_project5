// app.js

const myDb = require('./db');
const mongoose = require('mongoose');
const Review = mongoose.model('Review');
const express = require('express');
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.set('view engine', 'hbs');
app.use(express.urlencoded());
app.use(function(req, res, next) {
	console.log("Method: " + req.method + "\n");
	console.log("Path: " + req.path + "\n");
	console.log("Query: ");
	console.log(req.query);
	console.log("\n");
	next();
});





app.listen(3000);
console.log("Server started; type CTRL+C to shut down\n");

