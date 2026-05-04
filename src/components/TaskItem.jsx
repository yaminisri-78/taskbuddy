function TaskItem({ task, onToggleComplete, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>

      <div>
        <span>{task.text}</span>
        <div className={`priority ${task.priority}`}>
          {task.priority}
        </div>
      </div>

      <div className="btn-group">

        {!task.completed ? (
          <button
            className="complete-btn"
            onClick={() => onToggleComplete(task.id)}
          >
            Complete
          </button>
        ) : (
          <button
            className="undo-btn"
            onClick={() => onToggleComplete(task.id)}
          >
            Undo
          </button>
        )}

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskItem;