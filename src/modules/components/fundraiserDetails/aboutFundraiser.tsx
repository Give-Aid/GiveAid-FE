import { useState } from "react";
import About from "./about";
import Updates from "./updates";
import { FaTag } from "react-icons/fa";

const AboutFundraiser = () => {
  const [activeTab, setActiveTab] = useState("AboutFundraiser");

  const openTab = (tabName: string) => {
    setActiveTab(tabName);
  };
  const causes = ["orphans", "Feeding", "Clothe", "Sadaqah jaryah"];
  return (
    <>
      <div className="flex gap-4 mt-10 items-center">
        <FaTag className="text-sky-950 text-[26px]" />
        <div className=" flex gap-2 removeScrollBar flex-wrap">
          {causes.map((cause) => (
            <p key={cause} className="px-3 py-[4px] text-[14px] bg-sky-950 font-medium text-white w-fit rounded-full">
              {cause}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start mt-10 w-full">
        <div className="flex w-full h-fit">
          <div
            onClick={() => openTab("AboutFundraiser")}
            className={`border-b-2 w-[50%] md:w-[250px] text-center h-8 font-[600] cursor-pointer ${
              activeTab === "AboutFundraiser" ? "border-blue-500" : ""
            }`}
          >
            ABOUT FUNDRAISER
          </div>
          <div
            onClick={() => openTab("Updates")}
            className={`border-b-2 w-[50%] md:w-[250px] text-center h-8 font-[600] cursor-pointer ${
              activeTab === "Updates" ? "border-blue-500" : ""
            }`}
          >
            UPDATES
          </div>
        </div>
        <div className="p-10 bg-sky-50 w-full">
          <About activeTab={activeTab} />
          <Updates activeTab={activeTab} />
        </div>
      </div>
    </>
  );
};

export default AboutFundraiser;
