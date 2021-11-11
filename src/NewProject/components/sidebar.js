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
            <Link to='/admin/Abhi/' className='sidebar-link'>Admin Home</Link>
            <Link to='/admin/Abhi/page1' className='sidebar-link'>Page one</Link>
            <Link to='/admin/Abhi/page2' className='sidebar-link'>Page two</Link>
            <Link to='/admin/Abhi/page3' className='sidebar-link'>Page three</Link>
        </aside>
    )
}

export default Sidebar
