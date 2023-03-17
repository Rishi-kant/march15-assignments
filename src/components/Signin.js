
import './Signin.css'

export default function Signin({handleSignUp}){
    return(
        <div className="container">
            <h1>Welcome !</h1>
            <h4>Log in your account</h4>
            <h4>Your Email</h4>
            <input />
            <h4>Password</h4>
            <input />
            <br/>
            <button>Login</button>
            <p>Don't have any account<button className="signup-btn" onClick={handleSignUp}>Sign up</button></p>
        </div>
    )
}