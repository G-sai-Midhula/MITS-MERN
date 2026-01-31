import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function GroupTasks() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);

  // Load group
  useEffect(() => {
    const groups = JSON.parse(localStorage.getItem("groups")) || [];
    const found = groups.find(g => g.id === groupId);
    setGroup(found || null);
  }, [groupId]);

  // Toggle task completion
  const toggleTask = (memberId, taskId) => {
    if (!group) return;

    const updatedGroup = {
      ...group,
      members: group.members.map(member =>
        member.id === memberId
          ? {
              ...member,
              tasks: (member.tasks || []).map(task =>
                task.id === taskId
                  ? { ...task, completed: !task.completed }
                  : task
              )
            }
          : member
      )
    };

    setGroup(updatedGroup);

    const allGroups = JSON.parse(localStorage.getItem("groups")) || [];
    const updatedAll = allGroups.map(g =>
      g.id === groupId ? updatedGroup : g
    );
    localStorage.setItem("groups", JSON.stringify(updatedAll));
  };

  // Live due date text
  const timeLeft = (dueDate, completed) => {
    if (completed) return "Completed";
    if (!dueDate) return "No due date";

    const diff = new Date(dueDate) - new Date();
    if (diff <= 0) return "Overdue";

    const hrs = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    return `Due in ${hrs}h ${mins}m`;
  };

  if (!group) {
    return <h2 style={{ textAlign: "center" }}>Group not found</h2>;
  }

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <h2>{group.title} – Member Performance</h2>

        {/* ✅ FIXED NAVIGATION PATH */}
        <button
          onClick={() => navigate(`/teams/${groupId}/updates`)}
          style={styles.updateBtn}
        >
          View Project Updates
        </button>
      </div>

      {/* MEMBERS */}
      {(group.members || []).map(member => (
        <div key={member.id} style={styles.memberCard}>
          <h3>
            {member.name} <span style={{ color: "#64748b" }}>({member.role})</span>
          </h3>

          {(member.tasks || []).length === 0 && (
            <p style={{ color: "#94a3b8" }}>No tasks assigned</p>
          )}

          {(member.tasks || []).map(task => (
            <div key={task.id} style={styles.taskRow}>
              <button
                onClick={() => toggleTask(member.id, task.id)}
                style={{
                  ...styles.circle,
                  background: task.completed ? "#22c55e" : "#e5e7eb"
                }}
              />

              <div>
                <strong>{task.title}</strong>
                <p style={{ fontSize: "13px", color: "#555" }}>
                  {timeLeft(task.dueDate, task.completed)}
                </p>
              </div>

              <span
                style={{
                  ...styles.status,
                  background: task.completed ? "#dcfce7" : "#fef9c3"
                }}
              >
                {task.completed ? "Completed" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const styles = {
  page: {
    maxWidth: "900px",
    margin: "40px auto",
    fontFamily: "sans-serif"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  },
  updateBtn: {
    padding: "8px 14px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },
  memberCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  },
  taskRow: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "10px 0",
    borderBottom: "1px solid #eee"
  },
  circle: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    border: "2px solid #999",
    cursor: "pointer"
  },
  status: {
    marginLeft: "auto",
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "12px"
  }
};