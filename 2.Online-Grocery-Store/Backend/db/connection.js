const mongoose = require('mongoose');
const connection = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log("CONNECTED TO DB");
    } catch (error) {
        console.log("ERROR CONNECTING TO DB");
    }
}
module.exports.connection=connection;