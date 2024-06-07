import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;

//Here's what's happening:

import React, { useState } from 'react';: Imports necessary components from React, including useState for managing component state.
function Counter(): Defines a React component named Counter.
const [count, setCount] = useState(0);: Creates a state variable named count with an initial value of 0 using useState.
const handleIncrement = () => { ... };: Defines a function handleIncrement that updates the count state by 1 using setCount.
return ( ... );: Renders the JSX (JavaScript XML) code that defines the component's UI.
<div>: Container element for the counter display and button.
<p>: Displays the current count value.
<button>: A button that triggers the handleIncrement function when clicked.




  /// Key Differences

Static vs. Dynamic: HTML provides static content, while React allows for interactivity and state management, making your web page more dynamic.
Structure vs. Logic: HTML focuses on structure and content layout, while React handles logic and user interactions within components.
Templates vs. Components: HTML offers a template-like approach, while React uses reusable components that can be composed to build complex UIs.
In a MERN stack application, you would use HTML for the basic structure and static content, and then integrate React components for interactive elements and dynamic data display. The backend (Express and Node.js) would handle data processing, API interactions, and communication with the database (MongoDB).
