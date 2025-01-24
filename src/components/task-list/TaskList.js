import React from "react";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const [tasks, setTasks] = React.useState([
    { id: 1, name: "Task 1", description: "123" },
  ]);

  return (
    <div style={{ margin: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Task List</h1>
        <button style={{ padding: "5px", alignSelf: "center" }}>
          Add Task
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
}
