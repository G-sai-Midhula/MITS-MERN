import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProjectUpdates() {
  const { groupId } = useParams();
  const [group, setGroup] = useState(null);

  useEffect(() => {
    const groups = JSON.parse(localStorage.getItem("groups")) || [];
    const found = groups.find(g => g.id === groupId);
    setGroup(found || null);
  }, [groupId]);

  // 🔴 NEVER RETURN BLANK
  if (!group) {
    return (
      <div style={styles.center}>
        <h2>Project not found</h2>
        <p>No data available for this project.</p>
      </div>
    );
  }

  if (!group.members || group.members.length === 0) {
    return (
      <div style={styles.center}>
        <h2>{group.title}</h2>
        <p>No members added to this project.</p>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h2>{group.title} – Project Updates</h2>

      <div style={styles.summary}>
        <p><b>Start Date:</b> {group.startDate || "N/A"}</p>
        <p><b>Due Date:</b> {group.dueDate || "N/A"}</p>
        <p><b>Total Members:</b> {group.members.length}</p>
      </div>

      {group.members.map((member, index) => {
        const tasks = member.tasks || [];
        const completed = tasks.filter(t => t.completed).length;
        const pending = tasks.length - completed;
        const progress =
          tasks.length === 0 ? 0 : Math.round((completed / tasks.length) * 100);

        return (
          <div key={index} style={styles.memberCard}>
            <h3>
              {member.name} <span style={{ color: "#64748b" }}>({member.role})</span>
            </h3>

            <p>Pending: {pending}</p>
            <p>Completed: {completed}</p>
            <p>Progress: {progress}%</p>

            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${progress}%`
                }}
              />
            </div>

            {tasks.length === 0 && (
              <p style={{ color: "#94a3b8" }}>No tasks assigned</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  page: {
    maxWidth: "900px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "sans-serif"
  },
  center: {
    textAlign: "center",
    marginTop: "60px",
    fontFamily: "sans-serif"
  },
  summary: {
    background: "#f1f5f9",
    padding: "16px",
    borderRadius: "12px",
    marginBottom: "20px"
  },
  memberCard: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
  },
  progressBar: {
    height: "8px",
    background: "#e5e7eb",
    borderRadius: "999px",
    marginTop: "6px"
  },
  progressFill: {
    height: "100%",
    background: "#22c55e",
    borderRadius: "999px"
  }
};