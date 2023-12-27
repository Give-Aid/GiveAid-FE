import Image from "next/image";
import React from "react";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row container gap-14">
      <div className="w-[100%] md:w-[60%]">
        <h2 className="font-[500] text-sky-950 text-[20px]">About us</h2>
        <h2 className="font-[500] text-gradient from-sky-300 to-sky-700 text-[20px]">
          Assalamu Alaikum
        </h2>
        <p className="text-[30px] md:text-[36px] font-[700] my-4 text-sky-950">
          Help is Our <span className="font-[300]">Main Goal</span>
        </p>
        <p className="font-[500]">
          Our Platform serves as a dynamic bridge between the generosity of
          individuals and the impactful initiatives of reputable Beneficiary
          Entities within the Ummah. We facilitate seamless connections,
          allowing users to make charitable contributions with purpose and ease.
        </p>

        <div className="w-[300px] md:w-[400px] h-[280px] md:h-[350px] mx-auto mt-10 relative">
          <Image
            layout="fill"
            objectFit="contain"
            src="/images/circle.png"
            alt="donate"
          />
        </div>
      </div>
      <div className="w-[100%] md:w-[40%]">
        <h2 className="text-[30px] md:text-[36px] font-[700] mb-4 md:mb-10 text-sky-950">
          Our Vision & Mission
        </h2>
        <div>
          <div className="mb-5 md:mb-10">
            <p className="p-2 mb-3  rounded shadow text-white font-[500] text-[20px] w-fit bg-sky-400">
              Our Vision
            </p>
            <p>
              Envisioning for a future where the spirit of giving transforms
              lives, fostering a world where every individual finds it easy to
              contribute support to the less privileged and earn eternal rewards
              beyond measure.
            </p>
          </div>
          <div>
            <p className="p-2 mb-3 rounded shadow text-white bg-sky-500 font-[500] text-[20px] w-fit">
              Our Mission
            </p>
            <p>
              {" "}
              Our mission is to provide a platform where generosity knows no
              boundaries, connecting those with the means to make a difference
              with organizations dedicated to positive change, creating a world
              where every act of giving transforms lives.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
