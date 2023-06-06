import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";

import CardField from "../../common/CardField";
import RadioFollowUp from "../../common/RadioFollowUp";
import useGlobalContext from "../../../hooks/useGlobalContext";
import TextFollowUp from "../../common/TextFollowUp";
import validatePCL from "../../../validation/validatePCL";

const PCL = ({ currentSection, setCurrentSection }) => {
  const { PCL5, setPCL5 } = useGlobalContext();

  const [errors, setErrors] = useState({});
  const [PCLValue, setPCLValue] = useState({
    stressfulExperienceMemories: "",
    stressfulExperience: "",
    disturbingDreamsOccur: "",
    suddenlyStressfulExperience: "",
    veryUpsetStressfulExperience: "",
    strongPhysicalReactionStressfulExperience: "",
    avoidingMemories: "",
    avoidingExternalReminders: "",
    describeSituations: "",
    avoidActivities: "",
    troubleStressfulExperience: "",
    strongNegativeBeliefs: "",
    stressfulExperienceBlaming: "",
    strongNegativefeelings: "",
    lossInterestActivity: "",
    feelingDistantPeople: "",
    troubleExperiencePositiveFeeling: "",
    irritableBehavior: "",
    manyRisksThing: "",
    beingWatchful: "",
    easilyStartled: "",
    difficultyConcentrating: "",
    troubleFallingAsleep: "",
    currentRelatedSymptoms: "0",
  });

  useEffect(() => {
    setPCLValue(PCL5);
  }, [PCL5]);

  const StressfulExperienceMemoriesOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "StressfulExperienceMemoriesOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "StressfulExperienceMemoriesOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "StressfulExperienceMemoriesOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "StressfulExperienceMemoriesOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "StressfulExperienceMemoriesOptionsExtremely",
    },
  ];

  const StressfulExperienceOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "StressfulExperienceOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "StressfulExperienceOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "StressfulExperienceOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "StressfulExperienceOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "StressfulExperienceOptionsExtremely",
    },
  ];

  const DisturbingDreamsOccurOptions = [
    {
      label: "every night",
      value: "every night",
      name: "DisturbingDreamsOccurOptionsevery night",
    },
    {
      label: "every few nights",
      value: "every few nights",
      name: "DisturbingDreamsOccurOptionsevery few nights",
    },
    {
      label: "several times per week",
      value: "several times per week",
      name: "DisturbingDreamsOccurOptionsseveral times per week",
    },
    {
      label: "once a week",
      value: "once a week",
      name: "DisturbingDreamsOccurOptionsonce a week",
    },
    {
      label: "several times per month",
      value: "several times per month",
      name: "DisturbingDreamsOccurOptionsseveral times per month",
    },
    {
      label: "several times per year",
      value: "several times per year",
      name: "DisturbingDreamsOccurOptionsseveral times per year",
    },
    {
      label: "every few years",
      value: "every few years",
      name: "DisturbingDreamsOccurOptionsevery few years",
    },
  ];

  const SuddenlyStressfulExperienceOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "SuddenlyStressfulExperienceOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "SuddenlyStressfulExperienceOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "SuddenlyStressfulExperienceOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "SuddenlyStressfulExperienceOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "SuddenlyStressfulExperienceOptionsExtremely",
    },
  ];

  const VeryUpsetStressfulExperienceOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "VeryUpsetStressfulExperienceOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "VeryUpsetStressfulExperienceOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "VeryUpsetStressfulExperienceOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "VeryUpsetStressfulExperienceOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "VeryUpsetStressfulExperienceOptionsExtremely",
    },
  ];

  const StrongPhysicalReactionStressfulExperienceOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "StrongPhysicalReactionStressfulExperienceOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "StrongPhysicalReactionStressfulExperienceOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "StrongPhysicalReactionStressfulExperienceOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "StrongPhysicalReactionStressfulExperienceOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "StrongPhysicalReactionStressfulExperienceOptionsExtremely",
    },
  ];

  const AvoidingMemoriesOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "AvoidingMemoriesOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "AvoidingMemoriesOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "AvoidingMemoriesOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "AvoidingMemoriesOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "AvoidingMemoriesOptionsExtremely",
    },
  ];

  const AvoidingExternalRemindersOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "AvoidingExternalRemindersOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "AvoidingExternalRemindersOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "AvoidingExternalRemindersOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "AvoidingExternalRemindersOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "AvoidingExternalRemindersOptionsExtremely",
    },
  ];

  const TroubleStressfulExperienceOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "TroubleStressfulExperienceOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "TroubleStressfulExperienceOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "TroubleStressfulExperienceOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "TroubleStressfulExperienceOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "TroubleStressfulExperienceOptionsExtremely",
    },
  ];

  const StrongNegativeBeliefsOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "StrongNegativeBeliefsOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "StrongNegativeBeliefsOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "StrongNegativeBeliefsOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "StrongNegativeBeliefsOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "StrongNegativeBeliefsOptionsExtremely",
    },
  ];

  const StressfulExperienceBlamingOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "StressfulExperienceBlamingOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "StressfulExperienceBlamingOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "StressfulExperienceBlamingOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "StressfulExperienceBlamingOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "StressfulExperienceBlamingOptionsExtremely",
    },
  ];

  const StrongNegativefeelingsOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "StrongNegativefeelingsOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "StrongNegativefeelingsOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "StrongNegativefeelingsOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "StrongNegativefeelingsOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "StrongNegativefeelingsOptionsExtremely",
    },
  ];

  const LossInterestActivityOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "LossInterestActivityOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "LossInterestActivityOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "LossInterestActivityOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "LossInterestActivityOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "LossInterestActivityOptionsExtremely",
    },
  ];

  const FeelingDistantPeopleOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "FeelingDistantPeopleOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "FeelingDistantPeopleOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "FeelingDistantPeopleOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "FeelingDistantPeopleOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "FeelingDistantPeopleOptionsExtremely",
    },
  ];

  const TroubleExperiencePositiveFeelingOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "TroubleExperiencePositiveFeelingOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "TroubleExperiencePositiveFeelingOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "TroubleExperiencePositiveFeelingOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "TroubleExperiencePositiveFeelingOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "TroubleExperiencePositiveFeelingOptionsExtremely",
    },
  ];

  const IrritableBehaviorOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "IrritableBehaviorOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "IrritableBehaviorOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "IrritableBehaviorOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "IrritableBehaviorOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "IrritableBehaviorOptionsExtremely",
    },
  ];

  const ManyRisksThingOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "ManyRisksThingOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "ManyRisksThingOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "ManyRisksThingOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "ManyRisksThingOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "ManyRisksThingOptionsExtremely",
    },
  ];

  const BeingWatchfulOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "BeingWatchfulOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "BeingWatchfulOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "BeingWatchfulOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "BeingWatchfulOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "BeingWatchfulOptionsExtremely",
    },
  ];

  const EasilyStartledOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "EasilyStartledOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "EasilyStartledOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "EasilyStartledOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "EasilyStartledOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "EasilyStartledOptionsExtremely",
    },
  ];

  const DifficultyConcentratingOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "DifficultyConcentratingOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "DifficultyConcentratingOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "DifficultyConcentratingOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "DifficultyConcentratingOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "DifficultyConcentratingOptionsExtremely",
    },
  ];

  const TroubleFallingAsleepOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "TroubleFallingAsleepOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "A little bit",
      name: "TroubleFallingAsleepOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "Moderately",
      name: "TroubleFallingAsleepOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "Quite a bit",
      name: "TroubleFallingAsleepOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "Extremely",
      name: "TroubleFallingAsleepOptionsExtremely",
    },
  ];

  const handleStressfulExperienceMemoriesChange = (e) => {
    setPCLValue({
      ...PCLValue,
      stressfulExperienceMemories: e.target.value,
    });
  };

  const handleStressfulExperienceChange = (e) => {
    setPCLValue({
      ...PCLValue,
      stressfulExperience: e.target.value,
      disturbingDreamsOccur: "",
    });
  };

  const handleDisturbingDreamsOccurChange = (e) => {
    setPCLValue({
      ...PCLValue,
      disturbingDreamsOccur: e.target.value,
    });
  };

  const handleSuddenlyStressfulExperienceChange = (e) => {
    setPCLValue({
      ...PCLValue,
      suddenlyStressfulExperience: e.target.value,
    });
  };

  const handleVeryUpsetStressfulExperienceChange = (e) => {
    setPCLValue({
      ...PCLValue,
      veryUpsetStressfulExperience: e.target.value,
    });
  };

  const handleStrongPhysicalReactionStressfulExperienceChange = (e) => {
    setPCLValue({
      ...PCLValue,
      strongPhysicalReactionStressfulExperience: e.target.value,
    });
  };

  const handleAvoidingMemoriesChange = (e) => {
    setPCLValue({
      ...PCLValue,
      avoidingMemories: e.target.value,
    });
  };

  const handleAvoidingExternalRemindersChange = (e) => {
    setPCLValue({
      ...PCLValue,
      avoidingExternalReminders: e.target.value,
      describeSituations: "",
      avoidActivities: "",
    });
  };

  const handleTroubleStressfulExperienceChange = (e) => {
    setPCLValue({
      ...PCLValue,
      troubleStressfulExperience: e.target.value,
    });
  };

  const handleStrongNegativeBeliefsChange = (e) => {
    setPCLValue({
      ...PCLValue,
      strongNegativeBeliefs: e.target.value,
    });
  };

  const handleStressfulExperienceBlamingChange = (e) => {
    setPCLValue({
      ...PCLValue,
      stressfulExperienceBlaming: e.target.value,
    });
  };

  const handleStrongNegativefeelingsChange = (e) => {
    setPCLValue({
      ...PCLValue,
      strongNegativefeelings: e.target.value,
    });
  };

  const handleLossInterestActivityChange = (e) => {
    setPCLValue({
      ...PCLValue,
      lossInterestActivity: e.target.value,
    });
  };

  const handleFeelingDistantPeopleChange = (e) => {
    setPCLValue({
      ...PCLValue,
      feelingDistantPeople: e.target.value,
    });
  };

  const handleTroubleExperiencePositiveFeelingChange = (e) => {
    setPCLValue({
      ...PCLValue,
      troubleExperiencePositiveFeeling: e.target.value,
    });
  };

  const handleIrritableBehaviorChange = (e) => {
    setPCLValue({
      ...PCLValue,
      irritableBehavior: e.target.value,
    });
  };

  const handleManyRisksThingChange = (e) => {
    setPCLValue({
      ...PCLValue,
      manyRisksThing: e.target.value,
    });
  };

  const handleBeingWatchfulChange = (e) => {
    setPCLValue({
      ...PCLValue,
      beingWatchful: e.target.value,
    });
  };

  const handleEasilyStartledChange = (e) => {
    setPCLValue({
      ...PCLValue,
      easilyStartled: e.target.value,
    });
  };

  const handleDifficultyConcentratingChange = (e) => {
    setPCLValue({
      ...PCLValue,
      difficultyConcentrating: e.target.value,
    });
  };

  const handleTroubleFallingAsleepChange = (e) => {
    setPCLValue({
      ...PCLValue,
      troubleFallingAsleep: e.target.value,
    });
  };

  const handleCurrentRelatedSymptomsSelect = (event) => {
    setPCLValue({
      ...PCLValue,
      currentRelatedSymptoms: event.target.value,
    });
  };

  const handleChange = (event) => {
    setPCLValue({
      ...PCLValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setPCL5(PCLValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validatePCL(PCLValue);
    setErrors(errors);

    // if (isValid) {
    //   setPCL5(PCLValue);
    //   setCurrentSection(currentSection + 1);
    // }
    setCurrentSection(currentSection + 1);
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Current Symptoms
      </p>
      <p className="bg-blue-400 w-[65%] mx-auto p-1 text-lg text-white rounded-lg mt-3 shadow-lg">
        PCL-5
      </p>
      <div className="bg-lime-400 w-[65%] mx-auto p-1 text-lg text-white rounded-lg mt-3 shadow-lg">
        <p>
          Below is a list of problems that people sometimes have in response to
          a very stressful experience.
        </p>
        <p>
          Please read each problem carefully and then indicate how much you have
          been bothered by that problem in the past month.
        </p>
      </div>

      <form>
        <CardField
          title="Repeated, disturbing, and unwanted memories of the stressful experience?"
          type="radio"
          options={StressfulExperienceMemoriesOptions}
          onChange={handleStressfulExperienceMemoriesChange}
          checked={PCLValue?.stressfulExperienceMemories}
          errors={errors.stressfulExperienceMemories}
        />

        <CardField
          title="Repeated, disturbing dreams of the stressful experience?"
          type="radio"
          options={StressfulExperienceOptions}
          onChange={handleStressfulExperienceChange}
          checked={PCLValue?.stressfulExperience}
          errors={errors.stressfulExperience}
        />

        {PCLValue?.stressfulExperience !== "" &&
        PCLValue?.stressfulExperience !== "Not at all" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="These disturbing dreams occur"
                onChange={handleDisturbingDreamsOccurChange}
                options={DisturbingDreamsOccurOptions}
                checked={PCLValue?.disturbingDreamsOccur}
                error={errors.disturbingDreamsOccur}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="Suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)?"
          type="radio"
          options={SuddenlyStressfulExperienceOptions}
          onChange={handleSuddenlyStressfulExperienceChange}
          checked={PCLValue?.suddenlyStressfulExperience}
          errors={errors.suddenlyStressfulExperience}
        />

        <CardField
          title="Feeling very upset when something reminded you of the stressful experience?"
          type="radio"
          options={VeryUpsetStressfulExperienceOptions}
          onChange={handleVeryUpsetStressfulExperienceChange}
          checked={PCLValue?.veryUpsetStressfulExperience}
          errors={errors.veryUpsetStressfulExperience}
        />

        <CardField
          title="Having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)?"
          type="radio"
          options={StrongPhysicalReactionStressfulExperienceOptions}
          onChange={handleStrongPhysicalReactionStressfulExperienceChange}
          checked={PCLValue?.strongPhysicalReactionStressfulExperience}
          errors={errors.strongPhysicalReactionStressfulExperience}
        />

        <CardField
          title="Avoiding memories, thoughts, or feelings related to the stressful experience?"
          type="radio"
          options={AvoidingMemoriesOptions}
          onChange={handleAvoidingMemoriesChange}
          checked={PCLValue?.avoidingMemories}
          errors={errors.avoidingMemories}
        />

        <CardField
          title="Avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)?"
          type="radio"
          options={AvoidingExternalRemindersOptions}
          onChange={handleAvoidingExternalRemindersChange}
          checked={PCLValue?.avoidingExternalReminders}
          errors={errors.avoidingExternalReminders}
        />
        {PCLValue?.avoidingExternalReminders !== "" &&
        PCLValue?.avoidingExternalReminders !== "Not at all" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please describe the people, places, conversations, objects, or situations you avoid:"
                onChange={handleChange}
                name="describeSituations"
                value={PCLValue.describeSituations}
                error={errors.describeSituations}
              />
            </div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="What activities do you avoid, in relation to the trauma you have experienced?"
                onChange={handleChange}
                name="avoidActivities"
                value={PCLValue.avoidActivities}
                error={errors.avoidActivities}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="Trouble remembering important parts of the stressful experience? "
          type="radio"
          options={TroubleStressfulExperienceOptions}
          onChange={handleTroubleStressfulExperienceChange}
          checked={PCLValue?.troubleStressfulExperience}
          errors={errors.troubleStressfulExperience}
        />

        <CardField
          title="Having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)?"
          type="radio"
          options={StrongNegativeBeliefsOptions}
          onChange={handleStrongNegativeBeliefsChange}
          checked={PCLValue?.strongNegativeBeliefs}
          errors={errors.strongNegativeBeliefs}
        />

        <CardField
          title="Blaming yourself or someone else for the stressful experience or what happened after it?"
          type="radio"
          options={StressfulExperienceBlamingOptions}
          onChange={handleStressfulExperienceBlamingChange}
          checked={PCLValue?.stressfulExperienceBlaming}
          errors={errors.stressfulExperienceBlaming}
        />

        <CardField
          title="Having strong negative feelings such as fear, horror, anger, guilt, or shame?"
          type="radio"
          options={StrongNegativefeelingsOptions}
          onChange={handleStrongNegativefeelingsChange}
          checked={PCLValue?.strongNegativefeelings}
          errors={errors.strongNegativefeelings}
        />

        <CardField
          title="Loss of interest in activities that you used to enjoy (although this is a repeat question, please answer again)?"
          type="radio"
          options={LossInterestActivityOptions}
          onChange={handleLossInterestActivityChange}
          checked={PCLValue?.lossInterestActivity}
          errors={errors.lossInterestActivity}
        />

        <CardField
          title="Feeling distant or cut off from other people?"
          type="radio"
          options={FeelingDistantPeopleOptions}
          onChange={handleFeelingDistantPeopleChange}
          checked={PCLValue?.feelingDistantPeople}
          errors={errors.feelingDistantPeople}
        />

        <CardField
          title="Trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)?"
          type="radio"
          options={TroubleExperiencePositiveFeelingOptions}
          onChange={handleTroubleExperiencePositiveFeelingChange}
          checked={PCLValue?.troubleExperiencePositiveFeeling}
          errors={errors.troubleExperiencePositiveFeeling}
        />

        <CardField
          title="Irritable behavior, angry outbursts, or acting aggressively?"
          type="radio"
          options={IrritableBehaviorOptions}
          onChange={handleIrritableBehaviorChange}
          checked={PCLValue?.irritableBehavior}
          errors={errors.irritableBehavior}
        />

        <CardField
          title="Taking too many risks or doing things that could cause you
          harm?"
          type="radio"
          options={ManyRisksThingOptions}
          onChange={handleManyRisksThingChange}
          checked={PCLValue?.manyRisksThing}
          errors={errors.manyRisksThing}
        />

        <CardField
          title="Feeling distant or cut off from other people?"
          type="radio"
          options={BeingWatchfulOptions}
          onChange={handleBeingWatchfulChange}
          checked={PCLValue?.beingWatchful}
          errors={errors.beingWatchful}
        />

        <CardField
          title="Being “superalert” or watchful or on guard?"
          type="radio"
          options={EasilyStartledOptions}
          onChange={handleEasilyStartledChange}
          checked={PCLValue?.easilyStartled}
          errors={errors.easilyStartled}
        />

        <CardField
          title="Feeling jumpy or easily startled?"
          type="radio"
          options={DifficultyConcentratingOptions}
          onChange={handleDifficultyConcentratingChange}
          checked={PCLValue?.difficultyConcentrating}
          errors={errors.difficultyConcentrating}
        />

        <CardField
          title="Having difficulty concentrating (although this is a repeat question, please answer again)?"
          type="radio"
          options={TroubleFallingAsleepOptions}
          onChange={handleTroubleFallingAsleepChange}
          checked={PCLValue?.troubleFallingAsleep}
          errors={errors.troubleFallingAsleep}
        />

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              With zero to 1 equaling no or minimal symptoms and 10 equaling the
              most severe symptoms possible, how do you rate your current post
              trauma related symptoms?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div className="flex mt-2">
                <select
                  id="currentRelatedSymptoms"
                  className="w-[85%] ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus: outline-none"
                  value={PCLValue?.currentRelatedSymptoms}
                  onChange={handleCurrentRelatedSymptomsSelect}
                >
                  {[...Array(11)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
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

export default PCL;
