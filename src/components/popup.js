import React from "react";
import useDelete from "../customHooks/useDelete";

const PopUp = ({setDeleteFlag,deleteId,deleteTask,tasks,setTasks})=> {

    const { handleDelete } =useDelete(tasks,setTasks,setDeleteFlag,deleteId);

    return(
        <div className="popup-container">
            <div className="popup-message">
                <h1>Do you want to delete the task ({deleteTask})?</h1>
                <div className="btn-container">
                <button className="btn" onClick={handleDelete}>yes</button>
                <button className="btn" onClick={()=>{setDeleteFlag(false)}}>no</button>
                </div>               
            </div>
        </div>
    );
}

export default PopUp;