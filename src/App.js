import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
// import ReactGA from "react-ga4"
// react library for routing
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
export default function App() {
  const [placeholder, setPlaceholder] = React.useState("");

  const string = "My output is better this way!",
    index = React.useRef(0);

  React.useEffect(() => {
    function update() {
      setPlaceholder((prev) => prev + string[index.current]);
      index.current++;
    }
    if (index.current < string.length) {
      let addChar = setInterval(update, 80);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);

  return <div>{placeholder}</div>;
}
