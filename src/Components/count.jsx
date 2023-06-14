import React,{ useState } from "react";

function Count(){
    const [count, setCount] = useState(0);
    const increaseCount =() =>{
        setCount(count+1)
    }
    const decreaseCount =() =>{
        setCount(count-1)
    }
    return(
        <div style={{margin:'60px'}}>
        <button onClick={increaseCount}>increase</button>
        <p>count is:{count}</p>
        <button onClick={decreaseCount}>decrease</button>
        </div>
    )
}
export default Count;