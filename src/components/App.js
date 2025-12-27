// Main App

import About from "./About";
import NavBar from "./NavBar";


export default function App() {
  return (
    <>
      {/* Navbar component */}
      <NavBar
      nav_info={{
          title: "TextUtils",
          about_text: "About",
      }}
      />

      {/* text component
      <div className="container">
          <TextForm heading={"Enter the text to analyze"} />
      </div> */}

      <About/>

        
    </>
  );
}
