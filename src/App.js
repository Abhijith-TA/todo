import './App.css';
import React, {useState} from 'react';
import Form from './form';
import List from './list';

const App = ()=> {
  const [refId,setRefId]=useState(1);
  const [tasks,setTasks]=useState([]);

  return (
    <div>
      <div className="container">
        <h1>Todo List</h1>
        <Form refId={refId} setRefId={setRefId} tasks={tasks} setTasks={setTasks}/>
        <List tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  );
}

export default App;
