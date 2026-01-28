import React from "react";
import { Link } from "react-router-dom";

const Home = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>

      <Link to="/about">
        <button>Go to About Page</button>
      </Link>
    </div>
  );
};

export default Home;