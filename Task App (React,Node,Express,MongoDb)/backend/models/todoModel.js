const mongoose=require('mongoose');
//create table into database
const todoSchema=new mongoose.Schema({
    title:{
        type: String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('ToDO',todoSchema);
// module.exports=ToDo;s