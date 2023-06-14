import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import { toast } from "react-toastify";

import CardField from "../common/CardField";
import useGlobalContext from "../../hooks/useGlobalContext";
import TextField from "../common/TextField";
import validateDevelopmentalHistory from "../../validation/validateDevelopmentalHistory";
import CardTextFollowUp from "../common/CardTextFollowUp";

const DevelopmentalHistory = ({ currentSection, setCurrentSection }) => {
  const {
    globalDevelopmentalHistory,
    setGlobalDevelopmentalHistory,
  } = useGlobalContext();
  const [developmentalValue, setDevelopmentalValue] = useState({
    bornPlace: "",
    primarilyRaised: "",
    raisedChilhood: "",
    describeRelationshipPerson: "",
    primaryAdultsRelationship: "",
    haveSiblings: "",
    siblingsMany: "",
    siblingsRaised: "",
    relationshipPrimaryAdults: [],
    relationshipSiblings: [],
    experienceAbuseChildhood: [],
    parentsMarried: "",
    parentsRemainMarried: "",
    parentsDivorce: "",
    yourOldParentsDivorced: "",
    motherWork: "",
    motherJob: "",
    motherStillWork: "",
    motherCurrentLiving: "",
    diedMotherOld: "",
    whatDiedMother: "",
    fatherWork: "",
    fatherJob: "",
    fatherStillWork: "",
    fatherCurrentLiving: "",
    diedFatherOld: "",
    whatDiedFather: "",
    bestDescribesSocialLifeChild: "",
    enjoyActivitiesChild: "",
  });
  const [errors, setErrors] = useState({});

  const RaisedChilhoodOptions = [
    {
      label: "biological mother and father",
      value: "biological mother and father",
      name: "RaisedChilhoodOptionsbiological mother and father",
    },
    {
      label: "biological motheronly",
      value: "biological motheronly",
      name: "RaisedChilhoodOptionsbiological motheronly",
    },
    {
      label: "biological father only",
      value: "biological father only",
      name: "RaisedChilhoodOptionsbiological father only",
    },
    {
      label: "adopted parent",
      value: "adopted parent",
      name: "RaisedChilhoodOptionsadopted parent",
    },
    {
      label: "biological mother and step father",
      value: "biological mother and step father",
      name: "RaisedChilhoodOptionsbiological mother and step father",
    },
    {
      label: "step mother and biological father",
      value: "step mother and biological father",
      name: "RaisedChilhoodOptionsstep mother and biological father",
    },
    {
      label: "grandparents",
      value: "grandparents",
      name: "RaisedChilhoodOptionsgrandparents",
    },
    {
      label: "aunti. uncle",
      value: "aunti. uncle",
      name: "RaisedChilhoodOptionsaunti. uncle",
    },
    {
      label: "older siblings",
      value: "older siblings",
      name: "RaisedChilhoodOptionsolder siblings",
    },
    {
      label: "other relatives",
      value: "other relatives",
      name: "RaisedChilhoodOptionsother relatives",
    },
    {
      label: "foster parents",
      value: "foster parents",
      name: "RaisedChilhoodOptionsfoster parents",
    },
    { label: "other", value: "other", name: "RaisedChilhoodOptionsother" },
  ];

  const HaveSiblingsOptions = [
    { label: "Yes", value: "Yes", name: "HaveSiblingsOptionsYes" },
    { label: "No", value: "No", name: "HaveSiblingsOptionsNo" },
  ];

  const RelationshipSiblingsOptions = [
    {
      label: "Positive: stable, supportive, or loving",
      value: "Positive: stable, supportive, or loving",
      name:
        "RelationshipSiblingsOptionsPositive: stable, supportive, or loving",
    },
    {
      label:
        "Medium: some disruption in the relationship, some level of conflicts",
      value:
        "Medium: some disruption in the relationship, some level of conflicts",
      name:
        "RelationshipSiblingsOptionsMedium: some disruption in the relationship, some level of conflicts",
    },
    {
      label: "Poor: high level of instability and conflict",
      value: "Poor: high level of instability and conflict",
      name:
        "RelationshipSiblingsOptionsPoor: high level of instability and conflict",
    },
  ];

  const RelationshipPrimaryAdultsOptions = [
    {
      label: "Positive: stable, supportive, or loving",
      value: "Positive: stable, supportive, or loving",
      name:
        "RelationshipPrimaryAdultsOptionsPositive: stable, supportive, or loving",
    },
    {
      label:
        "Medium: some disruption in the relationship, some level of conflicts",
      value:
        "Medium: some disruption in the relationship, some level of conflicts",
      name:
        "RelationshipPrimaryAdultsOptionsMedium: some disruption in the relationship, some level of conflicts",
    },
    {
      label: "Poor: high level of instability and conflict",
      value: "Poor: high level of instability and conflict",
      name:
        "RelationshipPrimaryAdultsOptionsPoor: high level of instability and conflict",
    },
  ];

  const ExperienceAbuseChildhoodOptions = [
    {
      label: "None",
      value: "None",
      name: "ExperienceAbuseChildhoodOptionsNone",
    },
    {
      label: "Yes, emotional abuse",
      value: "Yes, emotional abuse",
      name: "ExperienceAbuseChildhoodOptionsYes, emotional abuse",
    },
    {
      label: "Yes, physical abuse",
      value: "Yes, physical abuse",
      name: "ExperienceAbuseChildhoodOptionsYes, physical abuse",
    },
    {
      label: "Yes, sexual abuse",
      value: "Yes, sexual abuse",
      name: "ExperienceAbuseChildhoodOptionsYes, sexual abuse",
    },
    {
      label: "Yes, neglect",
      value: "Yes, neglect",
      name: "ExperienceAbuseChildhoodOptionsYes, neglect",
    },
  ];

  const ParentsMarriedOptions = [
    { label: "Yes", value: "Yes", name: "ParentsMarriedOptionsYes" },
    { label: "No", value: "No", name: "ParentsMarriedOptionsNo" },
  ];

  const ParentsRemainMarriedOptions = [
    { label: "Yes", value: "Yes", name: "ParentsRemainMarriedOptionsYes" },
    { label: "No", value: "No", name: "ParentsRemainMarriedOptionsNo" },
  ];

  const ParentsDivorceOptions = [
    {
      label: "divorced",
      value: "divorced",
      name: "ParentsDivorceOptionsdivorced",
    },
    {
      label: "separated",
      value: "separated",
      name: "ParentsDivorceOptionsseparated",
    },
    {
      label: "had an alternative living arrangment",
      value: "had an alternative living arrangment",
      name: "ParentsDivorceOptionshad an alternative living arrangment",
    },
  ];

  const MotherWorkOptions = [
    { label: "Yes", value: "Yes", name: "MotherWorkOptionsYes" },
    { label: "No", value: "No", name: "MotherWorkOptionsNo" },
  ];

  const MotherCurrentLivingOptions = [
    { label: "Yes", value: "Yes", name: "MotherCurrentLivingOptionsYes" },
    { label: "No", value: "No", name: "MotherCurrentLivingOptionsNo" },
  ];

  const FatherWorkOptions = [
    { label: "Yes", value: "Yes", name: "FatherWorkOptionsYes" },
    { label: "No", value: "No", name: "FatherWorkOptionsNo" },
  ];

  const FatherCurrentLivingOptions = [
    { label: "Yes", value: "Yes", name: "FatherCurrentLivingOptionsYes" },
    { label: "No", value: "No", name: "FatherCurrentLivingOptionsNo" },
  ];

  const BestDescribesSocialLifeChildOptions = [
    {
      label: "I was social as a child with many friends",
      value: "I was social as a child with many friends",
      name:
        "BestDescribesSocialLifeChildOptionsI was social as a child with many friends",
    },
    {
      label: "I prefered to spend time alone and had few friends",
      value: "I prefered to spend time alone and had few friends",
      name:
        "BestDescribesSocialLifeChildOptionsI prefered to spend time alone and had few friends",
    },
    {
      label: "I had several close friends but also spent time alone as a child",
      value: "I had several close friends but also spent time alone as a child",
      name:
        "BestDescribesSocialLifeChildOptionsI had several close friends but also spent time alone as a child",
    },
  ];

  useEffect(() => {
    setDevelopmentalValue(globalDevelopmentalHistory);
  }, [globalDevelopmentalHistory]);

  const handleRaisedChilhoodchange = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      raisedChilhood: event.target.value,
      describeRelationshipPerson: "",
    });
  };

  const handleDescribeRelationChange = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      describeRelationshipPerson: event.target.value,
    });
  };

  const handleSiblingsManySelect = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      siblingsMany: event.target.value,
    });
  };

  const handleSiblingsRaisedSelect = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      siblingsRaised: event.target.value,
    });
  };

  const handleHaveSiblingsChange = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      haveSiblings: event.target.value,
      siblingsMany: event.target.value === "Yes" ? "1" : "",
      siblingsRaised: event.target.value === "Yes" ? "1" : "",
      relationshipSiblings: [],
    });
  };

  const handleRelationshipSiblingsChange = (event) => {
    let itemValue = event.target.value;
    let isChecked = event.target.checked;

    let newCheckedItems = [...developmentalValue.relationshipSiblings];

    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }

    setDevelopmentalValue({
      ...developmentalValue,
      relationshipSiblings: newCheckedItems,
    });
  };

  const handleRelationshipPrimaryAdultsChange = (event) => {
    let itemValue = event.target.value;
    let isChecked = event.target.checked;

    let newCheckedItems = [...developmentalValue.relationshipPrimaryAdults];

    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }

    setDevelopmentalValue({
      ...developmentalValue,
      relationshipPrimaryAdults: newCheckedItems,
    });
  };

  const handleExperienceAbuseChildhoodChange = (event) => {
    let itemValue = event.target.value;
    let isChecked = event.target.checked;

    let newCheckedItems = [...developmentalValue.experienceAbuseChildhood];
    if (isChecked) {
      if (itemValue === "None") {
        newCheckedItems = ["None"];
      } else {
        if (newCheckedItems.filter((item) => item === "None").length > 0) {
          newCheckedItems = [];
        }
        newCheckedItems.push(itemValue);
      }
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }

    setDevelopmentalValue({
      ...developmentalValue,
      experienceAbuseChildhood: newCheckedItems,
    });
  };

  const handleParentsMarriedChange = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      parentsMarried: event.target.value,
      parentsRemainMarried: "",
      parentsDivorce: "",
      yourOldParentsDivorced: event.target.value === "Yes" ? "1" : "",
    });
  };

  const handleParentsRemainMarriedChange = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      parentsRemainMarried: event.target.value,
    });
  };

  const handleParentsDivorceChange = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      parentsDivorce: event.target.value,
    });
  };

  const handleYourOldParentsDivorcedSelect = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      yourOldParentsDivorced: event.target.value,
    });
  };

  const handleMotherWorkChange = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      motherWork: event.target.value,
      motherJob: "",
      motherStillWork: "",
    });
  };

  const handleMotherCurrentLivingChange = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      motherCurrentLiving: event.target.value,
      diedMotherOld: "",
      whatDiedMother: "",
    });
  };

  const handleFatherWorkChange = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      fatherWork: event.target.value,
      fatherJob: "",
      fatherStillWork: "",
    });
  };

  const handleFatherCurrentLivingChange = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      fatherCurrentLiving: event.target.value,
      diedFatherOld: "",
      whatDiedFather: "",
    });
  };

  const handleBestDescribesSocialLifeChildChange = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      bestDescribesSocialLifeChild: event.target.value,
    });
  };

  const handleChange = (event) => {
    setDevelopmentalValue({
      ...developmentalValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalDevelopmentalHistory(developmentalValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateDevelopmentalHistory(
      developmentalValue
    );
    setErrors(errors);

    if (isValid) {
      setGlobalDevelopmentalHistory(developmentalValue);
      setCurrentSection(currentSection + 1);
    } else {
      toast.error("Please fill in all fields correctly!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Developmental History
      </p>

      <form>
        <TextField
          title="179. Where were you born?"
          placeholder="Your answer"
          name="bornPlace"
          value={developmentalValue?.bornPlace}
          onChange={handleChange}
          error={errors.bornPlace}
        />

        <TextField
          title="180. Where were you primarily raised?"
          placeholder="Your answer"
          name="primarilyRaised"
          value={developmentalValue?.primarilyRaised}
          onChange={handleChange}
          error={errors.primarilyRaised}
        />

        <CardTextFollowUp
          title="181. Who primarlily raised you during your childhood?"
          type="radio"
          options={RaisedChilhoodOptions}
          onChange={handleRaisedChilhoodchange}
          checked={developmentalValue?.raisedChilhood}
          errors={errors.raisedChilhood}
          title2="Please describe your relationship with the person who primarily raised you during your childhood:"
          onChange2={handleDescribeRelationChange}
          value={developmentalValue.describeRelationshipPerson}
          errors2={errors.describeRelationshipPerson}
        />

        <CardField
          title="182. How would you rate your relationship with the primary adults who raised you when you were a child?"
          type="checkbox"
          options={RelationshipPrimaryAdultsOptions}
          onChange={handleRelationshipPrimaryAdultsChange}
          checked={developmentalValue?.relationshipPrimaryAdults}
          errors={errors.relationshipPrimaryAdults}
        />

        <CardField
          title="183. Do you have siblings?"
          type="radio"
          options={HaveSiblingsOptions}
          onChange={handleHaveSiblingsChange}
          checked={developmentalValue?.haveSiblings}
          errors={errors.haveSiblings}
        />

        {developmentalValue?.haveSiblings === "Yes" ? (
          <div>
            <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, textAlign: "left" }}>
                  How many siblings do you have?
                </Typography>
                <p className="h-0.5 bg-gray-400 w-full mt-2"></p>
                <div className="mt-5">
                  <div className="flex mt-2">
                    <select
                      className="w-full ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus: outline-none"
                      value={developmentalValue?.siblingsMany}
                      onChange={handleSiblingsManySelect}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, textAlign: "left" }}>
                  How many of these siblings were you raised by?
                </Typography>
                <p className="h-0.5 bg-gray-400 w-full mt-2"></p>
                <div className="mt-5">
                  <div className="flex mt-2">
                    <select
                      className="w-full ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus: outline-none"
                      value={developmentalValue?.siblingsRaised}
                      onChange={handleSiblingsRaisedSelect}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <CardField
              title="How is your relationship with your siblings (select all that apply)?"
              type="checkbox"
              options={RelationshipSiblingsOptions}
              onChange={handleRelationshipSiblingsChange}
              checked={developmentalValue?.relationshipSiblings}
              errors={errors.relationshipSiblings}
            />
          </div>
        ) : null}

        <CardField
          title="184. Did you experience any abuse during your childhood?"
          type="checkbox"
          options={ExperienceAbuseChildhoodOptions}
          onChange={handleExperienceAbuseChildhoodChange}
          checked={developmentalValue?.experienceAbuseChildhood}
          errors={errors.experienceAbuseChildhood}
        />

        <CardField
          title="185. Were your parents ever married?"
          type="radio"
          options={ParentsMarriedOptions}
          onChange={handleParentsMarriedChange}
          checked={developmentalValue?.parentsMarried}
          errors={errors.parentsMarried}
        />

        {developmentalValue?.parentsMarried === "Yes" ? (
          <div>
            <CardField
              title="Did your parents remain married?"
              type="radio"
              options={ParentsRemainMarriedOptions}
              onChange={handleParentsRemainMarriedChange}
              checked={developmentalValue?.parentsRemainMarried}
              errors={errors.parentsRemainMarried}
            />

            <CardField
              title="Did your parents divorce, separate, or have another arrangment?"
              type="radio"
              options={ParentsDivorceOptions}
              onChange={handleParentsDivorceChange}
              checked={developmentalValue?.parentsDivorce}
              errors={errors.parentsDivorce}
            />

            <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, textAlign: "left" }}>
                  How old were you when your parents divorced or separated?
                </Typography>
                <p className="h-0.5 bg-gray-400 w-full mt-2"></p>
                <div className="mt-5">
                  <div className="flex mt-2">
                    <select
                      className="w-full ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus: outline-none"
                      value={developmentalValue?.yourOldParentsDivorced}
                      onChange={handleYourOldParentsDivorcedSelect}
                    >
                      {[...Array(50)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : null}

        <CardField
          title="186. Did your mother work?"
          type="radio"
          options={MotherWorkOptions}
          onChange={handleMotherWorkChange}
          checked={developmentalValue?.motherWork}
          errors={errors.motherWork}
        />

        {developmentalValue?.motherWork === "Yes" ? (
          <div>
            <TextField
              title="What was her job?"
              placeholder="Your answer"
              name="motherJob"
              value={developmentalValue?.motherJob}
              onChange={handleChange}
              error={errors.motherJob}
            />

            <TextField
              title="Does your mother still work?"
              placeholder="Your answer"
              name="motherStillWork"
              value={developmentalValue?.motherStillWork}
              onChange={handleChange}
              error={errors.motherStillWork}
            />
          </div>
        ) : null}

        <CardField
          title="187. Is your mother current living?"
          type="radio"
          options={MotherCurrentLivingOptions}
          onChange={handleMotherCurrentLivingChange}
          checked={developmentalValue?.motherCurrentLiving}
          errors={errors.motherCurrentLiving}
        />

        {developmentalValue?.motherCurrentLiving === "No" ? (
          <div>
            <TextField
              title="How old was she when she died?"
              placeholder="Your answer"
              name="diedMotherOld"
              value={developmentalValue?.diedMotherOld}
              onChange={handleChange}
              error={errors.diedMotherOld}
            />

            <TextField
              title="What did she die from?"
              placeholder="Your answer"
              name="whatDiedMother"
              value={developmentalValue?.whatDiedMother}
              onChange={handleChange}
              error={errors.whatDiedMother}
            />
          </div>
        ) : null}

        <CardField
          title="188. Did your father work?"
          type="radio"
          options={FatherWorkOptions}
          onChange={handleFatherWorkChange}
          checked={developmentalValue?.fatherWork}
          errors={errors.fatherWork}
        />

        {developmentalValue?.fatherWork === "Yes" ? (
          <div>
            <TextField
              title="What was his job?"
              placeholder="Your answer"
              name="fatherJob"
              value={developmentalValue?.fatherJob}
              onChange={handleChange}
              error={errors.fatherJob}
            />

            <TextField
              title="Does your father still work?"
              placeholder="Your answer"
              name="fatherStillWork"
              value={developmentalValue?.fatherStillWork}
              onChange={handleChange}
              error={errors.fatherStillWork}
            />
          </div>
        ) : null}

        <CardField
          title="189. Is your father current living?"
          type="radio"
          options={FatherCurrentLivingOptions}
          onChange={handleFatherCurrentLivingChange}
          checked={developmentalValue?.fatherCurrentLiving}
          errors={errors.fatherCurrentLiving}
        />

        {developmentalValue?.fatherCurrentLiving === "No" ? (
          <div>
            <TextField
              title="How old was he when he died?"
              placeholder="Your answer"
              name="diedFatherOld"
              value={developmentalValue?.diedFatherOld}
              onChange={handleChange}
              error={errors.diedFatherOld}
            />

            <TextField
              title="What did he die from?"
              placeholder="Your answer"
              name="whatDiedFather"
              value={developmentalValue?.whatDiedFather}
              onChange={handleChange}
              error={errors.whatDiedFather}
            />
          </div>
        ) : null}

        <CardField
          title="190. Which of these statements best describes your social life as a child:"
          type="radio"
          options={BestDescribesSocialLifeChildOptions}
          onChange={handleBestDescribesSocialLifeChildChange}
          checked={developmentalValue?.bestDescribesSocialLifeChild}
          errors={errors.bestDescribesSocialLifeChild}
        />

        <TextField
          title="191. What activities did you enjoy during your childhood?"
          placeholder="Your answer"
          name="enjoyActivitiesChild"
          value={developmentalValue?.enjoyActivitiesChild}
          onChange={handleChange}
          error={errors.enjoyActivitiesChild}
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

export default DevelopmentalHistory;
