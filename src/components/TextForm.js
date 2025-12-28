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
                <h1 className="fs-4 fs-md-2">Enter the text to Analyze</h1>
                <div className="mb-3">
                    <textarea
                    className="form-control"
                    value={text}
                    onChange={HandleOnChange}
                    id="myBox"
                    rows="6"
                    placeholder='Enter text here'
                    ></textarea> 
                </div>

                {/* Button for capitalize */}
                <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-primary" onClick={HandleUpclick}>
                        Convert to Uppercase
                    </button>

                    <button className="btn btn-primary" onClick={HandleLowclick}>
                        Convert to Lowercase
                    </button>

                    <button className="btn btn-success" onClick={HandleEmailClick}>
                        Extract Gmail ID
                    </button>

                    <button className="btn btn-outline-danger" onClick={HandleClearClick}>
                        Clear
                    </button>
                </div>

                
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
