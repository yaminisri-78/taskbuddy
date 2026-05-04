import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleComplete, onDelete }) {
  return (
    <div className="card">
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p className="empty">✨ No tasks yet. Start working!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;