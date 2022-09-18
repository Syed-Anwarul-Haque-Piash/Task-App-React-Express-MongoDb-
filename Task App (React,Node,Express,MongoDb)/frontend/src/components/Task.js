import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import Quick from './Quick';


const Task = ({item}) => {
    const [open, setOpen] = useState(false);
    const navigate=useNavigate();
    const id=item._id;
    const deleteTaskHandler = async (e) => {
        e.preventDefault();

        try {
          const { data } = await axios.delete(`http://localhost:5000/api/todos/${id}`);
          if(data){
            toast.success("You have successfully deleted a task");
            navigate("/");
          }
         

        } catch (err) {
          console.log(err.message);
          toast.success("Todo not found");
        }
      };
    return (
        
            <>
            <div className="to-do-group">
                    <div className="to-do-text">
                      <p className="to-do-task">{item.title}</p>
                    </div>
                    <div className="to-do-action">
                      <button>
                        <FontAwesomeIcon
                          icon={faPencil}
                          onClick={() => setOpen(true)}
                        />
                      </button>
                      <button>
                        <FontAwesomeIcon icon={faTrashAlt} onClick={(deleteTaskHandler)} />
                      </button>
                    </div>
                  </div>
                   {open && <Quick setOpen={setOpen} item={item} />}
            </>
        
    );
};

export default Task;