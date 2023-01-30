import React from 'react'
import TodoItem from './TodoItem';

function TodoList({ todos }) {

  return (
    <div className='TodoList'>
      {todos.map((todo, id) => {
        return <TodoItem todo={todo} key={id} />
      })}
    </div>
  )
}

export default TodoList