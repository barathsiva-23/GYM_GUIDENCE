
require('dotenv').config()
const express=require('express');
const workoutRoutes=require("./routes/workout");
const mongoose=require("mongoose");
const { error } = require('console');

const app=express();
app.use(express.json());
//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next();
})

app.use("/api/workouts",workoutRoutes);



//connecting mongodb

mongoose.connect("mongodb+srv://barath:987654321@cluster0.wagqwmq.mongodb.net/GYM")
.then(()=>{
console.log("Mongodb Connected");
})
.catch((error)=>{
    console.log(error);
})

app.listen(process.env.PORT,()=>{
    console.log("server is running on the port 4000");
}); 