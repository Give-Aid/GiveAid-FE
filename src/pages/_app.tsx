import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Inter } from "next/font/google";
import { AppPropsWithLayout } from "@/utils/types";
import Layout from "@/modules/layout";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { isAuthPage, name, title } = Component;
 

  let page = (
    <Layout title={title || name}>
      <Component {...pageProps} />
    </Layout>
  );

  // if (isAuthPage) {
  //   page = (
  //     <DashboardLayout title={title || name}>
  //       <Component {...pageProps} />
  //     </DashboardLayout>
  //   );
  // }
  return <main className={poppins.className}>{page}</main>;
}
