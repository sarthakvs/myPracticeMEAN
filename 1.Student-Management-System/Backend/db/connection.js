const mongoose = require('mongoose');
const connection = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log("Database connected successfully!");
    } catch (error) {
        console.log("Error while connecting to Database",error);
    }
}
module.exports.connection = connection;