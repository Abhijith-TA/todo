import React from "react";
import useSubmit from "../customHooks/useSubmit";

const Form = ({refId,setRefId,tasks,setTasks})=> {
    const {
        currentTask,
        setCurrentTask,
        alert,
        inputref,
        handleSubmit} =useSubmit(refId,setRefId,tasks,setTasks);

    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <input type="text" ref={inputref} value={currentTask} onChange={(e)=>setCurrentTask(e.currentTarget.value)}   placeholder="Enter the task"/>
            <button className="btn" type="submit">Add</button>
            {alert&&<p className="alert">please enter the task</p>}
        </form>
    );
}

export default Form;