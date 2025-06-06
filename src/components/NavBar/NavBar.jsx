/* eslint-disable no-unused-vars */
import React from "react";
import NavLink from "./NavLink";
import SideBar from "./SideBar";
import { useState } from "react";
import logo from "@/../public/logo.png";
import { navlinks } from "@/config/navConfig";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
// import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavBar = (e, state) => {
    setIsOpen(state);
  };

  return (
    <nav className="border border-black fixed top-0 left-0 right-0 z-10 text-black bg-white/30 backdrop-blur-md">
      <div className="flex items-center justify-between mx-auto p-4 max-w-7xl">
        {/* Left side: Logo + Text */}
        <div className="flex items-center space-x-3">
          <a href="/" className="flex flex-col items-start space-x-3">
            <img src={logo} alt="LOGO" width={80} height={80} />
          </a>
        </div>

        {/* Right side: Nav links (desktop) + Mobile menu */}
        <div className="flex items-center space-x-6">
          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <ul className="flex space-x-8 font-medium">
              <li>
                <a
                  href={"/about"}
                  className="block font-normal py-2 pl-3 pr-4 text-gray-600 sm:text-xl rounded md:p-0 hover:text-black"
                >
                  About G.E.I.P.S
                </a>
              </li>
              <li>
                <a
                  href={"/#courses"}
                  className="block font-normal py-2 pl-3 pr-4 text-gray-600 sm:text-xl rounded md:p-0 hover:text-black"
                >
                  Our Courses
                </a>
              </li>
              <li>
                <a
                  href={"/#career"}
                  className="block font-normal py-2 pl-3 pr-4 text-gray-600 sm:text-xl rounded md:p-0 hover:text-black"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <a
              href={"/bookdemo"}
              className=" text-white px-3 py-2 rounded-lg bg-[#62b8ce] hover:bg-[#3c798a]"
            >
              Enroll Now
            </a>
          </div> */}

          {/* Mobile menu button */}
          <div className="lg:hidden">
            {!isOpen ? (
              <button
                onClick={(e) => handleMobileNavBar(e, true)}
                className="flex items-center px-3 py-2 border rounded border-gray-600 text-gray-600 hover:text-black hover:border-black"
              >
                <Menu className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={(e) => handleMobileNavBar(e, false)}
                className="flex items-center px-3 py-2 border rounded border-gray-600 text-gray-600 hover:text-black hover:border-black"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && <SideBar handleClose={() => setIsOpen(false)} />}
    </nav>
  );
};

export default NavBar;
