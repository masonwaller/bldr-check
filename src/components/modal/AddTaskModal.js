import React from "react";
import "./AddTaskModal.css";

export default function AddTaskModal(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  return (
    <div className="modal-container">
      <h1>Add Task</h1>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label className="description-box">
          Description:
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
          />
        </label>
        <br />
        <button onClick={() => props.addTask(name, description)}>Add</button>
        <button onClick={props.close}>Cancel</button>
      </div>
    </div>
  );
}
