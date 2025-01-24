import React from "react";

export default function TaskCard({ task }) {
  return (
    <li
      key={task.name}
      style={{
        listStyleType: "none",
        border: "2px solid black",
        width: "200px",
        padding: "10px",
        backgroundColor: "lightgray",
      }}
    >
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <input type="checkbox" checked={task.complete} />
      <span>Complete</span>
      <br />
      <button>Delete</button>
    </li>
  );
}
