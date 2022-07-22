import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";


export default function App() = () => {
  const [placeholder, setPlaceholder] = React.useState('');

  const
    string = 'My output is better this way!',
    index = React.useRef(0);

  React.useEffect(() => {
    function update() {
      setPlaceholder(prev => prev + string[index.current]);
      index.current++;
    }
    if (index.current < string.length) {
      let addChar = setInterval(update, 20);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);

  return (
    <div>
      {placeholder}
    </div>
  )
}
