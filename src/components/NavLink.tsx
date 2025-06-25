import Link from "next/link";
import React from "react";

type NavLinkProps = {
  name: string;
  path: string;
};

const NavLink: React.FC<NavLinkProps> = ({ name, path }) => {
  return (
    <li>
      <Link
        href={path}
        className="block font-normal py-2 pl-3 pr-4 text-gray-600 sm:text-xl rounded md:p-0 hover:text-black"
      >
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
