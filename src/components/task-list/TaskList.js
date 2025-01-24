import React from "react";
import TaskCard from "./TaskCard";
import AddTaskModal from "../modal/AddTaskModal";

export default function TaskList() {
  const [tasks, setTasks] = React.useState([
    { id: 1, name: "Task 1", description: "123" },
  ]);
  const [showModal, setShowModal] = React.useState(false);

  const webSocket = new WebSocket("wss://http://localhost:3000/");

  const addTask = (name, description) => {
    const newTask = {
      id: tasks.length + 1,
      name,
      description,
      complete: false,
    };
    setTasks([...tasks, newTask]);
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
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div style={{ margin: "10px" }}>
      {showModal && (
        <AddTaskModal addTask={addTask} close={() => setShowModal(false)} />
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Task List</h1>
        <button
          style={{ padding: "5px", alignSelf: "center" }}
          onClick={() => setShowModal(true)}
        >
          Add Task
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
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
