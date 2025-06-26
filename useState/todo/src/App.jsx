import Todo from './components/todo';
import React from 'react'

function App() {
  return (
    <Todo></Todo>
  )
}

export default App

/*
React Sprint Day 4
1. we need to create a static webpage version 
2. we need to figure out where to add dynamic nature to webpage i.e, adding state 
3. divide the code you have written into components if possible 
4. check if the logic and code are working with tests 
5. Primary reason where if we have a component which has a scope to increase its scale then we need 
to response those componants 
6. both lists and input components can be scaled up  so thats the reason we are diving them into 
different components. 
or 
that inorder scale we need to focus on these components separatly, so that the reason we are dividing
them
7. whenever we are actually communicating with child element we will use props tosend 
the data from parent to child 
8. whenever we want to have communication from child toparent then we need send a function to the parent, 
where parent will use the result of thefunction and update the state var that it have.
9. In react we dont have the thing know as child to child communication , which is here we need to 
communicate only as in react we have a tree structure of representation between child and parent . 

*/ 
