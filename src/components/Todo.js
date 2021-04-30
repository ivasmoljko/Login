import React from 'react'

function Todo({ todo,toggleComplete,removeTodo }) {

    function handleCheckboxClick() {
        toggleComplete(todo.id)
        console.log(todo)
    }

    function handleRemoveClick() {
        removeTodo(todo.id)
    }

    return ( 
        <div style={{display:"flex"}} > 
        <input type = "checkbox" onClick={handleCheckboxClick}/>
        <li style={{ color: "white", textDecoration: todo.completed ? "Line-trough" : null}}
        >{todo.task}</li>
        <button onClick= {handleRemoveClick}>X</button>
        </div>
    )
}

export default Todo