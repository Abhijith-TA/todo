import React, {useState} from "react";

const Form = ({refId,setRefId,tasks,setTasks})=> {
    const [currentTask,setCurrentTask]=useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(currentTask){
        const newTask={id:refId,task:currentTask};
        setTasks([...tasks,newTask]);
        setRefId(refId+1);
        setCurrentTask('');
        }
    }

    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <input type="text" value={currentTask} onChange={(e)=>setCurrentTask(e.currentTarget.value)} required  placeholder="Enter the task"/>
            <button className="btn" type="submit">Add</button>
        </form>
    );
}

export default Form;