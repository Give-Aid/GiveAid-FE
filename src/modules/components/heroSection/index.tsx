import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="py-5 bg-gradient-to-b from-sky-600 to-sky-900">
      <div className="container">
        <div className="sm:w-[700px] w-full">
          <h1 className="sm:text-[60px] text-[45px] font-[800] text-white leading-snug">
            Give Hope to the Helpless this{" "}
            <span className="text-gradient from-yellow-300 to-yellow-500 ">
              Ramadan
            </span>
          </h1>
          <h1 className="sm:text-[24px] text-[20px] font-[400] text-white ">
            Let's make the world better together
          </h1>
          <div className="flex flex-col gap-3 mt-10">
            <button className="white-btn w-fit">One Time Donation</button>
            <button className="golden-btn w-fit">
              Automate Ramadan Donations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
