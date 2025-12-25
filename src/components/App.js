// Main App

import NavBar from "./NavBar";
import TextForm from "./TextForm"

export default function App() {
  return (
    <>
        {/* for the Navbar */}
        <NavBar
        nav_info={{
            title: "TextUtils",
            about_text: "About",
        }}
        />

        {/* text component */}
        <div className="container mt-5">
            <TextForm heading={"Enter the text to analyze"} />
        </div>

        
    </>
  );
}
