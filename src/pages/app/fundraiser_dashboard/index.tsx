import { Loader } from "@/modules/components";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {}

const FundraiserDashboard = (props: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const userType = user?.unsafeMetadata?.userType;

  useEffect(() => {
    if (user && !userType) {
      router.push("/user-type");
    } else {
      switch (userType) {
        case "fundraiser":
          break;
        case "donor":
          router.push("/app/donor_dashboard");
          break;
        case "admin":
          router.push("/app/admin_dashboard");
          break;
        case "organization":
          router.push("/app/organization_dashboard");
          break;
        
        default:
          router.push("/");
          break;
      }
    }
  }, []);

  if (userType === "fundraiser") {
    return <div>FundraiserDashboard</div>;
  }

  return (
    <div className="center-page flex-col">
      <Loader w={"20"} h={"20"} />
    </div>
  );
}

export default FundraiserDashboard
FundraiserDashboard.title = "Dashboard - Give Aid";
FundraiserDashboard.isAuthPage = true;
FundraiserDashboard.ignoreLayout = false;