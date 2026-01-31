import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="home">
      <div className="home-navbar">
        <h3>TaskTracker</h3>
        <div className="nav-right">
          <span>Hi, {userName}</span>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </div>

      <div className="hero-section hero-small">
        <h1>Manage tasks efficiently</h1>
        <p>Personal tasks and team collaboration in one place</p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => navigate("/dashboard")}>
            Personal Tasks
          </button>
          <button className="secondary-btn" onClick={() => navigate("/teams")}>
            Team Groups
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;