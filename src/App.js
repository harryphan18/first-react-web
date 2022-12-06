import React from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/layout/SideBar';
import Home from './components/screen/home/Home';
import CustHist from './components/screen/custhist/CustHist';
import OcsTool from './components/screen/ocstool/OcsTool';
import ServerManagement from './components/screen/ocstool/server/ServerManagement';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <SideBar/>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/custhist" element={<CustHist/>}/>
            <Route path="/ocstool" element={<OcsTool/>}/>
            <Route path="/server-management" element={<ServerManagement/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
