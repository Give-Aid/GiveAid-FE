import React from "react";

type Props = {};

const WhyUs = (props: Props) => {
  return (
    <div className="container mt-20">
      <p className="text-[30px] md:text-[36px] font-[400] mb-4 text-sky-950 text-center">
        Why Give Aid?
      </p>
      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-7 text-center'>
        <div className="pt-4 pb-8">
          <p className="text-[18px] font-bold mb-1">Connectivity Gap:</p>
          <p>
            Address the disconnect between individuals seeking meaningful ways
            to contribute and established Beneficiary Entities in need of
            financial support by providing a streamlined platform for
            collaboration.
          </p>
        </div>
        <div className="pt-4 pb-8">
          <p className="text-[18px] font-bold mb-1">
            Trustworthy Partnerships:
          </p>
          <p>
            Establish a curated network of Beneficiaries, alleviating concerns
            about the legitimacy and impact of charitable organizations, thereby
            fostering trust among donors.
          </p>
        </div>
        <div className="pt-4 pb-8">
          <p className=" text-[18px] font-bold mb-1">
            Efficiency and Accessibility:
          </p>
          <p>
            Streamline the donation process, making it convenient and accessible
            for individuals from various backgrounds to contribute to causes
            aligned with their values.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
