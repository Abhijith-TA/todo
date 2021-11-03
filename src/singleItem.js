import React from "react";
import { AiFillDelete } from "react-icons/ai";

const SingleItem = ({id,task,index,handleDelete})=>{
    return(
        <div className="item-container">
            <p>{index+1}:</p>
            <p>{task}</p>
            <AiFillDelete className="delete-btn" onClick={()=>handleDelete(id,task)}/>
        </div>
    )
}

export default SingleItem;