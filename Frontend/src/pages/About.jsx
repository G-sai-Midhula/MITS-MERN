import React from "react";
import Contact from "./Contact";

const About = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <Contact name={props.name} />
    </div>
  );
};

export default About;