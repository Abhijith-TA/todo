import React, {useState} from "react";
import SingleItem from "./singleItem";
import PopUp from "./popup";

const List = ({tasks,setTasks})=>{

    const [deleteFlag,setDeleteFlag]=useState(false);
    const [deleteId,setDeleteId]=useState();
    const [deleteTask,setDeleteTask]=useState('');

    const handleDelete = (id,task)=>{
        setDeleteFlag(true);
        setDeleteId(id);
        setDeleteTask(task);
    }

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