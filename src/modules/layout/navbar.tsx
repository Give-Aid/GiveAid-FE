import React, { useEffect, useState } from "react";
import Link from "next/link";
import Dropdown from "./dropdown";
import MobileNav from "./mobileNav";
import { Hamburger, DefaultAvatar } from "../icons";
import { usePaymentContext } from "@/context/paymentProvider";
import { Toggle } from "../components";
import { MdDashboard } from "react-icons/md";
import { useRouter } from "next/router";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";

type Props = {};

const Navbar = (props: Props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const { paymentPlan } = usePaymentContext();
  const router = useRouter();
  const { user, isSignedIn, isLoaded } = useUser();
  const userType = user?.unsafeMetadata?.userType;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (showDropDown === false || event.target.closest(".my-dropdown"))
        return;
      setShowDropDown(false);
    };
    const handleClickOutside2 = (event: any) => {
      if (showNav === false || event.target.closest(".my-nav")) return;
      setShowNav(false);
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("click", handleClickOutside2);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("click", handleClickOutside2);
    };
  }, [showDropDown, showNav]);

  const openNav = () => {
    setShowNav(!showNav);
    setShowDropDown(false);
  };

  const goToDashboard = () => {
    router.push(`/app/${userType}`);
  };

  return (
    <>
      <nav className="bg-sky-600 pb-5">
        <div className="nav">
          <Link href="/" className="z-50 mr-5">
            <img
              className="md:w-[300px] w-[160px]"
              src="/images/logowhite.png"
              alt="Give Aid Logo"
            />
          </Link>

          {/*Large Screen*/}
          <div className="hidden gap-6 w-full justify-center items-center md:flex z-50 flex-wrap">
            <div className="flex gap-6">
              <Link href="/about">About</Link>
              <Link href="/howitworks">How It Works</Link>
            </div>
            <div className="flex gap-6">
              <Link href="/organizations">Organizations</Link>
              <Link href="/fundraisers">Fundraisers</Link>
            </div>
            <div className="flex gap-6 font-medium">
              <Link href="/sadaqah-jariyah" className="text-yellow-300 ">
                Sadaqah Jariyah
              </Link>
              <Link href="/urgent-needs" className="text-red-300">
                Urgent Needs!
              </Link>
            </div>
          </div>

          {isLoaded && (
            <div className="flex items-center md:w-[300px] w-[full] space-x-3 justify-end mr-3">
              {isSignedIn ? (
                <div className="gap-3 justify-end flex z-50 items-center">
                  <MdDashboard
                    className="text-[24px] md:text-[28px] cursor-pointer"
                    onClick={goToDashboard}
                  />
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <div className="gap-3 justify-end flex z-50 items-center">
                  <Link href={"/sign-in"}>
                    <button>Sign In</button>
                  </Link>
                  <Link href={"/sign-up"}>
                    <button className="signup">Sign Up</button>
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* <!-- Dropdown menu --> */}
          {showDropDown && <Dropdown />}
          {/* Hamburger */}
          {showNav && <MobileNav />}
        </div>
        <div
          className={`flex ${
            paymentPlan === undefined ? "justify-end" : "justify-between"
          } w-full`}
        >
          {paymentPlan && (
            <div className="ml-4 md:ml-16 mt-4 w-10">
              <Toggle />
            </div>
          )}
          <button
            type="button"
            className="hambuger my-nav mr-5 mt-2"
            onClick={openNav}
          >
            <Hamburger />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
