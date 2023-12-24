import React from "react";
import OrgCard from "./orgCard";
import Link from "next/link";

type Props = {};

const OrgSection = (props: Props) => {
  const beneficiaries = [
    {
      id: 1,
      name: "Give Aid Foundation",
    },
    {
      id: 2,
      name: "Feed The Nation",
    },
    {
      id: 3,
      name: "Provide Clothes This Harmattan",
    },
    {
      id: 4,
      name: "Make An Orphan Smile",
    },
    {
      id: 5,
      name: "Build Mosques in Rural Areas",
    },
    {
      id: 6,
      name: "Wells For The Community",
    },
    {
      id: 7,
      name: "Active Da'wah to Neighboring Villages",
    },
    {
      id: 8,
      name: "Fund a Sick Person's Treatment ",
    },
    {
      id: 9,
      name: "Salaam Foundation",
    },
  ];
  return (
    <div className="mt-10 container">
      <p className="text-[22px] md:text-[30px] font-[700]">Organization</p>
      <div className="mt-2 flex gap-6 overflow-x-scroll scr md:mx-4 removeScrollBar p-2 md:p-5">
        {beneficiaries.map((b) => (
          <div key={b.id}>
            <OrgCard beneficiary={b}/>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <Link
          href={"/organizations"}
          className="text-gray-600 border border-gray-400 rounded-full px-3 py-1 "
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default OrgSection;
