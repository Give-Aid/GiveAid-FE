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
    } 
    
    if(userType !== 'donor'){
      router.push("/app");
    }
  }, []);

  if (userType !== "donor") {
    return (
      <div className="center-page flex-col">
        <Loader w={"20"} h={"20"} />
      </div>
    );
  }

  return <div>DonorDashboard</div>;
};

export default DonorDashboard;
DonorDashboard.title = "Dashboard - Give Aid";
DonorDashboard.isAuthPage = true;
DonorDashboard.ignoreLayout = false;
