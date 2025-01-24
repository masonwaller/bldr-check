import React from "react";

export default function TaskCard({ task, completeTask, deleteTask }) {
  return (
    <li
      key={task.id}
      style={{
        listStyleType: "none",
        border: "2px solid black",
        width: "200px",
        padding: "10px",
        backgroundColor: "lightgray",
        margin: "0 5px 5px 0",
      }}
    >
      <h3>{task.name}</h3>
      <p>{task.description}</p>
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
