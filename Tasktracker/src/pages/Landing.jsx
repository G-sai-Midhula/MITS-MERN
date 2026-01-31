import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <h1>Track tasks for better productivity</h1>
      <p>
        Organize your work, manage personal tasks, and track progress easily.
      </p>

      <div className="landing-buttons">
        <Link to="/login" className="btn-primary">Get Started</Link>
        <Link to="/login" className="btn-secondary">Sign In</Link>
      </div>
    </div>
  );
}

export default Landing;