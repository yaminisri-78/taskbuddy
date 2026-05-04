import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import ProgressTracker from "./components/ProgressTracker";

const TASKS_KEY = "taskbuddy-tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(TASKS_KEY);
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    toast.success("Task added!");
  };

  const handleToggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    toast.info("Task deleted");
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="app-container">

      <header className="header">
        <h1>Task Buddy</h1>
        <p className="subtitle">Your friendly Task Manager</p>
      </header>

      <TaskInput onAddTask={handleAddTask} />

      {/* 🔍 Search */}
      <input
        className="search"
        placeholder="Search tasks..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📊 Summary */}
      <p className="task-summary">
        {tasks.length} Tasks | {completedCount} Completed
      </p>

      <div className="grid">
        <TaskList
          tasks={filteredTasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
        />
        <ProgressTracker tasks={tasks} />
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;