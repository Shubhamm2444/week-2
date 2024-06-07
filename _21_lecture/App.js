# Parent Component


import React from 'react';
import Greeting from './Greeting'; // Assuming correct file path

function App() {
  return (
    <div className="App">
      <Greeting name="Alice" age={30} />
    </div>
  );
}

export default App;


//App.js imports the Greeting component and renders it, passing "Alice" for the name prop and 30 for the age prop.
