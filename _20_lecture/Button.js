Functional Component:

import React from 'react';

function Button(props) {
  const { text, handleClick } = props; // Destructuring props

  return (
    <button onClick={handleClick}>{text}</button>
  );
}

export default Button;


//Button.js defines a functional component named Button.
It takes props for text (button label) and handleClick (function to execute on click).
