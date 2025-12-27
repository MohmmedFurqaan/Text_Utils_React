import React, { useState } from 'react'


export default function TextForm({ heading }) {

    // declaring constants for the state 
    let [text, setText] = useState("");

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

    let HandleEmailClick = ()=>{

        // regex expression for the email
        const email_regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        // var for the email_found if the Gmail ID found update the variable
        let email_found = '';

        // condition
        if (text === ''){
            alert("(ERROR) enter the text that contains email to find the email Id from the text !");
            setText('');
        }

        if (text.match(email_regex)){
            email_found = text.match(email_regex);
            setText("Found Gmail Id is: " + email_found);
        } else {
            setText("No gmail id found !")
        }


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
                <button className="btn btn-primary mx-2" onClick={HandleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={HandleEmailClick}>Extract Gmail ID</button>
                
            </div>

            {/* Text Summary */}

            <div className="container my-3">
                <h2>Your Text Summary : </h2>
                <p>Total Words : {text.split(" ").length}</p>
                <p>Total characters : {text.length}</p>
                <p>Time to read the words : {0.08 * text.split(" ").length} minute</p>

                {/* preiview */}

                <h2>Preiview</h2>
                <p>{text}</p>
            </div>
            
        </>
    );
}
