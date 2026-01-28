import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({name}) => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/about')
  }
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={handleClick}>Go to about page</button>
    </div>
  )
}

export default Home
