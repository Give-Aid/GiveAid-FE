import React, { useState } from "react";
import { usePaymentContext } from "@/context/paymentProvider";

const Toggle = ()=> {
  const { removePaymentPlan } = usePaymentContext();

  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(false);
    removePaymentPlan()
  };

  return (
    <div className="flex gap-2 items-center">
      <img
        src="/images/ramadan.png"
        alt="ramadan"
        className=" w-[40px] h-[40px]"
      />
      <label className="relative inline-flex items-center me-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isToggled}
          onChange={handleToggle}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-yellow-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
      </label>
    </div>
  );
}

export default Toggle;
