import { Loader } from "@/modules/components";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
type Props = {}

const OrganizationDashboard = (props: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const userType = user?.unsafeMetadata?.userType;

  useEffect(() => {
    if (user && !userType) {
      router.push("/user-type");
    } else {
      switch (userType) {
        case "organization":
          break;
        case "donor":
          router.push("/app/donor_dashboard");
          break;
        case "admin":
          router.push("/app/admin_dashboard");
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

  if (userType === "organization") {
    return <div>OrganizationDashboard</div>;
  }

  return (
    <div className="center-page flex-col">
      <Loader w={"20"} h={"20"} />
    </div>
  );
}

export default OrganizationDashboard
OrganizationDashboard.title = "Dashboard - Give Aid";
OrganizationDashboard.isAuthPage = true;
OrganizationDashboard.ignoreLayout = false;