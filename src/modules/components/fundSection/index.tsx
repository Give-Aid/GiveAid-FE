import React from "react";
import FundraisersCard from "./fundraisersCard";
import Link from "next/link";

type Props = {};

const FundraiserSection = (props: Props) => {
  const card = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="container">
      <p className="text-[22px] md:text-[30px] font-[700]">
        Ongoing Fundraisings
      </p>
      <div className="mt-2 flex gap-7 overflow-x-scroll scr md:mx-4 removeScrollBar p-2 md:p-5">
        {card.map((f) => (
          <div key={f}>
            <FundraisersCard />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <Link
          href={"/fundraisers"}
          className="text-gray-600 border border-gray-400 rounded-full px-3 py-1 "
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default FundraiserSection;
