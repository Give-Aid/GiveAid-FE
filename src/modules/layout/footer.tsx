import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer className="footer">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:p-10">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <Link href="/" className="flex justify-center mb-5">
                <img
                  src="/images/logowhite.png"
                  className="w-[250px]"
                  alt="Flowbite Logo"
                />
              </Link>
              <div className="flex gap-3 justify-center h-5 mb-5">
                <a href={"/"}>
                  <FaFacebook size={"20px"} />
                </a>
                <a href={"/"}>
                  <FaInstagram size={"20px"} />
                </a>
                <a href={"/"}>
                  <FaLinkedin size={"20px"} />
                </a>
                <a href={"/"}>
                  <FaXTwitter size={"20px"} />
                </a>
              </div>
              <a
                href="mailto:giveaidpa@gmail.com"
                className="font-[300] text-sm flex justify-center hover:underline"
              >
                giveaidpa@gmail.com
              </a>
            </div>
            <ul className="footer-links">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Organizations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Fundraisers
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <div className="flex gap-3 justify-center">
              <Link href={"/"} className="hover:underline">
                Terms of Use
              </Link>
              |
              <Link href={"/"} className="hover:underline">
                Privacy Policy
              </Link>
            </div>
            <div>© 2023 Give Aid. Built in this life for the next.</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
