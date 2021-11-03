import React from "react";

const PopUp = ({setDeleteFlag,deleteId,deleteTask,tasks,setTasks})=> {

    const handleDelete = ()=> {
        const newList=tasks.filter((item)=>item.id!==deleteId);
        setTasks(newList);
        setDeleteFlag(false);
    }

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