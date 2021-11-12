import React from 'react';
import {useParams} from 'react-router-dom';

function AdminPage1() {
    console.log(useParams());
    const {page} = useParams();
    return (
        <div>
            <h1>Admin page </h1>
            <h2>{page}</h2>
        </div>
    )
}

export default AdminPage1;
