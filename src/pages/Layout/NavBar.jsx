import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container mx-auto">
      <div className="flex justify-between py-2">
        <div>
          <NavLink to='/' className="font-robotoFont text-2xl font-semibold tracking-wider">
            PromoDoro
          </NavLink>
        </div>
        <ul className="font-raleWayFont flex gap-x-4">
          <li>
            <NavLink
              className="border-1 rounded-md border border-gray-700 px-3 py-1 text-lg capitalize"
              to="/signup"
            >
              sign up
            </NavLink>
          </li>
          <li>
            <NavLink
              className="border-1 rounded-md border border-gray-700 px-3 py-1 text-lg capitalize"
              to="/login"
            >
              sign in
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
