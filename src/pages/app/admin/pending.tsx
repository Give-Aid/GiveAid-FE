import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {}

const Pending = (props: Props) => {
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
  
  return (
    <div>Pending</div>
  )
}

export default Pending
Pending.title = "Dashboard - Give Aid";
Pending.isAuthPage = true;
Pending.ignoreLayout = false;