import { QuoteMark } from "@/modules/icons";
import Image from "next/image";
import React from "react";

type QProps = {
  quote: string;
  quoter: string;
  image: string;
};

type Props = {
  quote: QProps;
};

const Quote = ({ quote }: Props) => {
  return (
    <div className="md:w-[600px] w-[90%] mx-auto flex items-center gap-7 border-[3px] border-black rounded-lg shadow-md shadow-sky-950 p-3 sm:p-5 mt-16">
      <blockquote className="text-[14px] sm:text-xl italic font-semibold text-sky-950 w-[70%]">
        <QuoteMark />
        <p className="mb-4 sm:tracking-wide">&quot;{quote.quote}&quot;</p>
        <p>{quote.quoter}</p>
      </blockquote>
      <div className="w-[30%]">
        <div className="w-[100px] md:w-[130px] h-[100px] md:h-[130px] rotate-12 relative">
          <Image
            layout="fill"
            objectFit="contain"
            src={quote.image}
            alt="verse/hadith"
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
