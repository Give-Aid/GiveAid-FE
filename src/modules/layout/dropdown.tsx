import React from "react";
import Link from "next/link";

type Props = {};

const Dropdown = (props: Props) => {
  return (
    <div className="dropdown my-dropdown">
      <div className="px-4 py-3">
        <span className="block text-sm text-sky-950">Bonnie Green</span>
        <span className="block text-sm  text-sky-700 truncate">
          name@flowbite.com
        </span>
      </div>
      <ul className="py-2">
        <li>
          <Link href="#" className="dropdown-li text-gray-700">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="#" className="dropdown-li text-red-500">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
