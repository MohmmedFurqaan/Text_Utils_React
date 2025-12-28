// Main App

import '../style/app.css';
import NavBar from "./NavBar";
import TextForm from "./TextForm";
import React, { useState } from "react";

export default function App() {
  // state for the dark mode and the light mode
  const [mode, setMode] = useState("light");

  // handle the switching

  // //     background-color: #00002f;
  //   color: cadetblue;
  //   font-family: monospace;
  
  const toggleMode = () => {
  if (mode === "light") {
    setMode("dark");
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    setMode("light");
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
};


  return (
    <>
      {/* Navbar component */}
      <NavBar
        nav_info={{
          title: "TextUtils",
          about_text: "About",
          mode: mode,
          toggleMode : toggleMode,
        }}
      />

      {/* text component */}
      <div className="container">
        <TextForm/>
      </div>
    </>
  );
}
