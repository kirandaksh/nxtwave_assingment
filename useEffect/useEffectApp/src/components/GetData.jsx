import {useState, useEffect} from 'react'
import React from 'react'

function GetData() {
  const [data, setData] = useState(null);//data=null

  useEffect(() => {
    async function fetchData() {
      console.log("useEffect run");
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const user = await response.json();
      setData(user);//set the data to the json object//data=user
    }//async function will always return a promise 
    fetchData();
  }, [])
    //useeffect is used to call a function once the render actusally happens 
    console.log("render");

  return (
    <>
      {data == null ? 
       <h2>placeholder loading the data....</h2> :
       <>
         <h2>Name: {data.name}</h2>  
         <h2>Username: {data.username}</h2>
         <h2>Email: {data.email}</h2>
       </>
    }
    </>
  )
}

export default GetData