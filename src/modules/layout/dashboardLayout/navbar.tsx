import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { FaHome } from "react-icons/fa";
import { SetStateAction } from "react";
import { Hamburger } from "@/modules/icons";

type Props = {
  setDrawer: (arg: boolean) => void;
};

const Navbar = ({setDrawer}: Props) => {
  return (
    <nav className="border-b border-gray-200 p-5">
      <div className="flex items-center justify-between container">
        <Link href="/">
          <img
            className="w-[160px]"
            src="/images/logo.png"
            alt="Give Aid Logo"
          />
        </Link>
        <div className="flex items-center gap-5">
          <Link href={"/"}>
            <FaHome className="text-[28px] cursor-pointer text-sky-950" />
          </Link>
          <UserButton />
        </div>
      </div>
      <div className="flex justify-end md:hidden mr-5 mt-2">
        <div className="cursor-pointer" onClick={()=>setDrawer(true)}>
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
