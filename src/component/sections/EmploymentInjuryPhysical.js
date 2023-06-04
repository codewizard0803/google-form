import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";

import TextField from "../common/TextField";
import CardField from "../common/CardField";
import validateEmploymentInjuryPhysical from "../../validation/validateEmploymentInjuryPhysical";
import RadioFollowUp from "../common/RadioFollowUp";
import useGlobalContext from "../../hooks/useGlobalContext";

const EmploymentInjuryPhysical = ({ currentSection, setCurrentSection }) => {
  const {
    employmentInjuryPhysical,
    setEmploymentInjuryPhysical,
  } = useGlobalContext();

  const [errors, setErrors] = useState({});

  const [
    employmentInjuryPhysicalValue,
    setEmploymentInjuryPhysicalValue,
  ] = useState({
    currentEmployerName: "",
    businessNature: "",
    jobBeganDate: "",
    jobLastDate: "",
    employmentDuty: "",
    startedJobTitle: "",
    currentTitle: "",
    typicalWorkSchedule: "",
    salary: "",
    hourlyRate: "",
    overtimeRate: "",
    likeJob: "",
    notLikeJob: "",
    radioPhysicalConditionBeforeInjuryItem: "",
    radioMentalConditionBeforeInjuryItem: "",
    radioEmotionalSymptomsBeforeInjuryItem: "",
    describeMedicalCondition: "",
    injuryDate: "",
    describeInjuryOccurred: "",
    radioMedicationsBeforeInjuryItem: "",
    radioMedicationsNameBeforeInjuryItem: "",
    radioDisabilityConnectionClaimItem: "",
    currentDisability: "",
    radioContinuedWorkingItem: "",
    radioCurrentlyWorkingItem: "",
    radioConflictsItem: "",
    conflictsCount: "",
    eachConflicts: "",
    conflictsRate: "",
    relationShipLikeManagement: "",
    immediateSupervisorName: "",
    relationshipImmediateSupervisor: "",
    explainSuperVisorReason: "",
    performanceAppraisals: "",
    explainPerformanceAppraisals: "",
    relationshipCoWorkers: "",
    explainRelationshipCoWorkers: "",
    verbalWarning: "",
    verbalWarningDateReason: "",
    lastStraw: "",
    explainLastStraw: "",
  });

  useEffect(() => {
    setEmploymentInjuryPhysicalValue(employmentInjuryPhysical);
  }, [employmentInjuryPhysical]);

  const physicalConditionOptions = [
    { label: "Yes", value: "Yes", name: "physicalConditionYes" },
    { label: "No", value: "No", name: "physicalConditionNo" },
    { label: "N/A", value: "N/A", name: "physicalConditionN/A" },
  ];

  const mentalConditionOptions = [
    { label: "Yes", value: "Yes", name: "mentalConditionYes" },
    { label: "No", value: "No", name: "mentalConditionNo" },
    { label: "N/A", value: "N/A", name: "mentalConditionN/A" },
  ];

  const emotionalSymptomsOptions = [
    { label: "Yes", value: "Yes", name: "emotionalSymptomsYes" },
    { label: "No", value: "No", name: "emotionalSymptomsNo" },
    { label: "N/A", value: "N/A", name: "emotionalSymptomsN/A" },
  ];

  const medicationsBeforeInjuryOptions = [
    { label: "Yes", value: "Yes", name: "medicationsBeforeInjuryYes" },
    { label: "No", value: "No", name: "medicationsBeforeInjuryNo" },
    { label: "N/A", value: "N/A", name: "medicationsBeforeInjuryN/A" },
  ];

  const continuedWorkingOptions = [
    { label: "Yes", value: "Yes", name: "continuedWorkingYes" },
    { label: "No", value: "No", name: "continuedWorkingNo" },
  ];

  const medicationsNameBeforeInjuryOptions = [
    { label: "Yes", value: "Yes", name: "medicationsNameBeforeInjuryYes" },
    { label: "No", value: "No", name: "medicationsNameBeforeInjuryNo" },
  ];

  const currentlyWorkingOptions = [
    { label: "Yes", value: "Yes", name: "currentlyWorkingYes" },
    { label: "No", value: "No", name: "currentlyWorkingNo" },
  ];

  const currentDisabilityOptions = [
    {
      label: "Total Temporary",
      value: "Total Temporary",
      name: "currentDisabilityTotalTemporary",
    },
    {
      label: "Partial Temp",
      value: "Partial Temp",
      name: "currentDisabilityPartialTemp",
    },
    {
      label: "Permanent",
      value: "Permanent",
      name: "currentDisabilityPermanent",
    },
    { label: "SSI", value: "SSI", name: "currentDisabilitySSI" },
    { label: "SSDI", value: "SSDI", name: "currentDisabilitySSDI" },
    {
      label: "State Disability",
      value: "State Disability",
      name: "currentDisabilityStateDisability",
    },
  ];

  const conflictsCountOptions = [
    { label: "1", value: "1", name: "conflictsCount1" },
    { label: "2", value: "2", name: "conflictsCount2" },
    { label: "3", value: "3", name: "conflictsCount3" },
    { label: "4", value: "4", name: "conflictsCount4" },
    { label: "5", value: "5", name: "conflictsCount5" },
    { label: "6", value: "6", name: "conflictsCount6" },
    { label: "7", value: "7", name: "conflictsCount7" },
    { label: "8", value: "8", name: "conflictsCount8" },
    { label: "9", value: "9", name: "conflictsCount9" },
    { label: "10", value: "10", name: "conflictsCount10" },
  ];

  const handleChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      [event.target.name]: event.target.value,
    });
  };

  const handlephysicalConditionChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      radioPhysicalConditionBeforeInjuryItem: event.target.value,
    });
  };

  const handleMentalConditionChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      radioMentalConditionBeforeInjuryItem: event.target.value,
    });
  };

  const handleEmotionalSymptomsChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      radioEmotionalSymptomsBeforeInjuryItem: event.target.value,
    });
  };

  const handleMedicationsBeforeInjuryChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      radioMedicationsBeforeInjuryItem: event.target.value,
    });
  };

  const handleMedicationsNameBeforeInjuryChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      radioMedicationsNameBeforeInjuryItem: event.target.value,
    });
  };

  const handleDisabilityConnectionClaimChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      radioDisabilityConnectionClaimItem: event.target.value,
      currentDisability: null,
    });
  };

  const handleCurrentDisability = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      currentDisability: event.target.value,
    });
  };
  const handleContinuedWorkingChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      radioContinuedWorkingItem: event.target.value,
    });
  };

  const handleCurrentlyWorkingChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      radioCurrentlyWorkingItem: event.target.value,
    });
  };

  const handleConflictsChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      radioConflictsItem: event.target.value,
      eachConflicts: "",
      conflictsCount: "",
      conflictsRate: "",
    });
  };

  const handleconflictsCountChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      conflictsCount: event.target.value,
    });
  };

  const handleRelationshipImmediateSupervisorChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      relationshipImmediateSupervisor: event.target.value,
      explainSuperVisorReason: "",
    });
  };

  const handleperformanceAppraisalsChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      performanceAppraisals: event.target.value,
      explainPerformanceAppraisals: "",
    });
  };

  const handleRelationshipCoWorkersChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      relationshipCoWorkers: event.target.value,
      explainRelationshipCoWorkers: "",
    });
  };

  const handleVerbalWarningChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      verbalWarning: event.target.value,
      verbalWarningDateReason: "",
    });
  };

  const handleLastStrawChange = (event) => {
    setEmploymentInjuryPhysicalValue({
      ...employmentInjuryPhysicalValue,
      lastStraw: event.target.value,
      explainLastStraw: "",
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setEmploymentInjuryPhysical(employmentInjuryPhysicalValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateEmploymentInjuryPhysical(
      employmentInjuryPhysicalValue
    );
    setErrors(errors);

    // if (isValid) {
    //   setEmploymentInjuryPhysical(employmentInjuryPhysicalValue);
    //   setCurrentSection(currentSection + 1);
    // }
    setCurrentSection(currentSection + 1);
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Employment Where the Physical or Emotional Injury Occurred
      </p>

      <form>
        <TextField
          title="Name of Current Employer:"
          type="text"
          name="currentEmployerName"
          value={employmentInjuryPhysicalValue?.currentEmployerName}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.currentEmployerName}
        />

        <TextField
          title="Nature of Business:"
          type="text"
          name="businessNature"
          value={employmentInjuryPhysicalValue?.businessNature}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.businessNature}
        />

        <TextField
          title="Date This Job Began:"
          type="text"
          name="jobBeganDate"
          value={employmentInjuryPhysicalValue?.jobBeganDate}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.jobBeganDate}
        />

        <TextField
          title="What was the last day you worked at this job?"
          type="text"
          name="jobLastDate"
          value={employmentInjuryPhysicalValue?.jobLastDate}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.jobLastDate}
        />

        <TextField
          title="Your Job Title When You Started This Employment:"
          type="text"
          name="startedJobTitle"
          value={employmentInjuryPhysicalValue?.startedJobTitle}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.startedJobTitle}
        />

        <TextField
          title="Your Current Title or Title When You Ended This Employment:"
          type="text"
          name="currentTitle"
          value={employmentInjuryPhysicalValue?.currentTitle}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.currentTitle}
        />

        <TextField
          title="Your Employment Duties:"
          type="text"
          name="employmentDuty"
          value={employmentInjuryPhysicalValue?.employmentDuty}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.employmentDuty}
        />

        <TextField
          title="Your Typical Work Schedule (Hours Worked Per Day, Week, or Month):"
          type="text"
          name="typicalWorkSchedule"
          value={employmentInjuryPhysicalValue?.typicalWorkSchedule}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.typicalWorkSchedule}
        />

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              Your Salary:
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="form-group">
              <input
                type="text"
                className={classnames(
                  "mt-5 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                  { "border-b-red-500": errors.salary }
                )}
                placeholder="Your answer..."
                name="salary"
                value={employmentInjuryPhysicalValue.salary}
                onChange={handleChange}
              />
              {errors.salary && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.salary}
                </div>
              )}
            </div>

            <div className="p-2 mt-3">
              <div className="flex mt-3">
                <label htmlFor="hourlyRate">Hourly Rate:</label>
                <input
                  type="text"
                  id="hourlyRate"
                  className="border-b-2 border-b-gray-300 w-[85%] ml-6 focus:outline-none focus:border-b-green-400 form-control"
                  placeholder="Your answer..."
                  name="hourlyRate"
                  value={employmentInjuryPhysicalValue.hourlyRate}
                  onChange={handleChange}
                />
              </div>

              <div className="flex mt-3">
                <label htmlFor="overtimePay">Overtime Pay: </label>
                <input
                  type="text"
                  id="overtimePay"
                  className="border-b-2 border-b-gray-300 ml-3 w-[85%] focus:outline-none focus:border-b-green-400 form-control form-control-lg"
                  placeholder="Your answer..."
                  name="overtimeRate"
                  value={employmentInjuryPhysicalValue.overtimeRate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <TextField
          title="What Do You Like About This Job?"
          type="text"
          name="likeJob"
          value={employmentInjuryPhysicalValue?.likeJob}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.likeJob}
        />

        <TextField
          title="What Do You Not Like About This Job?"
          type="text"
          name="notLikeJob"
          value={employmentInjuryPhysicalValue?.notLikeJob}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.notLikeJob}
        />

        <CardField
          title="BEFORE The Injury, Were You Being Treated for Any Physical or Medical Condition(s)?"
          type="radio"
          options={physicalConditionOptions}
          onChange={handlephysicalConditionChange}
          checked={
            employmentInjuryPhysicalValue?.radioPhysicalConditionBeforeInjuryItem
          }
          errors={errors.radioPhysicalConditionBeforeInjuryItem}
        />

        <CardField
          title="BEFORE The Injury, Were You Being Treated for Any Mental or Emotional Condition(s)?"
          type="radio"
          options={mentalConditionOptions}
          onChange={handleMentalConditionChange}
          checked={
            employmentInjuryPhysicalValue?.radioMentalConditionBeforeInjuryItem
          }
          errors={errors.radioMentalConditionBeforeInjuryItem}
        />

        <CardField
          title="BEFORE The Injury, Were You Experiencing Any Emotional Symptoms?"
          type="radio"
          options={emotionalSymptomsOptions}
          onChange={handleEmotionalSymptomsChange}
          checked={
            employmentInjuryPhysicalValue?.radioEmotionalSymptomsBeforeInjuryItem
          }
          errors={errors.radioEmotionalSymptomsBeforeInjuryItem}
        />

        <TextField
          title="Describe These Medical or Emotional Conditions or Symptoms BEFORE The Injury:"
          type="text"
          name="describeMedicalCondition"
          value={employmentInjuryPhysicalValue?.describeMedicalCondition}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.describeMedicalCondition}
        />

        <CardField
          title="Were you taking any Medications BEFORE The Injury?"
          type="radio"
          options={medicationsBeforeInjuryOptions}
          onChange={handleMedicationsBeforeInjuryChange}
          checked={
            employmentInjuryPhysicalValue?.radioMedicationsBeforeInjuryItem
          }
          errors={errors.radioMedicationsBeforeInjuryItem}
        />

        <CardField
          title="What Medications Were You Taking BEFORE The Injury?"
          type="radio"
          options={medicationsNameBeforeInjuryOptions}
          onChange={handleMedicationsNameBeforeInjuryChange}
          checked={
            employmentInjuryPhysicalValue?.radioMedicationsNameBeforeInjuryItem
          }
          errors={errors.radioMedicationsNameBeforeInjuryItem}
        />

        <TextField
          title="Date of Your Injury (if more than one, list each):"
          type="text"
          name="injuryDate"
          value={employmentInjuryPhysicalValue?.injuryDate}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.injuryDate}
        />

        <TextField
          title="Describe the Injury That Occurred (provide as many details as you can):"
          type="text"
          name="describeInjuryOccurred"
          value={employmentInjuryPhysicalValue?.describeInjuryOccurred}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.describeInjuryOccurred}
        />

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 25, textAlign: "left" }}>
              Do You Currently Receive Disability In Connection With Your Claim?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div
                className={classnames("mt-5 p-2", {
                  "border-red-500 border":
                    errors.radioDisabilityConnectionClaimItem,
                })}
              >
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Yes"
                      name="disabilityConnectionClaimYes"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.radioDisabilityConnectionClaimItem ===
                        "Yes"
                      }
                      onChange={handleDisabilityConnectionClaimChange}
                    />
                    Yes
                  </label>
                  {employmentInjuryPhysicalValue?.radioDisabilityConnectionClaimItem ===
                  "Yes" ? (
                    <RadioFollowUp
                      title="If Yes, Which Current Disability:"
                      options={currentDisabilityOptions}
                      checked={employmentInjuryPhysicalValue.currentDisability}
                      onChange={handleCurrentDisability}
                      error={errors.currentDisability}
                    />
                  ) : null}
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="No"
                      name="disabilityConnectionClaimNo"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.radioDisabilityConnectionClaimItem ===
                        "No"
                      }
                      onChange={handleDisabilityConnectionClaimChange}
                    />
                    No
                  </label>
                </div>
              </div>
              {errors.radioDisabilityConnectionClaimItem && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.radioDisabilityConnectionClaimItem}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <CardField
          title="Would You Have Continued Working If Not Injured?"
          type="radio"
          options={continuedWorkingOptions}
          onChange={handleContinuedWorkingChange}
          checked={employmentInjuryPhysicalValue?.radioContinuedWorkingItem}
          errors={errors.radioContinuedWorkingItem}
        />

        <CardField
          title="Are you currently working"
          type="radio"
          options={currentlyWorkingOptions}
          onChange={handleCurrentlyWorkingChange}
          checked={employmentInjuryPhysicalValue?.radioCurrentlyWorkingItem}
          errors={errors.radioCurrentlyWorkingItem}
        />

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 25, textAlign: "left" }}>
              Have you had any Conflicts with Anyone at Work
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div
                className={classnames("mt-5 p-2", {
                  "border-red-500 border": errors.radioConflictsItem,
                })}
              >
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Yes"
                      name="conflictsYes"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.radioConflictsItem ===
                        "Yes"
                      }
                      onChange={handleConflictsChange}
                    />
                    Yes
                  </label>
                  {employmentInjuryPhysicalValue?.radioConflictsItem ===
                  "Yes" ? (
                    <div className="w-[95%] mx-auto p-2 shadow-lg">
                      <div className="p-3 mt-3">
                        <p className="text-left text-[23px]">
                          How many separate conflicts have you had with others
                          at work
                        </p>
                        <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                        <div
                          className={classnames(
                            "mt-5 p-2 flex justify-between",
                            {
                              "border-red-500 border": errors.conflictsCount,
                            }
                          )}
                        >
                          {conflictsCountOptions.map((item, index) => (
                            <div className="text-left mt-1" key={index}>
                              <label key={item.value}>
                                <input
                                  type="radio"
                                  value={item.value}
                                  className="mr-2"
                                  checked={
                                    employmentInjuryPhysicalValue?.conflictsCount ===
                                    item.value
                                  }
                                  onChange={handleconflictsCountChange}
                                />
                                {item.label}
                              </label>
                            </div>
                          ))}
                        </div>

                        {errors.conflictsCount && (
                          <div className="text-red-500 text-left text-[12px] mt-2">
                            {errors.conflictsCount}
                          </div>
                        )}
                      </div>
                      <div className="p-3 mt-3">
                        <p className="text-left text-[23px]">
                          Please List Separately and Explain Each Conflict that
                          Occurred:
                        </p>
                        <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                        <div className="form-group">
                          <input
                            type="text"
                            className={classnames(
                              "mt-5 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                              { "border-b-red-500": errors.eachConflicts }
                            )}
                            placeholder="Your answer"
                            name="eachConflicts"
                            value={employmentInjuryPhysicalValue?.eachConflicts}
                            onChange={handleChange}
                          />
                          {errors.eachConflicts && (
                            <div className="text-red-500 text-left text-[12px] mt-2">
                              {errors.eachConflicts}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-3 mt-3">
                        <p className="text-left text-[23px]">
                          Please Rate the Percentage That Each of These
                          Conflicts Caused You To Feel Upset, Out of Total of
                          100% (Example: Conflict #1 30%, #2 50%, #3 20%)
                        </p>
                        <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                        <div className="form-group">
                          <input
                            type="text"
                            className={classnames(
                              "mt-5 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                              { "border-b-red-500": errors.conflictsRate }
                            )}
                            placeholder="Your answer"
                            name="conflictsRate"
                            value={employmentInjuryPhysicalValue?.conflictsRate}
                            onChange={handleChange}
                          />
                          {errors.conflictsRate && (
                            <div className="text-red-500 text-left text-[12px] mt-2">
                              {errors.conflictsRate}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="No"
                      name="conflictsNo"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.radioConflictsItem ===
                        "No"
                      }
                      onChange={handleConflictsChange}
                    />
                    No
                  </label>
                </div>
              </div>
              {errors.radioConflictsItem && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.radioConflictsItem}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <TextField
          title="What Was/Is Your Working Relationship Like With Management or Supervisors in General?"
          type="text"
          name="relationShipLikeManagement"
          value={employmentInjuryPhysicalValue?.relationShipLikeManagement}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.relationShipLikeManagement}
        />

        <TextField
          title="Name of Your Immediate Supervisor:"
          type="text"
          name="immediateSupervisorName"
          value={employmentInjuryPhysicalValue?.immediateSupervisorName}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.immediateSupervisorName}
        />

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 25, textAlign: "left" }}>
              Relationship with Immediate Supervisor?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div
                className={classnames("mt-5 p-2", {
                  "border-red-500 border":
                    errors.relationshipImmediateSupervisor,
                })}
              >
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Good"
                      name="relationshipImmediateSupervisorGood"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.relationshipImmediateSupervisor ===
                        "Good"
                      }
                      onChange={handleRelationshipImmediateSupervisorChange}
                    />
                    Good
                  </label>
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Average"
                      name="relationshipImmediateSupervisorAverage"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.relationshipImmediateSupervisor ===
                        "Average"
                      }
                      onChange={handleRelationshipImmediateSupervisorChange}
                    />
                    Average
                  </label>
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Poor"
                      name="relationshipImmediateSupervisorPoor"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.relationshipImmediateSupervisor ===
                        "Poor"
                      }
                      onChange={handleRelationshipImmediateSupervisorChange}
                    />
                    Poor
                  </label>
                  {employmentInjuryPhysicalValue?.relationshipImmediateSupervisor ===
                  "Poor" ? (
                    <div className="w-[95%] mx-auto p-2 shadow-lg">
                      <p className="text-left text-[23px] mt-3">
                        Explain the reason:
                      </p>
                      <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                      <input
                        type="text"
                        id="explainSuperVisorReason"
                        className={classnames(
                          "mt-5 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                          {
                            "border-b-red-500": errors.explainSuperVisorReason,
                          }
                        )}
                        placeholder="Your answer..."
                        name="explainSuperVisorReason"
                        value={
                          employmentInjuryPhysicalValue?.explainSuperVisorReason
                        }
                        onChange={handleChange}
                      />
                      {errors.explainSuperVisorReason && (
                        <div className="text-red-500 text-left text-[12px] mt-2">
                          {errors.explainSuperVisorReason}
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
              {errors.relationshipImmediateSupervisor && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.relationshipImmediateSupervisor}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 25, textAlign: "left" }}>
              How Were Your Performance Appraisals?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div
                className={classnames("mt-5 p-2", {
                  "border-red-500 border": errors.performanceAppraisals,
                })}
              >
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Good"
                      name="performanceAppraisalsGood"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.performanceAppraisals ===
                        "Good"
                      }
                      onChange={handleperformanceAppraisalsChange}
                    />
                    Good
                  </label>
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Average"
                      name="performanceAppraisalsAverage"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.performanceAppraisals ===
                        "Average"
                      }
                      onChange={handleperformanceAppraisalsChange}
                    />
                    Average
                  </label>
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Poor"
                      name="performanceAppraisalsPoor"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.performanceAppraisals ===
                        "Poor"
                      }
                      onChange={handleperformanceAppraisalsChange}
                    />
                    Poor
                  </label>
                  {employmentInjuryPhysicalValue?.performanceAppraisals ===
                  "Poor" ? (
                    <div className="w-[95%] mx-auto p-2 shadow-lg">
                      <p className="text-left text-[23px] mt-3">
                        Explain the reason:
                      </p>
                      <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                      <input
                        type="text"
                        id="explainPerformanceAppraisals"
                        className={classnames(
                          "mt-5 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                          {
                            "border-b-red-500":
                              errors.explainPerformanceAppraisals,
                          }
                        )}
                        placeholder="Your answer..."
                        name="explainPerformanceAppraisals"
                        value={
                          employmentInjuryPhysicalValue?.explainPerformanceAppraisals
                        }
                        onChange={handleChange}
                      />
                      {errors.explainPerformanceAppraisals && (
                        <div className="text-red-500 text-left text-[12px] mt-2">
                          {errors.explainPerformanceAppraisals}
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
              {errors.performanceAppraisals && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.performanceAppraisals}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 25, textAlign: "left" }}>
              Have You Ever Received Verbal or Written Warnings?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div
                className={classnames("mt-5 p-2", {
                  "border-red-500 border": errors.verbalWarning,
                })}
              >
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Yes"
                      name="verbalWarningYes"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.verbalWarning === "Yes"
                      }
                      onChange={handleVerbalWarningChange}
                    />
                    Yes
                  </label>
                  {employmentInjuryPhysicalValue?.verbalWarning === "Yes" ? (
                    <div className="w-[95%] mx-auto p-2 shadow-lg">
                      <p className="text-left text-[23px] mt-3">
                        Describe dates and reason given:
                      </p>
                      <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                      <input
                        type="text"
                        id="verbalWarningDateReason"
                        className={classnames(
                          "mt-5 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                          {
                            "border-b-red-500": errors.verbalWarningDateReason,
                          }
                        )}
                        placeholder="Your answer..."
                        name="verbalWarningDateReason"
                        value={
                          employmentInjuryPhysicalValue?.verbalWarningDateReason
                        }
                        onChange={handleChange}
                      />
                      {errors.verbalWarningDateReason && (
                        <div className="text-red-500 text-left text-[12px] mt-2">
                          {errors.verbalWarningDateReason}
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="No"
                      name="verbalWarningNo"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.verbalWarning === "No"
                      }
                      onChange={handleVerbalWarningChange}
                    />
                    No
                  </label>
                </div>
              </div>
              {errors.verbalWarning && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.verbalWarning}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 25, textAlign: "left" }}>
              Working Relationship with Co-Workers?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div
                className={classnames("mt-5 p-2", {
                  "border-red-500 border": errors.relationshipCoWorkers,
                })}
              >
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Good"
                      name="relationshipCoWorkersGood"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.relationshipCoWorkers ===
                        "Good"
                      }
                      onChange={handleRelationshipCoWorkersChange}
                    />
                    Good
                  </label>
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Average"
                      name="relationshipCoWorkersAverage"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.relationshipCoWorkers ===
                        "Average"
                      }
                      onChange={handleRelationshipCoWorkersChange}
                    />
                    Average
                  </label>
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Poor"
                      name="relationshipCoWorkersPoor"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.relationshipCoWorkers ===
                        "Poor"
                      }
                      onChange={handleRelationshipCoWorkersChange}
                    />
                    Poor
                  </label>
                  {employmentInjuryPhysicalValue?.relationshipCoWorkers ===
                  "Poor" ? (
                    <div className="w-[95%] mx-auto p-2 shadow-lg">
                      <p className="text-left text-[23px] mt-3">
                        Please give the names and reasons this relationship was
                        poor.
                      </p>
                      <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                      <input
                        type="text"
                        id="explainRelationshipCoWorkers"
                        className={classnames(
                          "mt-5 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                          {
                            "border-b-red-500":
                              errors.explainRelationshipCoWorkers,
                          }
                        )}
                        placeholder="Your answer..."
                        name="explainRelationshipCoWorkers"
                        value={
                          employmentInjuryPhysicalValue?.explainRelationshipCoWorkers
                        }
                        onChange={handleChange}
                      />
                      {errors.explainRelationshipCoWorkers && (
                        <div className="text-red-500 text-left text-[12px] mt-2">
                          {errors.explainRelationshipCoWorkers}
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
              {errors.relationshipCoWorkers && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.relationshipCoWorkers}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 25, textAlign: "left" }}>
              Was There a "Last Straw" Event Near the Last Day of Work?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div
                className={classnames("mt-5 p-2", {
                  "border-red-500 border": errors.lastStraw,
                })}
              >
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Yes"
                      name="lastStrawYes"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.lastStraw === "Yes"
                      }
                      onChange={handleLastStrawChange}
                    />
                    Yes
                  </label>
                  {employmentInjuryPhysicalValue?.lastStraw === "Yes" ? (
                    <div className="w-[95%] mx-auto p-2 shadow-lg">
                      <p className="text-left text-[23px] mt-3">
                        Please describe your "Last Straw" event near the last
                        day of your work
                      </p>
                      <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                      <input
                        type="text"
                        id="explainLastStraw"
                        className={classnames(
                          "mt-5 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                          {
                            "border-b-red-500": errors.explainLastStraw,
                          }
                        )}
                        placeholder="Your answer..."
                        name="explainLastStraw"
                        value={employmentInjuryPhysicalValue?.explainLastStraw}
                        onChange={handleChange}
                      />
                      {errors.explainLastStraw && (
                        <div className="text-red-500 text-left text-[12px] mt-2">
                          {errors.explainLastStraw}
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="No"
                      name="lastStrawNo"
                      className="mr-2"
                      checked={
                        employmentInjuryPhysicalValue?.lastStraw === "No"
                      }
                      onChange={handleLastStrawChange}
                    />
                    No
                  </label>
                </div>
              </div>
              {errors.lastStraw && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.lastStraw}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

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

export default EmploymentInjuryPhysical;
