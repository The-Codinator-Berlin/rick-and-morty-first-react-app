import React from "react";
import logo from "./assets/rick-morty.png";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <header className="myHeader container mx-auto max-h12 flex justify-around items-center py-2">
        <img
          className="rounded-full"
          src={logo}
          alt="Rick and Morty character logo"
          height={80}
          width={80}
        />
        <h1 className="text-3xl font-mono">
          Rick and Morty character database
        </h1>
        <input
          className=" searchInput ring-teal-700 rounded-3xl text-center scale-125 placeholder-black placeholder:italic font-light"
          type="text"
          placeholder="Search a charatcer..."
        />
      </header>
    </div>
  );
}

export default Header;
