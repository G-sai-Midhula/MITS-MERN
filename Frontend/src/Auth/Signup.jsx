import React, { useState } from 'react';

const Signup = () => {
   const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("username:",username)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>username:</label><br />
          <input
            type="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>

        <br />

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
        </div>

        <br />

        <button type="submit">signup</button>
      </form>
    </div>
  );
};

export default Signup;