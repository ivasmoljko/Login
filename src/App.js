import './App.css';
import React, {useEffect} from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const lsk = 'react-todo-list-todos'

function App() {
  const [todos, setTodo] = React.useState([])

  useEffect(() => {
    const storageTodos= JSON.parse( localStorage.getItem(lsk))
    if(storageTodos){
      setTodo(storageTodos)
    }
  },[])


  useEffect(() => {
    localStorage.setItem(lsk, JSON.stringify(todos))
  },[todos])

  function addTodo(todo){
    setTodo([todo, ...todos])
  }

  function toggleComplete(id){
    setTodo(
      todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo, completed: !todo.completed
          }
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodo(todos.filter(todo => todo.id !== id))
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm addTodo= {addTodo} />
        <TodoList todos = {todos} 
        toggleComplete = {toggleComplete}
        removeTodo = {removeTodo}
        />
      </header>
    </div>
  );
}

export default App;
