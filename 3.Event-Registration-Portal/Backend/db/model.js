const mongoose = require('mongoose');
const schema = mongoose.Schema;
const eventSchema = new schema({
    username:{
        type:String,
        required:true
    },
    eventName:{
        type:String,
        required:true
    },
    eventDate:{
        type:Date,
        required:true
    }
});
const eventModel = mongoose.model("eventMEAN",eventSchema);
module.exports.eventModel = eventModel;