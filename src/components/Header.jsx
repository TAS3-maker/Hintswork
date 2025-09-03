import React, { useState } from 'react';
import { FaBars, FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Profileimg from '../assets/profile.png';

const Header = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Admin Info
  const adminInfo = {
    name: 'Hi Mike',
    email: 'mike123@gmail.com',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
  
    console.log('Logging out...');
  };

  return (
    <div className="header flex justify-between items-center px-5 py-6 bg-[#fffbef] text-black sticky top-0 z-20">
    
      <div className="md:hidden">
        <button onClick={toggleSidebar} className="text-2xl text-black">
          <FaBars />
        </button>
      </div>

      <div className="header-right flex items-center flex-row-reverse ml-auto gap-2.5">
       
        <img
          src={Profileimg}
          alt="Admin Avatar"
          className="avatar size-16 rounded-full mr-2.5 cursor-pointer"
          onClick={toggleDropdown}  
        />
        
        <div className="admin-details text-end">
          <p className="m-0 text-[16px] font-bold">{adminInfo.name}</p>
          <p className="m-0 text-[14px]">{adminInfo.email}</p>
        </div>

      
        {isDropdownOpen && (
          <div className="dropdown-menu absolute right-0 top-[100%] mt-2 bg-white shadow-lg rounded-lg w-48">
            <ul className="list-none p-0 m-0">
              <li>
                <Link
                  to="/profile" 
                  className="block px-4 py-2 text-black hover:bg-gray-200 rounded-t-lg"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout} 
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200 rounded-b-lg"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
