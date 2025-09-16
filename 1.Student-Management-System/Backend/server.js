const express = require('express');
const cors = require('cors');
const { studentModel } = require('./db/model');
const connection = require('./db/connection').connection;
const student = require('./db/model').studentModel;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Connected at port ${PORT}`);
});
app.get("/getStudents",async (req,res)=>{
    try {
        await connection();
        const studentsData = await student.find();
        console.log("Students collection received",studentsData);
        res.json(studentsData);

    } catch (error) {
        console.error("Error occured while retreiving student collection",error);
    }
})
app.post("/postStudent",async (req,res)=>{
    try {
        await connection();
        const {srollno,sname,sdepartment} = req.body;
        const newStudent = new studentModel({_id:srollno,studentName:sname,studentDepartment:sdepartment})
        await newStudent.save();
        console.log(`Added another entry:
            _id: ${srollno}.
            name: ${sname},
            department: ${sdepartment}`);
            res.status(200).send("Student was added successfully!");
            
        } catch (error) {
            console.error("Error occured while adding to the student collection",error);
            res.status(400).send("Failed to add student" + error.message);
    }
})