import {
  FundraiserSection,
  HeroSection,
  OrgSection,
  Overview
} from "@/modules/components";
import { Herosvg } from "@/modules/icons";

export default function Home() {
  return (
    <>
      <Herosvg />
      <HeroSection />
      <div className=" pt-[2rem]">
        <FundraiserSection />
        <OrgSection />
        <Overview/>
      </div>
    </>
  );
}

Home.title =
  "Give Aid: Empowering Giving - Donate to Fundraisers & Organizations";
Home.isAuthPage = true;
