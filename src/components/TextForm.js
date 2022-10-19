import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
    }
    const handleCopyClick = ()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard!","success");
    }
    const handleExtraSpacesClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor: props.mode==='dark'?'rgb(33 37 41)':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange}></textarea>
            </div>
            <button className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleCopyClick}>Copy to clipboard</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the textbox to preview"}</p>
        </div>
        </>
    )
}
