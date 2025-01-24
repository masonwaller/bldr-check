import React from "react";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const [tasks, setTasks] = React.useState([
    { id: 1, name: "Task 1", description: "123" },
  ]);

  return (
    <div>
      <h1>Task List</h1>
      <ul style={{ listStyleType: "none" }}>
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </ul>
    </div>
  );
}
