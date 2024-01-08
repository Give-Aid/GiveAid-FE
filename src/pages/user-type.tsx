import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { Loader } from "@/modules/components";
import Link from "next/link";

type Props = {};

const UserType = (props: Props) => {
  const [userType, setUserType] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  // console.log(user?.unsafeMetadata);
  useEffect(() => {
    if (user && user?.unsafeMetadata?.userType) {
      router.push("/app");
    } else {
      setIsLoaded(true);
    }
  }, [user?.unsafeMetadata?.userType]);

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

  const handleRadioChange = (e: any) => {
    setUserType(e.target.value);
  };

  const setUserMetaData = () => {
    user?.update({
      unsafeMetadata: {
        userType,
      },
    });
  };

  if (isLoaded) {
    return (
      <div className="center-page">
        <div className="bg-white w-[70%] md:w-[50%] border border-gray-200 rounded-lg shadow-lg p-10 text-center text-sky-900">
          <p className="font-medium text-[18px] mb-2">
            Set up account as a/an:
          </p>
          <div>
            <div className="grid justify-center text-[17px]">
              {types.map((t) => (
                <div key={t.value} className="flex items-center">
                  <input
                    type="radio"
                    id={t.value}
                    name="type"
                    value={t.value}
                    className="mr-2 w-4 h-4"
                    checked={userType === t.value}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor={t.value}>{t.text}</label>
                </div>
              ))}
            </div>
            <button
              className="blue-btn mt-5 disabled:opacity-50"
              disabled={userType === ""}
              onClick={setUserMetaData}
            >
              Continue
            </button>
          </div>
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
  }
};

export default UserType;
UserType.isAuthPage = false;
UserType.ignoreLayout = true;
