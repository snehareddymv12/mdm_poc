import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login  from './pages/Login'
import Dashboard from './pages/Dashboard'
// import Entity from './pages/Entity';
import Upload from './pages/Upload';
import EntityForm from './pages/EntityForm';
import Standardization from './pages/Standarization';
import Datacleanpopup from './pages/Datacleanpopup';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/EntityForm" element={<EntityForm />} />
        <Route path="/upload" element={<Upload open={true} />} />
       
        <Route path="/standard" element={<Standardization/>}/>
        <Route path="/Pop" element={<Datacleanpopup/>}/>
      </Routes>
    </Router>
    </>
 
  );
}
 
export default App;
 
