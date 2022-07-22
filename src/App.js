import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
// import ReactGA from "react-ga4"
// react library for routing
import { Route } from "react-router-dom";
export default function App() {
  const [placeholder, setPlaceholder] = React.useState("");

  const string =
      "M y output is better this way. This is a better UX for caption generation! Look, sampled output: I know its hard keeping up with your bodily needs and conditions every time. My WhatsApp Clinic aims at doing that for you, keeping an eye out for you. Just text my Digital Clinic to help you sort out your medical woes!",
    index = React.useRef(0);

  React.useEffect(() => {
    function update() {
      setPlaceholder((prev) => prev + string[index.current]);
      index.current++;
    }
    if (index.current < string.length - 1) {
      let addChar = setInterval(update, 40);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);

  return <div>{placeholder}</div>;
}
