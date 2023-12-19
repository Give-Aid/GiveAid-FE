import Link from "next/link";
import React from "react";

type Props = {};

const HowItWorks = (props: Props) => {
  const icons = [
    {
      src: "/images/organization.png",
      alt: "organization",
      type: "Registering Oraganizations",
    },
    {
      src: "/images/charity.png",
      alt: "fundraiser",
      type: "Creating Fundraisers",
    },
    {
      src: "/images/register.png",
      alt: "vetting",
      type: "How We Vet Beneficiaries",
    },
    {
      src: "/images/shield.png",
      alt: "Payment",
      type: "Our Secure Payment Process",
    },
  ];
  return (
    <div className="bg-sky-100 py-10 mt-10 ">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="md:w-[50%] w-[90%]" >
            <p className="font-[400] text-[18px] mb-1 underline"><Link href={"/howitworks"}>How It Works</Link></p>
            <p className="font-[500] text-[20px] mb-5">
              Unveil the effortless pathway to making a difference with Give Aid.
              Our{" "}
              <span className="text-sky-800">
                <Link href={"/howitworks"}>How it works page</Link>{" "}
              </span>{" "}
              guides you through the easy steps of:
            </p>
          </div>
          <div className="grid grid-cols-2 md:w-[50%] w-[90%] mx-auto gap-3 md:gap-6 ">
            {icons.map((icon) => (
              <div
                key={icon.alt}
                className="flex flex-col items-center bg-sky-950 text-white p-4 shadow rounded"
              >
                <img
                  src={icon.src}
                  className="w-[70px] md:w-[110px] h-[70px] md:h-[110px]"
                  alt={icon.alt}
                />
                <p className="mt-2 font-[500] text-center">{icon.type}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="font-[500] text-[20px] mt-5 text-center italic">We ensure that every action you take directly impacts lives!</p>
      </div>
    </div>
  );
};

export default HowItWorks;
