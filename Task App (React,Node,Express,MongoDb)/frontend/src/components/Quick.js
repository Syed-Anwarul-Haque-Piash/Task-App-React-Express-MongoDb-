import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Quick = ({setOpen,item}) => {
  const[title,setTitle]=useState(item.title);
  const navigate=useNavigate();

  const id=item._id;

  const updateTaskHandler=async (e)=>{
    e.preventDefault();

    try{
      const {data}=await axios.put(`http://localhost:5000/api/todos/update/${id}`,{
        title
      })

      console.log(data);;
      toast.success("You have successfully updated the task");
      navigate('/');

    }
    catch(err){
      toast.error('Update failed,Please try again');
    }
  }
  return (
    <div className="quick-container">
      <form className="formUpdate" onSubmit={updateTaskHandler}>
        <div className="card-quick">
          <div className="card-row">
            <input type="text"  onChange={(e)=>setTitle(e.target.value)} value={title} required />
          </div>
          <div className="card-row">
            <button className="update">
              Update <FontAwesomeIcon icon={faRefresh} />
            </button>
          </div>
        </div>
        <button className="back" onClick={() => setOpen(false)}>
          Close
        </button>
      </form>
    </div>
  );
};

export default Quick;
