import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
    return (
        <aside className="sidebar">
            <h1>sidebar</h1>
            <Link to='/admin/Abhi/'>home</Link>
            <Link to='/admin/Abhi/page1'>page1</Link>
            <Link to='/admin/Abhi/page2'>page2</Link>
            <Link to='/admin/Abhi/page3'>page3</Link>
        </aside>
    )
}

export default Sidebar
