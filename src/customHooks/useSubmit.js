import React, {useState,useRef} from "react";

const useSubmit = (refId,setRefId,tasks,setTasks) =>{
    const [currentTask,setCurrentTask]=useState('');
    const [alert,setAlert]=useState(false);
    const inputref = useRef();

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(currentTask){
            setAlert(false);
            inputref.current.style.border=" 2px solid rgb(69, 94, 139)";
            const newTask={id:refId,task:currentTask};
            setTasks([...tasks,newTask]);
            setRefId(refId+1);
            setCurrentTask('');
        }
        else{
            setAlert(true);
            inputref.current.style.border="2px solid red";
        }
    }

    return {
        currentTask,
        setCurrentTask,
        alert,
        inputref,
        handleSubmit
    }
}

export default useSubmit;