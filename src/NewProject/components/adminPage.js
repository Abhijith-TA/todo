import React from 'react'
import {useParams} from 'react-router-dom'

function AdminPage() {
    const {name}=useParams();
    return (
        <div className="admin">
            <h1>Admin logged in</h1>
            <h2>{name}</h2>
        </div>
    )
}

export default AdminPage;
