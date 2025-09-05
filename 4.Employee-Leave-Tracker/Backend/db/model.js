const mongoose = require("mongoose");
const schema = mongoose.Schema;
const leaveSchema = new schema({
    employeeName:{
        type:String,
        required:true
    },
    leaveType:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    }
})
const leaveModel = mongoose.model("leaveMEAN",leaveSchema);
module.exports.leaveModel =leaveModel;