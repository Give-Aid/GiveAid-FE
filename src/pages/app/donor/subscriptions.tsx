import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {}

const Subscriptions = (props: Props) => {
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
  return (
    <div>Subscriptions</div>
  )
}

export default Subscriptions
Subscriptions.title = "Dashboard - Give Aid";
Subscriptions.isAuthPage = true;
Subscriptions.ignoreLayout = false;