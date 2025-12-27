import React, { useState } from 'react'


export default function TextForm({ heading }) {

    // declaring constants for the state 
    const [text, setText] = useState("");

    // handle clicking Capitalize
    const HandleUpclick = ()=>{
        let capital_text = text.toUpperCase();
        setText(capital_text);
    }

    // Handle low cicking --> lowercase
    const HandleLowclick = ()=>{
        let capital_text = text.toLowerCase();
        setText(capital_text);
    }

    // handle on change
    const HandleOnChange = (event)=> {
        // to allow entery in the text box
        setText(event.target.value)
    }

    

    
    return (        
        <>
            <div className='container'>
                <h1>{heading}</h1>
                <div className="mb-3">
                   {/* <label htmlFor="myBox" className="form-label">{heading}</label> */}
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
                
            </div>

            {/* Text Summary */}

            <div className="container my-3">
                <h2>Your Text Summary : </h2>
                <p>Total Words : {text.split(" ").length}</p>
                <p>Total characters : {text.length}</p>
                <p>Time to read the words : {0.08 * text.split(" ").length}</p>

                {/* preiview */}

                <h2>Preiview</h2>
                <p>{text}</p>
            </div>
            

            


        </>
    );
}
