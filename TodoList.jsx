import React from "react";

function TodoList({ todos, deleteTask, updateTask, toggleComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <input
            type="text"
            value={todo.text}
            onChange={(e) => updateTask(todo.id, e.target.value)}
            className={todo.completed ? "completed-text" : ""}
          />
          <button className="delete-btn" onClick={() => deleteTask(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
