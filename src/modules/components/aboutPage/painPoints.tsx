import React from "react";
import {
  TbHexagonNumber1,
  TbHexagonNumber2,
  TbHexagonNumber3,
} from "react-icons/tb";

type Props = {};

const PainPoints = (props: Props) => {
  return (
    <div className="mt-10 text-left bg-sky-950 py-7 md:py-12 text-purple-300">
      <div className="container">
        <p className="text-[26px] md:text-[30px] font-[400] mb-4 text-center ">
          Pain Points of Donors and Organizations!
        </p>
        <div className="flex flex-col md:flex-row gap-7 items-center">
          <div className="md:w-[30%]">
            <img
              src="images/thinking.png"
              alt="thinking"
              className="w-[300px] md:w-[400px] mt-10 mx-auto"
            />
          </div>
          <div className="md:w-[70%]">
            <div className="mb-16">
              <p className="text-[22px] font-bold mb-4">With Donors</p>
              <p className="text-[18px] font-bold mb-3">
                Lack of trust:{" "}
                <span className="font-[300]">
                  {" "}
                  People may be hesitant to donate to charity because they are
                  not sure if the beneficiary is legitimate or if their donation
                  will be used effectively.
                </span>
              </p>
              <p className="text-[18px] font-bold mb-1">
                Limited or no choices:{" "}
                <span className="font-[300]">
                  {" "}
                  People want to donate to charity, but they can&apos;t find a
                  charity that supports the cause they care about, due to a
                  limited number of charities to choose from or no charities at
                  all.
                </span>
              </p>
            </div>

            <div className="mb-10">
              <p className="text-[22px] font-bold mb-4">With Organizations</p>
              <p className="text-[18px] font-bold mb-3">
              Donor fatigue:{" "}
                <span className="font-[300]">
                  {" "}
                  Same audience of donors may become tired of being asked to donate to charity, especially if they are bombarded with requests.
                </span>
              </p>
              <p className="text-[18px] font-bold mb-1">
              Limited reach:{" "}
                <span className="font-[300]">
                  {" "}
                  When Organizations have a restricted audience or struggle to connect with a diverse range of individuals, it can hinder their ability to generate the necessary financial support for their projects and initiatives.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainPoints;
