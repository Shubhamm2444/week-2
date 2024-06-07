1: Example: Handling Button Clicks:

import React from 'react';

function MyComponent() {
  const handleClick = (event) => {
    console.log('Button clicked!', event); // Log the event object for debugging
    // Perform actions based on the button click (e.g., update state, make API calls)
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default MyComponent;


//Explanation:
We define a handleClick function that logs the event object to the console and could perform other actions.
In the JSX, the onClick attribute of the button element references the handleClick function. When the button is clicked, the handleClick function will be triggered.
