import React from 'react'

function AdminHome({name}) {
    return (
        <div admin-home>
            <h1>Admin logged in</h1>
            <h2>{name}</h2>
        </div>
    )
}

export default AdminHome
