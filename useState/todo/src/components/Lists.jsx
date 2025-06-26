import React from 'react'

function Lists(props) {
  const {taskArr, handleDelete} = props; //destructuring the taskArr from props
 
  return (
    <div className="list">
      <ul>
        {taskArr.map((task,idx) => (
          <li key={idx} onClick={() => {
            //console.log(`elemnet with ${idx} is deleted`)
            handleDelete(idx)
          }}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default Lists