import React from 'react';
import { useSelector } from 'react-redux';
import { selectId } from './features/idSlice';
import db from './Firebase';

function Task({id,taskname,taskowner,taskdate,taskstatus,taskpriority}) {

    const idd = useSelector(selectId);

    const removeTask =()=>{

  db.collection('workspaces').doc(idd.spaceid).collection('tasks').doc(id).delete();

    }
    return (
        <div className="task_header">

        <ul className="task_header--ul_tasks">
       <strong> <li>{taskname}</li></strong>
       <strong> <li>{taskowner}</li></strong>
       <strong> <li>{taskdate}</li></strong>
       <strong><li>{taskstatus}</li></strong>
       <strong> <li>{taskpriority}</li></strong>
       
      
        </ul>

        <button onClick={removeTask} className="removetask_button">Remove task</button>


      
        </div>
    )
}

export default Task
