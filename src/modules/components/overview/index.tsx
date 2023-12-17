import React from "react";
import WhatWeDo1 from "./whatWeDo1";
import WhatWeDo2 from "./whatWeDo2";
import Quote from "../quote";

type Props = {};

const Overview = (props: Props) => {
  const quotes = [
    {
      quote:
        "The beliver's shade on the Day of Ressurection will be their charity",
      quoter: "- Prophet Muhammad (SAW) [Tirmidhi]",
      image: "/images/pbuh.png",
    },
    {
      quote:
        "ALLAH said: Spend in charity, O son of Adam, and I will spend on you",
      quoter: "- Prophet Muhammad (SAW) [Bukari wa Muslim]",
      image: "/images/Allah.png",
    },
  ];
  return (
    <>
      <Quote quote={quotes[0]} />
      <div className="mt-10 text-center bg-sky-50 py-20">
        <div className="container">
          <h3 className="text-[26px] font-[600]">
            Connecting Donors with{" "}
            <span className="text-sky-600">Causes that Matter</span>
          </h3>
          <p className="mt-3 font-[500]">
            At <span className="text-sky-600">Give Aid</span>, we strive to
            create a platform where giving Sadaqah becomes a simple, yet
            profoundly impactful act. Every donation made through our platform
            is an investment in your{" "}
            <span className="text-sky-600">Akhirah (Hereafter)</span>, paving
            the way towards eternal rewards and the ultimate attainment of{" "}
            <span className="text-sky-600">Jannah (Paradise)</span>.
          </p>
        </div>
      </div>
      <WhatWeDo1 />
      <WhatWeDo2 />
      <Quote quote={quotes[1]} />
      <div className="mt-10 text-left bg-sky-950 py-7 md:py-20 ">
        <div className="flex flex-col md:flex-row items-center container">
          <div>
            <p className="font-[500] text-sky-100">
              With every Sadaqah, you sow seeds of compassion, kindness, and
              hope in the Ummah. Start giving for the sake of Allah, and may
              your Akhirah (Hereafter) be adorned with treasures and everlasting
              joy
            </p>
            <h3 className="my-5 text-[28px] font-[600] text-sky-100">
              Let's help the helpless. Let's make the world better together
            </h3>
            <button className="white-btn font-[500]">Donate Now</button>
          </div>
          <div className="mt-5 md:mt-0">
            <img src="/images/giving-love.png" alt="help" className="w-[100px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
