import React, { useState } from "react";
import { FaTag } from "react-icons/fa";

type Props = {};

const Tooltip = (props: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  
  return (
    <div className="flex items-center relative">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="px-3 py-1 rounded-full"
      >
        <FaTag className="text-sky-950 text-[20px]" />
      </button>
      {showTooltip && (
        <div
          className=" absolute bg-white rounded-md shadow-md p-2 top-[13px] right-[15px] w-[250px] border border-gray-300 flex gap-2 overflow-x-auto"
          style={{
            transform: `translateY(8px)`,
            opacity: showTooltip ? 1 : 0,
            transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
          }}
        >
          Hello
        </div>
      )}
    </div>
  );
};

export default Tooltip;
