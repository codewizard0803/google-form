import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";

import CardField from "../common/CardField";
import RadioFollowUp from "../common/RadioFollowUp";
import useGlobalContext from "../../hooks/useGlobalContext";
import TextField from "../common/TextField";
import validatePHQ from "../../validation/validatePHQ";
import TextFollowUp from "../common/TextFollowUp";
import validateMedicalHistory from "../../validation/validateMedicalHistory";

const MedicalHistory = ({ currentSection, setCurrentSection }) => {
  const [medicalHistoryValue, setMedicalHistoryValue] = useState({
    diagnosedHealthcareProvider: [],
    otherMedicalCondition: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("medicalHistory", medicalHistoryValue);
  }, [medicalHistoryValue]);

  const DiagnosedHealthcareProviderOptions = [
    {
      label: "Arthritis",
      value: "Arthritis",
      name: "DiagnosedHealthcareProviderOptionsArthritis",
    },
    {
      label: "Asthma",
      value: "Asthma",
      name: "DiagnosedHealthcareProviderOptionsAsthma",
    },
    {
      label: "Back problems",
      value: "Back problems",
      name: "DiagnosedHealthcareProviderOptionsBack problems",
    },
    {
      label: "Chronic pain",
      value: "Chronic pain",
      name: "DiagnosedHealthcareProviderOptionsChronic pain",
    },
    {
      label: "Diabetes",
      value: "Diabetes",
      name: "DiagnosedHealthcareProviderOptionsDiabetes",
    },
    {
      label: "Heart Disease",
      value: "Heart Disease",
      name: "DiagnosedHealthcareProviderOptionsHeart Disease",
    },
    {
      label: "Hypertension",
      value: "Hypertension",
      name: "DiagnosedHealthcareProviderOptionsHypertension",
    },
    {
      label: "Gastrointestinal problems",
      value: "Gastrointestinal problems",
      name: "DiagnosedHealthcareProviderOptionsGastrointestinal problems",
    },
    {
      label: "Migraines",
      value: "Migraines",
      name: "DiagnosedHealthcareProviderOptionsMigraines",
    },
    {
      label: "Thyroid problems",
      value: "Thyroid problems",
      name: "DiagnosedHealthcareProviderOptionsThyroid problems",
    },
    {
      label: "Other",
      value: "Other",
      name: "DiagnosedHealthcareProviderOptionsOther",
    },
  ];

  const handleDiagnosedHealthcareProviderchange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...medicalHistoryValue?.diagnosedHealthcareProvider];

    let length = medicalHistoryValue.diagnosedHealthcareProvider.length;

    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      length = length - 1;
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }
    if (length === 0) {
      setMedicalHistoryValue({
        ...medicalHistoryValue,
        diagnosedHealthcareProvider: newCheckedItems,
        otherMedicalCondition: "",
      });
    } else {
      if (isChecked === false && itemValue === "Other") {
        setMedicalHistoryValue({
          ...medicalHistoryValue,
          diagnosedHealthcareProvider: newCheckedItems,
          otherMedicalCondition: "",
        });
      } else {
        setMedicalHistoryValue({
          ...medicalHistoryValue,
          diagnosedHealthcareProvider: newCheckedItems,
        });
      }
    }
  };

  const handleChange = (event) => {
    setMedicalHistoryValue({
      ...medicalHistoryValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateMedicalHistory(medicalHistoryValue);
    setErrors(errors);

    if (isValid) {
      setCurrentSection(currentSection + 1);
    }
    // setCurrentSection(currentSection + 1);
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Medical History
      </p>

      <form>
        <CardField
          title="Have you ever experienced having so much energy that you do not need to sleep for several days or a week at a time?"
          type="checkbox"
          options={DiagnosedHealthcareProviderOptions}
          onChange={handleDiagnosedHealthcareProviderchange}
          checked={medicalHistoryValue?.diagnosedHealthcareProvider}
          errors={errors.diagnosedHealthcareProvider}
        />

        {medicalHistoryValue?.diagnosedHealthcareProvider?.filter(
          (item) => item === "Other"
        ).length > 0 ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please enter your other medical conditions here."
                onChange={handleChange}
                name="otherMedicalCondition"
                value={medicalHistoryValue?.otherMedicalCondition}
                error={errors.otherMedicalCondition}
              />
            </div>
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

export default MedicalHistory;
