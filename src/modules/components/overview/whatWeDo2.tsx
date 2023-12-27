import Image from "next/image";
import React from "react";

type Props = {};

const WhatWeDo2 = (props: Props) => {
  const icons = [
    {
      src: "/images/community.png",
      alt: "community",
      type: "Community Development",
    },
    {
      src: "/images/islam.png",
      alt: "islam",
      type: "Da'wah Projects",
    },
    {
      src: "/images/love.png",
      alt: "disabled",
      type: "Special Needs",
    },
    {
      src: "/images/education.png",
      alt: "education",
      type: "Education",
    },
    {
      src: "/images/iftar.png",
      alt: "feeding",
      type: "Feeding",
    },
    {
      src: "/images/hospital-bed.png",
      alt: "health",
      type: "Health Care",
    },
    {
      src: "/images/mosque.png",
      alt: "mosque",
      type: "Masjid",
    },
    {
      src: "/images/moslem.png",
      alt: "widow",
      type: "Widows",
    },
    {
      src: "/images/orphan.png",
      alt: "orphans",
      type: "Orphans",
    },
    {
      src: "/images/dollar.png",
      alt: "poverty alleviation",
      type: "Poverty Alleviation",
    },
    {
      src: "/images/shelter.png",
      alt: "shelter",
      type: "Shelter",
    },
  ];
  return (
    <div className="container mb-10">
      <div className="text-center mt-20">
        <p className="font-[400] text-[18px]">What we do</p>
        <p className="font-[400] text-[30px]">
          <span className="font-[700] text-sky-950"> We do it for</span> People
          in need
        </p>
      </div>
      <div className="flex flex-wrap md:w-[800px] w-[90%] mx-auto gap-3 space-y-2 md:gap-12 mt-7 justify-center">
        {icons.map((icon) => (
          <div key={icon.alt} className="w-[120px] flex flex-col items-center">
            <div className="icon relative">
              <Image
                src={icon.src}
                layout="fill"
                objectFit="contain"
                alt={icon.alt}
              />
            </div>
            <p className="mt-2 font-[500] text-center">{icon.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo2;
