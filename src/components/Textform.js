import React, {useState} from 'react'



export default function Textform(props) {
  const handleupClick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handleloClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
  }

  const handleclearClick = ()=>{
    setText('')
  }

  const handleSpeak = ()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handlecopyClick = ()=>{
    var text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  
  const handleonChange = (event)=>{
    setText (event.target.value)
  }
    // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState('');
  return (
    <>
        <div className='container'>
            <h1> {props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="3" value={text} onChange={handleonChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handlecopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleSpeak}>Voice</button>
        </div>
        <div className='container'>
            <h1>Your text Summary</h1>
            <span>{text.split(' ').length} words  {text.length} characters</span>
        </div>
    </>
  )
}
