import React from "react";
import "./TaskCard.css";

export default function TaskCard({ task, completeTask, deleteTask }) {
  return (
    <li key={task.id} className="task-card">
      <h3>{task.name}</h3>
      <p className="task-description">{task.description}</p>
      <input
        type="checkbox"
        checked={task.complete}
        onChange={() => completeTask(task.id)}
      />
      <span>Complete</span>
      <br />
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}
