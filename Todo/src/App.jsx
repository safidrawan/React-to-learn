import React, { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((currentTodo) =>
        currentTodo.id === id ? { ...currentTodo, ...todo } : currentTodo
      )
    );
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((currentTodo) =>
        currentTodo.id === id
          ? { ...currentTodo, completed: !currentTodo.completed }
          : currentTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((currentTodo) => currentTodo.id !== id));
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    if (storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, toggleComplete, deleteTodo }}>
      <div className="text-2xl flex justify-center items-center p-20">
        <TodoForm />
      </div>
    </TodoProvider>
  );
}

export default App;
