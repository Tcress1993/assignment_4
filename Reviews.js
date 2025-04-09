var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.DB);

// Movie schema
var ReviewSchema = new Schema({
    movieId: { type: String, required: true },
    userName: String,
    review: String,
    rating: {type: Number, min: 1, max: 5}

});

// return the model
module.exports = mongoose.model('Review', ReviewSchema);