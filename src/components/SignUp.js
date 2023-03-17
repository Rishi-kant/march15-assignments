
import './SignUp.css'


export default function SignUp({handleSignin}){
    return(
        <div className="container2">
            <h2>Please create an account</h2>
            <h4>First Name</h4>
            <input />
            <h4>Last Name</h4>
            <input />
            <h4> Email</h4>
            <input />
            <h4>Password</h4>
            <input />
            <br/>
            <button>Sign UP</button>
            <p>if You already have account then <button className='signup-btn2' onClick={handleSignin}>Login</button></p>
        </div>
    )
}