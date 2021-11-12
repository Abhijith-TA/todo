import React, {useState} from 'react'
//import {useParams} from 'react-router-dom'
import Sidebar from './sidebar';
import AdminHome from './adminHome';
import AdminPageN from './adminPageN';

import { AiOutlineMenu } from "react-icons/ai";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

function AdminPage() {
   // const {name}=useParams();
    const [sidebarFlag,setSidebarFlag]=useState(true);
    const [menuFlag,setMenuFlag]=useState(false);

    const handleMenu = ()=>{
        setSidebarFlag(true);
        setMenuFlag(false);
    }

    return (
        <div className={`admin ${!sidebarFlag&&'hide-sidebar'}`}>
            <Router>
                <Sidebar setSidebarFlag={setSidebarFlag} setMenuFlag={setMenuFlag}/>
                <AiOutlineMenu className={`menu-btn ${menuFlag&&'show-menu-btn'}`} onClick={handleMenu}/>
                <Switch>
                    <Route exact path='/admin/'>
                        <AdminHome/>
                    </Route>
                    <Route path='/admin/:page'>
                        <AdminPageN />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AdminPage;
