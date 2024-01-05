import Link from "next/link";
import React from "react";

type Props = {};

const UserType = (props: Props) => {
  const types = [
    {
      value: "donor",
      text: "Donor",
    },
    {
      value: "organization",
      text: "Organization",
    },
    {
      value: "fundraiser",
      text: "Independent Fundraiser",
    },
  ];
  const setUserType = (e: any) => {
    e.preventDefault();
    console.log(e.target.type.value);
  };

  return (
    <div className="min-w-[100vw] min-h-[100vh] flex justify-center items-center">
      <div className="bg-white w-[70%] md:w-[50%] border border-gray-200 rounded-lg shadow-lg p-10 text-center text-sky-900">
        <p className="font-medium text-[18px] mb-2">Set up account as a/an:</p>
        <form onSubmit={setUserType}>
          <div className="grid justify-center text-[17px]">
            {types.map((t) => (
              <div key={t.value} className="flex items-center">
                <input
                  type="radio"
                  id={t.value}
                  name="type"
                  value={t.value}
                  className="mr-2 w-4 h-4"
                />
                <label htmlFor={t.value}>{t.text}</label>
              </div>
            ))}
          </div>
          <button type="submit" className="blue-btn mt-5">
            Continue
          </button>
        </form>
        <p className="text-gray-400 text-sm mt-5">
          By continuing you agree to Give Aid&apos;s{" "}
          <span className="font-medium">
            <Link href={"/terms"}>Terms of Use</Link>
          </span>{" "}
          and{" "}
          <span className="font-medium">
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserType;
UserType.isAuthPage = false;
UserType.ignoreLayout = true;
