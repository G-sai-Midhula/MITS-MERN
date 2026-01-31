import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (!email || !password) {
      alert("Enter email and password");
      return;
    }
    localStorage.setItem("isAuth", "true");
    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="primary-btn" onClick={login}>
          Login
        </button>
        <p>
          New user? <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;