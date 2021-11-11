import React, {useState} from 'react'
import { useHistory } from 'react-router';

const admin = {
    name:"Abhi",
    email:"admin@gmail.com",
    password:"admin123"
}

function SignIn() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [alertFlag,setAlertFlag]=useState(false);
    const history = useHistory();

    const handleLogin = (e)=>{
        e.preventDefault();
        if(email===admin.email&&password===admin.password){
            setPassword('');
            setEmail('');
            localStorage.setItem('loginFlag',true);
            history.push(`/admin/${admin.name}`);
        }
        else{
            console.log("login failed")
            setAlertFlag(true);
            setPassword('');
            setEmail('');
        }
    }
    
    return (
        <div className='sign-in'>
            <form className='sign-in-container' onSubmit={handleLogin}>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter the email"/>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter the password"/>
                {alertFlag&&<p className = 'alert'>incorrect email or password</p>}
                <button type='submit' className='btn-sign-in btn-center'>Sign in</button>
            </form>
        </div>
    )
}

export default SignIn
