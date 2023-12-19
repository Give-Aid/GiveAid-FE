import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTag } from "react-icons/fa";

type Props = {};

const OrgCard = (props: Props) => {
  const causes = ["orphans", "Feeding", "Clothe", "Sadaqah jaryah"];
  return (
    <div className="card h-[280px] md:h-[330px] justify-center items-center gap-1">
      <div className="w-[140px] h-[140px] flex justify-center items-center bg-sky-100 rounded-full">
        <div className="w-[100px] h-[100px] rounded-full relative">
          <Image
            layout="fill"
            objectFit="contain"
            src="/images/icont.png"
            alt="organization"
          />
        </div>
      </div>
      <Link href={'/'} className="mb-1 text-[18px] md:text-[20px] font-bold text-sky-950">
        Give Aid Foundation
      </Link>
      <div className="w-[93%] flex mb-2 items-center gap-3">
        <FaTag className="text-sky-950 text-[20px]" />
        <div className=" flex gap-1 overflow-x-auto removeScrollBar">
          {causes.map((cause) => (
            <p key={cause} className="tag">
              {cause}
            </p>
          ))}
        </div>
      </div>

      <button className="blue-btn">Donate</button>
    </div>
  );
};

export default OrgCard;
