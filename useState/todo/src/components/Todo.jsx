import React from 'react';
import {useState} from "react";

import Lists from './Lists';
import InputBox from './inputBox';


function Todo() {
  const [taskArr, setTaskArr] = useState([]); //taskArr = []

  const addTask = (inputValue) => {
    const newTask = inputValue;
    //we never mainpulate/change the state var on our own 
    //taskarr.append(newTask) => we should not do this, as here the state var should not be manipulate by our own 
    const newTaskArr = [...taskArr, newTask];
    setTaskArr(newTaskArr); //we are using newly created arr and keep it into taskarr = newataskarr
  }

   const handleDelete = (idx) => {
      const filterTasks = taskArr.filter((task, index) => index !== idx);
      setTaskArr(filterTasks)//taskarr == filterArr
   }

  return (
    <>
      <InputBox addTask={addTask} />
      <Lists taskArr={taskArr} handleDelete={handleDelete}/>
    </>
  )
}

export default Todo