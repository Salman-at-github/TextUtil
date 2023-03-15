import React,{useState} from 'react';


export default function TextForm(props) {
    const [text,setText] = useState(''); //text value is entered in =usestate(value here), and settext is func we use to update the text

    const handleTyping = (event)=>{
        setText(event.target.value) //enables typing on box n changes the value of text usint setText
    }
    const handleUpClick = ()=>{
        setText(text.toUpperCase())  //converts the text to uppercase
    }
    const handleLowClick = ()=>{
        setText(text.toLowerCase())  //converts the text to lowercase
    }
    const handleClearClick = ()=>{
        setText('')  //converts the text to blank
    }
    const handleDoubleClick = ()=>{
        setText((text +' ').repeat(2))
    }


    return (
        <>
        <div className='container'  >
            <div>
                <h1>{props.heading}</h1>
                    <div className="mb-3" >
                        <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleTyping}style={{backgroundColor: "#020235", color:'white'}}></textarea>
                    </div>
                    <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Uppercase</button>
                    <button className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Lowercase</button>
                    <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear</button>
                    <button className='btn btn-primary mx-1 my-1' onClick={handleDoubleClick}>X2 Text</button>
            </div>
        </div>
        <div className='container my-4'  >
            <h3>Your Text Summary</h3>
            {/* the RE /\s+/ removes empty spaces/tabs/etc between the words so that they dont count */}
            <p>
                {text.trim() === ""? "0 words and characters" : `${text.trim().split(/\s+/).length} words and ${text.length} characters`} 
            </p>
            <p>
                {text===""? "Nothing to read":`Estimated time to read is ${0.008*text.split(" ").length} min`}
            </p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        <button className='butt' onClick={props.clickFunc} style={props.buttonStyle}>Dark/Light</button>
        </>
        
        )
}
