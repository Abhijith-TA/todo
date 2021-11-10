import React, {useState} from 'react'
import { useHistory } from 'react-router';

const admin = {
    email:"admin@gmail.com",
    password:"admin123"
}

function SignIn() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loginFlag,setLoginFlag]=useState(false);
    const history = useHistory();

    const handleLogin = (e)=>{
        e.preventDefault();
        if(email===admin.email&&password===admin.password){
            setLoginFlag(false)
            console.log("loged in")
            setPassword('');
            setEmail('');
            history.push("/admin");
        }
        else{
            console.log("login failed")
            setLoginFlag(true);
            setPassword('');
            setEmail('');
        }
    }
    
    return (
        <div className='sign-in'>
            <form className='sign-in-container' onSubmit={handleLogin}>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter the email"/>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter the password"/>
                {loginFlag&&<p className = 'alert'>incorrect email or password</p>}
                <button type='submit' className='btn-sign-in btn-center'>Sign in</button>
            </form>
        </div>
    )
}

export default SignIn
