import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {}

const Fundraisers = (props: Props) => {
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
  return (
    <div>Fundraisers</div>
  )
}

export default Fundraisers
Fundraisers.title = "Dashboard - Give Aid";
Fundraisers.isAuthPage = true;
Fundraisers.ignoreLayout = false;