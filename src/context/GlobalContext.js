import React from "react";

export const GlobalContext = React.createContext();

const GlobalContextProvider = ({ children }) => {
  const [demographicInformation, setDemographicInformation] = React.useState({
    checkedEthnicityItems: [],
    radioSexItem: "",
    radioPreferPronounItem: "",
    maritalStatusItems: "",
    fullName: "",
    birth: "",
    email: "",
    phoneNumber: "",
    pregnant: null,
  });

  return (
    <GlobalContext.Provider
      value={{ demographicInformation, setDemographicInformation }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
