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
    }

    if(userType !== 'admin'){
      router.push("/app");
    }
  }, []);

  if (userType !== "admin") {
    return (
      <div className="center-page">
        <Loader w={"10"} h={"10"} />
      </div>
    );
  }

  return <div>AdminDashboard</div>;
};

export default AdminDashboard;
AdminDashboard.title = "Dashboard - Give Aid";
AdminDashboard.isAuthPage = true;
AdminDashboard.ignoreLayout = false;
