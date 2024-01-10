import Head from "next/head";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useState } from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const DashboardLayout = ({ title, children }: Props) => {
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <Head>
        <title>
          {title ||
            "Give Aid: Empowering Giving - Donate to Fundraisers & Organizations"}
        </title>
        <meta name="description" content="Give Aid" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col h-screen overflow-hidden">
        <Navbar setDrawer={setDrawer} />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar drawer={drawer} setDrawer={setDrawer}/>

          <main className="flex-1 overflow-y-auto p-5">{children}</main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
