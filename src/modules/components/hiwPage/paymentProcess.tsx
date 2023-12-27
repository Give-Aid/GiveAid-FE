import Image from "next/image";
import React from "react";

type Props = {};

const PaymentProcess = (props: Props) => {
  return (
    <div className="bg-gray-200 py-5 text-sky-950">
      <div className="container">
        <div className="mt-10 flex justify-between items-center">
          <p className="text-[30px] md:text-[34px] font-[700] text-sky-950">
            How Our
            <span className="font-[300]"> Payment Process Works</span>
          </p>
          <div className="w-[100px] h-[100px] top-0 right-5 rotate-12 relative">
            <Image
              src="/images/flutterwave.png"
              alt="flutterwave"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <p className="mt-5">
          At Give Aid, we aim to provide a seamless donation experience. When
          donors choose to split donations among multiple beneficiaries or opt
          for recurring payments, we encourage using our payment process.{" "}
          <span className="font-[500]">
            {" "}
            Otherwise, donors are free to access beneficiary details on our
            platform and make direct transfers themselves.
          </span>
        </p>
        <div>
          <p className="font-[600] text-[20px] mt-10">
            Utilizing Flutterwave for Secure Payments
          </p>
          <p className="mt-2">
            We leverage Flutterwave, a leading fintech company offering a global
            payment infrastructure, particularly serving merchants and payment
            service providers across Africa. Through our dedicated Flutterwave
            account, we ensure efficient fund allocation to approved
            beneficiaries.
          </p>
        </div>
        <div>
          <p className="font-[600] text-[20px] mt-10">
            Transparency in Fund Distribution
          </p>
          <p className="mt-2">
            To ensure complete transparency, we create subaccounts for approved
            beneficiaries under our primary account. These subaccounts receive
            100% of the allocated funds, while our main account is set to
            receive 0% of the payment, guaranteeing that all donations go
            directly to the intended beneficiaries.
          </p>
          <div className="mt-2 rounded shadow w-[430px] md:w-[550px] h-[330px] relative">
            <Image
              src="/images/subaccount.png"
              alt="creating subaccount"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div>
          <p className="font-[600] text-[20px] mt-10">
            Monitoring and Transparency
          </p>
          <p className="mt-2">
            We prioritize transparency by granting trustees access to our
            account dashboard. This enables them to monitor transaction details,
            account balances, subaccount specifics, and other pertinent
            information, ensuring complete oversight.
          </p>
          <p className="mt-2">
            Our payment function code allows customization for transaction
            charges. Despite default split payment percentages, the code enables
            the override of default &quot;
            <span className="font-mono font-[700]">split type</span>&quot; and
            &quot;
            <span className="font-mono font-[700]">
              split payment percentage
            </span>
            &quot; by specifying the subaccount&apos;s &quot;
            <span className="font-mono font-[700]">
              transaction_charge_type
            </span>
            &quot; as &quot;<span className="font-[700]">percentage</span>&quot;
            and &quot;
            <span className="font-mono font-[500]">transaction_charge</span>
            &quot; as &quot;<span className="font-[500]">0</span>&quot;. This
            ensures nullification of transaction charges regardless of default
            percentages.
          </p>
          <div className="mt-2 rounded shadow w-[430px] md:w-[550px] h-[330px] relative">
            <Image
              src="/images/code.png"
              alt="creating subaccount"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="mt-2">
            View our{" "}
            <a href="#" className="text-sky-700 underline">
              Code Base
            </a>{" "}
            for confirmation and refer to{" "}
            <a
              href="https://developer.flutterwave.com/docs/collecting-payments/split-payments/"
              className="text-sky-700 underline"
            >
              Flutterwave&apos;s Documentation
            </a>{" "}
            for more information
          </p>
        </div>
        <div>
          <p className="font-[600] text-[20px] mt-10">
            Donation Splitting between Multiple Beneficiaries
          </p>
          <p className="mt-2">
            For users opting to split donations among various subaccounts, our
            payment function sets the &quot;
            <span className="font-mono font-[700]">
              transaction_split_ratio
            </span>
            &quot; field to &quot;<span className="font-[600]">1</span>&quot;
            for all subaccounts, defining an equal distribution of funds among
            them.
          </p>
          <div className="mt-2 rounded shadow w-[430px] md:w-[550px] h-[370px] relative">
            <Image
              src="/images/split.png"
              alt="creating subaccount"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="mt-2">
            View our{" "}
            <a href="#" className="text-sky-700 underline">
              Code Base
            </a>{" "}
            for confirmation and refer to{" "}
            <a
              href="https://developer.flutterwave.com/docs/collecting-payments/split-payments/"
              className="text-sky-700 underline"
            >
              Flutterwave&apos;s Documentation
            </a>{" "}
            for more information
          </p>
        </div>
        <div>
          <p className="font-[600] text-[20px] mt-10">
            Understanding Transaction Fees
          </p>
          <p className="mt-2">
            Please note that Flutterwave applies transaction fees of{" "}
            <span className="font-[700]">1.4%</span> per transaction. For
            further details on their fee structure,{" "}
            <a
              href="https://flutterwave.com/ng/pricing"
              className="text-sky-700 underline"
            >
              refer to their site.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcess;
