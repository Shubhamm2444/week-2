Using the Button component:

import React from 'react';
import Button from './Button'; // Assuming correct file path
import './styles.css'; // Import the CSS file

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="App">
      <Button text="Click Me" handleClick={handleClick} />
    </div>
  );
}

export default App;


// It returns JSX to render a button element with the provided text.
App.js imports the Button component and defines a click handler function.
