import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";

import CardField from "../common/CardField";
import useGlobalContext from "../../hooks/useGlobalContext";
import TextField from "../common/TextField";
import validateViolenceHistory from "../../validation/validateViolenceHistory";

const ViolenceHistory = ({ currentSection, setCurrentSection }) => {
  const {
    globalViolenceHistory,
    setGlobalViolenceHistory,
  } = useGlobalContext();

  const [violenceHistoryValue, setViolenceHistoryValue] = useState({
    physicalAltercations: "",
    altercationsTimes: "",
    circumstancesSurrounding: "",
    thoughtsHurtAnyone: "",
    explainAccomplishingHurt: "",
    victimViolence: "",
    currentlyDangerViolence: "",
  });
  const [errors, setErrors] = useState({});

  const PhysicalAltercationsOptions = [
    { label: "Yes", value: "Yes", name: "PhysicalAltercationsOptionsYes" },
    { label: "No", value: "No", name: "PhysicalAltercationsOptionsNo" },
  ];

  const ThoughtsHurtAnyoneOptions = [
    { label: "Yes", value: "Yes", name: "ThoughtsHurtAnyoneOptionsYes" },
    { label: "No", value: "No", name: "ThoughtsHurtAnyoneOptionsNo" },
    {
      label: "Prefer not to say",
      value: "Prefer not to say",
      name: "ThoughtsHurtAnyoneOptionsPrefer not to say",
    },
  ];

  const VictimViolenceOptions = [
    { label: "Yes", value: "Yes", name: "VictimViolenceOptionsYes" },
    { label: "No", value: "No", name: "VictimViolenceOptionsNo" },
  ];

  const CurrentlyDangerViolenceOptions = [
    { label: "Yes", value: "Yes", name: "CurrentlyDangerViolenceOptionsYes" },
    { label: "No", value: "No", name: "CurrentlyDangerViolenceOptionsNo" },
  ];

  useEffect(() => {
    setViolenceHistoryValue(globalViolenceHistory);
  }, [globalViolenceHistory]);

  const handlePhysicalAltercationschange = (e) => {
    setViolenceHistoryValue({
      ...violenceHistoryValue,
      physicalAltercations: e.target.value,
      altercationsTimes: e.target.value === "Yes" ? "1" : "",
      circumstancesSurrounding: "",
    });
  };

  const handleAltercationsTimesSelect = (e) => {
    setViolenceHistoryValue({
      ...violenceHistoryValue,
      altercationsTimes: e.target.value,
    });
  };

  const handleThoughtsHurtAnyonechange = (e) => {
    setViolenceHistoryValue({
      ...violenceHistoryValue,
      thoughtsHurtAnyone: e.target.value,
      explainAccomplishingHurt: "",
    });
  };

  const handleVictimViolencechange = (e) => {
    setViolenceHistoryValue({
      ...violenceHistoryValue,
      victimViolence: e.target.value,
      currentlyDangerViolence: "",
    });
  };

  const handleCurrentlyDangerViolencechange = (e) => {
    setViolenceHistoryValue({
      ...violenceHistoryValue,
      currentlyDangerViolence: e.target.value,
    });
  };

  const handleChange = (event) => {
    setViolenceHistoryValue({
      ...violenceHistoryValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalViolenceHistory(globalViolenceHistory);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateViolenceHistory(violenceHistoryValue);
    setErrors(errors);

    if (isValid) {
      setGlobalViolenceHistory(globalViolenceHistory);
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Violence History
      </p>

      <form>
        <CardField
          title="165. Have you ever been arrested?"
          type="radio"
          options={PhysicalAltercationsOptions}
          onChange={handlePhysicalAltercationschange}
          checked={violenceHistoryValue?.physicalAltercations}
          errors={errors.physicalAltercations}
        />

        {violenceHistoryValue?.physicalAltercations === "Yes" ? (
          <div>
            <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, textAlign: "left" }}>
                  How many altercations have you been involved in?
                </Typography>
                <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                <div className="mt-5">
                  <div className="flex mt-2">
                    <select
                      id="anxiety-Symptom"
                      className="w-[85%] ml-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus: outline-none"
                      value={violenceHistoryValue?.altercationsTimes}
                      onChange={handleAltercationsTimesSelect}
                    >
                      {[...Array(100)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <TextField
              title="What were the circumstances surrounding these altercations?"
              type="text"
              name="circumstancesSurrounding"
              value={violenceHistoryValue?.circumstancesSurrounding}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.circumstancesSurrounding}
            />
          </div>
        ) : null}

        <CardField
          title="166. Do you currently or have you recently had thoughts of wanting to hurt anyone?"
          type="radio"
          options={ThoughtsHurtAnyoneOptions}
          onChange={handleThoughtsHurtAnyonechange}
          checked={violenceHistoryValue?.thoughtsHurtAnyone}
          errors={errors.thoughtsHurtAnyone}
        />

        {violenceHistoryValue?.thoughtsHurtAnyone === "Yes" ? (
          <div>
            <TextField
              title="Please explain who you want to hurt and how you may go about accomplishing this"
              type="text"
              name="explainAccomplishingHurt"
              value={violenceHistoryValue?.explainAccomplishingHurt}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.explainAccomplishingHurt}
            />
          </div>
        ) : null}

        <CardField
          title="167. Have you ever been the victim of violence?"
          type="radio"
          options={VictimViolenceOptions}
          onChange={handleVictimViolencechange}
          checked={violenceHistoryValue?.victimViolence}
          errors={errors.victimViolence}
        />

        {violenceHistoryValue?.victimViolence === "Yes" ? (
          <div>
            <CardField
              title="Are you currently in danger of violence?"
              type="radio"
              options={CurrentlyDangerViolenceOptions}
              onChange={handleCurrentlyDangerViolencechange}
              checked={violenceHistoryValue?.currentlyDangerViolence}
              errors={errors.currentlyDangerViolence}
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

export default ViolenceHistory;
