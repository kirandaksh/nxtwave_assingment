import React from 'react'
import {useState} from 'react'

function Counter() {
    //state in counter component 
    const [count, setCount] = useState(0);

    //event handler
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if(count == 0){
            return 
        }else{
            setCount(count - 1);
        }
        //{count == 0 ? setCount(0) : setCount(count - 1)}
    }
  return (
    <>
        <div className="counter">
            <button onClick={increment}>+</button>
            <div className="cvalue">{count}</div>
            <button onClick={decrement}>-</button>
        </div>
    </>
  )
}

export default Counter
