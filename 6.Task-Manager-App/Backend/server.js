const express = require("express");
const cors = require("cors");
const connection = require("./db/connection").connection;
const taskModel= require("./db/model").taskModel;
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
app.post("/addTasks",async (req,res)=>{
    const {tname,tpriority} = req.body;
    try {
        var newTask = new taskModel({taskName:tname,taskPriority:tpriority,taskStatus:false});
        await connection();
        await newTask.save();
        console.log(`Added Task:
            Name: ${tname},
            Priority: ${tpriority},
            Status: false,
        `);
    } catch (error) {
        console.log("Something went wrong! "+ error);
    }
})
app.get("/allTasks",async (req,res)=>{
    try {
        await connection();
        var data = await taskModel.find();
        console.log(`Tasks:
            ${data}
            `);
        res.send(data);
    } catch (error) {
        console.log("Something went wrong! "+ error);
    }
})