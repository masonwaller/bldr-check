import React, { useState } from "react";
import TaskCard from "./TaskCard";
import AddTaskModal from "../modal/AddTaskModal";
import { blobToArray } from "./helper";
import "./TaskList.css";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", description: "123" },
  ]);
  const [showModal, setShowModal] = useState(false);

  const websocket = new WebSocket("ws://localhost:8080");
  //   websocket.onopen = () => {
  //     console.log("WebSocket Client Connected");
  //   };
  websocket.onmessage = async ({ data }) => {
    setTasks(await blobToArray(data));
  };

  const addTask = (name, description) => {
    const newTask = {
      id: tasks.length + 1,
      name,
      description,
      complete: false,
    };
    let newArray = [...tasks, newTask];
    setTasks(newArray);
    let data = JSON.stringify(newArray);
    websocket.send(data);
    setShowModal(false);
  };

  const completeTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(newTasks);
    let data = JSON.stringify(newTasks);
    websocket.send(data);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    let data = JSON.stringify(newTasks);
    websocket.send(data);
  };

  return (
    <div className="list-container">
      {showModal && (
        <AddTaskModal addTask={addTask} close={() => setShowModal(false)} />
      )}
      <div className="list-header">
        <h1>Task List</h1>
        <button className="add-btn" onClick={() => setShowModal(true)}>
          Add Task
        </button>
      </div>
      <div className="list-body">
        {tasks.map((task) => (
          <TaskCard
            task={task}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}
