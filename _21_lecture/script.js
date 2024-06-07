# (using inline styles):
child:
  import React from 'react';

function Button(props) {
  const { text, color } = props; // Destructuring props

  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle}>{text}</button>
  );
}

export default Button;

parent:
import React from 'react';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Button text="Click Me" color="blue" />
      <Button text="Submit" color="green" />
    </div>
  );
}


//In this example, the Button component receives a color prop that determines the button's background color using inline styles.

By effectively using props in React, you can promote code reusability, modularity, and dynamic behavior in your components. They provide a flexible way to build complex user interfaces by passing data down the component hierarchy.
