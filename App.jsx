import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTask = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <TodoList
        todos={todos}
        deleteTask={deleteTask}
        updateTask={updateTask}
        toggleComplete={toggleComplete}
      />
      <div className="footer">
        <p>
          {todos.filter((todo) => !todo.completed).length} task(s) remaining
        </p>
        <button onClick={clearCompleted} className="clear-btn">
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default App;
