import {
  SearchBar,
  Filter,
  FundraisersCard,
  Info,
  Quote,
  PaymentBar,
} from "@/modules/components";
import { usePaymentContext } from "@/context/paymentProvider";
import React from "react";

type Props = {};

const UrgentNeeds = (props: Props) => {
  const beneficiaries = [
    {
      id: 1,
      name: "Give Aid Foundation",
    },
    {
      id: 2,
      name: "Feed The Nation",
    },
    {
      id: 3,
      name: "Provide Clothes This Harmattan",
    },
    {
      id: 4,
      name: "Make An Orphan Smile",
    },
    {
      id: 5,
      name: "Build Mosques in Rural Areas",
    },
    {
      id: 6,
      name: "Wells For The Community",
    },
    {
      id: 7,
      name: "Active Da'wah to Neighboring Villages",
    },
    {
      id: 8,
      name: "Fund a Sick Person's Treatment ",
    },
    {
      id: 9,
      name: "Salaam Foundation",
    },
  ];
  const { selectedFundraisers, removeFundraiser, removeAllFundraisers } =
    usePaymentContext();
  const quote = {
    quote:
      "Anyone who relieves a hardship for a believer in this world, ALLAH will relieve one of his hardships on the Day of Resurrection...",
    quoter: "- Prophet Muhammad (SAW) [Muslim]",
    image: "/images/pbuh.png",
  };
  return (
    <div className="container py-[2rem]">
      <div className="flex justify-center">
        <SearchBar />
      </div>
      <div className="flex flex-col md:flex-row gap-3 mt-5">
        <Filter type={"fundraiser"} />
        <div className="md:w-full">
          <h2 className="text-[26px] md:text-[30px] font-[700] text-gradient from-red-400 to-red-600">
            Support Critical Urgencies
          </h2>
          <Info />
          <div className="mt-5 ml-8 sm:ml-0 flex flex-wrap justify-start gap-4">
            {beneficiaries.map((b) => (
              <div key={b.id}>
                <FundraisersCard type="urgent" beneficiary={b} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedFundraisers.length > 0 && (
        <PaymentBar
          type={"Fundraisers"}
          beneficiaries={selectedFundraisers}
          removeBeneficiary={removeFundraiser}
          removeAllBeneficiaries={removeAllFundraisers}
        />
      )}
      <Quote quote={quote} />
    </div>
  );
};

export default UrgentNeeds;
UrgentNeeds.title = "Give Aid: Support Critical Urgencies Today";
UrgentNeeds.isAuthPage = false;
