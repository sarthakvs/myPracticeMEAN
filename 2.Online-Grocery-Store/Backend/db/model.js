const mongoose = require('mongoose');
const schema = mongoose.Schema;
const grocerySchema = new schema({
    productName:{
        type:String,
        required:true
    },
    productCategory:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});
const groceryModel = mongoose.model("groceryMEAN",grocerySchema);
module.exports.groceryModel = groceryModel;