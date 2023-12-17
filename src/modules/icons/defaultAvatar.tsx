import React from "react";

type Props = {};

const DefaultAvatar = (props: Props) => {
  return (
    <svg
      className="absolute w-9 h-9 text-gray-400 -left-1"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export default DefaultAvatar;
