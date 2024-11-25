import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
function App() {
  

  return (
   <div>
    
    <AddTodo />
    <Todo />
   </div>
  )
}

export default App
