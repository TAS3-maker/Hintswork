import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
import Profile from './Profile';
import Header from './Header';

const TabContent = () => {
  return (
    <div className="content-container flex-1 w-full">
      <div className="content px-[34px] pt-[44px] flex-1 overflow-y-auto h-[100vh] ">
       
        <Routes>
          <Route path="/" element={<Tab1 />} />
          <Route path="/hints" element={<Tab2 />} />
          <Route path="/brands" element={<Tab3 />} />
          <Route path="/sponsors" element={<Tab4 />} />
          <Route path="/users" element={<Tab5 />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default TabContent;
