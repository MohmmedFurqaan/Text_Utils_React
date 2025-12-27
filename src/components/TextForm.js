import React, { useState } from 'react'


export default function TextForm({ heading }) {

    // declaring constants for the state 
    const [text, setText] = useState("");

    // handle clicking
    const HandleUpclick = ()=>{
        let capital_text = text.toUpperCase();
        setText(capital_text);
    }

    // handle on change
    const HandleOnChange = (event)=> {
        // to allow entery in the text box
        setText(event.target.value)
    }


    
    return (        
        <>
            <div>
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
                <button className="btn btn-primary" onClick={HandleUpclick}>CAPITALIZE</button>
                
            </div>
            

            


        </>
    );
}
