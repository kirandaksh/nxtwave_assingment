import React from 'react'
import {useState} from "react";

function InputBox(props) {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    setInputValue(e.target.value);
  }
  const addTask = () => {
    props.addTask(inputValue);//when there is a click,happens, we need to send the data from i/p element to parent or todo element using a function 
    setInputValue(""); //clear the input field after adding the task  
  } 

  return (
    <div className="inputBox">
        <input type="text" value={inputValue} onChange={handleInput} />
        <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default InputBox