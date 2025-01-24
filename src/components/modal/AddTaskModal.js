import React from "react";

export default function AddTaskModal(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  return (
    <div
      style={{
        zIndex: 100,
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        left: 0,
        reight: 0,
        position: "absolute",
      }}
    >
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
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button onClick={() => props.addTask(name, description)}>Add</button>
        <button onClick={props.close}>Cancel</button>
      </div>
    </div>
  );
}
