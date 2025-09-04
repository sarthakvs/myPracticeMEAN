const mongoose = require("mongoose");

const connection = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.log("Something wrong with db connection: ",error);
    }
}

module.exports.connection=connection;