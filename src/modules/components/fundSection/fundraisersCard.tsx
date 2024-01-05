import { Duration } from "@/modules/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTag } from "react-icons/fa";
import { useRouter } from "next/router";
import { usePaymentContext } from "@/context/paymentProvider";
import { Beneficiary } from "@/utils/types";

type Props = {
  type: "normal" | "sadaqah" | "urgent";
  beneficiary: Beneficiary;
};

const FundraisersCard = ({ type, beneficiary }: Props) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const { removeFundraiser, addFundraiser, selectedFundraisers } =
    usePaymentContext();

  const getBg = () => {
    if (type === "sadaqah") {
      return "border-yellow-300";
    } else if (type === "urgent") {
      return "border-red-300";
    } else {
      return "hover:border-sky-500";
    }
  };
  const bg = getBg();
  const causes = ["orphans", "Feeding", "Clothe", "Sadaqah jaryah"];
  const textMaxLength = 100;
  const text =
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.";

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      // const fundraiserDetail = {
      //   id: 1,
      //   name: "hello",
      // };
      addFundraiser(beneficiary);
    } else {
      removeFundraiser(beneficiary.id);
    }
  };

  // console.log(selectedFundraisers)

  return (
    <div className={`card ${bg} h-[480px] md:h-[530px]`}>
      <input
        type="checkbox"
        className={`w-6 h-6 absolute top-2 right-2 z-10 ${isHome && "hidden"}`}
        onChange={(e) => handleCheckboxChange(e.target.checked)}
        checked={selectedFundraisers.some((f) => f.id === beneficiary?.id)}
      />

      <div className="fundraiser-card-Image">
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/giveaid.png"
          alt="fundraiser"
        />
      </div>

      <div className="flex gap-2 items-center h-10 px-2 md:px-3">
        <div className="relative h-6 w-6  border border-sky-200 rounded-full">
          <Image
            layout="fill"
            objectFit="cover"
            src="/images/icont.png"
            alt="fundraiser logo"
          />
        </div>
        <div className="font-[400] text-[14px] font-inter w-[200px] whitespace-nowrap overflow-auto removeScrollBar">
          {beneficiary?.name}
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
            {beneficiary?.name}
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
          <Link href={"/fundraisers/id"}>
            <button className="blue-btn">Donate</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FundraisersCard;
