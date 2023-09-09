import React, { useState } from 'react'

export default function TextForm(props) {

    const onchange = (event) => {
        // console.log("hiii");
        setText(event.target.value);
    }

    const onclickUp = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted To Uppercase!", "success")
    }

    const onclickLo = () => {
        let newtext2 = text.toLowerCase();
        setText(newtext2);
        props.showalert("Converted To Uppercase!", "success")
    }

    const oncleartext = () => {
        let newtext3 = ('');
        setText(newtext3);
        props.showalert("Remove Text!", "success")
    }

    const [text, setText] = useState('');
    // let name = "hello world"
    let split = text.split(" ")
    console.log(split.length)

    return (
        <>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="container my-3" >
                    <div className="mb-3">
                        <h1>{props.heading}</h1>
                        <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={onchange} id="exampleFormControlTextarea1" rows="10" ></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-2" onClick={onclickUp} >Click to UpperCase</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary" onClick={onclickLo} >Click to LowerCase</button>
                    <button disabled={text.length === 0} className="btn btn-outline-danger mx-2" onClick={oncleartext} >Clear Text</button>
                </div>
                <div className="container">
                    <h3>Your Text Summary</h3>
                    <p> {text.split(/\s/).filter((element) => { return element.length !== 0 }).length} Word & {text.length} Character</p>
                    <p> {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to Read</p>
                </div>
            </div>
        </>
    )
}   
