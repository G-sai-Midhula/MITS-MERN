import React from 'react'

const About = (props) => {
  return (
    <div>
      <h2>{props.status}</h2>
      <h2>{props.mail}</h2>
      <h2>{props.regno}</h2>
    </div>
  )
}

export default About
