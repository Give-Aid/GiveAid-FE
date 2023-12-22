import {
  Registration,
  Vetting,
  PaymentProcess,
  Quote,
} from "@/modules/components";

type Props = {};

const HowItWorks = (props: Props) => {
  const quote = {
    quote:
      "Give the Sadaqah without delay, for it stands in the way of calamity",
    quoter: "- Prophet Muhammad (SAW) [Tirmidhi]",
    image: "/images/pbuh.png",
  };
  return (
    <div className="py-[3rem]">
      <Registration />
      <Vetting />
      <PaymentProcess />
      <Quote quote={quote} />
    </div>
  );
};

export default HowItWorks;
HowItWorks.title = "Give Aid: How the Platform Works";
HowItWorks.isAuthPage = false;
