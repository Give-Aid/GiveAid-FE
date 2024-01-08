import React from "react";
import { SignUp } from "@clerk/nextjs";

type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <div className="center-page">
      <SignUp/>
    </div>
  );
};

export default SignUpPage;
SignUpPage.title =
  "Sign up with Give Aid: Empowering Giving - Donate to Fundraisers & Organizations";
SignUpPage.isAuthPage = true;
SignUpPage.ignoreLayout = true;
