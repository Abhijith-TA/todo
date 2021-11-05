import React, {useState,useRef} from "react";

const Form = ({refId,setRefId,tasks,setTasks})=> {
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

    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <input type="text" ref={inputref} value={currentTask} onChange={(e)=>setCurrentTask(e.currentTarget.value)}   placeholder="Enter the task"/>
            <button className="btn" type="submit">Add</button>
            {alert&&<p className="alert">please enter the task</p>}
        </form>
    );
}

export default Form;