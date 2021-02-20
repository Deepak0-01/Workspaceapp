import React from 'react';
import {useDispatch} from 'react-redux';
import { idSlice, insertId } from './features/idSlice';

import './SpaceName.css';

function SpaceName({id,workspace}) {
    const dispatch = useDispatch();
    

    
    const handleSpaceChange = ()=>{

       
    

        dispatch(insertId({

            spaceid:id,
            spacename:workspace
        }))

       
     };

  
    return (

        <div className="spacename">

       
      
        <h1 onClick={handleSpaceChange} className="wokspace_heading">{workspace}   </h1>

        </div>
      
        

        
        
     


    )
}

export default SpaceName
