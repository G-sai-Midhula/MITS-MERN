import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = () => {
    if (!name || !email || !password) {
      alert("Fill all fields");
      return;
    }
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("userName", name);
    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Create Account</h2>
        <input placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="primary-btn" onClick={register}>
          Register
        </button>
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;