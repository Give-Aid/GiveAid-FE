import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {};

const MobileNav = (props: Props) => {

  const pages = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "How It Works", link: "/howitworks" },
    { title: "Organizations", link: "/organizations" },
    { title: "Fundraisers", link: "/fundraisers" },
  ];

  const router = useRouter();
  const isRouteActive = (route: string) => route === router.pathname;


  return (
    <div className="navdropdown">
      <ul className="navdropdown-ul">
        {pages.map((page) => (
          <li key={page.title}>
            <Link
              href={page.link}
              className={`navdropdown-li  ${
                isRouteActive(page.link) ? "text-sky-500" : "text-sky-950"
              } `}
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
