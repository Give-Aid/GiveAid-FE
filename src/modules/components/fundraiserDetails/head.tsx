import React from "react";
import { Duration } from "@/modules/icons";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { FcInfo } from "react-icons/fc";
import Link from "next/link";
import { CopyText } from "..";

type Props = {};

const Head = (props: Props) => {
  const { isSignedIn } = useUser();
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
        <div className="py-10 px-8 text-sky-950 w-full md:w-[35%] flex flex-col justify-between gap-12 bg-gradient-to-b from-sky-100 to-sky-200">
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
            {isSignedIn ? (
              <>
                <p className="flex gap-1">
                  Account Number: <CopyText text="0123456789"/>
                </p>
                <p>
                  Account Name:{" "}
                  <span className="font-[600]">Give Aid Foundation</span>
                </p>
                <p>
                  Bank Name: <span className="font-[600]">UBA</span>
                </p>
              </>
            ) : (
              <>
                <Link href={'/sign-up'}><button className="blue-btn mt-2 w-full">View Bank Details</button></Link>
                <div className="flex items-center gap-2 text-[12px] mb-3">
                  <FcInfo className="text-[30px]"/>{" "}
                  <p>
                  To View Details, Please take a Second to Sign up/Sign In with Give Aid. Join us and Be a part of our story. Shukran!
                  </p>
                </div>
              </>
            )}
            <button className="blue-btn mt-2">Use card to donate</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
