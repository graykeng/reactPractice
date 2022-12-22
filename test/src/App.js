import React, { useState, useRef, useEffect } from 'react';
import TodoList from "./TodoList"
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos.length > 0) {
      setTodos(prevTodos => [...storedTodos])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  let toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  let handleAddTodo = (e) => {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  let handleClearTodos = () => {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text" className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-800'/>
      <button className='transition durantion-1000 ease hover:bg-indigo-900 inline-block rounded-full bg-pink-600 text-lg text-white px-8 py-3 cursor-pointer' onClick={handleAddTodo}>Add Todo</button>
      <button className='transition durantion-1000 ease hover:bg-indigo-900 inline-block rounded-full bg-pink-600 text-lg text-white px-8 py-3 cursor-pointer ml-10' onClick={handleClearTodos}>Clear Completed Todos</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
