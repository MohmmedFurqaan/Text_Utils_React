import React, { useState } from 'react'


export default function TextForm() {

    // declaring constants for the state 
    let [text, setText] = useState("");

    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;


    // handle clicking Capitalize
    const HandleUpclick = ()=>{
        setText(text.toUpperCase());
    }

    // Handle low cicking --> lowercase
    const HandleLowclick = ()=>{
        setText(text.toLowerCase());
    }

    // Handle low cicking --> lowercase
    const HandleClearClick = ()=>{
        setText('');
    }

    // extract the gmail

    const HandleEmailClick = () => {
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const found = text.match(emailRegex);

        if (!text.trim()) {
            alert("Please enter text containing an email.");
            return;
        }

        alert(found ? `Email found: ${found.join(", ")}` : "No email found");
    };



    // handle on change
    const HandleOnChange = (event)=> {
        // to allow entery in the text box
        setText(event.target.value)
    }

    
    
    return (        
        <>
            <div className='container'>
                <h1>Enter the text to Analyze</h1>
                <div className="mb-3">
                    <textarea
                    className="form-control"
                    value={text}
                    onChange={HandleOnChange}
                    id="myBox"
                    rows="8"
                    ></textarea> 
                </div>

                {/* Button for capitalize */}
                <button className="btn btn-primary mx-2" onClick={HandleUpclick}>Convert to Upper case</button>
                <button className="btn btn-primary mx-2" onClick={HandleLowclick}>Convert to Lower case</button>
                <button className="btn btn-primary mx-2" onClick={HandleClearClick}>Clear</button>
                <button className="btn btn-primary my-3" onClick={HandleEmailClick}>Extract Gmail ID</button>
                
            </div>

            {/* Text Summary */}

            <div className="container my-3">
                <h2>Your Text Summary</h2>

                <p><strong>Words:</strong> {wordCount}</p>
                <p><strong>Characters:</strong> {text.length}</p>
                <p><strong>Reading time:</strong> {(wordCount * 0.08)} minutes</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>

            
        </>
    );
}
