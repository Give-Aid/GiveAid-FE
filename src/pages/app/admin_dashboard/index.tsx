import { Loader } from "@/modules/components";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {};

const AdminDashboard = (props: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const userType = user?.unsafeMetadata?.userType;

  useEffect(() => {
    if (user && !userType) {
      router.push("/user-type");
    } else {
      switch (userType) {
        case "admin":
          break;
        case "donor":
          router.push("/app/donor_dashboard");
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

  if (userType === "admin") {
    return <div>AdminDashboard</div>;
  }

  return (
    <div className="center-page flex-col">
      <Loader w={"20"} h={"20"} />
    </div>
  );
};

export default AdminDashboard;
AdminDashboard.title = "Dashboard - Give Aid";
AdminDashboard.isAuthPage = true;
AdminDashboard.ignoreLayout = false;
