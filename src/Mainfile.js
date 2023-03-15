import './Mainfile.css'
import React, { useState} from "react"
import lion from './images/lion.jpg'
import jaguar from './images/jaguar.jpg'
import elephant from './images/elephant.jpg'
import panda from './images/panda.jpg'
import prt from './images/prt.jpg'
import rabbit from './images/rabbit.jpg'



export default function Mainfile(){
    const ArrOfimages=[
        lion,jaguar,elephant,panda,prt,rabbit
    ]
    const[currentIndex, setCurrentIndex]=useState(0)

    function onClickHandle(){
        setCurrentIndex((currentIndex+1 )%ArrOfimages.length)
    }

    return(
       
        <div className="ui">
           
          <img  
          className="images" 
          src={ArrOfimages[currentIndex]}
          alt="animal of images"
         />
          <div  className='btn-parent'>
          <button className='btn' onClick={onClickHandle}>
            Change Pic 
            </button>
            </div>
        </div>
       
    )
}