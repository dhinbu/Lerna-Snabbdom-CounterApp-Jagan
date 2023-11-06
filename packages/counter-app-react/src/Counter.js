import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const updatedState = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log(`state is updated with : ${count}`);
  },[count])

  return (
   <div>
    <h1>Count : {count}</h1>
    <button onClick={updatedState} >Add</button>
   </div> 
  )
};

export default Counter;