import { Loader } from "@/modules/components";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {};

const App = (props: Props) => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    const userType = user?.unsafeMetadata?.userType;
    if (user && user?.unsafeMetadata?.userType) {
      switch (userType) {
        case "donor":
          router.push("/app/donor_dashboard");
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
    } else {
      router.push("/user-type");
    }
  }, []);

  return (
    <div className="center-page flex-col gap-5">
      <h1 className="text-[24px] text-sky-950 font-bold">Redirecting...</h1>
      <Loader w={"20"} h={"20"} />
    </div>
  );
};

export default App;
App.isAuthPage = false;
App.ignoreLayout = true;
