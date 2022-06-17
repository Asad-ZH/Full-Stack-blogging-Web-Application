import React, { useState } from 'react'

export default function TextForm(props) {

  const [text,setText] = useState(" ");

  const handleUpClick = () => {
    console.log("uppercase was clicked");
    // setText("button clicked" + text);
    let temp = text.toUpperCase();
    setText(temp);
  }

  const handledownClick = () => {
    console.log("uppercase was clicked");
    // setText("button clicked" + text);
    let temp = text.toLowerCase();
    setText(temp);
  }

  const handleUpChange = (event) => {
    console.log("smth is changed in text field");
    setText(event.target.value);
  }
  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText)
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}

  return (
    <div>
        <div>{props.heading}</div>
      <input className="form-control" value={text} onChange = {handleUpChange} type="text" placeholder="Default input" aria-label="default input example"/>
     <br></br>
      <button type="button" className="btn btn-success mx-1" onClick={handleUpClick} >Covert to uppercase</button>
      <button type="button" className="btn btn-success mx-1" onClick={handledownClick} >Covert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
    </div>
  );
}
