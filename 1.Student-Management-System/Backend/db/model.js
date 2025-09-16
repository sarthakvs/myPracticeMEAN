const mongoose = require("mongoose");
const schema = mongoose.Schema;
const studentSchema = new schema({
    _id:{
        type:Number,
        required:true
    },
    studentName:{
        type:String,
        required:true
    },
    studentDepartment:{
        type:String,
        required:true
    }
});
const studentModel = mongoose.model("studentMEAN",studentSchema);
module.exports.studentModel = studentModel;
