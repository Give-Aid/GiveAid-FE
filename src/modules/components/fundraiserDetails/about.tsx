import React from "react";

type Props = {
  activeTab: string;
};

const About = ({ activeTab }: Props) => {
  return (
    <div
      id="AboutFundraiser"
      className={`tabcontent ${
        activeTab === "AboutFundraiser" ? "" : "hidden"
      }`}
    >
      <h3>About Fundraiser</h3>
      <p>Details and information about the fundraiser...</p>
    </div>
  );
};

export default About;
