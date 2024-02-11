const express=require("express");
const {
    createworkout,
    getWorkouts,
    getsingleWorkouts,
    deleteworkout,
    updateworkout
}=require("../controllers/workoutcontroller")
const router=express.Router()
const Workout=require("../models/workoutmodel")


//get all workouts
router.get("/",getWorkouts);


//get an single workout
router.get('/:id',getsingleWorkouts)


//creating a workout
router.post("/",createworkout)

//delete workout
router.delete('/:id',deleteworkout)


//update workout
router.patch("/:id",updateworkout);



module.exports=router