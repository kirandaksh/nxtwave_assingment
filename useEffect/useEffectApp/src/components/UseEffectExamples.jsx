import {useState, useEffect} from 'react'
import React from 'react'

function UseEffectExamples() {
    const [value, setValue] = useState("");
    const [taskArr, setTaskArr] = useState([]);

    const handleInput = (e) => {
        setValue(e.target.value);
    } 

    const addTask = () => {
        const newTask = value;
        const newTaskArr = [...taskArr, newTask];
        setTaskArr(newTaskArr);//taskArr=newTask 
        setValue(""); // Clear the input field after adding the task
    }

    const handleDelete = (idx) => {
        const newFilterTaskArr = taskArr.filter((task, index) => index !== idx);
        setTaskArr(newFilterTaskArr);
    }

    function firstCb() {
        console.log("first useEffect")
        return function(){
            console.log("cleanup function for first useEffect with empty dependency array");
        }
    }
    //1st case where we see what happens when we have empty dependency array
    //in above case only its cb function callled after first render 
    useEffect(firstCb, []);

    function secondCb() {
        console.log("second useEffect")
        return function(){
            console.log("cleanup function for second useEffect with no dependency array");
        }
    }
    //2st case where we see what happens when we have no dependency array present 
    //in above case only its cb function callled after every render 
    useEffect(secondCb);

    function thirdCb() {
        console.log("third useEffect")
        return function(){
            console.log("cleanup function for third useEffect with taskArr depentency")
        }
    }
    //2st case where we see what happens when we have a dependency array with a state var
    //in above case only its cb function callled after every change in the taskArr state var 
    useEffect(thirdCb, [taskArr]);


console.log("rendered")
  return (
    <>
        <div className="inputBox">
            <input type="text" value={value} onChange={handleInput} />
            <button onClick={addTask}>Add Task</button>
        </div>
        <div>
            <ul>
                {taskArr.map((task,idx) => (
                  <li key={idx} onClick={(() => handleDelete(idx))}>{task}</li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default UseEffectExamples

/*
* useEffect => to be called after the render is done 
*1. callback (cb) is called once in the lifetime => useEffect(fn, [])
 cleanup => after components is removed then cleanup is called 
 * usecase => onpage first load data fetching 
 *2. cb is called n number of times in the lifetime => useEffect(fn)
 * cleanup => before next useEffect call happens this cleanup function will be executed 
 * usecase => abtosave for every 5 sec, where cleanup code will actually update the state var 
     that is responsible to store the written code on the screen 
*3. cb is called if the dependency updates number of times in lifetime -> useEffect(fn, [state])
    * cleanup => before next useEffect call happens then clean up will be called 
    * usecase => abtosave for every 5 sec, where cleanup code will actually update the state var 
        that is responsible to store the written code on the screen
*/