import React from 'react'

const About = (props) => {
  return (
    <div>
      <h2>{props.message}</h2>
      <h2>{props.re}</h2>
      <h2>{props.email}</h2>
    </div>
  )
}

export default About
