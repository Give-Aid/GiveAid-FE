import { useUser } from "@clerk/nextjs";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  FaCheckCircle,
  FaRegBell,
  FaHandHoldingUsd,
  FaEdit,
} from "react-icons/fa";
import {
  IoIosTimer,
  IoMdAnalytics,
  IoIosCheckmarkCircle,
  IoMdClose,
} from "react-icons/io";
import { IoTimer } from "react-icons/io5";
import Link from "next/link";

type Props = {
  drawer: boolean;
  setDrawer: (arg: boolean) => void;
};

type UserType = "admin" | "donor" | "fundraiser" | "organization";

const Sidebar = ({ drawer, setDrawer }: Props) => {
  const [isVerified, setIsVerified] = useState(false);
  const [userType, setUserType] = useState<UserType>();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const userType = user?.unsafeMetadata.userType;
    setUserType(userType as UserType);
  }, []);

  const dashboardLinks: Record<
    UserType,
    { label: string; url: string; icon: ReactNode }[]
  > = {
    admin: [
      { label: "Home", url: "/app/admin", icon: <IoMdAnalytics /> },
      { label: "Pending", url: "/app/admin/pending", icon: <IoTimer /> },
      {
        label: "Approved",
        url: "/app/admin/approved",
        icon: <IoIosCheckmarkCircle />,
      },
    ],
    donor: [
      { label: "Home", url: "/app/donor", icon: <IoMdAnalytics /> },
      {
        label: "Subscriptions",
        url: "/app/donor/subscriptions",
        icon: <FaRegBell />,
      },
      {
        label: "Edit profile",
        url: "/app/donor/edit-profile",
        icon: <FaEdit />,
      },
    ],
    organization: [
      { label: "Home", url: "/app/organization", icon: <IoMdAnalytics /> },
      {
        label: "Fundraisers",
        url: "/app/organization/fundraisers",
        icon: <FaHandHoldingUsd />,
      },
      {
        label: "Edit profile",
        url: "/app/organization/edit-profile",
        icon: <FaEdit />,
      },
    ],
    fundraiser: [
      { label: "Home", url: "/app/fundraiser", icon: <IoMdAnalytics /> },
      {
        label: "Fundraisers",
        url: "/app/fundraiser/fundraisers",
        icon: <FaHandHoldingUsd />,
      },
      {
        label: "Edit profile",
        url: "/app/fundraiser/edit-profile",
        icon: <FaEdit />,
      },
    ],
  };
  const isActiveLink = (url: string) => router.pathname === url;
  const nonBeneficiary: boolean = userType === "donor" || userType === "admin";

  return (
    <div
      className={`side-bar sidebar-drawer ${
        drawer ? "translate-x" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <IoMdClose className="close-drawer" onClick={() => setDrawer(false)} />
      <div className="relative md:mt-5 mt-20 w-[100px] mx-auto">
        <img
          src={user?.imageUrl}
          alt=""
          className="w-[100px] h-[100px] rounded-full"
        />
        {!nonBeneficiary && (
          <div className="absolute right-[-40px] bottom-[-3px]">
            {isVerified ? (
              <span className="p-badge">
                <FaCheckCircle /> Verified
              </span>
            ) : (
              <span className="y-badge">
                <IoIosTimer /> Pending
              </span>
            )}
          </div>
        )}
      </div>

      <ul className="mt-20 md:w-full w-[250px] mx-auto">
        {userType &&
          dashboardLinks[userType].map((link, index) => (
            <li key={index} onClick={() => setDrawer(false)}>
              <Link
                href={link.url}
                className={`sidebar-link ${
                  isActiveLink(link.url)
                    ? "bg-[#6C47FF] text-white"
                    : "text-black"
                }`}
              >
                <span className="text-[22px]">{link.icon}</span>
                {link.label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
