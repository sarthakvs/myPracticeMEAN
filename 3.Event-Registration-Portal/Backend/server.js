const express = require('express');
const cors = require('cors');
const  eventModel = require('./db/model').eventModel;
const connection = require('./db/connection').connection;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server connected at ${PORT}`);
})

app.get('/getEvents',async(req,res)=>{
    try {
        await connection();
        const data = await eventModel.find();
        console.log("Data retrieved: ",data);
        res.json(data);
    } catch (error) {
        console.log("Error retriving events",error);
    }
});
app.post('/postEvent',async(req,res)=>{
    try {
        await connection();
        const {uname,ename,edate} = req.body;
        var newEvent = new eventModel({username:uname,eventName:ename,eventDate:edate});
        await newEvent.save();
        console.log(`Added another event :
            username: ${uname},
            eventName: ${ename},
            eventDate: ${edate}.`)
    } catch (error) {
        console.log("Error adding event ",error);
    }
})