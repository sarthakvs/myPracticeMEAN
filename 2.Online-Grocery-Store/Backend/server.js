const express=require('express');
const cors = require('cors');
const connection = require('./db/connection').connection;
const groceryModel = require('./db/model').groceryModel;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({urlencoded:true}));
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server at ${PORT}`);
})

app.get('/products',async(req,res)=>{
    try {
        await connection();
        const data = await groceryModel.find();
        console.log("Data from db : ",data);
        res.json(data);
    } catch (error) {
        console.log("Error retrieving from DB ",error)
    }
})

app.post("/addProduct",async(req,res)=>{
    try {
        await connection();
        const {pname,pcategory,pprice} = req.body;
        var newOrder = new groceryModel({productName:pname,productCategory:pcategory,price:pprice})
        await newOrder.save();
        console.log(`Added another entry:
            name: ${pname},
            category: ${pcategory},
            price: ${pprice}.
        `);
        res.end();
    } catch (error) {
        console.log("Error adding to DB")
    }
})
