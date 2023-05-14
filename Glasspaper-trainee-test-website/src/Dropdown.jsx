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
        <div className='flex flex-col gap-5 text-left mr-20 border border-black p-5 pr-20'>
          <a className='' href='#' onClick={() => handleOptionClick}>Home</a>
          <a href='#' onClick={() => handleOptionClick}>About</a>
          <a href='#' onClick={() => handleOptionClick}>Contact</a>
        </div>
      )}
      </div>
    </div>
  );
};

export default DropdownMenu;
