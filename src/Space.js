import React, { useEffect, useState } from 'react';

import { insertId } from './features/idSlice';
import {useDispatch} from 'react-redux';
import db from './Firebase';
import './Space.css';
import SpaceName from './SpaceName';

function Space() {

    const [spaces, setSpaces] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{

        db.collection('workspaces').orderBy('timestamp','desc').onSnapshot(snapshot=>
            
            setSpaces(snapshot.docs.map((doc)=>({


                id:doc.id,
                data:doc.data(),
            }))))





     },[]);

   



     

  


 

    return (
        <div className="space">

        {spaces.map(({id, data:{workspaceName}})=> <div  className="each_workspace"> 
         <SpaceName id={id} workspace = {workspaceName}/></div>)}


            
        </div>
    )

   
}

export default Space
