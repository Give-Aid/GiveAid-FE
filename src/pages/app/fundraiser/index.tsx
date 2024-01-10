import { Loader } from "@/modules/components";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {};

const FundraiserDashboard = (props: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const userType = user?.unsafeMetadata?.userType;

  useEffect(() => {
    if (user && !userType) {
      router.push("/user-type");
    } 
    if(userType !== 'fundraiser'){
      router.push("/app");
    }
  }, []);

  if (userType !== "fundraiser") {
    return (
      <div className="center-page flex-col">
        <Loader w={"20"} h={"20"} />
      </div>
    );
  }

  return <div>FundraiserDashboard</div>;
};

export default FundraiserDashboard;
FundraiserDashboard.title = "Dashboard - Give Aid";
FundraiserDashboard.isAuthPage = true;
FundraiserDashboard.ignoreLayout = false;
