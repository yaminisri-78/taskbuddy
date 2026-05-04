import { useState } from "react";

function TaskInput({ onAddTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("high");
  const [category, setCategory] = useState("Study");

  const handleAdd = () => {
    if (!text.trim()) return;

    onAddTask({ text, priority, category });
    setText("");
  };

  return (
    <div className="card">

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter the task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <div className="select-group">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Study</option>
          <option>Work</option>
          <option>Personal</option>
        </select>
      </div>

    </div>
  );
}

export default TaskInput;