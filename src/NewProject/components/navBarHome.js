import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function NavBar() {

  let flag=null;
  if(localStorage.getItem('loginFlag')){
    flag=localStorage.getItem('loginFlag');
  }
  else{
    flag = false;
  }

  const [signInFlag,setSignInFlag] =useState(flag);

    return (
        <nav className='nav-bar'>
          <Link to='/' onClick={()=>setSignInFlag(false)}><h1 className='logo'>Logo</h1></Link>
          {!signInFlag&&<Link to='/sign-in' onClick={()=>setSignInFlag(true)}><h1 className='btn-sign-in'>Sign in</h1></Link>}
        </nav>
    )
}

export default NavBar
