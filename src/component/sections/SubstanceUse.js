import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";

import CardField from "../common/CardField";
import RadioFollowUp from "../common/RadioFollowUp";
import useGlobalContext from "../../hooks/useGlobalContext";
import TextField from "../common/TextField";
import validatePHQ from "../../validation/validatePHQ";
import TextFollowUp from "../common/TextFollowUp";

const SubstanceUse = ({ currentSection, setCurrentSection }) => {
  const [substanceUseValue, setSubstanceValue] = useState({});

  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("SubStanceUseValue", substanceUseValue);
  }, [substanceUseValue]);
  const handleChange = (event) => {
    setSubstanceValue({
      ...substanceUseValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validatePHQ();
    setErrors(errors);

    if (isValid) {
      setCurrentSection(currentSection + 1);
    }
    // setCurrentSection(currentSection + 1);
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Substance Use
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

export default SubstanceUse;
