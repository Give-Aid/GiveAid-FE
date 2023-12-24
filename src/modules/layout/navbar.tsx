import React, { useEffect, useState } from "react";
import Link from "next/link";
import Dropdown from "./dropdown";
import MobileNav from "./mobileNav";
import { Hamburger, DefaultAvatar } from "../icons";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const handleClickOutside = (event: any) => {
    if (showDropDown === false || event.target.closest(".my-dropdown")) return;
    setShowDropDown(false);
  };

  const handleClickOutside2 = (event: any) => {
    if (showNav === false || event.target.closest(".my-nav")) return;
    setShowNav(false);
  };

  useEffect(() => {
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
  const openDropDown = () => {
    setShowNav(false);
    setShowDropDown(!showDropDown);
  };

  return (
    <>
      <nav className="bg-sky-600 pb-5">
        <div className="nav">
          <Link href="/" className="z-50">
            <div className="md:w-[250px] w-[150px] h-[50px] relative">
              <img
                className="md:w-[250px] w-[150px] h-[50px] object-contain"
                src="/images/logowhite.png"
                alt="Give Aid Logo"
              />
            </div>
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
              <Link href="/sadaqah-jariyah" className="text-yellow-300 ">Sadaqah Jariyah</Link>
              <Link href="/urgent-needs" className="text-red-300">Urgent Needs!</Link>
            </div>
          </div>

          <div className="flex items-center md:w-[350px] w-[full] space-x-3 justify-end mr-3">
            {isUser ? (
              <button
                type="button"
                className="avatar my-dropdown"
                onClick={openDropDown}
              >
                {/* <img
                className="w-7 h-7 rounded-full"
                src="/images/icont.png"
                alt="user photo"
              /> */}

                <div className="default-avatar">
                  <DefaultAvatar />
                </div>
              </button>
            ) : (
              <div className="gap-3 justify-end flex z-50">
                <button>Sign In</button>
                <button className="signup">Sign Up</button>
              </div>
            )}

            {/* Mobile */}
          </div>

          {/* <!-- Dropdown menu --> */}
          {showDropDown && <Dropdown />}
          {/* Hamburger */}
          {showNav && <MobileNav />}
        </div>
        <div className="flex justify-end w-full">
          <button type="button" className="hambuger my-nav mr-4" onClick={openNav}>
            <Hamburger />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
