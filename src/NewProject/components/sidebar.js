import React from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai";

function Sidebar({setSidebarFlag,setMenuFlag}) {

    const handleClose = () =>{
        setSidebarFlag(false);
        setMenuFlag(true);
    }

    return (
        <aside className="sidebar">
            {/* <h1>sidebar</h1> */}
            <AiOutlineClose className='sidebar-close-btn' onClick={handleClose}/>
            <Link to='/admin/' className='sidebar-link'>Admin Home</Link>
            <Link to='/admin/1' className='sidebar-link'>Page one</Link>
            <Link to='/admin/2' className='sidebar-link'>Page two</Link>
            <Link to='/admin/3' className='sidebar-link'>Page three</Link>
        </aside>
    )
}

export default Sidebar
