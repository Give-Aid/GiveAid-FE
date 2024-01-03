import { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout = NextPage & {
  isAuthPage?: boolean;
  ignoreLayout?: boolean;
  title?: string;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

interface Beneficiary {
  id: number;
  name: string;
}
interface PaymentContextProps {
  selectedFundraisers: Beneficiary[];
  addFundraiser: (fundraiser: Beneficiary) => void;
  removeFundraiser: (id: number) => void;
  removeAllFundraisers: () => void;
  selectedOrganizations: Beneficiary[];
  addOrganization: (fundraiser: Beneficiary) => void;
  removeOrganization: (id: number) => void;
  removeAllOrganizations: () => void;
  paymentPlan: number | undefined;
  addPaymentPlan: (plan:number) => void;
  removePaymentPlan: () => void;
}

export type { Beneficiary, PaymentContextProps };
