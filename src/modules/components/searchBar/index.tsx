import React from "react";
import {CiSearch} from "react-icons/ci"
type Props = {};

const searchBar = (props: Props) => {
  return (
    <div className="relative w-full sm:w-[50%]">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <CiSearch/>
      </div>
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
        placeholder="Search..."
      />
    </div>
  );
};

export default searchBar;
