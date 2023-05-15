import App from './App';
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="contents lg:hidden">
      <div>
        <button className='border rounded-none' onClick={toggleDropdown}>&#8801;</button>
      </div>
      <div>
      {isOpen && (
        <div className='flex flex-col text-left mr-20 border rounded-l-2xl border-black bg-stone-800'>
          <a className='border p-5 pr-20 rounded-ss-2xl' href='#' onClick={() => handleOptionClick}>Home</a>
          <a className='border p-5 pr-20' href='#' onClick={() => handleOptionClick}>About</a>
          <a className='border p-5 pr-20 rounded-es-2xl' href='#' onClick={() => handleOptionClick}>Contact</a>
        </div>
      )}
      </div>
    </div>
  );
};

export default DropdownMenu;
