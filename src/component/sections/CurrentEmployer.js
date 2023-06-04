import React, { useState } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";

import TextField from "../common/TextField";
import useGlobalContext from "../../hooks/useGlobalContext";
import CardField from "../common/CardField";
import RadioFollowUp from "../common/RadioFollowUp";

const CurrentEmployer = ({currentSection, setCurrentSection}) => {

  const [errors, setErrors] = useState({})

  const handleBackClick = (event) => {
    event.preventDefault();
    // setEmploymentInjuryPhysical(employmentInjuryPhysicalValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    // const { isValid, errors } = validateEmploymentInjuryPhysical(
    //   employmentInjuryPhysicalValue
    // );
    setErrors(errors);

    // if (isValid) {
    //   // setEmploymentInjuryPhysical(employmentInjuryPhysicalValue);
    //   setCurrentSection(currentSection + 1);
    // }
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Current Employer (If Different Than Above)
      </p>

      <form>
        <div className="mx-auto w-[65%] flex justify-between mt-3">
          {currentSection > 0 && (
            <Button variant="contained" onClick={handleBackClick}>
              Back
            </Button>
          )}

          <Button variant="contained" type="button" onClick={handleNextClick}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CurrentEmployer;
