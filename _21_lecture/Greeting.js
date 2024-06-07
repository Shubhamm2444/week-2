import React from 'react';

function Greeting(props) {
  const { name, age } = props; // Destructuring props

  return (
    <div>
      <h1>Hello, {name}! You are {age} years old.</h1>
    </div>
  );
}

export default Greeting;

//Greeting.js defines a functional component that takes name and age props.
