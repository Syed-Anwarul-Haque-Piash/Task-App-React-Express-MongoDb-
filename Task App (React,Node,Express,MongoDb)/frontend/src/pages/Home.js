import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Task from "../components/Task";

const Home = () => {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/todos")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTask(res);
      });
  }, []);


  const addTaskHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/todos/add", {
        title,
      });

      console.log(data);
      toast.success("You have successfully added a new task");
      navigate("/");

    } catch (err) {
      console.log(err.message);
      toast.success("Todo not found");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="to-do">
          <div className="to-do-header">
            <h2 className="title">TASK APP</h2>
            <form onSubmit={addTaskHandler}>
              <input
                type="text"
                placeholder="Enter the task"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <button className="add">Add Task</button>
            </form>
          </div>
          <div className="to-do-body">
            {task.length === 0 ? (
              <h3 className="info">You have no added any task</h3>
            ) : (
              <>
                {task.map((item) => (
                  <Task item={item} key={item._id}/>
                ))}
              </>
            )}
          </div>
          <div className="to-do-footer">
            <span>
              &copy; 2022.All Right Reserved.Powered by Syed Anwarul Haque Piash
            </span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
