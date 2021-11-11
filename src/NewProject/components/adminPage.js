import React from 'react'
import {useParams} from 'react-router-dom'
import Sidebar from './sidebar';
import AdminHome from './adminHome';
import AdminPage1 from './adminPage1';
import AdminPage2 from './adminPage2';
import AdminPage3 from './adminPage3';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

function AdminPage() {
    const {name}=useParams();
    return (
        <div className="admin">
            <Router>
                <Sidebar />
                <Switch>
                    <Route exact path='/admin/Abhi/'>
                        <AdminHome name={name}/>
                    </Route>
                    <Route path='/admin/Abhi/page1'>
                        <AdminPage1 />
                    </Route>
                    <Route path='/admin/Abhi/page2'>
                        <AdminPage2 />
                    </Route>
                    <Route path='/admin/Abhi/page3'>
                        <AdminPage3 />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AdminPage;
