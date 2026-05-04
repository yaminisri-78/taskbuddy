function ProgressTracker({ tasks }) {
  const completed = tasks.filter((t) => t.completed).length;
  const total = tasks.length;
  const percent = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="card">
      <h2>Progress Tracker</h2>

      <p>{completed} / {total}</p>
      <p>{percent.toFixed(0)}% Complete</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressTracker;