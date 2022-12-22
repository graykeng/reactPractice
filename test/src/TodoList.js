import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }) {
  // We're going to return a loop which maps all the elements in the array and print out by Todo.js
  return (
    todos.map(todo => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}

