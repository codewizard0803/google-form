/** @format */

import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import { toast } from "react-toastify";

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
    PCLScore: "0",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setPCLValue(PCL5);
  }, [PCL5]);

  const StressfulExperienceMemoriesOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "StressfulExperienceMemoriesOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "StressfulExperienceMemoriesOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "StressfulExperienceMemoriesOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "StressfulExperienceMemoriesOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "StressfulExperienceMemoriesOptionsExtremely",
    },
  ];

  const StressfulExperienceOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "StressfulExperienceOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "StressfulExperienceOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "StressfulExperienceOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "StressfulExperienceOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
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
      value: "not at all",
      name: "SuddenlyStressfulExperienceOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "SuddenlyStressfulExperienceOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "SuddenlyStressfulExperienceOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "SuddenlyStressfulExperienceOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "SuddenlyStressfulExperienceOptionsExtremely",
    },
  ];

  const VeryUpsetStressfulExperienceOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "VeryUpsetStressfulExperienceOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "VeryUpsetStressfulExperienceOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "VeryUpsetStressfulExperienceOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "VeryUpsetStressfulExperienceOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "VeryUpsetStressfulExperienceOptionsExtremely",
    },
  ];

  const StrongPhysicalReactionStressfulExperienceOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "StrongPhysicalReactionStressfulExperienceOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "StrongPhysicalReactionStressfulExperienceOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "StrongPhysicalReactionStressfulExperienceOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "StrongPhysicalReactionStressfulExperienceOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "StrongPhysicalReactionStressfulExperienceOptionsExtremely",
    },
  ];

  const AvoidingMemoriesOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "AvoidingMemoriesOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "AvoidingMemoriesOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "AvoidingMemoriesOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "AvoidingMemoriesOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "AvoidingMemoriesOptionsExtremely",
    },
  ];

  const AvoidingExternalRemindersOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "AvoidingExternalRemindersOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "AvoidingExternalRemindersOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "AvoidingExternalRemindersOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "AvoidingExternalRemindersOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "AvoidingExternalRemindersOptionsExtremely",
    },
  ];

  const TroubleStressfulExperienceOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "TroubleStressfulExperienceOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "TroubleStressfulExperienceOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "TroubleStressfulExperienceOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "TroubleStressfulExperienceOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "TroubleStressfulExperienceOptionsExtremely",
    },
  ];

  const StrongNegativeBeliefsOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "StrongNegativeBeliefsOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "StrongNegativeBeliefsOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "StrongNegativeBeliefsOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "StrongNegativeBeliefsOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "StrongNegativeBeliefsOptionsExtremely",
    },
  ];

  const StressfulExperienceBlamingOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "StressfulExperienceBlamingOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "StressfulExperienceBlamingOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "StressfulExperienceBlamingOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "StressfulExperienceBlamingOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "StressfulExperienceBlamingOptionsExtremely",
    },
  ];

  const StrongNegativefeelingsOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "StrongNegativefeelingsOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "StrongNegativefeelingsOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "StrongNegativefeelingsOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "StrongNegativefeelingsOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "StrongNegativefeelingsOptionsExtremely",
    },
  ];

  const LossInterestActivityOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "LossInterestActivityOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "LossInterestActivityOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "LossInterestActivityOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "LossInterestActivityOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "LossInterestActivityOptionsExtremely",
    },
  ];

  const FeelingDistantPeopleOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "FeelingDistantPeopleOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "FeelingDistantPeopleOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "FeelingDistantPeopleOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "FeelingDistantPeopleOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "FeelingDistantPeopleOptionsExtremely",
    },
  ];

  const TroubleExperiencePositiveFeelingOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "TroubleExperiencePositiveFeelingOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "TroubleExperiencePositiveFeelingOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "TroubleExperiencePositiveFeelingOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "TroubleExperiencePositiveFeelingOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "TroubleExperiencePositiveFeelingOptionsExtremely",
    },
  ];

  const IrritableBehaviorOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "IrritableBehaviorOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "IrritableBehaviorOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "IrritableBehaviorOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "IrritableBehaviorOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "IrritableBehaviorOptionsExtremely",
    },
  ];

  const ManyRisksThingOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "ManyRisksThingOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "ManyRisksThingOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "ManyRisksThingOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "ManyRisksThingOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "ManyRisksThingOptionsExtremely",
    },
  ];

  const BeingWatchfulOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "BeingWatchfulOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "BeingWatchfulOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "BeingWatchfulOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "BeingWatchfulOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "BeingWatchfulOptionsExtremely",
    },
  ];

  const EasilyStartledOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "EasilyStartledOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "EasilyStartledOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "EasilyStartledOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "EasilyStartledOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "EasilyStartledOptionsExtremely",
    },
  ];

  const DifficultyConcentratingOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "DifficultyConcentratingOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "DifficultyConcentratingOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "DifficultyConcentratingOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "DifficultyConcentratingOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
      name: "DifficultyConcentratingOptionsExtremely",
    },
  ];

  const TroubleFallingAsleepOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "TroubleFallingAsleepOptionsNot at all",
    },
    {
      label: "A little bit",
      value: "a little bit",
      name: "TroubleFallingAsleepOptionsA little bit",
    },
    {
      label: "Moderately",
      value: "moderately",
      name: "TroubleFallingAsleepOptionsModerately",
    },
    {
      label: "Quite a bit",
      value: "quite a bit",
      name: "TroubleFallingAsleepOptionsQuite a bit",
    },
    {
      label: "Extremely",
      value: "extremely",
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

  const eachCalculateScore = (value) => {
    let eachScore = 0;
    switch (value) {
      case "not at all":
        eachScore = 0;
        break;
      case "a little bit":
        eachScore = 1;
        break;
      case "moderately":
        eachScore = 2;
        break;
      case "quite a bit":
        eachScore = 3;
        break;
      case "extremely":
        eachScore = 4;
        break;
      default:
        break;
    }

    return eachScore;
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

    const updatedPCLScore = {
      ...PCLValue,
      PCLScore:
        eachCalculateScore(PCLValue.stressfulExperienceMemories) +
        eachCalculateScore(PCLValue.stressfulExperience) +
        eachCalculateScore(PCLValue.suddenlyStressfulExperience) +
        eachCalculateScore(PCLValue.veryUpsetStressfulExperience) +
        eachCalculateScore(PCLValue.strongPhysicalReactionStressfulExperience) +
        eachCalculateScore(PCLValue.avoidingMemories) +
        eachCalculateScore(PCLValue.avoidingExternalReminders) +
        eachCalculateScore(PCLValue.troubleStressfulExperience) +
        eachCalculateScore(PCLValue.strongNegativeBeliefs) +
        eachCalculateScore(PCLValue.stressfulExperienceBlaming) +
        eachCalculateScore(PCLValue.strongNegativefeelings) +
        eachCalculateScore(PCLValue.lossInterestActivity) +
        eachCalculateScore(PCLValue.feelingDistantPeople) +
        eachCalculateScore(PCLValue.troubleExperiencePositiveFeeling) +
        eachCalculateScore(PCLValue.irritableBehavior) +
        eachCalculateScore(PCLValue.manyRisksThing) +
        eachCalculateScore(PCLValue.beingWatchful) +
        eachCalculateScore(PCLValue.irritableBehavior) +
        eachCalculateScore(PCLValue.easilyStartled) +
        eachCalculateScore(PCLValue.difficultyConcentrating) +
        eachCalculateScore(PCLValue.troubleFallingAsleep),
    };

    setPCLValue(updatedPCLScore);
    setPCL5(updatedPCLScore);
    setCurrentSection(currentSection + 1);

    // if (isValid) {
    //   const updatedPCLScore = {
    //     ...PCLValue,
    //     PCLScore:
    //       eachCalculateScore(PCLValue.stressfulExperienceMemories) +
    //       eachCalculateScore(PCLValue.stressfulExperience) +
    //       eachCalculateScore(PCLValue.suddenlyStressfulExperience) +
    //       eachCalculateScore(PCLValue.veryUpsetStressfulExperience) +
    //       eachCalculateScore(
    //         PCLValue.strongPhysicalReactionStressfulExperience
    //       ) +
    //       eachCalculateScore(PCLValue.avoidingMemories) +
    //       eachCalculateScore(PCLValue.avoidingExternalReminders) +
    //       eachCalculateScore(PCLValue.troubleStressfulExperience) +
    //       eachCalculateScore(PCLValue.strongNegativeBeliefs) +
    //       eachCalculateScore(PCLValue.stressfulExperienceBlaming) +
    //       eachCalculateScore(PCLValue.strongNegativefeelings) +
    //       eachCalculateScore(PCLValue.lossInterestActivity) +
    //       eachCalculateScore(PCLValue.feelingDistantPeople) +
    //       eachCalculateScore(PCLValue.troubleExperiencePositiveFeeling) +
    //       eachCalculateScore(PCLValue.irritableBehavior) +
    //       eachCalculateScore(PCLValue.manyRisksThing) +
    //       eachCalculateScore(PCLValue.beingWatchful) +
    //       eachCalculateScore(PCLValue.irritableBehavior) +
    //       eachCalculateScore(PCLValue.easilyStartled) +
    //       eachCalculateScore(PCLValue.difficultyConcentrating) +
    //       eachCalculateScore(PCLValue.troubleFallingAsleep),
    //   };

    //   setPCLValue(updatedPCLScore);
    //   setPCL5(updatedPCLScore);
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
        Current Symptoms
      </p>
      <div className="bg-lime-400 w-[65%] mx-auto p-1 text-lg text-white rounded-lg mt-3 shadow-lg">
        <p>
          Below is a list of problems that people sometimes have in response to
          a very stressful experience.
        </p>
        <p>
          Please read each problem carefully and then indicate how much you have
          been bothered by that problem <u>in the past month.</u>
        </p>
      </div>

      <form>
        <CardField
          title="87. Repeated, disturbing, and unwanted memories of the stressful experience?"
          type="radio"
          options={StressfulExperienceMemoriesOptions}
          onChange={handleStressfulExperienceMemoriesChange}
          checked={PCLValue?.stressfulExperienceMemories}
          errors={errors.stressfulExperienceMemories}
        />

        <CardField
          title="88. Repeated, disturbing dreams of the stressful experience?"
          type="radio"
          options={StressfulExperienceOptions}
          onChange={handleStressfulExperienceChange}
          checked={PCLValue?.stressfulExperience}
          errors={errors.stressfulExperience}
        />

        {PCLValue?.stressfulExperience !== "" &&
        PCLValue?.stressfulExperience !== "not at all" ? (
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
          title="89. Suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)?"
          type="radio"
          options={SuddenlyStressfulExperienceOptions}
          onChange={handleSuddenlyStressfulExperienceChange}
          checked={PCLValue?.suddenlyStressfulExperience}
          errors={errors.suddenlyStressfulExperience}
        />

        <CardField
          title="90. Feeling very upset when something reminded you of the stressful experience?"
          type="radio"
          options={VeryUpsetStressfulExperienceOptions}
          onChange={handleVeryUpsetStressfulExperienceChange}
          checked={PCLValue?.veryUpsetStressfulExperience}
          errors={errors.veryUpsetStressfulExperience}
        />

        <CardField
          title="91. Having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)?"
          type="radio"
          options={StrongPhysicalReactionStressfulExperienceOptions}
          onChange={handleStrongPhysicalReactionStressfulExperienceChange}
          checked={PCLValue?.strongPhysicalReactionStressfulExperience}
          errors={errors.strongPhysicalReactionStressfulExperience}
        />

        <CardField
          title="92. Avoiding memories, thoughts, or feelings related to the stressful experience?"
          type="radio"
          options={AvoidingMemoriesOptions}
          onChange={handleAvoidingMemoriesChange}
          checked={PCLValue?.avoidingMemories}
          errors={errors.avoidingMemories}
        />

        <CardField
          title="93. Avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)?"
          type="radio"
          options={AvoidingExternalRemindersOptions}
          onChange={handleAvoidingExternalRemindersChange}
          checked={PCLValue?.avoidingExternalReminders}
          errors={errors.avoidingExternalReminders}
        />
        {PCLValue?.avoidingExternalReminders !== "" &&
        PCLValue?.avoidingExternalReminders !== "not at all" ? (
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
          title="94. Trouble remembering important parts of the stressful experience?"
          type="radio"
          options={TroubleStressfulExperienceOptions}
          onChange={handleTroubleStressfulExperienceChange}
          checked={PCLValue?.troubleStressfulExperience}
          errors={errors.troubleStressfulExperience}
        />

        <CardField
          title="95. Having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)?"
          type="radio"
          options={StrongNegativeBeliefsOptions}
          onChange={handleStrongNegativeBeliefsChange}
          checked={PCLValue?.strongNegativeBeliefs}
          errors={errors.strongNegativeBeliefs}
        />

        <CardField
          title="96. Blaming yourself or someone else for the stressful experience or what happened after it?"
          type="radio"
          options={StressfulExperienceBlamingOptions}
          onChange={handleStressfulExperienceBlamingChange}
          checked={PCLValue?.stressfulExperienceBlaming}
          errors={errors.stressfulExperienceBlaming}
        />

        <CardField
          title="97. Having strong negative feelings such as fear, horror, anger, guilt, or shame?"
          type="radio"
          options={StrongNegativefeelingsOptions}
          onChange={handleStrongNegativefeelingsChange}
          checked={PCLValue?.strongNegativefeelings}
          errors={errors.strongNegativefeelings}
        />

        <CardField
          title="98. Loss of interest in activities that you used to enjoy (although this is a repeat question, please answer again)?"
          type="radio"
          options={LossInterestActivityOptions}
          onChange={handleLossInterestActivityChange}
          checked={PCLValue?.lossInterestActivity}
          errors={errors.lossInterestActivity}
        />

        <CardField
          title="99. Feeling distant or cut off from other people?"
          type="radio"
          options={FeelingDistantPeopleOptions}
          onChange={handleFeelingDistantPeopleChange}
          checked={PCLValue?.feelingDistantPeople}
          errors={errors.feelingDistantPeople}
        />

        <CardField
          title="100. Trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)?"
          type="radio"
          options={TroubleExperiencePositiveFeelingOptions}
          onChange={handleTroubleExperiencePositiveFeelingChange}
          checked={PCLValue?.troubleExperiencePositiveFeeling}
          errors={errors.troubleExperiencePositiveFeeling}
        />

        <CardField
          title="101. Irritable behavior, angry outbursts, or acting aggressively?"
          type="radio"
          options={IrritableBehaviorOptions}
          onChange={handleIrritableBehaviorChange}
          checked={PCLValue?.irritableBehavior}
          errors={errors.irritableBehavior}
        />

        <CardField
          title="102. Taking too many risks or doing things that could cause you harm?"
          type="radio"
          options={ManyRisksThingOptions}
          onChange={handleManyRisksThingChange}
          checked={PCLValue?.manyRisksThing}
          errors={errors.manyRisksThing}
        />

        <CardField
          title="103. Being “superalert” or watchful or on guard?"
          type="radio"
          options={BeingWatchfulOptions}
          onChange={handleBeingWatchfulChange}
          checked={PCLValue?.beingWatchful}
          errors={errors.beingWatchful}
        />

        <CardField
          title="104. Feeling jumpy or easily startled?"
          type="radio"
          options={EasilyStartledOptions}
          onChange={handleEasilyStartledChange}
          checked={PCLValue?.easilyStartled}
          errors={errors.easilyStartled}
        />

        <CardField
          title="105. Having difficulty concentrating (although this is a repeat question, please answer again)?"
          type="radio"
          options={DifficultyConcentratingOptions}
          onChange={handleDifficultyConcentratingChange}
          checked={PCLValue?.difficultyConcentrating}
          errors={errors.difficultyConcentrating}
        />

        <CardField
          title="106. Trouble falling or staying asleep (although this is a repeat question, please answer again)?"
          type="radio"
          options={TroubleFallingAsleepOptions}
          onChange={handleTroubleFallingAsleepChange}
          checked={PCLValue?.troubleFallingAsleep}
          errors={errors.troubleFallingAsleep}
        />

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              107. With zero to 1 equaling no or minimal symptoms and 10
              equaling the most severe symptoms possible, how do you rate your
              current post trauma related symptoms?
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
