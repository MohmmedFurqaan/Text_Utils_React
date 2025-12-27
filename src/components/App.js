// Main App

import NavBar from "./NavBar";
import TextForm from "./TextForm";
import React, { useState } from "react";

export default function App() {
  // state for the dark mode and the light mode
  const [mode, SetMode] = useState("light");

  // handle the switching
  
  const toggleMode = ()=> {
    if (mode === "light"){
      SetMode("dark");
      document.body.style.backgroundColor = 'grey'
      document.body.style.color = 'white'
    } else{
      SetMode("light");
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }

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
