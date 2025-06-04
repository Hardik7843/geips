import React from "react";
import PropTypes from "prop-types";


const NavLink = ({ name, path }) =>
{
  return (
    <li>
      <a
        href={path}
        className='block font-normal py-2 pl-3 pr-4 text-gray-600 sm:text-xl rounded md:p-0 hover:text-black'
      >
        {name}
      </a>
    </li>
  );
};

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
export default NavLink;