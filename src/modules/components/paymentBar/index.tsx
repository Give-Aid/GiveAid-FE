import { Beneficiary } from "@/utils/types";
import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import { IoIosCloseCircle, IoMdClose } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";

type Props = {
  type: "Fundraisers" | "Organizations";
  beneficiaries: Beneficiary[];
  removeBeneficiary: (id: number) => void;
  removeAllBeneficiaries: () => void;
};

const PaymentBar = ({ type, beneficiaries, removeBeneficiary, removeAllBeneficiaries }: Props) => {
  const card = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="payment-bar">
      <button onClick={()=>removeAllBeneficiaries()}>
        <IoMdClose className="close-bar" />
      </button>
      <div className="container px-2 py-9 md:py-5">
        <div className="mb-3 flex items-center justify-between md:justify-center md:gap-6">
          <p className="font-medium">
            Selected {type}:{" "}
            <span className="text-[18px] text-sky-600">
              {beneficiaries.length}
            </span>
          </p>
          <div className="relative w-24">
            <div className="naira-input">
              <TbCurrencyNaira />
            </div>
            <input type="text" className="payment-input" placeholder="Amount" />
          </div>
          <button className="blue-btn">Proceed</button>
        </div>
        <div className="">
          {beneficiaries.map((b) => (
            <div key={b.id} className="flex justify-between items-center mb-1">
              <div className="flex gap-2 items-center text-sm">
                <FaCircleDot /> {b.name}
              </div>
              <button onClick={()=>removeBeneficiary(b.id)}>
                <IoIosCloseCircle className="text-[24px]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentBar;
