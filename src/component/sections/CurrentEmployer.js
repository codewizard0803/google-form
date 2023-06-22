import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";
import { toast } from "react-toastify";

import TextField from "../common/TextField";
import useGlobalContext from "../../hooks/useGlobalContext";
import CardField from "../common/CardField";
import validateCurrentEmployer from "../../validation/validateCurrentEmployer";

const CurrentEmployer = ({ currentSection, setCurrentSection }) => {
  const { currentEmployer, setCurrentEmployer } = useGlobalContext();

  const [errors, setErrors] = useState({});

  const [currentEmployerValue, setCurrentEmployerValue] = useState({
    currentlyWorkEmployerInjury: "",
    currentlyWorkEmployerName: "",
    currentlyWorkNatureBusiness: "",
    currentlyWorkJobTitle: "",
    currentlyWorkJobDuties: "",
    currentlyWorkJobBeganDate: "",
    currentlyWorkSchedule: "",
    currentlyWorkSalary: "",
    currentlyWorkLikeThisJob: "",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setCurrentEmployerValue(currentEmployer);
  }, [currentEmployer]);
  const currentlyWorkLikeJobOptions = [
    { label: "Yes", value: "Yes", name: "currentlyWorkLikeJobYes" },
    { label: "No", value: "No", name: "currentlyWorkLikeJobNo" },
  ];
  const handleCurrentlyWorkEmployerInjuryChange = (event) => {
    setCurrentEmployerValue({
      ...currentEmployerValue,
      currentlyWorkEmployerInjury: event.target.value,
    });
  };

  const handleChange = (event) => {
    setCurrentEmployerValue({
      ...currentEmployerValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleCurrentlyWorkLikeJobChange = (event) => {
    setCurrentEmployerValue({
      ...currentEmployerValue,
      currentlyWorkLikeThisJob: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setCurrentEmployer(currentEmployerValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateCurrentEmployer(currentEmployerValue);
    setErrors(errors);

    setCurrentEmployer(currentEmployerValue);
    setCurrentSection(currentSection + 1);

    // if (isValid) {
    //   setCurrentEmployer(currentEmployerValue);
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
        Current Employer (If Different Than Above)
      </p>

      <form>
        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              39. Do you currently work for the same employer where the above
              injury occurred?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div
                className={classnames("mt-5 p-2", {
                  "border-red-500 border": errors.currentlyWorkEmployerInjury,
                })}
              >
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Yes"
                      name="currentlyWorkEmployerYes"
                      className="mr-2"
                      checked={
                        currentEmployerValue?.currentlyWorkEmployerInjury ===
                        "Yes"
                      }
                      onChange={handleCurrentlyWorkEmployerInjuryChange}
                    />
                    Yes
                  </label>
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="No"
                      name="currentlyWorkEmployerNo"
                      className="mr-2"
                      checked={
                        currentEmployerValue?.currentlyWorkEmployerInjury ===
                        "No"
                      }
                      onChange={handleCurrentlyWorkEmployerInjuryChange}
                    />
                    No
                  </label>
                </div>
              </div>
              {errors.currentlyWorkEmployerInjury && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.currentlyWorkEmployerInjury}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {currentEmployerValue?.currentlyWorkEmployerInjury === "No" ? (
          <div>
            <TextField
              title="Name of current employer:"
              placeholder="Your answer"
              name="currentlyWorkEmployerName"
              value={currentEmployerValue.currentlyWorkEmployerName}
              onChange={handleChange}
              error={errors.currentlyWorkEmployerName}
            />

            <TextField
              title="Nature of business:"
              placeholder="Your answer"
              name="currentlyWorkNatureBusiness"
              value={currentEmployerValue.currentlyWorkNatureBusiness}
              onChange={handleChange}
              error={errors.currentlyWorkNatureBusiness}
            />

            <TextField
              title="Job title:"
              placeholder="Your answer"
              name="currentlyWorkJobTitle"
              value={currentEmployerValue.currentlyWorkJobTitle}
              onChange={handleChange}
              error={errors.currentlyWorkJobTitle}
            />

            <TextField
              title="Job duties:"
              placeholder="Your answer"
              name="currentlyWorkJobDuties"
              value={currentEmployerValue.currentlyWorkJobDuties}
              onChange={handleChange}
              error={errors.currentlyWorkJobDuties}
            />

            <TextField
              title="Date this job began:"
              placeholder="Your answer"
              name="currentlyWorkJobBeganDate"
              value={currentEmployerValue.currentlyWorkJobBeganDate}
              onChange={handleChange}
              error={errors.currentlyWorkJobBeganDate}
            />

            <TextField
              title="Your schedule, hours worked per (day, week, month):"
              placeholder="Your answer"
              name="currentlyWorkSchedule"
              value={currentEmployerValue.currentlyWorkSchedule}
              onChange={handleChange}
              error={errors.currentlyWorkSchedule}
            />

            <TextField
              title="Salary or hourly rate:"
              placeholder="Your answer"
              name="currentlyWorkSalary"
              value={currentEmployerValue.currentlyWorkSalary}
              onChange={handleChange}
              error={errors.currentlyWorkSalary}
            />
            <CardField
              title="Do you like this job?"
              type="radio"
              options={currentlyWorkLikeJobOptions}
              onChange={handleCurrentlyWorkLikeJobChange}
              checked={currentEmployerValue?.currentlyWorkLikeThisJob}
              errors={errors.currentlyWorkLikeThisJob}
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

export default CurrentEmployer;
