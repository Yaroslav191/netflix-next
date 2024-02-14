import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
   return (
      <nav className="w-full fixed z-40">
         <div className="px-4 md:px-16 py-6 flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
            <img className="g-4 lg:h-7" src="/images/logo.png" alt="logo" />
            <div className="flex-row ml-8 gap-7 lg:flex">
               <NavbarItem />
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
