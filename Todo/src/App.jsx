import React, { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) =>{
    setTodos((prevTodos)=>{
      prevTodos.map((currentTodo)=>{
        currentTodo.id === id ? todo:currentTodo
      }
      )
    })
  }

  const toggleComplete = (id)=>{
    setTodos((prevTodos)=>{
      prevTodos.map((currentTodo)=>{
        currentTodo.id === id ? ({...currentTodo, completed:!currentTodo.completed}): currentTodo
      })
    })
  }

  const deleteTodo = (id)=>{
    setTodos((prevTodos)=>{
      prevTodos.filter((currentTodo.id !== id))
    })
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))
    
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, toggleComplete,deleteTodo }}>
      <div className="text-2xl text-">App</div>
    </TodoProvider>
  );
}

export default App;
