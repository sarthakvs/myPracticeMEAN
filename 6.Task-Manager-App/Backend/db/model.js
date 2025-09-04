const mongoose = require("mongoose");
const schema = mongoose.Schema;
const taskSchema = new schema({
    taskName:String,
    taskPriority:String,
    taskStatus:Boolean
})
const taskModel = mongoose.model("taskMEAN",taskSchema);
module.exports.taskModel=taskModel;