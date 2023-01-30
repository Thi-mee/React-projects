import React from 'react'
import Button from '../shared/Button'
import style from '../../styles/todoStyles/AddTodo.module.css'

function AddTodo({handleClick}) {
  const [text, setText] = React.useState("")

  const clickHandler = (e) => {
    e.preventDefault();
    handleClick(text);
    setText("");
  }
  return (
    <form className={style.container}>
      <div>
        <input type="text" placeholder="Enter your task here..." value={text} onChange={(e) => setText(e.target.value)} />
        <Button text="Add" scheme="primary" clickHandler={clickHandler}/>
      </div>
    </form>
  )
}

export default AddTodo