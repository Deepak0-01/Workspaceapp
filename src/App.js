import React from 'react';
import {Layout} from 'antd';
import './App.css';
import Workspace from './Workspace';
import Tasks from './Tasks';

const {Header, Sider, Content,Footer} = Layout;


function App() {
  return (
    <div className="App">
    <Layout>
      <Sider className="sider">
         <Workspace/>
      </Sider>
      <Layout>
     
      <Tasks/>
       
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
