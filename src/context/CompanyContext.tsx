import React, { createContext, useContext } from "react";
import { COMPANY_INFO } from "../constants";
import { CompanyInfo } from "../types";

interface CompanyContextType {
  companyInfo: CompanyInfo;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const CompanyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <CompanyContext.Provider
      value={{
        companyInfo: COMPANY_INFO,
      }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanyInfo = (): CompanyInfo => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompanyInfo must be used within CompanyProvider");
  }
  return context.companyInfo;
};

export default CompanyContext;
