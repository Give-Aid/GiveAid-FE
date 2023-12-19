import { AboutUs, WhyUs, PainPoints, Quote } from "@/modules/components";
import React from "react";

type Props = {};

const About = (props: Props) => {
  const quotes = [
    {
      quote:
        "Do not show lethargy or negligience in giving alms and charity till your last breath.",
      quoter: "- Prophet Muhammad (SAW) [Bukhari & Muslim]",
      image: "/images/pbuh.png",
    },
  ];
  return (
    <div className="py-[3rem]">
      <AboutUs />
      <WhyUs />
      <PainPoints />
      <div className="container font-[500] italic text-center mt-10 text-[18px]">
        <p>
          In essence, our platform serves as a catalyst for positive change
          within the Ummah, providing a reliable and accessible avenue for
          individuals to contribute to impactful projects and earn eternal
          rewards through their benevolence.
        </p>
        <button className="blue-btn mt-10">Donate to a Charitable Cause</button>
      </div>
      <Quote quote={quotes[0]} />
    </div>
  );
};

export default About;
About.title = "About Give Aid: Empowering Giving - Donate to Fundraisers & Organizations";
About.isAuthPage = false;
