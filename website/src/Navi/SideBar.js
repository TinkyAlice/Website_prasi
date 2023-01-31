import React, { useState } from 'react'
import SidebarList from './SidebarList';

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
  
    return (
      <>
        {showSidebar ? (
          <button
            className="flex text-4xl text-gray-300 items-center cursor-pointer fixed right-10 top-6 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            x
          </button>
        ) : (
          <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className="fixed  z-30 flex items-center cursor-pointer right-10 top-6 bg-zinc-800"
            fill="#d1d5db"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        )}
  
        <div
          className={`top-0 right-0 w-[35vw] bg-gray-800  p-10 pl-20 text-gray-300 fixed h-full z-40  ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <h3 className="mt-20 text-4xl font-semibold text-gray-300">
            Sourcetronic Fountaine247 
            <SidebarList/>
          </h3>
        </div>
      </>
    );
  };

export default Sidebar