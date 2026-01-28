import React ,{useState}from 'react'

const UseState = () => {
    const [name,setName]=useState("");
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(name);
      
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} placeholder="enter ur name" onChange={(e)=>setName(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UseState
