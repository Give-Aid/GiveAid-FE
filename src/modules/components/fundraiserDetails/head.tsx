import React from "react";
import { Duration } from "@/modules/icons";
import Image from "next/image";

type Props = {};

const Head = (props: Props) => {
  return (
    <>
      <div className="details-heading">
        <div className="rounded-full w-10 h-10 relative">
          <Image
            src="/images/icont.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
        <p className="details-title">
          Give Aid To Homeless People Around in the rural districts
        </p>
      </div>

      <div className="fundraiser-details-card">
        <img
          className="fundraiser-details-image"
          src="/images/almajiri.jpg"
          alt="verse/hadith"
        />
        <div className="py-10 px-16 md:px-8 text-sky-950 w-full md:w-[35%] flex flex-col justify-between gap-12 bg-gradient-to-b from-sky-100 to-sky-200">
          <div className="rounded-full w-14 h-14 mx-auto relative">
            <Image
              src="/images/icont.png"
              alt="logo"
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <p className="text-[30px] font-medium">&#8358;150000</p>
            <p className="text-gray-400">received of &#8358;350000</p>
            <div className="fundraiser-card-progress-g">
              <div className="fundraiser-card-progress-b"></div>
            </div>
            <div className="fundraiser-card-duration justify-center">
              {" "}
              <Duration /> 30 days left
            </div>
          </div>
          <div className="grid gap-1">
            <p>
              Organizer: <span className="font-[600]">Give Aid</span>
            </p>
            <p>
              Account Number: <span className="font-[600]">0123456789</span>
            </p>
            <p>
              Account Name:{" "}
              <span className="font-[600]">Give Aid Foundation</span>
            </p>
            <p>
              Bank Name: <span className="font-[600]">UBA</span>
            </p>
            <button className="blue-btn mt-2">Use card to donate</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
