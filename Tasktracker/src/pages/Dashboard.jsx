import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    startDate: "",
    dueDate: "",
  });

  /* LOGOUT */
  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/");
  };

  /* ADD TASK */
  const addTask = () => {
    const { title, description, startDate, dueDate } = newTask;

    if (!title || !description || !startDate || !dueDate) {
      alert("Please fill all fields");
      return;
    }

    const task = {
      id: Date.now(),
      ...newTask,
      status: "Pending",
    };

    setTasks([task, ...tasks]);
    setNewTask({
      title: "",
      description: "",
      priority: "Low",
      startDate: "",
      dueDate: "",
    });
    setShowForm(false);
  };

  /* TOGGLE TASK STATUS */
  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Pending" ? "Completed" : "Pending",
            }
          : task
      )
    );
  };

  /* RELATIVE DUE DATE TEXT */
  const getDueText = (dueDate) => {
    const now = new Date();
    const due = new Date(dueDate);
    const diff = due - now;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (diff <= 0) return `Overdue by ${Math.abs(minutes)} min`;
    if (days > 0) return `Due in ${days} day(s)`;
    if (hours > 0) return `Due in ${hours} hour(s)`;
    if (minutes > 0) return `Due in ${minutes} min`;
    return `Due in ${seconds} sec`;
  };

  /* STATS */
  const pendingCount = tasks.filter(
    (t) => t.status === "Pending"
  ).length;
  const completedCount = tasks.filter(
    (t) => t.status === "Completed"
  ).length;

  /* SEARCH */
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="dashboard-header">
        <h2>My Tasks</h2>
        <button onClick={logout}>Logout</button>
      </div>

      <div className="dashboard-content">
        {/* SEARCH + ADD */}
        <div className="top-actions">
          <input
            className="search-box"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="primary-btn"
            onClick={() => setShowForm(!showForm)}
          >
            + Add Task
          </button>
        </div>

        {/* ADD TASK FORM */}
        {showForm && (
          <div className="add-task-form">
            <input
              placeholder="Task title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
            />

            <input
              placeholder="Task description"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  description: e.target.value,
                })
              }
            />

            <select
              value={newTask.priority}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  priority: e.target.value,
                })
              }
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <input
              type="datetime-local"
              value={newTask.startDate}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  startDate: e.target.value,
                })
              }
            />

            <input
              type="datetime-local"
              value={newTask.dueDate}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  dueDate: e.target.value,
                })
              }
            />

            <button className="primary-btn" onClick={addTask}>
              Add
            </button>
          </div>
        )}

        {/* STATS */}
        <div className="stats-row">
          <div className="stat-box">
            <h3>{pendingCount}</h3>
            <p>Pending</p>
          </div>
          <div className="stat-box">
            <h3>{completedCount}</h3>
            <p>Completed</p>
          </div>
        </div>

        {/* TASK LIST */}
        {filteredTasks.map((task) => (
          <div key={task.id} className="task-card">
            <div className="task-title-row">
              <span
                className={`task-circle ${
                  task.status === "Completed" ? "done" : ""
                }`}
                onClick={() => toggleStatus(task.id)}
              ></span>

              <h4
                style={{
                  textDecoration:
                    task.status === "Completed"
                      ? "line-through"
                      : "none",
                }}
              >
                {task.title}
              </h4>
            </div>

            <p>{task.description}</p>

            <div className="task-meta">
              <span className="badge">{task.priority}</span>
              <span>{task.status}</span>

              {/* SHOW DUE DATE ONLY IF PENDING */}
              {task.status === "Pending" && (
                <span className="due-text">
                  {getDueText(task.dueDate)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;