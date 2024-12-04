import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h3 className="pb-3 text-5xl font-bold capitalize text-gray-600">
          404 Not found
        </h3>
        <p className="font-raleWayFont text-xl capitalize">
          the page you are looking for dose not exist
        </p>
        <button className="font-robotoFont mt-2 rounded-md bg-gray-500 px-3 py-1 text-xl capitalize tracking-wide text-white">
          <NavLink to="/">return home</NavLink>
        </button>
      </div>
    </main>
  );
};

export default NotFound;
