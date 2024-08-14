import React, { useState } from "react";
import Iplayer from "../assets/iplayer.png";

const SubHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b border-b-gray-800 bg-black w-full">
      <div className="container mx-auto text-white subHeader-Detail px-4">
        <div className="flex justify-between items-center py-5">
          <div className="subHeader-logo">
            <img src={Iplayer} alt="iplayer" />
          </div>
          <div className="flex sm:hidden">
            <span className="nav-size" onClick={toggleMenu}>
              MENU
            </span>
          </div>
          <div className="hidden sm:flex">
            <div className="flex gap-12 items-center">
              <a className="subheader-size" href="/">
                Channels
              </a>
              <a className="subheader-size" href="/">
                Categories
              </a>
              <a className="subheader-size" href="/">
                A-Z
              </a>
              <a className="subheader-size" href="/">
                TV-Guide
              </a>
              <a className="subheader-size" href="/">
                Watchlist
              </a>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-black text-white grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
          <a className="nav-size" href="/">
          Channels
          </a>
          <a className="nav-size" href="/">
          Categories
          </a>
          <a className="nav-size" href="/">
          A-Z
          </a>
          <a className="nav-size" href="/">
          TV-Guide
          </a>
          <a className="nav-size" href="/">
          Watchlist
          </a>
        </div>
      )}
    </div>
  );
};

export default SubHeader;
