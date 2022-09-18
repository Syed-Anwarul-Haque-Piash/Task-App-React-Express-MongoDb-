const express=require("express");
const data = require("../data");
const ToDo= require("../models/todoModel");

const seedRouter=express.Router();

seedRouter.get('/',async(req,res)=>{
    await ToDo.remove({})
    const createdTodo=await ToDo.insertMany(data.todo);
    res.send({createdTodo})
})
module.exports=seedRouter;