import React,{useState} from 'react';
import './Workspace.css';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
import db from './Firebase';
import Space from './Space';
import firebase from 'firebase';
import {PlusCircleOutlined } from '@ant-design/icons';


function Workspace() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [workspace, setWorkspace] = useState("");

    


   

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {

  workspace?  db.collection('workspaces').add({

      workspaceName:workspace,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
  }).then(setWorkspace("")):alert("Please Enter New WorkSpace");

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    return (
        <div className="workspace">

        <div className="workspace_section">

        <div  onClick={showModal} className="workspace_name">

        <h2>Workspace </h2>
        <PlusCircleOutlined style={{fontSize:'30px',marginBlock:'5px'}} />

        </div>
             <Space/>

        </div>

        <div className="spaces">

        <Modal  title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          
        <div className="modal_info">
           <Input autoComplete="off" onChange={(e)=>setWorkspace(e.target.value)} className="modal_info" placeholder="Enter New Workspace" />

         
           </div>

      </Modal>

     
        
        </div>
            
        </div>
    )
}

export default Workspace
