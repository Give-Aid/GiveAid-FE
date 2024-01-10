import { Loader } from "@/modules/components";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
type Props = {};

const OrganizationDashboard = (props: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const userType = user?.unsafeMetadata?.userType;

  useEffect(() => {
    if (user && !userType) {
      router.push("/user-type");
    } 
    if(userType !== 'organization'){
      router.push("/app");
    }
  }, []);

  if (userType !== "organization") {
    return (
      <div className="center-page flex-col">
        <Loader w={"20"} h={"20"} />
      </div>
    );
  }

  return <div>OrganizationDashboard</div>;
};

export default OrganizationDashboard;
OrganizationDashboard.title = "Dashboard - Give Aid";
OrganizationDashboard.isAuthPage = true;
OrganizationDashboard.ignoreLayout = false;
