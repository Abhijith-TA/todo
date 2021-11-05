import React, {useState} from "react";
import SingleItem from "./singleItem";
import PopUp from "./popup";
import useDeleteBtn from "../customHooks/useDeleteBtn";

const List = ({tasks,setTasks})=>{

    const {handleDelete,
        setDeleteFlag,
        deleteId,
        deleteTask,
        deleteFlag}=useDeleteBtn();

    if(tasks.length===0){
        return(
            <div className="list-container">
                <h3 className="empty-msg">No tasks to display</h3>
            </div>
        );
    }

    return(
        <div className="list-container">
            {
                tasks.map((item,index)=>{
                    const {id,task}=item;
                    return <SingleItem key={id} id={id} task={task} index={index} handleDelete={handleDelete}/>
                })
            }
            {
                deleteFlag&&<PopUp setDeleteFlag={setDeleteFlag} deleteId={deleteId} deleteTask={deleteTask} tasks={tasks} setTasks={setTasks}/>
            }
        </div>
    );
}

export default List;