import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer className="footer">
        <div className="w-full max-w-screen-xl mx-auto p-4 sm:p-10">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <Link href="/" className="flex justify-center mb-5">
                <img
                  src="/images/logowhite.png"
                  className="w-[250px]"
                  alt="Give aid"
                />
              </Link>
              <div className="flex gap-5 justify-center h-5 mb-5">
                <a
                  href={
                    "https://web.facebook.com/profile.php?id=61553787283589"
                  }
                >
                  <FaFacebook size={"22px"} />
                </a>
                <a href={"https://www.instagram.com/giveaid_/"}>
                  <FaInstagram size={"22px"} />
                </a>
                <a href={"/"}>
                  <FaLinkedin size={"22px"} />
                </a>
                <a href={"https://twitter.com/giveaid_"}>
                  <FaXTwitter size={"22px"} />
                </a>
              </div>
              <a
                href="mailto:giveaidpa@gmail.com"
                className="font-[300] text-sm flex justify-center hover:underline"
              >
                giveaidpa@gmail.com
              </a>
            </div>
            <div className="my-10">
              <ul className="footer-links">
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/howitworks" className="hover:underline">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/about/#faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/organizations" className="hover:underline">
                    Organizations
                  </Link>
                </li>
              </ul>
              <ul className="footer-links">
                <li>
                  <Link href="/fundraisers" className="hover:underline">
                    Fundraisers
                  </Link>
                </li>
                <li>
                  <Link href="/sadaqah-jariyah" className="hover:underline">
                    Sadaqah Jariyah
                  </Link>
                </li>
                <li>
                  <Link href="urgent-needs" className="hover:underline">
                    Urgent Needs
                  </Link>
                </li>
              </ul>
            </div>
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
            <div>
              © 2023 Give Aid. Focused on both the journey and the destination
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
