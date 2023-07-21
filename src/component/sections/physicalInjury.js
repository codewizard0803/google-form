/** @format */

import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

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
    window.scrollTo({
      top: 0,
    });
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

    setPhysicalInjury(physicalInjuryValue);
    setCurrentSection(currentSection + 1);

    // if (isValid) {
    //   setPhysicalInjury(physicalInjuryValue);
    //   setCurrentSection(currentSection + 1);
    // } else {
    //   toast.error("Please fill in all fields correctly!", {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // }
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Physical Injury
      </p>

      <form>
        <TextField
          title="41. If your injury was initially physical, describe the first symptoms (pain) you experienced:"
          placeholder="Your answer"
          name="firstSymptoms"
          value={physicalInjuryValue.firstSymptoms}
          onChange={handleChange}
          error={errors.firstSymptoms}
        />

        <TextField
          title="42. If your injury was initially physical, describe the first treatment you received following this injury (medical, chiropractic, physical therapy pt, injections):"
          placeholder="Your answer"
          name="firstTreatment"
          value={physicalInjuryValue.firstTreatment}
          onChange={handleChange}
          error={errors.firstTreatment}
        />

        <TextField
          title="43. If your injury was initially physical, describe the rest of your treatment (medical, chiropractic, pt)"
          placeholder="Your answer"
          name="restYourTreatment"
          value={physicalInjuryValue.restYourTreatment}
          onChange={handleChange}
          error={errors.restYourTreatment}
        />

        <TextField
          title="44. List the doctors you have seen for this physical injury:"
          placeholder="Your answer"
          name="doctorsList"
          value={physicalInjuryValue.doctorsList}
          onChange={handleChange}
          error={errors.doctorsList}
        />

        <CardField
          title="45. Did you receive surgery for this injury?"
          type="radio"
          options={receivedSurgeryOptions}
          onChange={handleReceivedSurgeryChange}
          checked={physicalInjuryValue?.receivedSurgery}
          errors={errors.receivedSurgery}
        />

        <TextField
          title="46. List the surgeries you have received for this physical injury:"
          placeholder="Your answer"
          name="surgeryList"
          value={physicalInjuryValue.surgeryList}
          onChange={handleChange}
          error={errors.surgeryList}
        />

        <TextField
          title="47. List the medications you have received for this physical injury:"
          placeholder="Your answer"
          name="medicationList"
          value={physicalInjuryValue.medicationList}
          onChange={handleChange}
          error={errors.medicationList}
        />

        <CardField
          title="48. Have any of the above treatments helped relieve your pain?"
          type="radio"
          options={treatmentsHelpedOptions}
          checked={physicalInjuryValue.treatmentsHelped}
          onChange={handleTreatmentsHelpedChange}
          error={errors.treatmentsHelped}
        />

        <CardField
          title="49. Are you still working?"
          type="radio"
          options={stillWorkingOptions}
          onChange={handleStillWorkingChange}
          checked={physicalInjuryValue?.stillWorking}
          errors={errors.stillWorking}
        />

        <TextField
          title="50. If not working, reason for leaving?"
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
