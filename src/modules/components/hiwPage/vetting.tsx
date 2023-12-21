import React from "react";
import { Details } from "@/modules/components";

type Props = {};

const Vetting = (props: Props) => {
  const vettingProcess = [
    {
      title: "Vetting Criteria:",
      details: (
        <div>
          Entities must provide extensive details, including mission alignment,
          impact assessment, legal status, references, and community engagement,
          these form the basis of our evaluation process.
        </div>
      ),
      icon: <img src="images/checklist.png" alt="vetting" className="icon" />,
    },
    {
      title: "Documentation Review:",
      details: (
        <div>
          Review of all documentation provided, such as financial statements,
          legal registrations, and certificates to confirm the organization&apos;s
          legal status as a charitable entity.
        </div>
      ),
      icon: <img src="images/document.png" alt="vetting" className="icon" />,
    },
    {
      title: "Background Checks",
      details: (
        <div>
          For entities and key individuals involved, we conduct background
          checks as an integral part of our process. This includes verification
          of identity and professional history.
        </div>
      ),
      icon: <img src="images/register.png" alt="vetting" className="icon" />,
    },
    {
      title: "On-site Assessment",
      details: (
        <div>
          As part of our thorough vetting process, whenever possible our team
          conducts physical visits to beneficiary entities&apos; addresses to
          validate their existence, assess their operational setup, and engage
          in interviews or discussions with the organization&apos;s leadership.
        </div>
      ),
      icon: (
        <img src="images/organization1.png" alt="vetting" className="icon" />
      ),
    },
    {
      title: "Website and Social Media Verification",
      details: (
        <div>
          We utilize online platforms, including websites and social media
          channels, to further validate the entity&apos;s history of activities,
          community engagement, and consistency with the provided information.
          We check online platforms for reviews or feedback from individuals or
          communities who have interacted with or benefited from the entity&apos;s
          services.
        </div>
      ),
      icon: (
        <img src="images/social-media.png" alt="vetting" className="icon" />
      ),
    },
    {
      title: "Continuous Monitoring",
      details: (
        <div>
          Post-onboarding, beneficiary entities are continually monitored to
          maintain their commitment to transparency and effectiveness.
        </div>
      ),
      icon: <img src="images/cctv-camera.png" alt="vetting" className="icon" />,
    },
  ];

  return (
    <div className="mt-5 bg-sky-100 py-5">
      <div className="container">
        <p className="text-[24px] md:text-[28px] font-[300] mt-10 text-sky-950 text-center">
          Vetting
          <span className="font-[700]"> Process</span>
        </p>
        <Details text={vettingProcess} />
        <div className="pt-10 pb-8 text-center ">
          <p className="text-[18px] font-bold mb-1 italic">
            Detailed Profiles for Donors
          </p>
          <p>
            Each beneficiary entity showcased on our platform has a
            comprehensive profile outlining their mission, impact, and
            operational details, allowing for informed giving decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vetting;
