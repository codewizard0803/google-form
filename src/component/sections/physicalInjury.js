import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import TextField from "../common/TextField";
import useGlobalContext from "../../hooks/useGlobalContext";
import CardField from "../common/CardField";
import validatePhysicalInjury from "../../validation/validatePhysicalInjury";

const PhysicalInjury = ({ currentSection, setCurrentSection }) => {
  const { physicalInjury, setPhysicalInjury } = useGlobalContext();

  const [errors, setErrors] = useState({});

  const [physicalInjuryValue, setPhysicalInjuryValue] = useState({
    firstSymptoms: "",
    firstTreatment: "",
    restYourTreatment: "",
    doctorsList: "",
    receivedSurgery: "",
    surgeryList: "",
    medicationList: "",
    treatmentsHelped: "",
    stillWorking: "",
    leavingReason: "",
  });

  useEffect(() => {
    setPhysicalInjuryValue(physicalInjury);
  }, [physicalInjury]);

  const receivedSurgeryOptions = [
    { label: "Yes", value: "Yes", name: "receivedSurgeryYes" },
    { label: "No", value: "No", name: "receivedSurgeryNo" },
  ];

  const stillWorkingOptions = [
    { label: "Yes", value: "Yes", name: "stillWorkingYes" },
    { label: "No", value: "No", name: "stillWorkingNo" },
  ];

  const treatmentsHelpedOptions = [
    { label: "Yes", value: "Yes", name: "treatmentsHelpedOptionsYes" },
    { label: "No", value: "No", name: "treatmentsHelpedOptionsNo" },
  ];

  const handleChange = (event) => {
    setPhysicalInjuryValue({
      ...physicalInjuryValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleReceivedSurgeryChange = (event) => {
    setPhysicalInjuryValue({
      ...physicalInjuryValue,
      receivedSurgery: event.target.value,
    });
  };

  const handleTreatmentsHelpedChange = (event) => {
    setPhysicalInjuryValue({
      ...physicalInjuryValue,
      treatmentsHelped: event.target.value,
    });
  };

  const handleStillWorkingChange = (event) => {
    setPhysicalInjuryValue({
      ...physicalInjuryValue,
      stillWorking: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setPhysicalInjury(physicalInjuryValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validatePhysicalInjury(physicalInjuryValue);
    setErrors(errors);

    if (isValid) {
      setPhysicalInjury(physicalInjuryValue);
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Physical Injury
      </p>

      <form>
        <TextField
          title="40. If Your Injury Was Initially Physical, Describe the First Symptoms (Pain) You Experienced:"
          placeholder="Your answer"
          name="firstSymptoms"
          value={physicalInjuryValue.firstSymptoms}
          onChange={handleChange}
          error={errors.firstSymptoms}
        />

        <TextField
          title="41. If Your Injury Was Initially Physical, Describe the First Treatment You Received Following This Injury(Medical, Chiropractic, Physical Therapy PT, Injections):"
          placeholder="Your answer"
          name="firstTreatment"
          value={physicalInjuryValue.firstTreatment}
          onChange={handleChange}
          error={errors.firstTreatment}
        />

        <TextField
          title="42. If Your Injury Was Initially Physical, Describe the Rest of Your Treatment (Medical, Chiropractic, PT)"
          placeholder="Your answer"
          name="restYourTreatment"
          value={physicalInjuryValue.restYourTreatment}
          onChange={handleChange}
          error={errors.restYourTreatment}
        />

        <TextField
          title="43. List the Doctors You Have Seen For This Physical Injury:"
          placeholder="Your answer"
          name="doctorsList"
          value={physicalInjuryValue.doctorsList}
          onChange={handleChange}
          error={errors.doctorsList}
        />

        <CardField
          title="44. Did you receive surgery for this injury?"
          type="radio"
          options={receivedSurgeryOptions}
          onChange={handleReceivedSurgeryChange}
          checked={physicalInjuryValue?.receivedSurgery}
          errors={errors.receivedSurgery}
        />

        <TextField
          title="45. List the Surgeries You Have Received for This Physical Injury:"
          placeholder="Your answer"
          name="surgeryList"
          value={physicalInjuryValue.surgeryList}
          onChange={handleChange}
          error={errors.surgeryList}
        />

        <TextField
          title="46. List the Medications You Have Received for This Physical Injury:"
          placeholder="Your answer"
          name="medicationList"
          value={physicalInjuryValue.medicationList}
          onChange={handleChange}
          error={errors.medicationList}
        />

        <CardField
          title="47. Have Any of the Above Treatments Helped Relieve Your Pain?"
          type="radio"
          options={treatmentsHelpedOptions}
          checked={physicalInjuryValue.treatmentsHelped}
          onChange={handleTreatmentsHelpedChange}
          error={errors.treatmentsHelped}
        />

        <CardField
          title="48. Are You Still Working?"
          type="radio"
          options={stillWorkingOptions}
          onChange={handleStillWorkingChange}
          checked={physicalInjuryValue?.stillWorking}
          errors={errors.stillWorking}
        />

        <TextField
          title="49. If Not Working, Reason for Leaving?"
          placeholder="Your answer"
          name="leavingReason"
          value={physicalInjuryValue.leavingReason}
          onChange={handleChange}
          error={errors.leavingReason}
        />

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

export default PhysicalInjury;
