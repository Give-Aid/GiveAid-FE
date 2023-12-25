import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTag } from "react-icons/fa";
import { useRouter } from "next/router";
import { usePaymentContext } from "@/context/paymentProvider";
import { Beneficiary } from "@/utils/types";

type Props = {
  beneficiary: Beneficiary;
};

const OrgCard = ({ beneficiary }: Props) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  const { removeOrganization, addOrganization, selectedOrganizations } =
    usePaymentContext();

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      // const fundraiserDetail = {
      //   id: 1,
      //   name: "hello",
      // };
      addOrganization(beneficiary);
    } else {
      removeOrganization(beneficiary.id);
    }
  };

  const causes = ["orphans", "Feeding", "Clothe", "Sadaqah jaryah"];
  return (
    <div className="card hover:border-sky-500 h-[260px] md:h-[310px] justify-center items-center gap-1">
      <input
        type="checkbox"
        className={`w-6 h-6 absolute top-2 right-2 z-10 ${isHome && "hidden"}`}
        onChange={(e) => handleCheckboxChange(e.target.checked)}
        checked={selectedOrganizations.some((o) => o.id === beneficiary?.id)}
      />
      <div className="w-[120px] h-[120px] flex justify-center items-center bg-sky-100 rounded-full">
        <div className="w-[80px] h-[80px] rounded-full relative">
          <Image
            layout="fill"
            objectFit="contain"
            src="/images/icont.png"
            alt="organization"
          />
        </div>
      </div>
      <Link
        href={"/"}
        className="mb-1 text-[16px] md:text-[20px] font-bold text-sky-950 text-center"
      >
        {beneficiary?.name}
      </Link>
      <div className="w-[93%] flex mb-2 items-center gap-3">
        <FaTag className="text-sky-950 text-[20px]" />
        <div className=" flex gap-1 overflow-x-auto removeScrollBar">
          {causes.map((cause) => (
            <p key={cause} className="tag">
              {cause}
            </p>
          ))}
        </div>
      </div>

      <Link href={"/"}>
        <button className="blue-btn">Donate</button>
      </Link>
    </div>
  );
};

export default OrgCard;
