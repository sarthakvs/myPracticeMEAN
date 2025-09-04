const mongoose = require("mongoose");
const schema = mongoose.Schema;
const reviewSchema = new schema({
    username:String,
    movieName:String,
    rating:Number,
    comment:String
})
const reviewModel = mongoose.model("reviewMEAN",reviewSchema);
module.exports.reviewModel=reviewModel;