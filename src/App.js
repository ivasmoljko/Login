import './App.css';
import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodo] = React.useState([])
  function addTodo(todo){
    setTodo([todo, ...todos])
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm addTodo= {addTodo} />
        <TodoList todos = {todos} />
      </header>
    </div>
  );
}

export default App;
