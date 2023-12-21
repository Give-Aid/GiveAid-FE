import React from "react";
import Details  from "../details";

type Props = {};

const WhyUs = (props: Props) => {
  const text = [
    {
      title: "Connectivity Gap:",
      details:
        "Address the disconnect between individuals seeking meaningful ways to contribute and established Beneficiary Entities in need of financial support by providing a streamlined platform for collaboration.",
    },
    {
      title: "Trustworthy Partnerships:",
      details:
        "Establish a curated network of Beneficiaries, alleviating concerns about the legitimacy and impact of charitable organizations, thereby fostering trust among donors.",
    },
    {
      title: "Efficiency and Accessibility:",
      details:
        "Streamline the donation process, making it convenient and accessible for individuals from various backgrounds to contribute to causes aligned with their values.",
    },
  ];
  return (
    <div className="container mt-20">
      <p className="text-[30px] md:text-[36px] font-[400] mb-4 text-sky-950 text-center">
        Why Give Aid?
      </p>
      <Details text={text}/>
    </div>
  );
};

export default WhyUs;
