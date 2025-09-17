import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TabContent from './components/TabContent';
import Header from './components/Header';
import Profile from './components/Profile';
import './App.css'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
// heeelooo
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
       
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header toggleSidebar={toggleSidebar} />
          <div className='flex-1 overflow-y-auto'>
          <TabContent />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
