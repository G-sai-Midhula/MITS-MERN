function StatsCards({ tasks }) {
  const pending = tasks.filter(t => t.status === "Pending").length;
  const completed = tasks.filter(t => t.status === "Completed").length;

  return (
    <div className="stats">
      <div className="stat-card">Pending: {pending}</div>
      <div className="stat-card">Completed: {completed}</div>
    </div>
  );
}

export default StatsCards;