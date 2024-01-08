import { SignIn } from "@clerk/nextjs";

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <div className="center-page">
      <SignIn/>
    </div>
  );
};

export default SignInPage;
SignInPage.title =
  "Sign In to Give Aid: Empowering Giving - Donate to Fundraisers & Organizations";
SignInPage.isAuthPage = true;
SignInPage.ignoreLayout = true;
