import React,{useEffect, useState} from 'react'

const UseEffectApi = () => {
   const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
  }, [])

  return (
    <div>
      useEffect Api
      <ul>
        {users.map((user,index ) => (
          <li key={index}>
          <p>name:{user.name}</p>
          <p>mail:{user.email}</p>
          <p>latitude:{user.address.geo.lat}</p>
          </li>


        ))}
      </ul>
    </div>
  )
}

export default UseEffectApi