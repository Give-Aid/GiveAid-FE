import { Loader } from "@/modules/components";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {};

const DonorDashboard = (props: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const userType = user?.unsafeMetadata?.userType;

  useEffect(() => {
    if (user && !userType) {
      router.push("/user-type");
    } else {
      switch (userType) {
        case "donor":
          break;
        case "admin":
          router.push("/app/admin_dashboard");
          break;
        case "organization":
          router.push("/app/organization_dashboard");
          break;
        case "fundraiser":
          router.push("/app/fundraiser_dashboard");
          break;
        default:
          router.push("/");
          break;
      }
    }
  }, []);

  if (userType === "donor") {
    return <div>DonorDashboard</div>;
  }

  return (
    <div className="center-page flex-col">
      <Loader w={"20"} h={"20"} />
    </div>
  );
};

export default DonorDashboard;
DonorDashboard.title = "Dashboard - Give Aid";
DonorDashboard.isAuthPage = true;
DonorDashboard.ignoreLayout = false;
