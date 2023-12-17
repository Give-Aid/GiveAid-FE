import React from "react";
import { GiPadlock, GiMeshNetwork } from "react-icons/gi";
import { FaEye, FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaInfinity } from "react-icons/fa";
import { BiSolidHappyBeaming } from "react-icons/bi";

type Props = {};

const WhatWeDo1 = (props: Props) => {
  return (
    <div className="grid md:grid-cols-2 gap-10 mt-10 container">
      <div className="flex flex-col items-center">
        <p className="text-center text-[26px] font-[700] text-gradient from-sky-200 to-sky-600">
          For Donors
        </p>
        <div className="mt-5 grid gap-5">
          <div className="flex items-center gap-5">
            <div className="w-[50px]">
              <GiPadlock className="text-[50px] text-sky-300" />
            </div>
            <div>
              <p className="text-[18px] font-bold mb-1">Trusted and Secure:</p>
              <p>
                We take supporters’ trust seriously. Every campaign on the site
                is vetted.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <div className="w-[80px]">
                <FaEye className="text-[40px] text-sky-300" />
              </div>
              <div>
                <p className="text-[18px] font-bold mb-1">
                  Transparency Matters:
                </p>
                <p>
                  See the difference your donation makes! Donate to
                  Organizations the are known to be transparent with their
                  activities.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <div className="w-[80px]">
                <FaInfinity className="text-[50px] text-sky-300" />
              </div>
              <div>
                <p className="text-[18px] font-bold mb-1">
                  Endless Giving Options:
                </p>
                <p>
                  Explore a diverse array of causes close to your heart. With a
                  myriad of trusted charities, finding the perfect cause to
                  support has never been easier.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-5 items-center">
          <p className="font-bold text-lg">Donate and Make a Difference</p><button className="blue-btn ">Support Now</button>
        </div>
      </div>
      <div>
        <p className="text-center text-[26px] font-[700] text-gradient from-sky-200 to-sky-600">
          For Organizations
        </p>
        <div className="mt-5 grid gap-5">
          <div className="flex items-center gap-5">
            <div className="w-[80px]">
              <BiSolidHappyBeaming className="text-[50px] text-sky-300" />
            </div>
            <div>
              <p className="text-[18px] font-bold mb-1">Donor Enthusiasm:</p>
              <p>
                Engage with an eager audience genuinely interested in supporting
                your cause. Say goodbye to donor fatigue and welcome renewed
                passion for your initiatives.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <div className="w-[80px]">
                <FaMoneyBillTrendUp className="text-[45px] text-sky-300" />
              </div>
              <div>
                <p className="text-[18px] font-bold mb-1">Maximize Impact:</p>
                <p>
                  Our fundraising campaigns amplify your cause and secure vital
                  support, ultimately magnifying the positive change you bring
                  to the world.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <div className="w-[80px]">
                <GiMeshNetwork className="text-[50px] text-sky-300" />
              </div>
              <div>
                <p className="text-[18px] font-bold mb-1">Expand Reach:</p>
                <p>
                  Our platform connects you with a diverse and vast network of
                  compassionate donors ready to support your cause.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-5 items-center">
          <p className="font-bold text-lg">Register Your Organization Today</p><button className="blue-btn">Join Give Aid</button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo1;
