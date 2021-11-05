import React, {useState} from "react";

const useDeleteBtn = ()=> {
    const [deleteFlag,setDeleteFlag]=useState(false);
    const [deleteId,setDeleteId]=useState();
    const [deleteTask,setDeleteTask]=useState('');

    const handleDelete = (id,task)=>{
        setDeleteFlag(true);
        setDeleteId(id);
        setDeleteTask(task);
    }

    return{handleDelete,
        setDeleteFlag,
        deleteId,
        deleteTask
    }
}

export default useDeleteBtn;