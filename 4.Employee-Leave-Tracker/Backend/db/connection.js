const mongoose = require('mongoose');
const connection = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log("MongoDB connected successfully!!");
    } catch (error) {
        console.log("Error Connecting to DB ",error);
    }
}
module.exports.connection=connection;