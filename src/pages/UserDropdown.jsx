import React, { useState } from 'react';
import './pagecss/Dropdown.css'; // Import the CSS file for styling
import { CgProfile } from 'react-icons/cg';
import { FaBook } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { BsCartCheckFill } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
    
     <button className="dropdown-button  rounded-full" onClick={toggleDropdown}>
        <CgProfile className='text-green-300  hover:text-sky-400'/>
      </button>
  
      {isOpen && (
        <div className="dropdown-menu bg-[#301E67]">
          <div className="dropdown-item border-b-[1px] text-[16px]">
            <p className='text-green-300 font-semibold'>Hey</p>
            <p className='uppercase font-semibold'>Bauaa</p>
          </div>
          <div className="dropdown-item"><FaBook className='inline mr-2'/> My Courses</div>
          <div className="dropdown-item"><BiSupport className='inline mr-2'/>Support</div>
          <div className="dropdown-item"><ImProfile className='inline mr-2'/>My Profile</div>
          <div className="dropdown-item"><BsCartCheckFill className='inline mr-2'/>My Purchases</div>
          <div className="dropdown-item"><IoExitOutline className='inline mr-2'/>Logout</div>
        </div>
      )}
    </div>
  );
};


export { UserDropdown };
