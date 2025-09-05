const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./db/connection').connection;
const leaveModel = require('./db/model').leaveModel;
const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
})

app.get("/allRequests",async(req,res)=>{
    try {
        await connection();
        var requestsData = await leaveModel.find();
        console.log("Leave Data received from mongo: ",requestsData);
        res.json(requestsData);   
    } catch (error) {
        console.log("Error occured ",error);
    }
})

app.post("/addRequest",async(req,res)=>{
    try{
        await connection();
        const {ename,ltype,sdate,edate} =req.body;
        var newLeaveReq = new leaveModel({employeeName:ename,leaveType:ltype,startDate:sdate,endDate:edate});
        await newLeaveReq.save();
        console.log(`Added a leave request:
           Employee Name: ${ename},
           Leave Type: ${ltype},
           Start Date: ${sdate},
           End Date: ${edate}.
           `)
        res.status(200).send("Successfully saved to database");
    } catch (error) {
        console.log("Error occured ",error);
    }
})