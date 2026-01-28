import React, { useState } from "react";
import Service from "./Service";

const Contact = ({ c }) => {
  const [name, setName] = useState("vikraam");

  const toggleName = () => {
    setName(name === "vikraam" ? "viky" : "vikraam");
  };

  return (
    <div>
      <h1>{c}</h1>
      <h2>Name: {name}</h2>
      <button onClick={toggleName}>Toggle</button>
      <Service name={name} />
    </div>
  );
};

export default Contact;