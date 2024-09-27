import React, { useState } from "react";
import { RiMenu2Line } from "@remixicon/react"; // Keep only the hamburger icon
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 relative z-50">
      <span className="text-xl font-bold tracking-wide truncate max-w-[70%]">
        {/* Add a logo or text here if needed */}
      </span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-90 text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 transition-all duration-300`}
      >
        <li className="transition-transform duration-300 hover:scale-105 hover:text-blue-400">
          <Link to="/" onClick={() => openMenu(false)}>
            About me
          </Link>
        </li>
        <li className="transition-transform duration-300 hover:scale-105 hover:text-blue-400">
          <Link to="/portfolio" onClick={() => openMenu(false)}>
            Portfolio
          </Link>
        </li>
        <li className="transition-transform duration-300 hover:scale-105 hover:text-blue-400">
          <Link to="/projects" onClick={() => openMenu(false)}>
            Projects
          </Link>
        </li>
        <li className="transition-transform duration-300 hover:scale-105 hover:text-blue-400">
          <Link to="/contact" onClick={() => openMenu(false)}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Always show the hamburger menu icon, even when open */}
      <RiMenu2Line
        size={30}
        className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer hover:text-blue-400"
        onClick={() => openMenu(!menu)}
      />
    </nav>
  );
};

export default Navbar;
