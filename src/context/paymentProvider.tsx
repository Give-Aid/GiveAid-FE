import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Beneficiary, PaymentContextProps } from "@/utils/types";
import { added, alreadyAdded, removed, removedAll } from "@/utils/toasters";

type Props = {
  children: ReactNode;
};

const PaymentContext = createContext<PaymentContextProps>({
  selectedFundraisers: [],
  addFundraiser: () => {},
  removeFundraiser: () => {},
  removeAllFundraisers: () => {},
  selectedOrganizations: [],
  addOrganization: () => {},
  removeOrganization: () => {},
  removeAllOrganizations: () => {},
});

export const usePaymentContext = () => useContext(PaymentContext);

const PaymentProvider = ({ children }: Props) => {
  const [selectedFundraisers, setSelectedFundraisers] = useState<Beneficiary[]>(
    []
  );

  const [selectedOrganizations, setSelectedOrganizations] = useState<Beneficiary[]>([]);

  const hasRendered = useRef(false);
  useEffect(() => {
    const storedFundraisers = localStorage.getItem("selectedFundraisers");
    if (storedFundraisers) {
      setSelectedFundraisers(JSON.parse(storedFundraisers));
      hasRendered.current = true;
    }

    const storedOrganization = localStorage.getItem("selectedOrganizations");
    if (storedOrganization) {
      setSelectedOrganizations(JSON.parse(storedOrganization));
      hasRendered.current = true;
    }
  }, []);

  useEffect(() => {
    if (hasRendered) {
      setTimeout(() => {
        localStorage.setItem(
          "selectedFundraisers",
          JSON.stringify(selectedFundraisers)
        );
        localStorage.setItem(
          "selectedOrganizations",
          JSON.stringify(selectedOrganizations)
        );
      }, 1000);
    }
  }, [selectedFundraisers, selectedOrganizations]);

  const addFundraiser = (fundraiser: Beneficiary) => {
    const isFundraiserSelected = selectedFundraisers.some(
      (f) => f.id === fundraiser.id
    );
    if (!isFundraiserSelected) {
      setSelectedFundraisers((prevState) => [...prevState, fundraiser]);
      added(fundraiser.name);
    } else {
      alreadyAdded();
    }
  };

  const addOrganization = (organization: Beneficiary) => {
    const isOrganizationSelected = selectedOrganizations.some(
      (o) => o.id === organization.id
    );
    if (!isOrganizationSelected) {
      setSelectedOrganizations((prevState) => [...prevState, organization]);
      added(organization.name);
    } else {
      alreadyAdded();
    }
  };

  const removeFundraiser = (id: number) => {
    const updatedFundraisers = selectedFundraisers.filter(
      (fundraiser) => fundraiser.id !== id
    );
    setSelectedFundraisers(updatedFundraisers);
    removed();
  };

  const removeOrganization = (id: number) => {
    const updatedOrganizations = selectedOrganizations.filter(
      (organization) => organization.id !== id
    );
    setSelectedOrganizations(updatedOrganizations);
    removed();
  };

  const removeAllFundraisers = () => {
    setSelectedFundraisers([]);
    removedAll();
  };

  const removeAllOrganizations = () => {
    setSelectedOrganizations([]);
    removedAll();
  };

  const contextValue: PaymentContextProps = {
    selectedFundraisers,
    addFundraiser,
    removeFundraiser,
    removeAllFundraisers,
    selectedOrganizations,
    addOrganization,
    removeOrganization,
    removeAllOrganizations,
  };

  return (
    <PaymentContext.Provider value={contextValue}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentProvider;
