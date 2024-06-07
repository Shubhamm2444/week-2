import React, { useState } from 'react'; // Import useState hook

function ToDoList() {
  const [todos, setTodos] = useState([]); // State for to-do items (initially empty array)

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]); // Add new to-do item
  };

  const toggleCompleted = (index) => {
    const updatedTodos = [...todos]; // Copy the to-do list to avoid mutation
    updatedTodos[index].completed = !updatedTodos[index].completed; // Toggle completion
    setTodos(updatedTodos); // Update state with modified list
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos]; // Copy the to-do list
    updatedTodos.splice(index, 1); // Remove the to-do item at the given index
    setTodos(updatedTodos); // Update state with modified list
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(index)} />
            {todo.text}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add a new task" onChange={(e) => addTodo(e.target.value)} />
      <button onClick={() => addTodo('')}>Add</button>
    </div>
  );
}

export default ToDoList;


//Explanation:
1: We import the useState hook to manage the state of to-do items.
The todos state array stores objects with text (task description) and completed (boolean) properties.
The addTodo function adds a new to-do item to the state array.
The toggleCompleted function toggles the completion status of a specific to-do item based on its index.
The removeTodo function removes a to-do item at a specific index from the state array.
The component renders the list of to-do items, input field for adding new tasks, and a button to trigger adding.

2: Integrating the Component in App.js:
Open App.js in the src directory.

3:Import the ToDoList component:

import React from 'react';
import ToDoList from './ToDoList'; // Assuming correct file path

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;


// Running the Application:
In your terminal, start the development server: npm start.
Open http://localhost:3000 in your web browser to see your to-do list application.
