* Example of a React Component (without HTML):

import React from 'react';

function Greeting(props) {
  const { name } = props; // Destructuring assignment to get name from props
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}

export default Greeting;


//Explanation:
This defines a Greeting component that takes a name prop.
It renders an <h1> element with the name interpolated using curly braces.

Note: Although HTML isn't directly used within React components, a separate main HTML file (index.html) typically serves as the entry point for your React application. This file references the main JavaScript file containing your React components.
