import Todo from './Components/Todo';
import { useState } from 'react'
import './App.css'


function App() {
  return(
  <div className='todo-container'>
    <div>
        <h1>My Todos</h1> 
        <Todo p='learn react'/>
        <Todo p='learn the full course'/>
        <Todo p='buy full course'/>
    </div>
  </div>
        );
}

export default App;
