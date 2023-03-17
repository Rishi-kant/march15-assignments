import { useState } from "react"
import Signin from "./Signin"
import SignUp from "./SignUp"

export default function MainFile(){

    const[login,SetLogin]=useState(true)
    function handleSignUp(){
        SetLogin(false)
    }
    function handleSignin(){
        SetLogin(true)
    }
    return(
        <div>
          {login ?(<Signin  handleSignUp={handleSignUp}/>):
          (<SignUp  handleSignin={handleSignin}/>)}
            
            
        </div>
    )
}