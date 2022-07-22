import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
// import ReactGA from "react-ga4"
// react library for routing
import { Route } from "react-router-dom";
export default function App() {
  const [placeholder, setPlaceholder] = React.useState("");

  const string =
      "M y output is better this way. This is a better UX for caption generation!!",
    index = React.useRef(0);

  React.useEffect(() => {
    function update() {
      setPlaceholder((prev) => prev + string[index.current]);
      index.current++;
    }
    if (index.current < string.length - 1) {
      let addChar = setInterval(update, 50);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);

  return <div>{placeholder}</div>;
}
