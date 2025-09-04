const express = require("express");
const connection = require("./db/connection").connection;
const  reviewModel = require("./db/model").reviewModel;
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
function normalise(name){
    return name.toLowerCase().replace(/[^a-z0-9\s]/g,"").trim();
}
function capitalise(name){
    return name.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
}
app.post("/addReview",async(req,res)=>{
    const {ruser,rmovie,rrating,rcomment} = req.body;
    try {
        await connection();
        const searchName = normalise(rmovie);
        const capitalName = capitalise(searchName);
        var newReview = new reviewModel({username:ruser,movieName:capitalName,rating:rrating,comment:rcomment});
        await newReview.save();
        console.log(`Added new review : 
            user: ${ruser},
            movie: ${capitalName},
            rating: ${rrating},
            review: ${rcomment}
            `)
        res.end();
    } catch (error) {
        console.log("Something went wrong ",error);
        res.status(500).json({ error: "Failed to add review" });

    }
})

app.get("/viewReviewsByMovies",async(req,res)=>{
    try {
        await connection();
        var data = await reviewModel.aggregate([
            {
                $group:{
                    _id:"$movieName",
                    avgRating: {$avg: "$rating"}
                }
            }
        ])
        console.log("All Movies rating: ", data);
        res.json(data);
    } catch (error) {
        console.log("Error was encountered while get reviews ",error)
    }
})
app.get("/viewReviewsByMovies/:movie",async (req,res)=>{
    try {
        await connection();
        const rawName = req.params.movie;
        const reviews = await reviewModel.find({ movieName: rawName });

        if (reviews.length === 0) {
            return res.status(404).json({ message: "No reviews found for this movie" });
        }

        res.json(reviews);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ error: "Failed to fetch reviews" });
    }

});
app.get("/viewAllReviews",async (req,res)=>{
    try {
        await connection();
        var data = await reviewModel.find();
        console.log(`Reviews got: `,data);
        res.json(data);
    } catch (error) {
        console.log("Error was encountered while get reviews ",error)
    }
});
