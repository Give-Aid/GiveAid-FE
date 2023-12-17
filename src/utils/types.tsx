import { NextPage } from "next";
import type { AppProps } from "next/app";


export type NextPageWithLayout = NextPage & {
  isAuthPage?: boolean;
  title?: string;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
