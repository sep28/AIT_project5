const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// my schema goes here!!
const Review = new mongoose.Schema ({
	courseNumber: String,
	courseName: String,
	semester: String,
	year: Number,
	professor: String,
	review: String
});


module.exports = mongoose.model('Review', Review);


mongoose.connect('mongodb://localhost/hw05', { useNewUrlParser: true, useUnifiedTopology: true })
