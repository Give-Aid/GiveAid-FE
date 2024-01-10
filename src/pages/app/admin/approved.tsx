import React from 'react'
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {}

const Approved = (props: Props) => {
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
    <div>Approved</div>
  )
}

export default Approved
Approved.title = "Dashboard - Give Aid";
Approved.isAuthPage = true;
Approved.ignoreLayout = false;