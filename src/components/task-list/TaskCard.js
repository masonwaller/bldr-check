import React from "react";

export default function TaskCard({ task }) {
  return (
    <li key={task.name}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <input type="checkbox" checked={task.complete} />
      <span>Complete</span>
      <button>Delete</button>
      <p>weird</p>
    </li>
  );
}
