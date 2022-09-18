const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const seedRouter = require('./routes/seedRouter');
const todoRouter = require('./routes/todoRoute');
const app=express();

app.use(express.json());
app.use(cors())
app.use('/api/seed',seedRouter);
app.use('/api/todos/',todoRouter);

mongoose.connect('mongodb://localhost/todo',{useNewUrlParser:true},{useUnifiedTopology:true})
.then(()=>console.log('Connected successsfully'))
.catch(err=>console.log(err))

app.listen(5000,()=>{
    console.log("Listening from 5000 port");
})