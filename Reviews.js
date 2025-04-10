var mongoose = require('mongoose');
var Schema = mongoose.Schema;

try {
    mongoose.connect( process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));
}catch (error) {
    console.log("could not connect");
}
mongoose.set('useCreateIndex', true);

// Movie schema
var ReviewSchema = new Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
    userName: String,
    review: String,
    rating: {type: Number, min: 1, max: 5}

});

// return the model
module.exports = mongoose.model('Review', ReviewSchema);