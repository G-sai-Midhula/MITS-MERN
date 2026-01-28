import React, { useEffect,useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log('useEffect Hook has been called');
},[count,value]);
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  )
}

export default UseEffect