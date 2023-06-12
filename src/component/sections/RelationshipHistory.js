import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";

import CardField from "../common/CardField";
import RadioFollowUp from "../common/RadioFollowUp";
import useGlobalContext from "../../hooks/useGlobalContext";
import TextFollowUp from "../common/TextFollowUp";
import validateRelationshipHistory from "../../validation/validateRelationshipHistory";

const RelationshipHistory = ({ currentSection, setCurrentSection }) => {
  const {
    globalRelationshipHistory,
    setGlobalRelationshipHistory,
  } = useGlobalContext();

  const [relationshipHistoryValue, setRelationshipHistoryValue] = useState({
    currentlyIntimateRelationship: "",
    currentlyMarried: "",
    currentlyUnit: "weeks",
    currentRelationshipInvolve: "",
    describeIntimateRelationship: "",
    PartnerOccupation: "",
    marriedNumber: "",
    intimateRelationshipTimes: "1",
    longTermRelationshipsLast: "",
    reasonPreviousRelationships: "",
    domesticViolence: "",
    haveChildren: "",
    childrenNumberAndAge: "",
    childrenDoingSchool: "",
    relationshipChildren: "",
    childrenHealthIssues: "",
  });

  const [errors, setErrors] = useState({});

  const CurrentlyIntimateRelationshipOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "CurrentlyIntimateRelationshipOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "CurrentlyIntimateRelationshipOptionsNo",
    },
  ];

  const CurrentlyMarriedOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "CurrentlyMarriedOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "CurrentlyMarriedOptionsNo",
    },
  ];

  const marriedUnitOptions = [
    { label: "weeks", value: "weeks", name: "marriedUnitOptionsWeeks" },
    { label: "months", value: "months", name: "marriedUnitOptionsmonths" },
    { label: "years", value: "years", name: "marriedUnitOptionsyears" },
  ];

  const DescribeIntimateRelationshipOptions = [
    {
      label: "Stable",
      value: "Stable",
      name: "DescribeIntimateRelationshipOptionsStable",
    },
    {
      label: "Supportive",
      value: "Supportive",
      name: "DescribeIntimateRelationshipOptionsSupportive",
    },
    {
      label: "Volatile",
      value: "Volatile",
      name: "DescribeIntimateRelationshipOptionsVolatile",
    },
    {
      label: "Conflictual",
      value: "Conflictual",
      name: "DescribeIntimateRelationshipOptionsConflictual",
    },
    {
      label: "About to end",
      value: "About to end",
      name: "DescribeIntimateRelationshipOptionsAbout to end",
    },
    {
      label: "Other",
      value: "Other",
      name: "DescribeIntimateRelationshipOptionsOther",
    },
  ];

  const MarriedNumberOptions = [
    { label: "0", value: "0", name: "marriedUnitOptions0" },
    { label: "1", value: "1", name: "marriedUnitOptions1" },
    { label: "3", value: "3", name: "marriedUnitOptions3" },
    { label: "4", value: "4", name: "marriedUnitOptions4" },
    { label: "Other", value: "Other", name: "marriedUnitOptionsOther" },
  ];

  const DomesticViolenceOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "DomesticViolenceOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "DomesticViolenceOptionsNo",
    },
  ];

  const HaveChildrenOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "HaveChildrenOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "HaveChildrenOptionsNo",
    },
  ];

  const ChildrenDoingSchoolOptions = [
    {
      label: "Good",
      value: "Good",
      name: "ChildrenDoingSchoolOptionsGood",
    },
    {
      label: "Bad",
      value: "Bad",
      name: "ChildrenDoingSchoolOptionsBad",
    },
    {
      label: "OK, but having some struggles",
      value: "OK, but having some struggles",
      name: "ChildrenDoingSchoolOptionsOK, but having some struggles",
    },
  ];

  const RelationshipChildrenOptions = [
    {
      label: "Good",
      value: "Good",
      name: "RelationshipChildrenOptionsGood",
    },
    {
      label: "Bad",
      value: "Bad",
      name: "RelationshipChildrenOptionsBad",
    },
    {
      label: "OK, but having some struggles",
      value: "OK, but having some struggles",
      name: "RelationshipChildrenOptionsOK, but having some struggles",
    },
  ];

  const ChildrenHealthIssuesOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "ChildrenHealthIssuesOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "ChildrenHealthIssuesOptionsNo",
    },
  ];

  useEffect(() => {
    setRelationshipHistoryValue(globalRelationshipHistory);
  }, [globalRelationshipHistory]);

  const handleCurrentlyIntimateRelationshipchange = (event) => {
    setRelationshipHistoryValue({
      ...relationshipHistoryValue,
      currentlyIntimateRelationship: event.target.value,
      currentlyMarried: "",
      currentlyUnit: "weeks",
      currentRelationshipInvolve: "",
      describeIntimateRelationship: "",
      PartnerOccupation: "",
    });
  };

  const handleCurrentlyMarriedchange = (event) => {
    setRelationshipHistoryValue({
      ...relationshipHistoryValue,
      currentlyMarried: event.target.value,
    });
  };

  const handleCurrentylUnit = (event) => {
    setRelationshipHistoryValue({
      ...relationshipHistoryValue,
      currentlyUnit: event.target.value,
    });
  };

  const handleDescribeIntimateRelationshipchange = (event) => {
    setRelationshipHistoryValue({
      ...relationshipHistoryValue,
      describeIntimateRelationship: event.target.value,
    });
  };

  const handleMarriedNumberchange = (event) => {
    setRelationshipHistoryValue({
      ...relationshipHistoryValue,
      marriedNumber: event.target.value,
    });
  };

  const handleIntimateRelationshipTimesSelect = (event) => {
    setRelationshipHistoryValue({
      ...relationshipHistoryValue,
      intimateRelationshipTimes: event.target.value,
      longTermRelationshipsLast: "",
      reasonPreviousRelationships: "",
      domesticViolence: "",
    });
  };

  const handleDomesticViolencechange = (event) => {
    setRelationshipHistoryValue({
      ...relationshipHistoryValue,
      domesticViolence: event.target.value,
    });
  };

  const handleHaveChildrenchange = (event) => {
    setRelationshipHistoryValue({
      ...relationshipHistoryValue,
      haveChildren: event.target.value,
      childrenNumberAndAge: "",
      childrenDoingSchool: "",
      relationshipChildren: "",
      childrenHealthIssues: "",
    });
  };

  const handleChildrenDoingSchoolchange = (event) => {
    setRelationshipHistoryValue({
      ...relationshipHistoryValue,
      childrenDoingSchool: event.target.value,
    });
  };

  const handleRelationshipChildrenchange = (event) => {
    setRelationshipHistoryValue({
      ...relationshipHistoryValue,
      relationshipChildren: event.target.value,
    });
  };

  const handleChildrenHealthIssueschange = (event) => {
    setRelationshipHistoryValue({
      ...relationshipHistoryValue,
      childrenHealthIssues: event.target.value,
    });
  };

  const handleChange = (event) => {
    setRelationshipHistoryValue({
      ...relationshipHistoryValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalRelationshipHistory(relationshipHistoryValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateRelationshipHistory(
      relationshipHistoryValue
    );
    setErrors(errors);

    if (isValid) {
      setGlobalRelationshipHistory(relationshipHistoryValue);
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Relationship History
      </p>

      <form>
        <CardField
          title="140. Are you currently involved in an intimate relationship?"
          type="radio"
          options={CurrentlyIntimateRelationshipOptions}
          onChange={handleCurrentlyIntimateRelationshipchange}
          checked={relationshipHistoryValue?.currentlyIntimateRelationship}
          errors={errors.currentlyIntimateRelationship}
        />

        {relationshipHistoryValue?.currentlyIntimateRelationship === "Yes" ? (
          <div>
            <CardField
              title="Are you currently married?"
              type="radio"
              options={CurrentlyMarriedOptions}
              onChange={handleCurrentlyMarriedchange}
              checked={relationshipHistoryValue?.currentlyMarried}
              errors={errors.currentlyMarried}
            />

            <div className="w-[65%] mx-auto p-3  shadow-lg ">
              <p className="text-left text-[20px] mt-2">
                How long have you been involved in your current relationship?
              </p>
              <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
              <div className="mt-5 p-2 flex">
                <input
                  type="text"
                  className={classnames(
                    "mt-2  mr-5 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                    { "border-b-red-500": errors.currentRelationshipInvolve }
                  )}
                  name="currentRelationshipInvolve"
                  value={relationshipHistoryValue.currentRelationshipInvolve}
                  onChange={handleChange}
                  placeholder="Your answer"
                />
                <select
                  className="w-[50%] bg-gray-50 border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500 focus: outline-none"
                  value={relationshipHistoryValue?.currentlyUnit}
                  onChange={handleCurrentylUnit}
                >
                  {marriedUnitOptions?.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              {errors.currentRelationshipInvolve && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.currentRelationshipInvolve}
                </div>
              )}
            </div>

            <CardField
              title="If yes, how would you describe your current intimate relationship?"
              type="radio"
              options={DescribeIntimateRelationshipOptions}
              onChange={handleDescribeIntimateRelationshipchange}
              checked={relationshipHistoryValue?.describeIntimateRelationship}
              errors={errors.describeIntimateRelationship}
            />

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="What Is Your Spouse or Partner's Occupation?"
                onChange={handleChange}
                name="PartnerOccupation"
                value={relationshipHistoryValue?.PartnerOccupation}
                error={errors.PartnerOccupation}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="141. How many times have you been married?"
          type="radio"
          options={MarriedNumberOptions}
          onChange={handleMarriedNumberchange}
          checked={relationshipHistoryValue?.marriedNumber}
          errors={errors.marriedNumber}
        />

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              142. How many long term intimate relationships have you had?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div className="flex mt-2 mb-3">
                <select
                  className="w-[85%] ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus: outline-none"
                  value={relationshipHistoryValue?.intimateRelationshipTimes}
                  onChange={handleIntimateRelationshipTimesSelect}
                >
                  {[...Array(20)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <TextFollowUp
                title="How long did each of your long term relationships last?"
                onChange={handleChange}
                name="longTermRelationshipsLast"
                value={relationshipHistoryValue.longTermRelationshipsLast}
                error={errors.longTermRelationshipsLast}
              />

              <TextFollowUp
                title="What are the reasons that your previous relationships/marriage ended?"
                onChange={handleChange}
                name="reasonPreviousRelationships"
                value={relationshipHistoryValue.reasonPreviousRelationships}
                error={errors.reasonPreviousRelationships}
              />

              <RadioFollowUp
                title="Has there ever been domestic violence in any of your relationships?"
                onChange={handleDomesticViolencechange}
                options={DomesticViolenceOptions}
                checked={relationshipHistoryValue?.domesticViolence}
                error={errors.domesticViolence}
              />
            </div>
          </CardContent>
        </Card>

        <CardField
          title="143. Do you have children?"
          type="radio"
          options={HaveChildrenOptions}
          onChange={handleHaveChildrenchange}
          checked={relationshipHistoryValue?.haveChildren}
          errors={errors.haveChildren}
        />

        {relationshipHistoryValue?.haveChildren === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="How many children do you have and what are their ages?"
                onChange={handleChange}
                name="childrenNumberAndAge"
                value={relationshipHistoryValue.childrenNumberAndAge}
                error={errors.childrenNumberAndAge}
              />
            </div>

            <CardField
              title="How are your children doing in school or work?"
              type="radio"
              options={ChildrenDoingSchoolOptions}
              onChange={handleChildrenDoingSchoolchange}
              checked={relationshipHistoryValue?.childrenDoingSchool}
              errors={errors.childrenDoingSchool}
            />

            <CardField
              title="What is your relationship like with your children?"
              type="radio"
              options={RelationshipChildrenOptions}
              onChange={handleRelationshipChildrenchange}
              checked={relationshipHistoryValue?.relationshipChildren}
              errors={errors.relationshipChildren}
            />

            <CardField
              title="Do any of your children have any general or mental health issues?"
              type="radio"
              options={ChildrenHealthIssuesOptions}
              onChange={handleChildrenHealthIssueschange}
              checked={relationshipHistoryValue?.childrenHealthIssues}
              errors={errors.childrenHealthIssues}
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

export default RelationshipHistory;
