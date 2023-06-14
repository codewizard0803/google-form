import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import classnames from "classnames";

import CardField from "../common/CardField";
import useGlobalContext from "../../hooks/useGlobalContext";
import TextField from "../common/TextField";
import validateMilitaryHistory from "../../validation/validateMilitaryHistory";

const MilitaryHistory = ({ currentSection, setCurrentSection }) => {
  const {
    globalMilitaryHistory,
    setGlobalMilitaryHistory,
  } = useGlobalContext();

  const [militaryHistoryValue, setMilitaryHistoryValue] = useState({
    enrolledMilitary: "",
    branchMilitary: "",
    militaryDatesFrom: "",
    militaryDatesTo: "",
    militaryJob: "",
    dischargeStatus: "",
  });
  const [errors, setErrors] = useState({});

  const EnrolledMilitaryOptions = [
    { label: "Yes", value: "Yes", name: "EnrolledMilitaryOptionsYes" },
    { label: "No", value: "No", name: "EnrolledMilitaryOptionsNo" },
  ];

  const BranchMilitaryOptions = [
    { label: "Army", value: "Army", name: "BranchMilitaryOptionsArmy" },
    {
      label: "Marines",
      value: "Marines",
      name: "BranchMilitaryOptionsMarines",
    },
    { label: "Navy", value: "Navy", name: "BranchMilitaryOptionsNavy" },

    {
      label: "Air Force",
      value: "Air Force",
      name: "BranchMilitaryOptionsAir Force",
    },

    {
      label: "Space Force",
      value: "Space Force",
      name: "BranchMilitaryOptionsSpace Force",
    },
    {
      label: "Coast Guard",
      value: "Coast Guard",
      name: "BranchMilitaryOptionsCoast Guard",
    },
    {
      label: "Air National Guard",
      value: "Air National Guard",
      name: "BranchMilitaryOptionsAir National Guard",
    },
    {
      label: "Military Reserves",
      value: "Military Reserves",
      name: "BranchMilitaryOptionsMilitary Reserves",
    },
  ];

  const DischargeStatusOptions = [
    {
      label: "honorably",
      value: "honorably",
      name: "DischargeStatusOptionshonorably",
    },
    {
      label: "dishonorably",
      value: "dishonorably",
      name: "DischargeStatusOptionsdishonorably",
    },
    {
      label: "less than honorable",
      value: "less than honorable",
      name: "DischargeStatusOptionsless than honorable",
    },
  ];

  useEffect(() => {
    setMilitaryHistoryValue(globalMilitaryHistory);
  }, [globalMilitaryHistory]);

  const handleEnrolledMilitarychange = (event) => {
    setMilitaryHistoryValue({
      ...militaryHistoryValue,
      enrolledMilitary: event.target.value,
      branchMilitary: "",
      militaryDates: "",
      militaryJob: "",
      dischargeStatus: "",
    });
  };

  const handleBranchMilitarychange = (event) => {
    setMilitaryHistoryValue({
      ...militaryHistoryValue,
      branchMilitary: event.target.value,
    });
  };

  const handleDischargeStatuschange = (event) => {
    setMilitaryHistoryValue({
      ...militaryHistoryValue,
      dischargeStatus: event.target.value,
    });
  };

  const handleChange = (event) => {
    setMilitaryHistoryValue({
      ...militaryHistoryValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalMilitaryHistory(militaryHistoryValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateMilitaryHistory(militaryHistoryValue);
    setErrors(errors);

    if (isValid) {
      setGlobalMilitaryHistory(militaryHistoryValue);
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Military History
      </p>

      <form>
        <CardField
          title="168. Have you ever enrolled in the military"
          type="radio"
          options={EnrolledMilitaryOptions}
          onChange={handleEnrolledMilitarychange}
          checked={militaryHistoryValue?.enrolledMilitary}
          errors={errors.enrolledMilitary}
        />
        {militaryHistoryValue?.enrolledMilitary === "Yes" ? (
          <div>
            <CardField
              title="Which branch of the military were you in?"
              type="radio"
              options={BranchMilitaryOptions}
              onChange={handleBranchMilitarychange}
              checked={militaryHistoryValue?.branchMilitary}
              errors={errors.branchMilitary}
            />

            <div className="w-[68%] mx-auto mt-3">
              <div className="w-[95%] mx-auto p-3  shadow-lg ">
                <p className="text-left text-[20px] mt-2">
                  What dates were you in the military?
                </p>
                <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                <div className="mt-5 p-2 flex justify-between wrap-flex">
                  <div>
                    <div className="flex">
                      <label htmlFor="from">From:</label>
                      <input
                        id="from"
                        type="date"
                        className={classnames(
                          "border-b-2 ml-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                          { "border-b-red-500": errors.militaryDatesFrom }
                        )}
                        name="militaryDatesFrom"
                        value={militaryHistoryValue?.militaryDatesFrom}
                        onChange={handleChange}
                      />
                    </div>

                    {errors.militaryDatesFrom && (
                      <div className="text-red-500 text-left text-[12px] mt-2 block ml-11">
                        {errors.militaryDatesFrom}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex">
                      <label htmlFor="to">To:</label>
                      <input
                        id="to"
                        type="date"
                        className={classnames(
                          "border-b-2 ml-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                          { "border-b-red-500": errors.militaryDatesTo }
                        )}
                        name="militaryDatesTo"
                        value={militaryHistoryValue?.militaryDatesTo}
                        onChange={handleChange}
                      />
                    </div>

                    {errors.militaryDatesTo && (
                      <div className="text-red-500 text-left text-[12px] mt-2 ml-6">
                        {errors.militaryDatesTo}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <TextField
              title="What was your job in the military?"
              type="text"
              name="militaryJob"
              value={militaryHistoryValue?.militaryJob}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.militaryJob}
            />
            <CardField
              title="What was your discharge status?"
              type="radio"
              options={DischargeStatusOptions}
              onChange={handleDischargeStatuschange}
              checked={militaryHistoryValue?.dischargeStatus}
              errors={errors.dischargeStatus}
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

export default MilitaryHistory;
