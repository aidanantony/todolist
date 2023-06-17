import React from "react";

export const TodoForm = () => {
return (
  <form className='TodoForm'> 
    <input type='text' className='todo-input' 
    placeholder="What are the tasks for today?" />
    <button type='submit' className='todo-btn'>
    </button>
  </form>
  )
}