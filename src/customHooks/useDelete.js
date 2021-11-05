
const useDelete = (tasks,setTasks,setDeleteFlag,deleteId) =>{

    const handleDelete = ()=> {
        const newList=tasks.filter((item)=>item.id!==deleteId);
        setTasks(newList);
        setDeleteFlag(false);
    }

    return{
        handleDelete
    }
}

export default useDelete;