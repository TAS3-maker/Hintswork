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

  return (
    <Router>
      <div className="flex h-screen w-full">
       
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="w-full">
          <Header toggleSidebar={toggleSidebar} />
          <TabContent />
        </div>
      </div>
    </Router>
  );
};

export default App;
