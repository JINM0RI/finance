import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed h-full bg-black text-white ${isOpen ? 'w-56' : 'w-0'} transition-all duration-300 ease-in-out overflow-x-hidden`}>
      <button className="px-4 py-2 bg-gray-800 text-white w-full text-left" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <ul className={`mt-4 ${isOpen ? 'block' : 'hidden'}`}>
        <li className="p-4 hover:bg-gray-800">Link 1</li>
        <li className="p-4 hover:bg-gray-800">Link 2</li>
        <li className="p-4 hover:bg-gray-800">Link 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;
