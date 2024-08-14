import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";
import bbcIcon from "../assets/bbc_logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="border-b border-b-gray-800 bg-black">
      <div className="container w-full mx-auto text-white flex justify-between items-center py-3 px-4">
        <div className="flex gap-5 items-center w-1/12 sm:w-1/4">
          <img src={bbcIcon} alt="bbc_logo" className="w-28 hidden sm:flex" />
          <div className="flex items-center gap-1">
            <FaUser className="text-xl sm:text-2xl" />
            <a className="nav-size hidden md:flex lg:flex" href="/">
              Sign in
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center ml-8 sm:ml-15 md:ml-10 w-3/4 gap-5 px-6 border-l-0 md:border-l lg:border-l border-l-gray-800">
          <img src={bbcIcon} alt="bbc_logo" className="w-20 flex sm:hidden" />
          <div className="hidden gap-8 items-center sm:flex">
            <a className="nav-size" href="/">
              Home
            </a>
            <a className="nav-size" href="/">
              News
            </a>
            <a className="nav-size" href="/">
              Sport
            </a>
            <a className="nav-size" href="/">
              Business
            </a>
            <a className="nav-size hidden sm:flex md:flex lg:flex" href="/">
              Innovation
            </a>
            <a className="nav-size hidden md:flex lg:flex" href="/">
              Culture
            </a>
            <a className="nav-size hidden lg:flex" href="/">
              Travel
            </a>
            <HiDotsHorizontal className="text-xl" />
          </div>
          <div className="search-box hidden lg:flex items-center input-box">
            <IoSearchSharp className="text-xl" />
            <span className="nav-size ml-2">Search Iplayer</span>
          </div>
          <div className="flex lg:hidden items-center gap-5">
            <div className="flex sm:hidden items-center justify-end">
              <FaBars className="text-3xl" onClick={toggleMenu} />
            </div>
            <IoSearchSharp className="text-3xl" />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-black text-white grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
          <a className="nav-size" href="/">
            Home
          </a>
          <a className="nav-size" href="/">
            News
          </a>
          <a className="nav-size" href="/">
            Sport
          </a>
          <a className="nav-size" href="/">
            Business
          </a>
          <a className="nav-size" href="/">
            Innovation
          </a>
          <a className="nav-size" href="/">
            Culture
          </a>
          <a className="nav-size" href="/">
            Travel
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
