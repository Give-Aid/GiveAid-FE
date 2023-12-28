import Image from "next/image";
import React from "react";

type Props = {};

const Trustees = (props: Props) => {
  const trustees = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="container mt-20">
      <div className="text-center">
        <p className="font-[400] text-[18px]">Their word counts.</p>
        <p className="font-[700] text-[30px] text-sky-950">
          <span className="font-[400] text-black"> That&apos;s why </span>{" "}
          They Chose Us
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-7 mt-5">
        {trustees.map((trustee) => (
          <div
            key={trustee}
            className="w-[110px] md:w-[150px] flex flex-col items-center gap-2"
          >
            <div className="w-[110px] md:w-[150px] h-[110px] md:h-[150px] rounded-full shadow relative">
              <Image
                src="/images/mufti.jpg"
                alt="trustee"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="font-[500] text-center">Mufti Ismail Menk</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trustees;
