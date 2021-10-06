

import React, { useState } from 'react';


export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleOnChange = (event) => {

        setText(event.target.value);
        // console.log(text);
    }

    const convertUpper = () => {

        // setText('Clicked the button');

        let convertedText = text.toUpperCase();

        // setText("Original test was:--- " + text + "\n\n" + "Uppercase converted text is:--- " + convertedText);
        setText(convertedText);

        // setText('Done ;)');
        // console.log("The button is clicked...");
    }

    const convertLower = () => {
        let lowerText = text.toLowerCase();

        // setText("Original test was:--- " + text + "\n\n" + "Uppercase converted text is:--- " + lowerText);
        setText(lowerText);
    }

    const clear = () => {
        setText('');
    }

    let wordCount = 0
    let arr = text.split(/\s+/);
    arr.forEach(element => {
        if (element.length > 0) wordCount += 1;
    });



    return (
        <div className="fs-toggle" style={{ "backgroundColor": "rgb(211 252 255 / 64%)","height":"90vh", "paddingBottom": "20px", "overflow": "auto" }}>
            <div className="container" >
                <div className="mb-3 my-3 fs-1">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="6" placeholder="Enter text to convert to Uppercase..." onChange={handleOnChange}></textarea>
                </div>
                <button type="button" disabled={text.length === 0} className="btn btn-primary success mx-2 my-1" onClick={convertUpper}>ConvertToUpperCase</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary success mx-2 my-1" onClick={convertLower}>ConvertToLowercase</button>
                <button type="button" disabled={text.length === 0} className="btn btn-danger danger mx-2 my-1" onClick={clear}>Clear</button>
            </div>

            <div className="container my-2">
                <h3>Your Text Preview</h3>
                {/* <h4>{text.split(" ").length} words and {text.length} characters..</h4> */}
                <h4>{wordCount} words and {text.length} characters..</h4>
                <p>{text.length > 1 ? text : 'Write something above to preview...'}</p>
            </div>
        </div>

    );
}

