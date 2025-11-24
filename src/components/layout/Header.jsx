import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex gap-x-5 justify-center items-center py-10 mb-5 text-white header">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
