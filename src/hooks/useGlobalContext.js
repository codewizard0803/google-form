import React from "react";
import { GlobalContext } from "../context/GlobalContext";

const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};

export default useGlobalContext;
