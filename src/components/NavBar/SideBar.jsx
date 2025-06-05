import React from "react";
import { navlinks } from "../../config/navConfig";
import NavLink from "./NavLink";

// eslint-disable-next-line react/prop-types
const SideBar = ({ handleClose }) =>
{
  return (
    <ul className="flex flex-col py-4 items-center h-screen">
      {navlinks.map((nav, index) => (
        <div onClick={handleClose} key={index}>
          <NavLink name={nav.name} path={nav.path} />
        </div>
      ))}
    </ul>
  );
};

export default SideBar;