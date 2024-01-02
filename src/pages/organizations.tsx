import { usePaymentContext } from "@/context/paymentProvider";
import {
  SearchBar,
  Filter,
  OrgCard,
  PaymentBar,
  Info,
} from "@/modules/components";

import React from "react";

type Props = {};

const Organizations = (props: Props) => {
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

  const { selectedOrganizations, removeOrganization, removeAllOrganizations } =
    usePaymentContext();

  return (
    <div className="container py-[2rem]">
      <div className="flex justify-center">
        <SearchBar />
      </div>
      <div className="flex flex-col md:flex-row gap-3 mt-5">
        <Filter type={"organization"} />
        <div className="md:w-full">
          <h2 className="text-[26px] md:text-[30px] font-[700]">
            All Organizations
          </h2>
          <Info />
          <div className="mt-5 ml-8 sm:ml-0 flex flex-wrap justify-start gap-4">
            {beneficiaries.map((b) => (
              <div key={b.id}>
                <OrgCard beneficiary={b} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedOrganizations.length > 0 && (
        <PaymentBar
          type={"Organizations"}
          beneficiaries={selectedOrganizations}
          removeBeneficiary={removeOrganization}
          removeAllBeneficiaries={removeAllOrganizations}
        />
      )}
    </div>
  );
};

export default Organizations;
Organizations.title = "Give Aid: Donate to Organizations with us";
Organizations.isAuthPage = false;
Organizations.ignoreLayout = false;