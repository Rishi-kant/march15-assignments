
import React, {useState} from "react"
import './TextArea.css'

export default function TextArea(){
    const[value,setValue]=useState('')
    function handleChange(e){
    const updatedValue=e.target.value
    if(updatedValue.length>100){
        alert("You have reached the character limit ")
    }
    else{
        setValue(updatedValue)
    }
    }
    const remainingChars=100-value.length
    return (
         <div className="container">
            <div className="textaria">
            <h1>Text Area with a character limit of 100</h1>
            <textarea 
            vluee={value}
            placeholder="Type Your feedback remember you can type only 100 characters"
            onChange={handleChange}
            />
            </div>
            <div>
            <h3> Remainig Characters = {remainingChars} </h3>
            </div>
        </div>
    )
}