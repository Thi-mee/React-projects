import React from 'react'
import Portal from '../components/shared/Portal'
import AddTodo from '../components/todoComponents/AddTodo'
import TodoList from '../components/todoComponents/TodoList'

const TODO = [
  {
    id: 1,
    title: 'Learn React',
    completed: false
  },
  {
    id: 2,
    title: 'Learn Next.js',
    completed: true
  },
  {
    id: 3,
    title: 'Learn GraphQL',
    completed: false
  }
]

function Home() {
  const [todos, setTodos] = React.useState(TODO);

  const addTodo = (todoTitle) => {
    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false
    }
    setTodos([newTodo, ...todos])
  }

  return (
    <Portal>
      <div className="container">
        <AddTodo handleClick={addTodo} />
        <TodoList todos={todos} />
      </div>
    </Portal>
  )
}

export default Home