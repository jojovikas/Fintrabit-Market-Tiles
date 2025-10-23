import React from "react";
import { HiFilter } from "react-icons/hi";
import { FiAlignLeft } from "react-icons/fi";

const TopBar: React.FC = () => {
  const navItems = ["Home", "Trade", "History", "Profile"];

  return (
 <header className="fixed top-[30px] left-0 w-full z-40 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="md:hidden">
            {/* <HiMenu size={30} /> */}
             <FiAlignLeft size={30}/>
        </div>
   
        <a href="/" className="hidden md:flex text-2xl font-bold tracking-wide">
          <span className="text-blue-400">Crypto</span>Dash
        </a>

        <nav className="hidden md:flex gap-6 text-xl">
          {navItems.map((item) => (
            <a key={item} href={`/${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <HiFilter size={30}/>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
