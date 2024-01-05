import {
  Head,
  ImageSlider,
  Share,
  AboutFundraiser,
} from "@/modules/components/fundraiserDetails";
import React from "react";

type Props = {};

const Fundraiser = (props: Props) => {
  const title = "Help Build a School in Rural Kaduna";

  return (
    <div className="container py-[2rem]">
      <Head />
      <div className="flex md:flex-row flex-col mt-10 gap-5 items-end">
        <ImageSlider />
        <Share title={`${title} - Give Aid`} />
      </div>
      <AboutFundraiser />
    </div>
  );
};

export default Fundraiser;
Fundraiser.title = `Donate to ${"fundraisername"} - Give Aid`;
Fundraiser.isAuthPage = false;
Fundraiser.ignoreLayout = false;
