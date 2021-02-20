import React, { useState } from 'react';
import './Tasks.css';
import {Layout} from 'antd';
import { Button } from 'antd';
import { Modal} from 'antd';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { removeId, selectId } from './features/idSlice';
import firebase from 'firebase';
import db from './Firebase';
import { useDocument,useCollection } from 'react-firebase-hooks/firestore';
import {useHistory} from 'react-router-dom';
import Task from './Task';

const {Header, Sider, Content,Footer} = Layout;



function Tasks() {

    const [isModalVisible, setIsModalVisible] = useState("");
    const [taskname, setTaskName] = useState("");
    const [owner, setOwner] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");


    const id = useSelector(selectId);
    const history = useHistory();

    const dispatch = useDispatch();

    

    const [taskDetails,loading] = useCollection(
      
     id.spaceid && db.collection('workspaces').doc(id.spaceid).collection('tasks')
      );

      console.log(taskDetails);

 
   
   const removeProject =()=>{

   id.spaceid&& dispatch(removeId());

    db.collection('workspaces').doc(id.spaceid).delete()
    .then();
  

 
  


   }

  
    
     
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);

        if(taskname && owner && date && status && priority)

        {

        

        id.spaceid && db.collection('workspaces').doc(id.spaceid).collection("tasks").add({

          taskname:taskname,
          taskowner:owner,
          taskdate:date,
          taskstatus:status,
          taskpriority:priority,
          timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })

      }

      else{
        alert("Please Fill all details");
      }


      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    

    return (
        <div className= "tasks">

        <Layout className="tasks_compo">

        <Header className= "tasks_section sec_header">

        <h1 className="task_header1"><strong>{id.spacename}</strong></h1>
       {id.spaceid&& <Button onClick={showModal} className="task_button" type="primary">Add Task</Button>}
       {id.spaceid&&<Button onClick={removeProject} className="task_button del_btn" type="primary">Remove Project</Button>}
        
        </Header>
      <Header className= "tasks_section sec1">

      <div className="task_header">

      <ul className="task_header--ul">
     <strong> <li>Task</li></strong>
     <strong> <li>Task Owner</li></strong>
     <strong><li>Due Date</li></strong>
     <strong> <li>Status</li></strong>
     <strong><li>Priority</li></strong>
      </ul>

        </div>

    
      
      </Header>

      <Modal  title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          
      <div className="modal_info">
         <Input onChange={(e)=>setTaskName(e.target.value)} className="modal_info" placeholder="Task Name" />
         <Input onChange={(e)=>setOwner(e.target.value)} className="modal_info" placeholder="Owner Name" />
         <Input onChange={(e)=>setDate(e.target.value)} className="modal_info" placeholder="Due Date" />
         <Input onChange={(e)=>setStatus(e.target.value)} className="modal_info" placeholder="Status" />
         <Input onChange={(e)=>setPriority(e.target.value)} className="modal_info" placeholder="Priority" />

       
         </div>

    </Modal>

  
      <Footer className="tasks_section sec2">

     

      {  taskDetails?.docs.map((doc)=>{

        const {taskname, taskowner, taskdate, taskstatus, taskpriority} = doc.data();
        
       

      

        return( 

      
         <Task id={doc.id} taskname={taskname}
         taskowner={taskowner}
         taskdate={taskdate}
         taskstatus={taskstatus}
         taskpriority={taskpriority}
         />
        
  
        

          );


        })
    }

   

    </Footer>
    

   
      
     
    
     

    </Layout>

            
        </div>
    )
}

export default Tasks
