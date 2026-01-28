import {useState,useEffect,useRef}from 'react'

const UseRef = () => {
  const[count,setCount]=useState(0);
  const value=useRef(0); //{current:0}
  useEffect(()=>{
    value.current=value.current+1;
  })
  return (
    <div>
      <h2>{count}</h2>  
      <button onClick={()=>setCount(count+1)}>INC</button> 
      <p>{`${value.current}times component renders`}</p> </div>
  )
}

export default UseRef
