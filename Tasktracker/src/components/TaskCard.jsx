function TaskCard({ task, index, updateStatus }) {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>
      <p>{task.desc}</p>

      <div className="task-meta">
        <span className="badge">{task.priority}</span>
        <span>{task.date}</span>

        <select
          value={task.status}
          onChange={(e) => updateStatus(index, e.target.value)}
        >
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>
    </div>
  );
}

export default TaskCard;