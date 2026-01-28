import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import AuthContext from '../context/AuthContext';

const Service = () => {
  const theme = useContext(ThemeContext);
  const user=useContext(AuthContext);
  return (
    <div>
      <h2>
        {theme}
      </h2>
      <p>id:{user.id}</p>
      <p>name:{user.name}</p>
      <p>email:{user.email}</p>
  
    </div>
  )
}

export default Service
