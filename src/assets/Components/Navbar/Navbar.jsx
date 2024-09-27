import React from "react";
import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { Link } from "react-router-dom";
import TextChange from "../TextChange";

const Navbar = () => {
    const [menu, openMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide truncate max-w-[70%]">
        {/* <TextChange /> */}
      </span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        {/* <a href="#About">
      <li className="text-md transition-all duration-300 p-1 md:p-0">
        About me
      </li>
    </a> */}
        <li>
          <Link to="/">About me</Link>
        </li>
        {/* <a href="#Portfolio">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Portfolio
          </li>
        </a> */}
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        {/* <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a> */}
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        {/* <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a> */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;