import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

import useGlobalContext from "../../hooks/useGlobalContext";
import TextField from "../common/TextField";

import validateAdditionalInformation from "../../validation/validateAdditionalInformation";
import axios from "axios";

const AdditinalInformation = ({ currentSection, setCurrentSection }) => {
  const APP_URL = process.env.REACT_APP_API_BASE_URL;

  const {
    demographicInformation,
    employmentInjuryPhysical,
    currentEmployer,
    physicalInjury,
    chiefComplaint,
    longitudinalHistory,
    PHQ9,
    GAD7,
    PCL5,
    globalCurrentTreatment,
    globalPastHistory,
    globalSubStanceUse,
    globalMedicalHistory,
    globalFamilyHistory,
    globalRelationshipHistory,
    globalEmploymentHistory,
    globalEducationHistory,
    globalSocialHistory,
    globalCriminalHistory,
    globalViolenceHistory,
    globalMilitaryHistory,
    globalCurrentDailyActivities,
    globalDevelopmentalHistory,
    globalAdditionalInformation,
    setGlobalAdditionalInformation,
  } = useGlobalContext();
  const [additionalValue, setAdditionalValue] = useState({
    evaluatingClinician: "",
    yourAdditionalInformation: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setAdditionalValue(globalAdditionalInformation);
  }, [globalAdditionalInformation]);

  const handleChange = (event) => {
    setAdditionalValue({
      ...additionalValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalAdditionalInformation(additionalValue);
    setCurrentSection(currentSection - 1);
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateAdditionalInformation(additionalValue);
    setErrors(errors);

    if (isValid) {
      setGlobalAdditionalInformation(additionalValue);
      const data = {
        demographicInformation: demographicInformation,
        employmentInjuryPhysicalValue: employmentInjuryPhysical,
        currentEmployerValue: currentEmployer,
        physicalInjuryValue: physicalInjury,
        chiefComplaintValue: chiefComplaint,
        longitudinalHistoryValue: longitudinalHistory,
        PHQValue: PHQ9,
        GADValue: GAD7,
        PCLValue: PCL5,
        currentTreatmentValue: globalCurrentTreatment,
        pastHistoryValue: globalPastHistory,
        substanceUseValue: globalSubStanceUse,
        medicalHistoryValue: globalMedicalHistory,
        familyHistoryValue: globalFamilyHistory,
        relationshipHistoryValue: globalRelationshipHistory,
        employmentHistoryValue: globalEmploymentHistory,
        educationHistoryValue: globalEducationHistory,
        socialHistoryValue: globalSocialHistory,
        criminalHistoryValue: globalCriminalHistory,
        violenceHistoryValue: globalViolenceHistory,
        militaryHistoryValue: globalMilitaryHistory,
        currentDailyActivitiesValue: globalCurrentDailyActivities,
        developmentalValue: globalDevelopmentalHistory,
        additionalValue: additionalValue,
      };

      axios
        .post(`${APP_URL}/api/generateDoc`, data)
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Additional Information
      </p>

      <form>
        <TextField
          title="191. Is there anything else you would like to share with the evaluating clinician before your visit begins?"
          placeholder="Your answer"
          name="evaluatingClinician"
          value={additionalValue?.evaluatingClinician}
          onChange={handleChange}
          error={errors.evaluatingClinician}
        />

        <TextField
          title="192. Please Provide Any Additional Information I Should Know About You:"
          placeholder="Your answer"
          name="yourAdditionalInformation"
          value={additionalValue?.yourAdditionalInformation}
          onChange={handleChange}
          error={errors.yourAdditionalInformation}
        />

        <div className="mx-auto w-[65%] flex justify-between mt-3">
          {currentSection > 0 && (
            <Button variant="contained" onClick={handleBackClick}>
              Back
            </Button>
          )}

          <Button variant="contained" type="button" onClick={handleSubmitClick}>
            submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdditinalInformation;
