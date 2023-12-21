import React from "react";
import { Details } from "@/modules/components";
import {
  TbHexagon1Filled,
  TbHexagon2Filled,
  TbHexagon3Filled,
} from "react-icons/tb";

type Props = {};

const Registration = (props: Props) => {
  const registerOrganization = [
    {
      title: "Registering as an Organization:",
      details: (
        <div>
          Click on the <a className="text-sky-500 underline" href="#">Register Organization</a> link prominently displayed on our
          platform&apos;s pages.
        </div>
      ),
      icon: <TbHexagon1Filled />,
    },
    {
      title: "Providing Required Information:",
      details: (
        <div>
          Fill in the necessary data about your organization, including mission
          details, contact information, and legal status. Upload any essential
          documents as requested.
        </div>
      ),
      icon: <TbHexagon2Filled />,
    },
    {
      title: "Verification and Approval:",
      details: (
        <div>
          Sit back and relax! Our team will review the submitted information and
          documents. Once verified and approved, your organization will be
          successfully registered on our platform to start receiving support.
        </div>
      ),
      icon: <TbHexagon3Filled />,
    },
  ];
  const createFundraiser = [
    {
      title: "Initiating a Fundraiser:",
      details: (
        <div>
          When your organization has been approved, Click on the <a className="text-sky-500 underline" href="#">Create Fundraiser</a> link on your dashboard to kick-start your fundraising
          campaign. Non-Organizatins are also welcome to create fundraisers by
          Clicking on the <a className="text-sky-500 underline" href="#">Create Fundraiser</a> link, And you&apos;ll be required to
          provide convincing evidence and necessary documents where necessary.
        </div>
      ),
      icon: <TbHexagon1Filled />,
    },
    {
      title: "Completing Campaign Details:",
      details: (
        <div>
          Provide compelling information about your cause or initiative, set
          fundraising goals, and outline how the funds will be utilized. Upload
          any necessary supporting visuals or documents.
        </div>
      ),
      icon: <TbHexagon2Filled />,
    },
    {
      title: "Verification and Activation:",
      details: (
        <div>
          After submission, our team will review your campaign details. Once
          validated, your fundraiser will be activated, allowing you to start
          raising funds for your cause within the specified campaign duration.
        </div>
      ),
      icon: <TbHexagon3Filled />,
    },
  ];

  return (
    <div className="container">
      <h2 className="font-[500] text-sky-950 text-[20px]">How It Works</h2>
      <h2 className="font-[500] text-gradient from-sky-300 to-sky-700 text-[20px]">
        Bismillah
      </h2>

      <p className="text-[30px] md:text-[34px] font-[700] mt-10 text-sky-950 text-center">
        Registering as an Organization
        <span className="font-[300]">
          {" "}
          and Creating Campaigns are 100% FREE
        </span>
      </p>
      <div className="mt-5">
        <Details text={registerOrganization} />
      </div>
      <div className="mt-10">
        <p className="text-[24px] md:text-[28px] font-[300] mt-10 text-sky-950 text-center">
          For Creating
          <span className="font-[700]"> Fundraising Campaigns</span>
        </p>
        <div className="mt-5">
          <Details text={createFundraiser} />
        </div>
      </div>
    </div>
  );
};

export default Registration;
