import React from 'react';
import {NavLink, Link } from 'react-router-dom';
import { FaHome, FaUsers, FaUserShield, FaLightbulb, FaUserTie } from 'react-icons/fa';
import HinsLogo from '../assets/hintslogo.svg';
import Brandicon from '../assets/brand.svg';
import Dashboardicon from '../assets/dashboard.svg';
import Hinticon from '../assets/hints.svg';
import Sponsoricon from '../assets/sponsor.svg';
import Hintslogo from '../assets/hintslogo.svg';
import Usersicon from '../assets/users.svg';


const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
      
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-10 md:hidden transition-opacity duration-300 ease-in-out"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[284px] bg-[#ffedb1] text-[#796b0b] p-2.5 overflow-y-auto z-30 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:static md:translate-x-0 md:flex-shrink-0`}
      >
        <img className='p-2.5 pb-4' src={Hintslogo} alt='hintlogo' />
        <ul className='list-none p-0 pt-2 border-t-1 border-[#999999]'>
          <li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332]">
            <Link to="/" className="!text-[#796B0B] w-full p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00]" >
              <img className='w-6 hover:fill-[#B88A00]' src={Dashboardicon} alt='dashboardicon' /> Dashboard
            </Link>
          </li>
          <li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332]">
            <Link to="/hints" className="!text-[#796B0B] w-full p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00]">
              <img className='w-6' src={Hinticon} alt='dashboardicon' /> Hints
            </Link>
          </li>
          <li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332]">
            <Link to="/brands" className="!text-[#796B0B] w-full p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00]">
              <img  className='w-6' src={Brandicon} alt='dashboardicon' /> Brands
            </Link>
          </li>
          <li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332]">
            <Link to="/sponsors" className="!text-[#796B0B] w-full p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00]">
              <img className='w-6' src={Sponsoricon} alt='dashboardicon' /> Sponsors
            </Link>
          </li>
          <li className="p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:text-[#c9a332]">
            <Link to="/users" className="!text-[#796B0B] w-full p-2.5 cursor-pointer flex items-center gap-2 text-[16px] font-semibold hover:!text-[#B88A00]">
              <img className='w-6' src={Usersicon} alt='dashboardicon' /> Users
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
