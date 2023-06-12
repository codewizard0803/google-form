import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

import CardField from "../common/CardField";
import useGlobalContext from "../../hooks/useGlobalContext";
import TextField from "../common/TextField";
import validateCriminalHistory from "../../validation/validateCriminalHistory";

const CriminalHistory = ({ currentSection, setCurrentSection }) => {
  const {
    globalCriminalHistory,
    setGlobalCriminalHistory,
  } = useGlobalContext();

  const [criminalHistoryValue, setCriminalHistoryValue] = useState({
    arrested: "",
    charges: "",
    everIncarcerated: "",
    currentlyParole: "",
  });

  const [errors, setErrors] = useState({});

  const ArrestedOptions = [
    { label: "Yes", value: "Yes", name: "ArrestedOptionsYes" },
    { label: "No", value: "No", name: "ArrestedOptionsNo" },
  ];

  const CurrentlyParoleOptions = [
    { label: "Yes", value: "Yes", name: "CurrentlyParoleOptionsYes" },
    { label: "No", value: "No", name: "CurrentlyParoleOptionsNo" },
  ];

  useEffect(() => {
    setCriminalHistoryValue(globalCriminalHistory);
  }, [globalCriminalHistory]);

  const handleArrestedchange = (event) => {
    setCriminalHistoryValue({
      ...criminalHistoryValue,
      arrested: event.target.value,
      charges: "",
      everIncarcerated: "",
      currentlyParole: "",
    });
  };

  const handleCurrentlyParolechange = (event) => {
    setCriminalHistoryValue({
      ...criminalHistoryValue,
      currentlyParole: event.target.value,
    });
  };

  const handleChange = (event) => {
    setCriminalHistoryValue({
      ...criminalHistoryValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalCriminalHistory(criminalHistoryValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateCriminalHistory(criminalHistoryValue);
    setErrors(errors);

    if (isValid) {
      setGlobalCriminalHistory(criminalHistoryValue);
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Criminal History
      </p>
      <form>
        <CardField
          title="164. Have you ever been arrested?"
          type="radio"
          options={ArrestedOptions}
          onChange={handleArrestedchange}
          checked={criminalHistoryValue?.arrested}
          errors={errors.arrested}
        />

        {criminalHistoryValue?.arrested === "Yes" ? (
          <div>
            <TextField
              title="What were the charges?"
              type="text"
              name="charges"
              value={criminalHistoryValue?.charges}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.charges}
            />

            <TextField
              title="Were you ever incarcerated? If yes, for how long?"
              type="text"
              name="everIncarcerated"
              value={criminalHistoryValue?.everIncarcerated}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.everIncarcerated}
            />

            <CardField
              title="Are you currently on parole or probation?"
              type="radio"
              options={CurrentlyParoleOptions}
              onChange={handleCurrentlyParolechange}
              checked={criminalHistoryValue?.currentlyParole}
              errors={errors.currentlyParole}
            />
          </div>
        ) : null}

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

export default CriminalHistory;
