import { Duration } from "@/modules/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tooltip from "../tooltip";
import { FaTag } from "react-icons/fa";

type Props = {};

const FundraisersCard = (props: Props) => {
  const causes = ["orphans", "Feeding", "Clothe", "Sadaqah jaryah"];
  const textMaxLength = 100;
  const text =
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.";

  return (
    <div className="card h-[480px] md:h-[530px]">
      <Link href={"/#"}>
        <div className="fundraiser-card-Image">
          <Image
            layout="fill"
            objectFit="cover"
            src="/images/giveaid.png"
            alt="fundraiser"
          />
        </div>
      </Link>

      <div className="flex gap-3 items-center h-10 px-2 md:px-3">
        <div className="relative h-6 w-6  border border-sky-200 rounded-full">
          <Image
            layout="fill"
            objectFit="cover"
            src="/images/icont.png"
            alt="fundraiser logo"
          />
        </div>
        <div className="font-[400] text-[14px] font-inter">
          Give Aid Foundation
        </div>
      </div>

      <div className="tags">
        <FaTag className="text-sky-950 text-[20px]" />
        <div className=" flex gap-1 overflow-x-auto removeScrollBar">
          {causes.map((cause) => (
            <p key={cause} className="tag">
              {cause}
            </p>
          ))}
        </div>
      </div>

      <div className="px-2 md:px-3 h-[110px] md:h-[130px]">
        <Link href={"/#"}>
          <p className="mb-1 text-[16px] md:text-[18px] font-bold tracking-tight text-sky-950">
            Noteworthy technology acquisitions 2021
          </p>
        </Link>
        <p className="my-1 text-[12px] md:text-[14px] font-normal text-gray-700">
          {text.length > textMaxLength
            ? `${text.slice(0, textMaxLength)}...`
            : text}
        </p>
      </div>

      <div className="h-[80px] md:h-[100px] px-2 md:px-3">
        <div className="fundraiser-card-duration">
          {" "}
          <Duration /> 30 days left
        </div>
        <div className="fundraiser-card-progress-g">
          <div className="fundraiser-card-progress-b"></div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-[600] text-[16px] md:text-[18px]">N50000</p>
            <p className="font-[400] text-[11px] md:text-[13px] text-gray-400">
              funded of N1,000,000
            </p>
          </div>
          <div>
            <button className="blue-btn">Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraisersCard;
