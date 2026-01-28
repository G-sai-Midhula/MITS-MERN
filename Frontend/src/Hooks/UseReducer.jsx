import React, { useReducer } from 'react'

const initialValue={count:0};
const reducer=(state,action)=>{
    switch(action.type){
        case "Increment":{
            return {count:state.count+1};
        }
        case "Decrement":{
            return {count:state.count-1};
        }
        case "Reset":{
            return initialValue;
        }
        default:
            return {count:state.count};
        
    }

}
const UseReducer = () => {
    const [state,dispatch] =useReducer(reducer,initialValue)
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
    </div>
  )
}

export default UseReducer
