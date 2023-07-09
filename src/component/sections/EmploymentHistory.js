/** @format */

import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";
import { toast } from "react-toastify";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DeleteIcon from "@mui/icons-material/Delete";

import CardField from "../common/CardField";
import useGlobalContext from "../../hooks/useGlobalContext";
import TextField from "../common/TextField";
import TextFollowUp from "../common/TextFollowUp";
import validateEmploymentHistory from "../../validation/validateEmploymentHistory";

const EmploymentHistory = ({ currentSection, setCurrentSection }) => {
  const { globalEmploymentHistory, setGlobalEmploymentHistory } =
    useGlobalContext();

  const [employmentHistoryValue, setEmploymentHistoryValue] = useState({
    currentEmploymentStatus: "",
    employerName: "",
    employmentTitle: "",
    jobDuties: "",
    difficultyJobDuties: "",
    pastImmediatelyEmployerName: "",
    pastWorkplaceInjuries: "",
    injuriesOccurTime: "",
    injuryNature: "",
    workerCompensationClaim: "",
    placedDisability: "",
    receivedNegativeWork: "",
    currentSourcesIncome: [],
    otherEmploymentList: "",
    disabilityDates: "",
    workEvaluationsExplain: "",
    employerList: [
      {
        employer: "",
        jobTitle: "",
        datesOfEmployment: "",
        reasonForLeaving: "",
      },
    ],
  });

  const [errors, setErrors] = useState({});

  const CurrentEmploymentStatusOptions = [
    {
      label: "Unemployed, looking for work",
      value: "unemployed, looking for work",
      name: "CurrentEmploymentStatusOptionsUnemployed, looking for work",
    },
    {
      label: "Unemployed, not looking for work",
      value: "unemployed, not looking for work",
      name: "CurrentEmploymentStatusOptionsUnemployed, not looking for work",
    },
    {
      label: "Employed <20 hours per week",
      value: "employed at less than 20 hours per week",
      name: "CurrentEmploymentStatusOptionsEmployed <20 hours per week",
    },
    {
      label: "Employed >20 hours per week, but not full time",
      value: "employed at more than 20 hours per week, but not full time",
      name: "CurrentEmploymentStatusOptionsEmployed >20 hours per week, but not full time",
    },
    {
      label: "Employed full time",
      value: "employed full time",
      name: "CurrentEmploymentStatusOptionsEmployed full time",
    },
    {
      label: "Retired",
      value: "retired",
      name: "CurrentEmploymentStatusOptionsRetired",
    },
    {
      label: "Total Temporary Disability, not working",
      value: "total Temporary Disability, not working",
      name: "CurrentEmploymentStatusOptionsTotal Temporary Disability, not working",
    },
    {
      label: "Permanent Disability, not working",
      value: "permanent Disability, not working",
      name: "CurrentEmploymentStatusOptionsPermanent Disability, not working",
    },
    {
      label: "Other",
      value: "other",
      name: "CurrentEmploymentStatusOptionsOther",
    },
  ];

  const DifficultyJobDutiesOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "DifficultyJobDutiesOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "DifficultyJobDutiesOptionsNo",
    },
  ];

  const PastWorkplaceInjuriesOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "PastWorkplaceInjuriesOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "PastWorkplaceInjuriesOptionsNo",
    },
  ];

  const WorkerCompensationClaimOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "WorkerCompensationClaimOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "WorkerCompensationClaimOptionsNo",
    },
  ];

  const PlacedDisabilityOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "PlacedDisabilityOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "PlacedDisabilityOptionsNo",
    },
  ];

  const ReceivedNegativeWorkOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "ReceivedNegativeWorkOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "ReceivedNegativeWorkOptionsNo",
    },
  ];

  const CurrentSourcesIncomeOptions = [
    {
      label: "Above employment",
      value: "above employment",
      name: "CurrentSourcesIncomeOptionsAbove employment",
    },
    {
      label: "Other employment",
      value: "other employment",
      name: "CurrentSourcesIncomeOptionsOther employment",
    },
    {
      label: "Workers’ Compensation benefits",
      value: "workers’ compensation benefits",
      name: "CurrentSourcesIncomeOptionsWorkers’ Compensation benefits",
    },
    {
      label: "Spouses income",
      value: "spouses income",
      name: "CurrentSourcesIncomeOptionsSpouses income",
    },
    {
      label: "Children’s income",
      value: "children’s income",
      name: "CurrentSourcesIncomeOptionsChildren’s income",
    },
  ];

  const employerListTHead = [
    "Employer",
    "Your Job Title",
    "Dates of Employment",
    "Reason You Left This Job",
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setEmploymentHistoryValue(globalEmploymentHistory);
  }, [globalEmploymentHistory]);

  const handleCurrentEmploymentStatuschange = (event) => {
    setEmploymentHistoryValue({
      ...employmentHistoryValue,
      currentEmploymentStatus: event.target.value,
      employerName: "",
      employmentTitle: "",
      jobDuties: "",
      difficultyJobDuties: "",
    });
  };

  const handleInputChange = (event, rowIndex, columnName) => {
    const updatedRows = [...employmentHistoryValue?.employerList];
    updatedRows[rowIndex][columnName] = event.target.value;
    setEmploymentHistoryValue({
      ...employmentHistoryValue,
      employerList: updatedRows,
    });
  };

  const handleAddRow = (e) => {
    e.preventDefault();
    const lastEmployer =
      employmentHistoryValue.employerList[
        employmentHistoryValue.employerList.length - 1
      ];
    if (
      lastEmployer.employer &&
      lastEmployer.jobTitle &&
      lastEmployer.datesOfEmployment &&
      lastEmployer.reasonForLeaving
    ) {
      let newRow = [...employmentHistoryValue.employerList];

      newRow = [
        ...newRow,
        {
          employer: "",
          jobTitle: "",
          datesOfEmployment: "",
          reasonForLeaving: "",
        },
      ];
      setEmploymentHistoryValue({
        ...employmentHistoryValue,
        employerList: newRow,
      });
    } else {
      toast.error("All columns must be filled in.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleDeleteRow = (index) => {
    let newRow = [...employmentHistoryValue.employerList];

    if (employmentHistoryValue.employerList.length > 1) {
      newRow.splice(index, 1);
      setEmploymentHistoryValue({
        ...employmentHistoryValue,
        employerList: newRow,
      });
    } else {
      toast.error("Can't Delete!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleDifficultyJobDutieschange = (event) => {
    setEmploymentHistoryValue({
      ...employmentHistoryValue,
      difficultyJobDuties: event.target.value,
    });
  };

  const handlePastWorkplaceInjurieschange = (event) => {
    setEmploymentHistoryValue({
      ...employmentHistoryValue,
      pastWorkplaceInjuries: event.target.value,
      injuriesOccurTime: "",
      injuryNature: "",
    });
  };

  const handleWorkerCompensationClaimchange = (event) => {
    setEmploymentHistoryValue({
      ...employmentHistoryValue,
      workerCompensationClaim: event.target.value,
    });
  };

  const handlePlacedDisabilitychange = (event) => {
    setEmploymentHistoryValue({
      ...employmentHistoryValue,
      placedDisability: event.target.value,
      disabilityDates: "",
    });
  };

  const handleReceivedNegativeWorkchange = (event) => {
    setEmploymentHistoryValue({
      ...employmentHistoryValue,
      receivedNegativeWork: event.target.value,
      workEvaluationsExplain: "",
    });
  };

  const handleCurrentSourcesIncomechange = (event) => {
    let isChecked = event.target.checked;
    let isValue = event.target.value;
    let newCheckedItems = [...employmentHistoryValue?.currentSourcesIncome];

    if (isChecked) {
      newCheckedItems.push(isValue);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== isValue);
    }

    setEmploymentHistoryValue({
      ...employmentHistoryValue,
      currentSourcesIncome: newCheckedItems,
      otherEmploymentList: "",
    });
  };

  const handleChange = (event) => {
    setEmploymentHistoryValue({
      ...employmentHistoryValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalEmploymentHistory(employmentHistoryValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateEmploymentHistory(
      employmentHistoryValue
    );
    setErrors(errors);

    setGlobalEmploymentHistory(employmentHistoryValue);
    setCurrentSection(currentSection + 1);

    // if (isValid) {
    //   setGlobalEmploymentHistory(employmentHistoryValue);
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
        Employment History
      </p>

      <form>
        <CardField
          title="143. What is your current employment status?"
          type="radio"
          options={CurrentEmploymentStatusOptions}
          onChange={handleCurrentEmploymentStatuschange}
          checked={employmentHistoryValue?.currentEmploymentStatus}
          errors={errors.currentEmploymentStatus}
        />

        {employmentHistoryValue?.currentEmploymentStatus ===
          "employed at less than 20 hours per week" ||
        employmentHistoryValue?.currentEmploymentStatus ===
          "employed at more than 20 hours per week, but not full time" ||
        employmentHistoryValue?.currentEmploymentStatus ===
          "employed full time" ? (
          <div>
            <TextField
              title="What is the name of your employer?"
              type="text"
              name="employerName"
              value={employmentHistoryValue?.employerName}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.employerName}
            />

            <TextField
              title="What is your employment title at this position?"
              type="text"
              name="employmentTitle"
              value={employmentHistoryValue?.employmentTitle}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.employmentTitle}
            />

            <TextField
              title="What are your job duties?"
              type="text"
              name="jobDuties"
              value={employmentHistoryValue?.jobDuties}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.jobDuties}
            />

            <CardField
              title="Are you having any difficulty performing your job duties?"
              type="radio"
              options={DifficultyJobDutiesOptions}
              onChange={handleDifficultyJobDutieschange}
              checked={employmentHistoryValue?.difficultyJobDuties}
              errors={errors.difficultyJobDuties}
            />
          </div>
        ) : null}

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              144. What is the name of your past employer immediately prior to
              any current job you may have?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>

            <div className="w-full flex justify-end">
              <button
                onClick={handleAddRow}
                type="button"
                className="rounded my-2 text-blue-500"
              >
                <AddCircleRoundedIcon sx={{ fontSize: 30 }} />
              </button>
              <button
                onClick={() =>
                  handleDeleteRow(
                    employmentHistoryValue.employerList.length - 1
                  )
                }
                type="button"
                className="rounded my-2 text-blue-500"
              >
                <DeleteIcon sx={{ fontSize: 30 }} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full whitespace-no-wrap">
                <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50">
                  <tr className="text-center border border-gray-200">
                    <th className="border-r-2 border-gray-200">Employer</th>
                    <th className="border-r-2 border-gray-200">
                      Your Job Title
                    </th>
                    <th className="border-r-2 border-gray-200">
                      Dates of Employment
                    </th>
                    <th className="border-r-2 border-gray-200">
                      Reason You Left This Job
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employmentHistoryValue?.employerList.map((row, index) => (
                    <tr key={index} className="border border-gray-200">
                      <td className="border-r-2 border-gray-200">
                        <input
                          type="text"
                          className="focus:outline-none"
                          value={row.employer}
                          onChange={(e) =>
                            handleInputChange(e, index, "employer")
                          }
                        />
                      </td>
                      <td className="border-r-2 border-gray-200">
                        <input
                          type="text"
                          className="focus:outline-none"
                          value={row.jobTitle}
                          onChange={(e) =>
                            handleInputChange(e, index, "jobTitle")
                          }
                        />
                      </td>
                      <td className="border-r-2 border-gray-200">
                        <input
                          type="text"
                          className="focus:outline-none"
                          value={row.datesOfEmployment}
                          onChange={(e) =>
                            handleInputChange(e, index, "datesOfEmployment")
                          }
                        />
                      </td>
                      <td className="border-r-2 border-gray-200">
                        <input
                          type="text"
                          className="focus:outline-none"
                          value={row.reasonForLeaving}
                          onChange={(e) =>
                            handleInputChange(e, index, "reasonForLeaving")
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <CardField
          title="145. Have you had any past workplace injuries?"
          type="radio"
          options={PastWorkplaceInjuriesOptions}
          onChange={handlePastWorkplaceInjurieschange}
          checked={employmentHistoryValue?.pastWorkplaceInjuries}
          errors={errors.pastWorkplaceInjuries}
        />

        {employmentHistoryValue?.pastWorkplaceInjuries === "Yes" ? (
          <div>
            <TextField
              title="When did this or these injuries occur?"
              type="text"
              name="injuriesOccurTime"
              value={employmentHistoryValue?.injuriesOccurTime}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.injuriesOccurTime}
            />

            <TextField
              title="What as the nature of this injury or injuries?"
              type="text"
              name="injuryNature"
              value={employmentHistoryValue?.injuryNature}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.injuryNature}
            />
          </div>
        ) : null}

        <CardField
          title="146. Have you ever submitted a Workers’ Compensation claim"
          type="radio"
          options={WorkerCompensationClaimOptions}
          onChange={handleWorkerCompensationClaimchange}
          checked={employmentHistoryValue?.workerCompensationClaim}
          errors={errors.workerCompensationClaim}
        />

        <CardField
          title="147. Have you ever been placed on disability?"
          type="radio"
          options={PlacedDisabilityOptions}
          onChange={handlePlacedDisabilitychange}
          checked={employmentHistoryValue?.placedDisability}
          errors={errors.placedDisability}
        />

        {employmentHistoryValue?.placedDisability === "Yes" ? (
          <div>
            <TextField
              title="What were the dates of this disability?"
              name="disabilityDates"
              placeholder="Your answer..."
              value={employmentHistoryValue?.disabilityDates}
              onChange={handleChange}
              errors={errors.disabilityDates}
            />
          </div>
        ) : null}

        <CardField
          title="148. Have you ever received negative work evaluations, been terminated from a position, or received disciplinary action?"
          type="radio"
          options={ReceivedNegativeWorkOptions}
          onChange={handleReceivedNegativeWorkchange}
          checked={employmentHistoryValue?.receivedNegativeWork}
          errors={errors.receivedNegativeWork}
        />

        {employmentHistoryValue.receivedNegativeWork === "Yes" ? (
          <div>
            <TextField
              title="Please explain:"
              placeholder="Your answer..."
              name="workEvaluationsExplain"
              value={employmentHistoryValue?.workEvaluationsExplain}
              onChange={handleChange}
            />
          </div>
        ) : null}

        <CardField
          title="149. List all of your current sources of income."
          type="checkbox"
          options={CurrentSourcesIncomeOptions}
          onChange={handleCurrentSourcesIncomechange}
          checked={employmentHistoryValue?.currentSourcesIncome}
          errors={errors.currentSourcesIncome}
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

export default EmploymentHistory;
