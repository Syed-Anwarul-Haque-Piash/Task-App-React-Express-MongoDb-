const express=require('express');
const ToDo = require('../models/todoModel');
const todoRouter=express.Router();

//get a todo
todoRouter.get('/',async(req,res)=>{
    const todos=await ToDo.find();
    res.send(todos);
})

//create a todo

todoRouter.post('/add',async(req,res)=>{
    let todo;
    try{
        todo=new ToDo(req.body)
        await todo.save()
    }
    catch(err){
        console.log(err)
    }
    if(!todo){
        return res.status(400).json({message:"Todo not found"})
    }
    return res.status(200).json({todo})
})

//update a todo

todoRouter.put('/update/:id',async(req,res)=>{
    let todo;
    //let id=req.params.id;
    try{
        todo=await ToDo.findByIdAndUpdate({_id:req.params.id},{
            title:req.body.title
    })
        todo=await todo.save()
    }
    catch(err){
        console.log(err);
    }
    if(!todo){
        return res.status(404).json({message:"todo not updated"}) 
    }
    return res.status(200).json({todo})
})

//delete a todo
todoRouter.delete('/:id',async(req,res)=>{
    let todo;
    try{
        todo=await ToDo.findByIdAndDelete(req.params.id)
    }
    catch(err){
        console.log(err)
    }
    if(!todo){
        return res.status(400).json({message:"Todo not deleted"})
    }
    return res.status(200).json({message:"Task has been deleted"})
})

module.exports=todoRouter;