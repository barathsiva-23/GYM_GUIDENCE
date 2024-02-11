const Workout=require("../models/workoutmodel");
const mongoose=require("mongoose");


//get all workout

const getWorkouts=async(req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1})

    res.status(200).json(workouts)
}


//get a single workout

const getsingleWorkouts=async(req,res)=>{
    const { id }=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"});
    }

    const workouts=await Workout.findById(id)
    if(!workouts){
        return res.status(404).json({error:"No such workout"});
    }
    
        res.status(200).json(workouts)

}

//create a new workout
const createworkout = async(req,res)=>{
    const {title,load,reps}=req.body

    try{
     const workout=await Workout.create({title,load,reps})
     res.status(200).json(workout)
    }
    catch(error){
 res.status(400).json({error:error.message});
    }
 
 
}

//deleting an workout
const deleteworkout = async(req,res)=>{

    const { id }=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"});
    }

    const workouts=await Workout.findByIdAndDelete({_id:id})
    if(!workouts){
        return res.status(404).json({error:"No such workout"});
    }
    
        res.status(200).json(workouts)

}


//update workout

const updateworkout = async(req,res)=>{
    const { id }=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"});
    }

    const workout=await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!workout){
        return res.status(400).json({error:"No such workout"});
    }

    res.status(200).json(workout);

}




module.exports={createworkout,getWorkouts,getsingleWorkouts,deleteworkout,updateworkout}