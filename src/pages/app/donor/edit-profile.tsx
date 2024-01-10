import React from 'react'
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {}

const EditProfile = (props: Props) => {
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
    <div>edit-profile</div>
  )
}

export default EditProfile
EditProfile.title = "Dashboard - Give Aid";
EditProfile.isAuthPage = true;
EditProfile.ignoreLayout = false;