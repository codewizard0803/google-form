/** @format */

import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import { toast } from "react-toastify";
import classnames from "classnames";

import CardField from "../../common/CardField";
import RadioFollowUp from "../../common/RadioFollowUp";
import useGlobalContext from "../../../hooks/useGlobalContext";
import validatePHQ from "../../../validation/validatePHQ";
import TextFollowUp from "../../common/TextFollowUp";

const PHQ = ({ currentSection, setCurrentSection }) => {
  const { PHQ9, setPHQ9 } = useGlobalContext();
  const [errors, setErrors] = useState({});

  const [PHQValue, setPHQValue] = useState({
    interestThing: "",
    previouslyEnjoyable: "",
    feelingDepressed: "",
    depressiveSymptomsImproved: "",
    oftenFeelDepressed: "",
    experienceDepression: "",
    troubleFallingAsleep: "",
    wakeUpTimes: "",
    stayAwakeLong: "",
    awakeSleepReason: [],
    totalSleepTimes: "",
    feelingEnergy: "",
    poorAppetite: "",
    recentlyWeightPounds: "",
    weightGainLostLong: "",
    yourselfFeelingBad: "",
    troubleConCentratingThing: "",
    fidgetyMoving: "",
    betterOffDeadYourself: "",
    deadWishWakeUp: "",
    killingYourself: "",
    killMethod: "",
    actingIntention: "",
    killIntentionCarryout: "",
    preparedAnythingEndYourlife: "",
    hurtingAnyone: "",
    currentDepressiveSymptoms: "0",
    phqScore: "0",
    fallASleep: "",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setPHQValue(PHQ9);
  }, [PHQ9]);

  const FallASleepOptions = [
    {
      label: "0-20 minutes",
      value: "0-20 minutes",
      name: "FallASleep0-20 minutes",
    },
    {
      label: "20-60 minutes",
      value: "20-60 minutes",
      name: "FallASleep20-60 minutes",
    },
    {
      label: "1-2 hours",
      value: "1-2 hours",
      name: "FallASleep1-2 hours",
    },
    {
      label: "Several hours",
      value: "several hours",
      name: "FallASleepseveral hours",
    },
    {
      label: "I am unable to sleep at all",
      value: "I am unable to sleep at all",
      name: "FallASleepI am unable to sleep at all",
    },
    {
      label: "Other",
      value: "other",
      name: "FallASleepother",
    },
  ];

  const InterestThingOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "interstThingNot at all",
    },
    {
      label: "Several Days",
      value: "several days",
      name: "interstThingSeveral Days",
    },
    {
      label: "More than half the days",
      value: "more than half the days",
      name: "interstThingMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "nearly every day",
      name: "interstThingNearly every day",
    },
  ];

  const FeelingDepressedOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "FeelingDepressedNot at all",
    },
    {
      label: "Several Days",
      value: "several days",
      name: "FeelingDepressedSeveral Days",
    },
    {
      label: "More than half the days",
      value: "more than half the days",
      name: "FeelingDepressedMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "nearly every day",
      name: "FeelingDepressedNearly every day",
    },
  ];

  const DepressiveSymptomsImprovedOptions = [
    {
      label: "Improved",
      value: "improved",
      name: "DepressiveSymptomsImprovedOptionsImproved",
    },
    {
      label: "Gotten worse",
      value: "gotten worse",
      name: "DepressiveSymptomsImprovedOptionsGotten worse",
    },
    {
      label: "Stayed the same",
      value: "stayed the same",
      name: "DepressiveSymptomsImprovedOptionsStayed the same",
    },
    {
      label: "N/A",
      value: "N/A",
      name: "DepressiveSymptomsImprovedOptionsN/A",
    },
  ];

  const OftenFeelDepressedOptions = [
    {
      label: "Part of some days",
      value: "part of some days",
      name: "OftenFeelDepressedOptionsPart of some days",
    },
    {
      label: "Part of every day",
      value: "part of every day",
      name: "OftenFeelDepressedOptionsPart of every day",
    },
    {
      label: "Several days per week",
      value: "several days per week",
      name: "OftenFeelDepressedOptionsSeveral days per week",
    },
    {
      label: "All day every day",
      value: "all day every day",
      name: "OftenFeelDepressedOptionsAll day every day",
    },
    {
      label: "Other",
      value: "other",
      name: "OftenFeelDepressedOptionsOther",
    },
  ];

  const ExperienceDepressionOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "ExperienceDepressionOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "ExperienceDepressionOptionsNo",
    },
    {
      label: "N/A",
      value: "N/A",
      name: "ExperienceDepressionOptionsN/A",
    },
  ];

  const TroubleFallingAsleepOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "TroubleFallingAsleepOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "several days",
      name: "TroubleFallingAsleepOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "more than half the days",
      name: "TroubleFallingAsleepOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "nearly every day",
      name: "TroubleFallingAsleepOptionsNearly every day",
    },
  ];

  const WakeUpTimesOptions = [
    {
      label: "0",
      value: "zero",
      name: "WakeUpTimesOptions0",
    },
    {
      label: "1",
      value: "one",
      name: "WakeUpTimesOptions1",
    },
    {
      label: "2",
      value: "two",
      name: "WakeUpTimesOptions2",
    },
    {
      label: "3",
      value: "three",
      name: "WakeUpTimesOptions3",
    },
    {
      label: "4",
      value: "four",
      name: "WakeUpTimesOptions4",
    },
    {
      label: "5",
      value: "five",
      name: "WakeUpTimesOptions5",
    },
    {
      label: "6",
      value: "six",
      name: "WakeUpTimesOptions6",
    },
    {
      label: "7",
      value: "seven",
      name: "WakeUpTimesOptions7",
    },
    {
      label: "8",
      value: "eight",
      name: "WakeUpTimesOptions8",
    },
    {
      label: "9",
      value: "nine",
      name: "WakeUpTimesOptions9",
    },
    {
      label: "10",
      value: "ten",
      name: "WakeUpTimesOptions10",
    },
  ];

  const StayAwakeLongOptions = [
    {
      label: "Less than 30 minutes",
      value: "less than 30 minutes",
      name: "StayAwakeLongOptionsLess than 30 minutes",
    },
    {
      label: "30 minutes to 1 hour",
      value: "30 minutes to 1 hour",
      name: "StayAwakeLongOptions30 minutes to 1 hour",
    },
    {
      label: "1-2 hours",
      value: "1-2 hours",
      name: "StayAwakeLongOptions1-2 hours",
    },
    {
      label: "3-4 hours",
      value: "3-4 hours",
      name: "StayAwakeLongOptions3-4 hours",
    },
    {
      label: "Once I wake up I never go back to sleep",
      value: "once I wake up I never go back to sleep",
      name: "StayAwakeLongOptionsOnce I wake up I never go back to sleep",
    },
    {
      label: "Other",
      value: "other",
      name: "StayAwakeLongOptionsOther",
    },
  ];

  const AwakeSleepReasonOptions = [
    {
      label: "Physical pain",
      value: "physical pain",
      name: "Physical painAwakeSleepReasonOptions",
    },
    {
      label: "Anxiety",
      value: "anxiety",
      name: "AwakeSleepReasonOptionsAnxiety",
    },
    {
      label: "Worrying",
      value: "worrying",
      name: "AwakeSleepReasonOptionsWorrying",
    },
    {
      label: "Depression",
      value: "depression",
      name: "AwakeSleepReasonOptionsDepression",
    },
    {
      label: "Environmental noise",
      value: "environmental noise",
      name: "AwakeSleepReasonOptionsEnvironmental noise",
    },
    {
      label: "Other",
      value: "other",
      name: "AwakeSleepReasonOptionsOther",
    },
  ];

  const TotalSleepTimesOptions = [
    {
      label: "0-3 hours",
      value: "0-3 hours",
      name: "TotalSleepTimesOptions0-3 hours",
    },
    {
      label: "4-6 hours",
      value: "4-6 hours",
      name: "TotalSleepTimesOptions4-6 hours",
    },
    {
      label: "7-9 hours",
      value: "7-9 hours",
      name: "TotalSleepTimesOptions7-9 hours",
    },
    {
      label: "10+ hours",
      value: "10+ hours",
      name: "TotalSleepTimesOptions10+ hours",
    },
  ];

  const FeelingEnergyOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "FeelingEnergyOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "several days",
      name: "FeelingEnergyOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "more than half the days",
      name: "FeelingEnergyOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "nearly every day",
      name: "FeelingEnergyOptionsNearly every day",
    },
  ];

  const PoorAppetiteOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "PoorAppetiteOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "several days",
      name: "PoorAppetiteOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "more than half the days",
      name: "PoorAppetiteOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "nearly every day",
      name: "PoorAppetiteOptionsNearly every day",
    },
  ];

  const RecentlyWeightPoundsOptions = [
    {
      label: "Gained 0-10",
      value: "gained 0-10",
      name: "RecentlyWeightPoundsOptionsGained 0-10",
    },
    {
      label: "Gained 11-25",
      value: "gained 11-25",
      name: "RecentlyWeightPoundsOptionsGained 11-25",
    },
    {
      label: "Gained 26-35",
      value: "gained 26-35",
      name: "RecentlyWeightPoundsOptionsGained 26-35",
    },
    {
      label: "Gained 36-50+",
      value: "gained 36-50+",
      name: "RecentlyWeightPoundsOptionsGained 36-50+",
    },
    {
      label: "Lost 0-10",
      value: "lost 0-10",
      name: "RecentlyWeightPoundsOptionsLost 0-10",
    },
    {
      label: "Lost 11-25",
      value: "lost 11-25",
      name: "RecentlyWeightPoundsOptionsLost 11-25",
    },
    {
      label: "Lost 26-35",
      value: "lost 26-35",
      name: "RecentlyWeightPoundsOptionsLost 26-35",
    },
    {
      label: "Lost 36-50+",
      value: "lost 36-50+",
      name: "RecentlyWeightPoundsOptionsLost 36-50+",
    },
  ];

  const WeightGainLostLongOptions = [
    {
      label: "Several days",
      value: "several days",
      name: "WeightGainLostLongOptionsSeveral days",
    },
    {
      label: "Several weeks",
      value: "several weeks",
      name: "WeightGainLostLongOptionsSeveral weeks",
    },
    {
      label: "1-3 months",
      value: "1-3 months",
      name: "WeightGainLostLongOptions1-3 months",
    },
    {
      label: "4-6 months",
      value: "4-6 months",
      name: "WeightGainLostLongOptions4-6 months",
    },
    {
      label: "7-11 months",
      value: "7-11 months",
      name: "WeightGainLostLongOptions7-11 months",
    },
    {
      label: "12+ months",
      value: "12+ months",
      name: "WeightGainLostLongOptions12+ months",
    },
  ];

  const YourselfFeelingBadOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "YourselfFeelingBadOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "several days",
      name: "YourselfFeelingBadOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "more than half the days",
      name: "YourselfFeelingBadOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "nearly every day",
      name: "YourselfFeelingBadOptionsNearly every day",
    },
  ];

  const TroubleConCentratingThingOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "TroubleConCentratingThingOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "several days",
      name: "TroubleConCentratingThingOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "more than half the days",
      name: "TroubleConCentratingThingOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "nearly every day",
      name: "TroubleConCentratingThingOptionsNearly every day",
    },
  ];

  const FidgetyMovingOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "FidgetyMovingOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "several days",
      name: "FidgetyMovingOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "more than half the days",
      name: "FidgetyMovingOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "nearly every day",
      name: "FidgetyMovingOptionsNearly every day",
    },
  ];

  const BetterOffDeadYourselfOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "BetterOffDeadYourselfOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "several days",
      name: "BetterOffDeadYourselfOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "more than half the days",
      name: "BetterOffDeadYourselfOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "nearly every day",
      name: "BetterOffDeadYourselfOptionsNearly every day",
    },
  ];

  const DeadWishWakeUpOptions = [
    {
      label: "Not at all",
      value: "not at all",
      name: "DeadWishWakeUpOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "several days",
      name: "DeadWishWakeUpOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "more than half the days",
      name: "DeadWishWakeUpOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "nearly every day",
      name: "DeadWishWakeUpOptionsNearly every day",
    },
  ];
  const KillingYourselfOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "KillingYourselfOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "KillingYourselfOptionsNo",
    },
    {
      label: "Unsure",
      value: "Unsure",
      name: "KillingYourselfOptionsUnsure",
    },
  ];

  const KillMethodOptions = [
    { label: "Yes", value: "Yes", name: "KillMethodOptionsYes" },
    { label: "No", value: "No", name: "KillMethodOptionsNo" },
    { label: "Unsure", value: "Unsure", name: "KillMethodOptionsUnsure" },
  ];

  const ActingIntentionOptions = [
    { label: "Yes", value: "Yes", name: "ActingIntentionOptionsYes" },
    { label: "No", value: "No", name: "ActingIntentionOptionsNo" },
    { label: "Unsure", value: "Unsure", name: "ActingIntentionOptionsUnsure" },
  ];

  const KillIntentionCarryoutOptions = [
    { label: "Yes", value: "Yes", name: "KillIntentionCarryoutOptionsYes" },
    { label: "No", value: "No", name: "KillIntentionCarryoutOptionsNo" },
    {
      label: "Unsure",
      value: "Unsure",
      name: "KillIntentionCarryoutOptionsUnsure",
    },
  ];

  const PreparedAnythingEndYourlifeOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "PreparedAnythingEndYourlifeOptionsYes",
    },
    { label: "No", value: "No", name: "PreparedAnythingEndYourlifeOptionsNo" },
    {
      label: "Unsure",
      value: "Unsure",
      name: "PreparedAnythingEndYourlifeOptionsUnsure",
    },
  ];

  const HurtingAnyoneOptions = [
    { label: "Yes", value: "Yes", name: "HurtingAnyoneOptionsYes" },
    { label: "No", value: "No", name: "HurtingAnyoneOptionsNo" },
  ];

  const eachCalculateScore = (value) => {
    let eachScore = 0;
    switch (value) {
      case "not at all":
        eachScore = 0;
        break;
      case "several days":
        eachScore = 1;
        break;
      case "more than half the days":
        eachScore = 2;
        break;
      case "nearly every day":
        eachScore = 3;
        break;
      default:
        break;
    }

    return eachScore;
  };

  const handleInterestThingChange = (event) => {
    setPHQValue({
      ...PHQValue,
      interestThing: event.target.value,
      previouslyEnjoyable: "",
    });
  };

  const handleFeelingDepressedChange = (event) => {
    setPHQValue({
      ...PHQValue,
      feelingDepressed: event.target.value,
      depressiveSymptomsImproved: "",
      oftenFeelDepressed: "",
      experienceDepression: "",
    });
  };

  const handleDepressiveSymptomsImprovedChange = (event) => {
    setPHQValue({
      ...PHQValue,
      depressiveSymptomsImproved: event.target.value,
    });
  };

  const handleOftenFeelDepressedChange = (event) => {
    setPHQValue({
      ...PHQValue,
      oftenFeelDepressed: event.target.value,
    });
  };

  const handleExperienceDepressionChange = (event) => {
    setPHQValue({
      ...PHQValue,
      experienceDepression: event.target.value,
    });
  };

  const handleTroubleFallingAsleepChange = (event) => {
    setPHQValue({
      ...PHQValue,
      troubleFallingAsleep: event.target.value,
      wakeUpTimes: "",
      stayAwakeLong: "",
      awakeSleepReason: "",
      totalSleepTimes: "",
    });
  };

  const handleTotalSleepTimesChange = (event) => {
    setPHQValue({
      ...PHQValue,
      totalSleepTimes: event.target.value,
    });
  };

  const handleWakeUpTimesChange = (event) => {
    setPHQValue({
      ...PHQValue,
      wakeUpTimes: event.target.value,
    });
  };

  const handleStayAwakeLongChange = (event) => {
    setPHQValue({
      ...PHQValue,
      stayAwakeLong: event.target.value,
    });
  };

  const handleFallASleepChange = (event) => {
    setPHQValue({
      ...PHQValue,
      fallASleep: event.target.value,
    });
  };

  const handleAwakeSleepReasonChange = (event) => {
    const itemName = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...PHQValue?.awakeSleepReason];

    if (isChecked) {
      newCheckedItems.push(itemName);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemName);
    }

    setPHQValue({
      ...PHQValue,
      awakeSleepReason: newCheckedItems,
    });
  };

  const handleFeelingEnergyChange = (event) => {
    setPHQValue({
      ...PHQValue,
      feelingEnergy: event.target.value,
    });
  };

  const handlePoorAppetiteChange = (event) => {
    setPHQValue({
      ...PHQValue,
      poorAppetite: event.target.value,
      recentlyWeightPounds: "",
      weightGainLostLong: "",
    });
  };

  const handleRecentlyWeightPoundsChange = (event) => {
    setPHQValue({
      ...PHQValue,
      recentlyWeightPounds: event.target.value,
    });
  };

  const handleWeightGainLostLongChange = (event) => {
    setPHQValue({
      ...PHQValue,
      weightGainLostLong: event.target.value,
    });
  };

  const handleYourselfFeelingBadChange = (event) => {
    setPHQValue({
      ...PHQValue,
      yourselfFeelingBad: event.target.value,
    });
  };

  const handleTroubleConCentratingThingChange = (event) => {
    setPHQValue({
      ...PHQValue,
      troubleConCentratingThing: event.target.value,
    });
  };

  const handleFidgetyMovingChange = (event) => {
    setPHQValue({
      ...PHQValue,
      fidgetyMoving: event.target.value,
    });
  };

  const handleBetterOffDeadYourselfChange = (event) => {
    setPHQValue({
      ...PHQValue,
      betterOffDeadYourself: event.target.value,
    });
  };

  const handleDeadWishWakeUpChange = (event) => {
    setPHQValue({
      ...PHQValue,
      deadWishWakeUp: event.target.value,
    });
  };

  const handleKillingYourselfChange = (event) => {
    setPHQValue({
      ...PHQValue,
      killingYourself: event.target.value,
      killMethod: "",
      actingIntention: "",
      killIntentionCarryout: "",
    });
  };

  const handleKillMethodChange = (event) => {
    setPHQValue({
      ...PHQValue,
      killMethod: event.target.value,
      actingIntention: "",
      killIntentionCarryout: "",
    });
  };

  const handleActingIntentionChange = (event) => {
    setPHQValue({
      ...PHQValue,
      actingIntention: event.target.value,
      killIntentionCarryout: "",
    });
  };

  const handleKillIntentionCarryoutChange = (event) => {
    setPHQValue({ ...PHQValue, killIntentionCarryout: event.target.value });
  };

  const handlePreparedAnythingEndYourlifeChange = (event) => {
    setPHQValue({
      ...PHQValue,
      preparedAnythingEndYourlife: event.target.value,
    });
  };

  const handleHurtingAnyoneChange = (event) => {
    setPHQValue({ ...PHQValue, hurtingAnyone: event.target.value });
  };

  const handleCurrentDepressiveSymptomsSelect = (event) => {
    setPHQValue({ ...PHQValue, currentDepressiveSymptoms: event.target.value });
  };

  const handleChange = (event) => {
    setPHQValue({
      ...PHQValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setPHQ9(PHQValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validatePHQ(PHQValue);
    setErrors(errors);

    const updatedPHQScore = {
      ...PHQValue,
      phqScore:
        eachCalculateScore(PHQValue?.interestThing) +
        eachCalculateScore(PHQValue?.feelingDepressed) +
        eachCalculateScore(PHQValue?.troubleFallingAsleep) +
        eachCalculateScore(PHQValue?.feelingEnergy) +
        eachCalculateScore(PHQValue?.poorAppetite) +
        eachCalculateScore(PHQValue?.yourselfFeelingBad) +
        eachCalculateScore(PHQValue?.troubleConCentratingThing) +
        eachCalculateScore(PHQValue?.fidgetyMoving) +
        eachCalculateScore(PHQValue?.betterOffDeadYourself),
    };
    setPHQValue(updatedPHQScore);
    setPHQ9(updatedPHQScore);
    setCurrentSection(currentSection + 1);

    // if (isValid) {
    //   const updatedPHQScore = {
    //     ...PHQValue,
    //     phqScore:
    //       eachCalculateScore(PHQValue?.interestThing) +
    //       eachCalculateScore(PHQValue?.feelingDepressed) +
    //       eachCalculateScore(PHQValue?.troubleFallingAsleep) +
    //       eachCalculateScore(PHQValue?.feelingEnergy) +
    //       eachCalculateScore(PHQValue?.poorAppetite) +
    //       eachCalculateScore(PHQValue?.yourselfFeelingBad) +
    //       eachCalculateScore(PHQValue?.troubleConCentratingThing) +
    //       eachCalculateScore(PHQValue?.fidgetyMoving) +
    //       eachCalculateScore(PHQValue?.betterOffDeadYourself),
    //   };
    //   setPHQValue(updatedPHQScore);
    //   setPHQ9(updatedPHQScore);
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
      <p className="bg-lime-400 w-[65%] mx-auto p-1 text-lg text-white rounded-lg mt-3 shadow-lg">
        How often have you been bothered by the following over the{" "}
        <u>past 2 weeks?</u>
      </p>

      <form>
        <CardField
          title="64. Little interest or pleasure in doing things?"
          type="radio"
          options={InterestThingOptions}
          onChange={handleInterestThingChange}
          checked={PHQValue?.interestThing}
          errors={errors.interestThing}
        />

        {PHQValue?.interestThing !== "" &&
        PHQValue?.interestThing !== "not at all" ? (
          <div className="w-[68%] mx-auto mt-3">
            <TextFollowUp
              title="If you have lost the ability to enjoy activities that were previously enjoyable, please list those activities that you used to but no longer enjoy."
              onChange={handleChange}
              name="previouslyEnjoyable"
              value={PHQValue?.previouslyEnjoyable}
              error={errors.previouslyEnjoyable}
            />
          </div>
        ) : null}

        <CardField
          title="65. Feeling down, depressed, or hopeless?"
          type="radio"
          options={FeelingDepressedOptions}
          onChange={handleFeelingDepressedChange}
          checked={PHQValue?.feelingDepressed}
          errors={errors.feelingDepressed}
        />

        {PHQValue?.feelingDepressed !== "" &&
        PHQValue?.feelingDepressed !== "not at all" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="Have your depressive symptoms improved or become worse since they started?"
                onChange={handleDepressiveSymptomsImprovedChange}
                options={DepressiveSymptomsImprovedOptions}
                checked={PHQValue?.depressiveSymptomsImproved}
                error={errors.depressiveSymptomsImproved}
              />
            </div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="How often do you feel depressed during this or your most recent episode?"
                onChange={handleOftenFeelDepressedChange}
                options={OftenFeelDepressedOptions}
                checked={PHQValue?.oftenFeelDepressed}
                error={errors.oftenFeelDepressed}
              />
            </div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="When you experience depression, does it last a majority of the day for most days of the week?"
                onChange={handleExperienceDepressionChange}
                options={ExperienceDepressionOptions}
                checked={PHQValue?.experienceDepression}
                error={errors.experienceDepression}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="66. Over the last 2 weeks, have you had trouble falling or staying asleep, or sleeping too much?"
          type="radio"
          options={TroubleFallingAsleepOptions}
          onChange={handleTroubleFallingAsleepChange}
          checked={PHQValue?.troubleFallingAsleep}
          errors={errors.troubleFallingAsleep}
        />

        {PHQValue?.troubleFallingAsleep !== "" &&
        PHQValue?.troubleFallingAsleep !== "not at all" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="How long does it take you to fall asleep?"
                onChange={handleFallASleepChange}
                options={FallASleepOptions}
                checked={PHQValue?.fallASleep}
                error={errors.fallASleep}
              />
            </div>

            <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, textAlign: "left" }}>
                  How many times do you wake up per night before the time you
                  plan to wake up?
                </Typography>
                <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                <div
                  className={classnames("mt-5 p-2 flex justify-between", {
                    "border-red-500 border": errors.wakeUpTimes,
                  })}
                >
                  {WakeUpTimesOptions.map((item, index) => (
                    <div className="text-left mt-1" key={index}>
                      <label key={item.value}>
                        <input
                          type="radio"
                          value={item.value}
                          className="mr-2"
                          checked={PHQValue?.wakeUpTimes === item.value}
                          onChange={handleWakeUpTimesChange}
                        />
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>

                {errors.wakeUpTimes && (
                  <div className="text-red-500 text-left text-[12px] mt-2">
                    {errors.wakeUpTimes}
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="If trouble staying asleep, when you wake up during the night, how long do you stay awake for?"
                onChange={handleStayAwakeLongChange}
                options={StayAwakeLongOptions}
                checked={PHQValue?.stayAwakeLong}
                error={errors.stayAwakeLong}
              />
            </div>
            <CardField
              title="Do any of the following awaken you from sleep?"
              type="checkbox"
              onChange={handleAwakeSleepReasonChange}
              options={AwakeSleepReasonOptions}
              checked={PHQValue?.awakeSleepReason}
              error={errors.awakeSleepReason}
            />
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="What is the total number of hours you sleep per 24 hours?"
                onChange={handleTotalSleepTimesChange}
                options={TotalSleepTimesOptions}
                checked={PHQValue?.totalSleepTimes}
                error={errors.totalSleepTimes}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="67. Over the last 2 weeks, have you been feeling tired or having little energy?"
          type="radio"
          options={FeelingEnergyOptions}
          onChange={handleFeelingEnergyChange}
          checked={PHQValue?.feelingEnergy}
          errors={errors.feelingEnergy}
        />

        <CardField
          title="68. Over the last 2 weeks, have you had poor appetite or been overeating?"
          type="radio"
          options={PoorAppetiteOptions}
          onChange={handlePoorAppetiteChange}
          checked={PHQValue?.poorAppetite}
          errors={errors.poorAppetite}
        />
        {PHQValue?.poorAppetite !== "" &&
        PHQValue?.poorAppetite !== "not at all" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="If you have gained or lost weight recently, how many pounds have you gained or lost?"
                onChange={handleRecentlyWeightPoundsChange}
                options={RecentlyWeightPoundsOptions}
                checked={PHQValue?.recentlyWeightPounds}
                error={errors.recentlyWeightPounds}
              />
            </div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="How long did it take you to gain or lose this weight?"
                onChange={handleWeightGainLostLongChange}
                options={WeightGainLostLongOptions}
                checked={PHQValue?.weightGainLostLong}
                error={errors.weightGainLostLong}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="69. Over the last 2 weeks, have you been feeling bad about yourself — or that you are a failure or have let yourself or your family down?"
          type="radio"
          options={YourselfFeelingBadOptions}
          onChange={handleYourselfFeelingBadChange}
          checked={PHQValue?.yourselfFeelingBad}
          errors={errors.yourselfFeelingBad}
        />

        <CardField
          title="70. Over the last 2 weeks, have you had trouble concentrating on things, such as reading the newspaper or watching television?"
          type="radio"
          options={TroubleConCentratingThingOptions}
          onChange={handleTroubleConCentratingThingChange}
          checked={PHQValue?.troubleConCentratingThing}
          errors={errors.troubleConCentratingThing}
        />

        <CardField
          title="71. Over the last 2 weeks, have you been moving or speaking so slowly that other people could have noticed? Or so fidgety or restless that you have been moving a lot more than usual?"
          type="radio"
          options={FidgetyMovingOptions}
          onChange={handleFidgetyMovingChange}
          checked={PHQValue?.fidgetyMoving}
          errors={errors.fidgetyMoving}
        />

        <CardField
          title="72. Over the last 2 weeks, have you had thoughts that you would be better off dead, or thoughts of hurting yourself in some way?"
          type="radio"
          options={BetterOffDeadYourselfOptions}
          onChange={handleBetterOffDeadYourselfChange}
          checked={PHQValue?.betterOffDeadYourself}
          errors={errors.betterOffDeadYourself}
        />

        <CardField
          title="73. In the past month, have you wished you were dead or wished you could go to sleep and not wake up?"
          type="radio"
          options={DeadWishWakeUpOptions}
          onChange={handleDeadWishWakeUpChange}
          checked={PHQValue?.deadWishWakeUp}
          errors={errors.deadWishWakeUp}
        />

        <CardField
          title="74. In the past month, have you had any actual thoughts of killing yourself?"
          type="radio"
          options={KillingYourselfOptions}
          onChange={handleKillingYourselfChange}
          checked={PHQValue?.killingYourself}
          errors={errors.killingYourself}
        />

        {PHQValue?.killingYourself !== "" &&
        PHQValue?.killingYourself !== "No" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="Have you been thinking about how you might kill yourself?"
                options={KillMethodOptions}
                onChange={handleKillMethodChange}
                checked={PHQValue?.killMethod}
                error={errors.killMethod}
              />
            </div>
            {PHQValue?.killMethod !== "" && PHQValue?.killMethod !== "No" ? (
              <div>
                <div className="w-[68%] mx-auto mt-3">
                  <RadioFollowUp
                    title="Have you had these thoughts, and had some intention of acting on them?"
                    options={ActingIntentionOptions}
                    onChange={handleActingIntentionChange}
                    checked={PHQValue?.actingIntention}
                    error={errors.actingIntention}
                  />
                </div>
                {PHQValue?.actingIntention !== "" &&
                PHQValue?.actingIntention !== "No" ? (
                  <div className="w-[68%] mx-auto mt-3">
                    <RadioFollowUp
                      title="Have you started to work out or worked out the details of how to kill yourself? Do you intend to carry out this plan?"
                      options={KillIntentionCarryoutOptions}
                      onChange={handleKillIntentionCarryoutChange}
                      checked={PHQValue?.killIntentionCarryout}
                      error={errors.killIntentionCarryout}
                    />
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}

        <CardField
          title="75. Have you ever done anything, started to do anything, or prepared to do anything to end your life?"
          type="radio"
          options={PreparedAnythingEndYourlifeOptions}
          onChange={handlePreparedAnythingEndYourlifeChange}
          checked={PHQValue?.preparedAnythingEndYourlife}
          errors={errors.preparedAnythingEndYourlife}
        />

        <CardField
          title="76. Do you have thoughts of hurting anyone else?"
          type="radio"
          options={HurtingAnyoneOptions}
          onChange={handleHurtingAnyoneChange}
          checked={PHQValue?.hurtingAnyone}
          errors={errors.hurtingAnyone}
        />

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              77. With zero to 1 equaling no or minimal symptoms and 10 equaling
              the most severe symptoms possible, how do you rate your current
              depressive symptoms?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div className="flex mt-2">
                <select
                  id="depressive-Symptom"
                  className="w-[85%] ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus: outline-none"
                  value={PHQValue?.currentDepressiveSymptoms}
                  onChange={handleCurrentDepressiveSymptomsSelect}
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

export default PHQ;
