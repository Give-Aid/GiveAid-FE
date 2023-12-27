import { AboutUs, WhyUs, PainPoints, Quote,Faq } from "@/modules/components";
import React from "react";

type Props = {};

const About = (props: Props) => {
  const quotes = [
    {
      quote:
        "Guard yourselves against the Fire (of Hell) even if it be only with half a date-fruit (given in charity).",
      quoter: "- Prophet Muhammad (SAW) [Bukhari]",
      image: "/images/pbuh.png",
    },
  ];
  return (
    <div className="py-[3rem]">
      <AboutUs />
      <WhyUs />
      <PainPoints />
      <div className="font-[500] mt-20 text-[18px]">
        <p className="italic text-center container">
          In essence, our platform serves as a catalyst for positive change
          within the Ummah, providing a reliable and accessible avenue for
          individuals to contribute to impactful projects and earn eternal
          rewards through their benevolence.
        </p>
        <div className="h-[500px] md:h-[100vh] w-[100%] mt-20 relative  max-w-screen-2xl">
          <img
            src="/images/almajiri.jpg"
            className="object-cover object-center w-full h-full absolute inset-0"
            alt="almajiri"
          />
          <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-transparent to-black/80 p-4 md:p-10">
            <p className="text-white text-[22px] md:text-[26px] md:w-[50%]">Every ripple creates a wave. Your generosity can change their world, no matter how small.</p>
            <button className="white-btn mt-2 text-black block">Transfrom Lives</button>
          </div>
        </div>
      </div>
      <Quote quote={quotes[0]} />
      <Faq/>
    </div>
  );
};

export default About;
About.title =
  "About Give Aid: Empowering Giving - Donate to Fundraisers & Organizations";
About.isAuthPage = false;
