import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Inter } from "next/font/google";
import { AppPropsWithLayout } from "@/utils/types";
import Layout from "@/modules/layout";
import { Toaster } from "react-hot-toast";
import PaymentProvider from "@/context/paymentProvider";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import DashboardLayout from "@/modules/layout/dashboardLayout";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { isAuthPage, ignoreLayout, name, title } = Component;

  let page = (
    <Layout title={title || name}>
      <Component {...pageProps} />
    </Layout>
  );

  if (ignoreLayout && isAuthPage) {
    page = <Component {...pageProps} />;
  }

  if (isAuthPage && !ignoreLayout) {
    page = (
      <>
        <SignedIn>
          <DashboardLayout title={title || name}>
          <Component {...pageProps} />
          </DashboardLayout>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    );
  }

  if (!isAuthPage && ignoreLayout) {
    page = (
      <>
        <SignedIn>
          <Component {...pageProps} />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    );
  }

  return (
    <>
      <ClerkProvider>
        <PaymentProvider>
          <Toaster />
          <main className={poppins.className}>{page}</main>
        </PaymentProvider>
      </ClerkProvider>
    </>
  );
}
