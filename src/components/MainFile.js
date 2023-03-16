import { useState } from "react"
import Signin from "./Signin"
import SignUp from "./SignUp"

export default function MainFile(){

    const[login,SetLogin]=useState(true)
    function handleSignUp(){
        SetLogin(false)
    }
    return(
        <div>
          {login ?(<Signin  handleSignUp={handleSignUp}/>):(<SignUp/>)}
            
            
        </div>
    )
}