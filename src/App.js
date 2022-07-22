import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
// import ReactGA from "react-ga4"
// react library for routing
import { Route } from "react-router-dom";
export default function App() {
  const string =
      "I know its hard keeping up with your bodily needs and conditions every time. My WhatsApp Clinic aims at doing that for you, keeping an eye out for you. Just text my Digital Clinic to help you sort out your medical woes!",
    index = React.useRef(0);
  const [placeholder, setPlaceholder] = React.useState(string[0]);

  React.useEffect(() => {
    function update() {
      index.current++;
      setPlaceholder((prev) => prev + string[index.current]);
    }
    if (index.current < string.length - 1) {
      let addChar = setInterval(update, 20);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);

  return <div>{placeholder}</div>;
}
