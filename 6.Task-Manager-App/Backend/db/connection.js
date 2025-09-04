const mongoose = require("mongoose");
const connection = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017")
        console.log("Connection Sucessful");
    } catch (error) {
        console.log("error:"+error);
    }
}
module.exports.connection=connection;