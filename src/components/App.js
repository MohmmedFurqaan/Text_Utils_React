// Main App

import '../style/app.css';
import About from "./About"
import Alert from './Alert';
import NavBar from "./NavBar";
import TextForm from "./TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

export default function App() {
  // state for the dark mode and the light mode
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  
  const toggleMode = () => {
  if (mode === "light") {
    setMode("dark");
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    showAlert("Dark Mode Enabled ! toggle again to switch to light mode", "success");
  } else {
    setMode("light");
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    showAlert("light Mode Enabled ! toggle again to switch to dark mode", "success");
  }
};


  return (
    <>
      
      

      <Router>

        {/* Navbar component */}
        <NavBar
          nav_info={{
            title: "TextUtils",
            about_text: "About",
            mode: mode,
            toggleMode : toggleMode,
          }}
        />

        {/* alert */}
        <Alert alert={alert}/>

          <Routes>
            {/* About Sections */}
            <Route exact path='/about' element={<About mode = {mode} />} />

            <Route exact path='/' element={
              <div className="container">
                < TextForm showAlert={showAlert}/>
              </div>
              
            }/>

          </Routes>

      
      </Router>
      
    </>
  );
}
