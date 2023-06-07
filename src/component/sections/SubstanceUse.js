import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";

import CardField from "../common/CardField";
import RadioFollowUp from "../common/RadioFollowUp";
import useGlobalContext from "../../hooks/useGlobalContext";
import TextField from "../common/TextField";
import validatePHQ from "../../validation/validatePHQ";
import TextFollowUp from "../common/TextFollowUp";
import CardCheckFollowUp from "../common/CardCheckFollowUp";
import validateSubstanceUse from "../../validation/validateSubstanceUse";
import CardTextFollowUp from "../common/CardTextFollowUp";

const SubstanceUse = ({ currentSection, setCurrentSection }) => {
  const { globalSubStanceUse, setGlobalSubStanceUse } = useGlobalContext();

  const [substanceUseValue, setSubstanceUseValue] = useState({
    followingSubstances: [],
    currentlySubstance: [],
    eachSubstanceList: [],
    eachSubstanceListStartedOld: [],
    toleranceFollowingSubstances: [],
    withdrawalFollowingSubstances: [],
    regardingAlcoholAnyFollowing: [],
    enrolledTreatmentProgram: "",
    completeTreatmentProgram: "",
    treatmentLastedDateFrom: "",
    treatmentLastedDateTo: "",
    remainedTreatmentClean: "",
    remainedTreatmentCleanLongest: "",
    previouslyDescribedPsychiatricClean: "",
  });

  const [errors, setErrors] = useState({});
  const [textErrors, setTextErrors] = useState({});

  useEffect(() => {
    setSubstanceUseValue(globalSubStanceUse);
  }, [globalSubStanceUse]);

  const FollowingSubstancesOptions = [
    {
      label: "Caffeine (coffee, pills, soft drinks, etc)",
      value: "Caffeine (coffee, pills, soft drinks, etc)",
      name:
        "FollowingSubstancesOptionsCaffeine (coffee, pills, soft drinks, etc)",
    },
    {
      label: "Alcohol",
      value: "Alcohol",
      name: "FollowingSubstancesOptionsAlcohol",
    },
    {
      label: "Tobaco or nicotine products",
      value: "Tobaco or nicotine products",
      name: "FollowingSubstancesOptionsTobaco or nicotine products",
    },
    {
      label: "Cocaine",
      value: "Cocaine",
      name: "FollowingSubstancesOptionsCocaine",
    },
    {
      label: "Heroin",
      value: "Heroin",
      name: "FollowingSubstancesOptionsHeroin",
    },
    {
      label: "Prescription pain medications",
      value: "Prescription pain medications",
      name: "FollowingSubstancesOptionsPrescription pain medications",
    },
    {
      label: "Marijuana",
      value: "Marijuana",
      name: "FollowingSubstancesOptionsMarijuana",
    },
    {
      label: "Methamphetamine or other stimulants",
      value: "Methamphetamine or other stimulants",
      name: "FollowingSubstancesOptionsMethamphetamine or other stimulants",
    },
    {
      label: "MDMA, PCP, or other club drugs",
      value: "MDMA, PCP, or other club drugs",
      name: "FollowingSubstancesOptionsMDMA, PCP, or other club drugs",
    },
    {
      label: "LSD or other hallucinogens",
      value: "LSD or other hallucinogens",
      name: "FollowingSubstancesOptionsLSD or other hallucinogens",
    },
    { label: "Other", value: "Other", name: "FollowingSubstancesOptionsOther" },
  ];

  const CurrentlySubstanceOptions = [
    {
      label: "Caffeine (coffee, pills, soft drinks, etc)",
      value: "Caffeine (coffee, pills, soft drinks, etc)",
      name:
        "CurrentlySubstanceOptionsCaffeine (coffee, pills, soft drinks, etc)",
    },
    {
      label: "Alcohol",
      value: "Alcohol",
      name: "CurrentlySubstanceOptionsAlcohol",
    },
    {
      label: "Tobaco or nicotine products",
      value: "Tobaco or nicotine products",
      name: "CurrentlySubstanceOptionsTobaco or nicotine products",
    },
    {
      label: "Cocaine",
      value: "Cocaine",
      name: "CurrentlySubstanceOptionsCocaine",
    },
    {
      label: "Heroin",
      value: "Heroin",
      name: "CurrentlySubstanceOptionsHeroin",
    },
    {
      label: "Prescription pain medications",
      value: "Prescription pain medications",
      name: "CurrentlySubstanceOptionsPrescription pain medications",
    },
    {
      label: "Marijuana",
      value: "Marijuana",
      name: "CurrentlySubstanceOptionsMarijuana",
    },
    {
      label: "Methamphetamine or other stimulants",
      value: "Methamphetamine or other stimulants",
      name: "CurrentlySubstanceOptionsMethamphetamine or other stimulants",
    },
    {
      label: "MDMA, PCP, or other club drugs",
      value: "MDMA, PCP, or other club drugs",
      name: "CurrentlySubstanceOptionsMDMA, PCP, or other club drugs",
    },
    {
      label: "LSD or other hallucinogens",
      value: "LSD or other hallucinogens",
      name: "CurrentlySubstanceOptionsLSD or other hallucinogens",
    },
  ];

  const EachSubstanceOptions = [
    { label: "Never", value: "Never", name: "EachSubstanceOptionsNever" },
    {
      label: "Socially (1-2 per month)",
      value: "Socially (1-2 per month)",
      name: "EachSubstanceOptionsSocially (1-2 per month)",
    },
    { label: "Weekly", value: "Weekly", name: "EachSubstanceOptionsWeekly" },
    { label: "Daily", value: "Daily", name: "EachSubstanceOptionsDaily" },
    {
      label: "I previously used this substance but have not recently",
      value: "I previously used this substance but have not recently",
      name:
        "EachSubstanceOptionsI previously used this substance but have not recently",
    },
  ];

  const EachSubstanceListOptions = [
    {
      label: "Caffeine (coffee, pills, soft drinks, etc)",
      value: "Caffeine (coffee, pills, soft drinks, etc)",
      name:
        "EachSubstanceListOptionsCaffeine (coffee, pills, soft drinks, etc)",
    },
    {
      label: "Alcohol",
      value: "Alcohol",
      name: "EachSubstanceListOptionsAlcohol",
    },
    {
      label: "Tobaco or nicotine products",
      value: "Tobaco or nicotine products",
      name: "EachSubstanceListOptionsTobaco or nicotine products",
    },
    {
      label: "Cocaine",
      value: "Cocaine",
      name: "EachSubstanceListOptionsCocaine",
    },
    {
      label: "Heroin",
      value: "Heroin",
      name: "EachSubstanceListOptionsHeroin",
    },
    {
      label: "Prescription pain medications",
      value: "Prescription pain medications",
      name: "EachSubstanceListOptionsPrescription pain medications",
    },
    {
      label: "Marijuana",
      value: "Marijuana",
      name: "EachSubstanceListOptionsMarijuana",
    },
    {
      label: "Methamphetamine or other stimulants",
      value: "Methamphetamine or other stimulants",
      name: "EachSubstanceListOptionsMethamphetamine or other stimulants",
    },
    {
      label: "MDMA, PCP, or other club drugs",
      value: "MDMA, PCP, or other club drugs",
      name: "EachSubstanceListOptionsMDMA, PCP, or other club drugs",
    },
    {
      label: "LSD or other hallucinogens",
      value: "LSD or other hallucinogens",
      name: "EachSubstanceListOptionsLSD or other hallucinogens",
    },
  ];

  const EachSubstanceListStartedOldOptions = [
    {
      label: "Caffeine (coffee, pills, soft drinks, etc)",
      value: "Caffeine (coffee, pills, soft drinks, etc)",
      name:
        "EachSubstanceListStartedOldOptionsCaffeine (coffee, pills, soft drinks, etc)",
    },
    {
      label: "Alcohol",
      value: "Alcohol",
      name: "EachSubstanceListStartedOldOptionsAlcohol",
    },
    {
      label: "Tobaco or nicotine products",
      value: "Tobaco or nicotine products",
      name: "EachSubstanceListStartedOldOptionsTobaco or nicotine products",
    },
    {
      label: "Cocaine",
      value: "Cocaine",
      name: "EachSubstanceListStartedOldOptionsCocaine",
    },
    {
      label: "Heroin",
      value: "Heroin",
      name: "EachSubstanceListStartedOldOptionsHeroin",
    },
    {
      label: "Prescription pain medications",
      value: "Prescription pain medications",
      name: "EachSubstanceListStartedOldOptionsPrescription pain medications",
    },
    {
      label: "Marijuana",
      value: "Marijuana",
      name: "EachSubstanceListStartedOldOptionsMarijuana",
    },
    {
      label: "Methamphetamine or other stimulants",
      value: "Methamphetamine or other stimulants",
      name:
        "EachSubstanceListStartedOldOptionsMethamphetamine or other stimulants",
    },
    {
      label: "MDMA, PCP, or other club drugs",
      value: "MDMA, PCP, or other club drugs",
      name: "EachSubstanceListStartedOldOptionsMDMA, PCP, or other club drugs",
    },
    {
      label: "LSD or other hallucinogens",
      value: "LSD or other hallucinogens",
      name: "EachSubstanceListStartedOldOptionsLSD or other hallucinogens",
    },
  ];

  const ToleranceFollowingSubstancesOptions = [
    {
      label: "Caffeine (coffee, pills, soft drinks, etc)",
      value: "Caffeine (coffee, pills, soft drinks, etc)",
      name:
        "ToleranceFollowingSubstancesOptionsCaffeine (coffee, pills, soft drinks, etc)",
    },
    {
      label: "Alcohol",
      value: "Alcohol",
      name: "ToleranceFollowingSubstancesOptionsAlcohol",
    },
    {
      label: "Tobaco or nicotine products",
      value: "Tobaco or nicotine products",
      name: "ToleranceFollowingSubstancesOptionsTobaco or nicotine products",
    },
    {
      label: "Cocaine",
      value: "Cocaine",
      name: "ToleranceFollowingSubstancesOptionsCocaine",
    },
    {
      label: "Heroin",
      value: "Heroin",
      name: "ToleranceFollowingSubstancesOptionsHeroin",
    },
    {
      label: "Prescription pain medications",
      value: "Prescription pain medications",
      name: "ToleranceFollowingSubstancesOptionsPrescription pain medications",
    },
    {
      label: "Marijuana",
      value: "Marijuana",
      name: "ToleranceFollowingSubstancesOptionsMarijuana",
    },
    {
      label: "Methamphetamine or other stimulants",
      value: "Methamphetamine or other stimulants",
      name:
        "ToleranceFollowingSubstancesOptionsMethamphetamine or other stimulants",
    },
    {
      label: "MDMA, PCP, or other club drugs",
      value: "MDMA, PCP, or other club drugs",
      name: "ToleranceFollowingSubstancesOptionsMDMA, PCP, or other club drugs",
    },
    {
      label: "LSD or other hallucinogens",
      value: "LSD or other hallucinogens",
      name: "ToleranceFollowingSubstancesOptionsLSD or other hallucinogens",
    },
  ];

  const WithdrawalFollowingSubstancesOptions = [
    {
      label: "Caffeine (coffee, pills, soft drinks, etc)",
      value: "Caffeine (coffee, pills, soft drinks, etc)",
      name:
        "WithdrawalFollowingSubstancesOptionsCaffeine (coffee, pills, soft drinks, etc)",
    },
    {
      label: "Alcohol",
      value: "Alcohol",
      name: "WithdrawalFollowingSubstancesOptionsAlcohol",
    },
    {
      label: "Tobaco or nicotine products",
      value: "Tobaco or nicotine products",
      name: "WithdrawalFollowingSubstancesOptionsTobaco or nicotine products",
    },
    {
      label: "Cocaine",
      value: "Cocaine",
      name: "WithdrawalFollowingSubstancesOptionsCocaine",
    },
    {
      label: "Heroin",
      value: "Heroin",
      name: "WithdrawalFollowingSubstancesOptionsHeroin",
    },
    {
      label: "Prescription pain medications",
      value: "Prescription pain medications",
      name: "WithdrawalFollowingSubstancesOptionsPrescription pain medications",
    },
    {
      label: "Marijuana",
      value: "Marijuana",
      name: "WithdrawalFollowingSubstancesOptionsMarijuana",
    },
    {
      label: "Methamphetamine or other stimulants",
      value: "Methamphetamine or other stimulants",
      name:
        "WithdrawalFollowingSubstancesOptionsMethamphetamine or other stimulants",
    },
    {
      label: "MDMA, PCP, or other club drugs",
      value: "MDMA, PCP, or other club drugs",
      name:
        "WithdrawalFollowingSubstancesOptionsMDMA, PCP, or other club drugs",
    },
    {
      label: "LSD or other hallucinogens",
      value: "LSD or other hallucinogens",
      name: "WithdrawalFollowingSubstancesOptionsLSD or other hallucinogens",
    },
  ];

  const Options2 = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const RegardingAlcoholAnyFollowingOptions = [
    {
      label:
        "Alcohol or substance is often taken in larger amounts or over a longer period of time than intended",
      value:
        "Alcohol or substance is often taken in larger amounts or over a longer period of time than intended",
      name:
        "RegardingAlcoholAnyFollowingOptionsAlcohol or substance is often taken in larger amounts or over a longer period of time than intended",
    },
    {
      label:
        "There is a persistent desire or unsuccessful effort to cut down or control alcohol or substance use",
      value:
        "There is a persistent desire or unsuccessful effort to cut down or control alcohol or substance use",
      name:
        "RegardingAlcoholAnyFollowingOptionsThere is a persistent desire or unsuccessful effort to cut down or control alcohol or substance use",
    },

    {
      label:
        "A great deal of time is spent in activities necessary to obtain alcohol alcohol or substances, use these, or recover from its effects",
      value:
        "A great deal of time is spent in activities necessary to obtain alcohol alcohol or substances, use these, or recover from its effects",
      name:
        "RegardingAlcoholAnyFollowingOptionsA great deal of time is spent in activities necessary to obtain alcohol alcohol or substances, use these, or recover from its effects",
    },

    {
      label: "Craving, or a strong desire or urge to use alcohol or substances",
      value: "Craving, or a strong desire or urge to use alcohol or substances",
      name:
        "RegardingAlcoholAnyFollowingOptionsCraving, or a strong desire or urge to use alcohol or substances",
    },
    {
      label:
        "Recurrent alcohol or substance use resulting in a failure to fulfill major role obligations at work, school, or home",
      value:
        "Recurrent alcohol or substance use resulting in a failure to fulfill major role obligations at work, school, or home",
      name:
        "RegardingAlcoholAnyFollowingOptionsRecurrent alcohol or substance use resulting in a failure to fulfill major role obligations at work, school, or home",
    },
    {
      label:
        "Continued alcohol or substance use despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of alcohol or substances",
      value:
        "Continued alcohol or substance use despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of alcohol or substances",
      name:
        "RegardingAlcoholAnyFollowingOptionsContinued alcohol or substance use despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of alcohol or substances",
    },
    {
      label:
        "Important social, occupational, or recreational activities are given up or reduced because of alcohol or substance use",
      value:
        "Important social, occupational, or recreational activities are given up or reduced because of alcohol or substance use",
      name:
        "RegardingAlcoholAnyFollowingOptionsImportant social, occupational, or recreational activities are given up or reduced because of alcohol or substance use",
    },
    {
      label:
        "Recurrent alcohol or substance use in situations where it is physically dangerous",
      value:
        "Recurrent alcohol or substance use in situations where it is physically dangerous",
      name:
        "RegardingAlcoholAnyFollowingOptionsRecurrent alcohol or substance use in situations where it is physically dangerous",
    },
    {
      label:
        "alcohol or substance use is continued despite knowledge of having a persistent or recurrent physical or psychological problem that is likely to have been caused or exacerbated by alcohol or substance",
      value:
        "alcohol or substance use is continued despite knowledge of having a persistent or recurrent physical or psychological problem that is likely to have been caused or exacerbated by alcohol or substance",
      name:
        "RegardingAlcoholAnyFollowingOptionsalcohol or substance use is continued despite knowledge of having a persistent or recurrent physical or psychological problem that is likely to have been caused or exacerbated by alcohol or substance",
    },
    {
      label:
        "Tolerance as defined by either of the following: a) a need for markedly increased amounts of alcohol to achieve intoxication or desired effect, b) a markedly diminished effect with continued use of the same amount of alcohol or substances",
      value:
        "Tolerance as defined by either of the following: a) a need for markedly increased amounts of alcohol to achieve intoxication or desired effect, b) a markedly diminished effect with continued use of the same amount of alcohol or substances",
      name:
        "RegardingAlcoholAnyFollowingOptionsTolerance as defined by either of the following: a) a need for markedly increased amounts of alcohol to achieve intoxication or desired effect, b) a markedly diminished effect with continued use of the same amount of alcohol or substances",
    },
    {
      label:
        "Withdrawal as manifested by either of the following: a) the characteristic withdrawal syndrome for alcohol or substances, b) alcohol or substances (or a closely related substance, such as a benzodiazepine) is taken to relieve or avoid withdrawal symptoms",
      value:
        "Withdrawal as manifested by either of the following: a) the characteristic withdrawal syndrome for alcohol or substances, b) alcohol or substances (or a closely related substance, such as a benzodiazepine) is taken to relieve or avoid withdrawal symptoms",
      name:
        "RegardingAlcoholAnyFollowingOptionsWithdrawal as manifested by either of the following: a) the characteristic withdrawal syndrome for alcohol or substances, b) alcohol or substances (or a closely related substance, such as a benzodiazepine) is taken to relieve or avoid withdrawal symptoms",
    },
  ];

  const EnrolledTreatmentProgramOptions = [
    { label: "Yes", value: "Yes", name: "EnrolledTreatmentProgramOptionsYes" },
    { label: "No", value: "No", name: "EnrolledTreatmentProgramOptionsNo" },
  ];

  const CompleteTreatmentProgramOptions = [
    { label: "Yes", value: "Yes", name: "CompleteTreatmentProgramOptionsYes" },
    { label: "No", value: "No", name: "CompleteTreatmentProgramOptionsNo" },
  ];

  const RemainedTreatmentCleanLongestOptions = [
    {
      label: "1 week",
      value: "1 week",
      name: "RemainedTreatmentCleanLongestOptions1 week",
    },
    {
      label: "1 month",
      value: "1 month",
      name: "RemainedTreatmentCleanLongestOptions1 month",
    },
    {
      label: "Several months",
      value: "Several months",
      name: "RemainedTreatmentCleanLongestOptionsSeveral months",
    },
    {
      label: "1 year",
      value: "1 year",
      name: "RemainedTreatmentCleanLongestOptions1 year",
    },
    {
      label: "Several years",
      value: "Several years",
      name: "RemainedTreatmentCleanLongestOptionsSeveral years",
    },
    {
      label: "Never",
      value: "Never",
      name: "RemainedTreatmentCleanLongestOptionsNever",
    },
    {
      label: "Other",
      value: "Other",
      name: "RemainedTreatmentCleanLongestOptionsOther",
    },
  ];

  const PreviouslyDescribedPsychiatricCleanOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "PreviouslyDescribedPsychiatricCleanOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "PreviouslyDescribedPsychiatricCleanOptionsNo",
    },
    {
      label: "N/A",
      value: "N/A",
      name: "PreviouslyDescribedPsychiatricCleanOptionsN/A",
    },
  ];

  const handleFollowingSubstanceschange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...substanceUseValue?.followingSubstances];

    let length = substanceUseValue.followingSubstances.length;
    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      length = length - 1;
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }
    if (length === 0) {
      setSubstanceUseValue({
        ...substanceUseValue,
        followingSubstances: newCheckedItems,
        currentlySubstance: [],
        eachSubstanceList: [],
        eachSubstanceListStartedOld: [],
        toleranceFollowingSubstances: [],
        withdrawalFollowingSubstances: [],
        regardingAlcoholAnyFollowing: [],
      });
    } else {
      setSubstanceUseValue({
        ...substanceUseValue,
        followingSubstances: newCheckedItems,
      });
    }
  };

  const handleCurrentlySubstanceChange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...substanceUseValue?.currentlySubstance];

    if (isChecked) {
      newCheckedItems.push({
        condition: itemValue,
        effect: "Never",
      });
    } else {
      newCheckedItems = newCheckedItems.filter(
        (item) => item.condition !== itemValue
      );
    }
    setSubstanceUseValue({
      ...substanceUseValue,
      currentlySubstance: newCheckedItems,
    });
  };

  const handleEachSubstanceChange = (event) => {
    const itemName = event.target.name;
    const condition = CurrentlySubstanceOptions?.filter(
      (item) => item.name === itemName
    );
    const cond = condition[0]?.value;

    setSubstanceUseValue({
      ...substanceUseValue,
      currentlySubstance: substanceUseValue.currentlySubstance.map((item) =>
        item.condition === cond ? { ...item, effect: event.target.value } : item
      ),
    });
  };

  const handleEachSubstanceListchange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...substanceUseValue?.eachSubstanceList];

    if (isChecked) {
      newCheckedItems.push({
        condition: itemValue,
        amount: "",
      });
    } else {
      newCheckedItems = newCheckedItems.filter(
        (item) => item.condition !== itemValue
      );
    }
    setSubstanceUseValue({
      ...substanceUseValue,
      eachSubstanceList: newCheckedItems,
    });
  };

  const handleAmountChange = (event) => {
    const itemName = event.target.name;

    const condition = EachSubstanceListOptions.filter(
      (item) => item.name === itemName
    );

    setSubstanceUseValue({
      ...substanceUseValue,
      eachSubstanceList: substanceUseValue.eachSubstanceList.map((item) =>
        item.condition === condition[0].value
          ? { ...item, amount: event.target.value }
          : item
      ),
    });
  };

  const handleToleranceFollowingSubstancesChange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...substanceUseValue?.toleranceFollowingSubstances];

    if (isChecked) {
      newCheckedItems.push({
        condition: itemValue,
        effect: "Yes",
      });
    } else {
      newCheckedItems = newCheckedItems.filter(
        (item) => item.condition !== itemValue
      );
    }
    setSubstanceUseValue({
      ...substanceUseValue,
      toleranceFollowingSubstances: newCheckedItems,
    });
  };

  const handleToleranceChange = (event) => {
    const itemName = event.target.name;

    const condition = ToleranceFollowingSubstancesOptions.filter(
      (item) => item.name === itemName
    );

    setSubstanceUseValue({
      ...substanceUseValue,
      toleranceFollowingSubstances: substanceUseValue.toleranceFollowingSubstances.map(
        (item) =>
          item.condition === condition[0].value
            ? { ...item, effect: event.target.value }
            : item
      ),
    });
  };

  const handleEachSubstanceListStartedOldchange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...substanceUseValue?.eachSubstanceListStartedOld];

    if (isChecked) {
      newCheckedItems.push({
        condition: itemValue,
        age: "",
      });
    } else {
      newCheckedItems = newCheckedItems.filter(
        (item) => item.condition !== itemValue
      );
    }
    setSubstanceUseValue({
      ...substanceUseValue,
      eachSubstanceListStartedOld: newCheckedItems,
    });
  };

  const handleAgeChange = (event) => {
    const itemName = event.target.name;

    const condition = EachSubstanceListStartedOldOptions.filter(
      (item) => item.name === itemName
    );

    setSubstanceUseValue({
      ...substanceUseValue,
      eachSubstanceListStartedOld: substanceUseValue.eachSubstanceListStartedOld.map(
        (item) =>
          item.condition === condition[0].value
            ? { ...item, age: event.target.value }
            : item
      ),
    });
  };

  const handleWithdrawalFollowingSubstancesChange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...substanceUseValue?.withdrawalFollowingSubstances];

    if (isChecked) {
      newCheckedItems.push({
        condition: itemValue,
        effect: "Yes",
      });
    } else {
      newCheckedItems = newCheckedItems.filter(
        (item) => item.condition !== itemValue
      );
    }
    setSubstanceUseValue({
      ...substanceUseValue,
      withdrawalFollowingSubstances: newCheckedItems,
    });
  };

  const handleWithdrawalChange = (event) => {
    const itemName = event.target.name;

    const condition = WithdrawalFollowingSubstancesOptions.filter(
      (item) => item.name === itemName
    );

    setSubstanceUseValue({
      ...substanceUseValue,
      withdrawalFollowingSubstances: substanceUseValue.withdrawalFollowingSubstances.map(
        (item) =>
          item.condition === condition[0].value
            ? { ...item, effect: event.target.value }
            : item
      ),
    });
  };

  const handleRegardingAlcoholAnyFollowingchange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...substanceUseValue?.regardingAlcoholAnyFollowing];

    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }
    setSubstanceUseValue({
      ...substanceUseValue,
      regardingAlcoholAnyFollowing: newCheckedItems,
    });
  };

  const handleEnrolledTreatmentProgramchange = (event) => {
    setSubstanceUseValue({
      ...substanceUseValue,
      enrolledTreatmentProgram: event.target.value,
      completeTreatmentProgram: "",
      treatmentLastedDateFrom: "",
      treatmentLastedDateTo: "",
      remainedTreatmentClean: "",
      remainedTreatmentCleanLongest: "",
      previouslyDescribedPsychiatricClean: "",
    });
  };

  const handleCompleteTreatmentProgramChange = (event) => {
    setSubstanceUseValue({
      ...substanceUseValue,
      completeTreatmentProgram: event.target.value,
    });
  };

  const handleRemainedTreatmentCleanLongestChange = (event) => {
    setSubstanceUseValue({
      ...substanceUseValue,
      remainedTreatmentCleanLongest: event.target.value,
    });
  };

  const handlePreviouslyDescribedPsychiatricCleanChange = (event) => {
    setSubstanceUseValue({
      ...substanceUseValue,
      previouslyDescribedPsychiatricClean: event.target.value,
    });
  };

  const handleChange = (event) => {
    setSubstanceUseValue({
      ...substanceUseValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalSubStanceUse(substanceUseValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors, textErrors } = validateSubstanceUse(
      substanceUseValue
    );
    setErrors(errors);
    setTextErrors(textErrors);

    if (isValid) {
      setGlobalSubStanceUse(substanceUseValue);
      setCurrentSection(currentSection + 1);
    }
    // setCurrentSection(currentSection + 1);
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Substance Use
      </p>

      <form>
        <CardField
          title="Have you ever used any of the following substances?"
          type="checkbox"
          options={FollowingSubstancesOptions}
          onChange={handleFollowingSubstanceschange}
          checked={substanceUseValue?.followingSubstances}
          errors={errors.followingSubstances}
        />

        {substanceUseValue?.followingSubstances.length > 0 ? (
          <div>
            <CardCheckFollowUp
              title="How often do you currently use each substance?"
              type="checkbox"
              options={CurrentlySubstanceOptions}
              options2={EachSubstanceOptions}
              type2="radio"
              onChange={handleCurrentlySubstanceChange}
              errors={errors.currentlySubstance}
              checked={substanceUseValue?.currentlySubstance}
              onChange2={handleEachSubstanceChange}
            />

            <CardTextFollowUp
              type="checkbox"
              title="Please list how much you use of each substance."
              options={EachSubstanceListOptions}
              onChange={handleEachSubstanceListchange}
              checked={substanceUseValue?.eachSubstanceList}
              errors={errors.eachSubstanceList}
              title2="Amount"
              onChange2={handleAmountChange}
              errors2={textErrors?.eachSubstanceListAmount}
            />

            <CardTextFollowUp
              type="checkbox"
              title="Please list how much you use of each substance."
              options={EachSubstanceListStartedOldOptions}
              onChange={handleEachSubstanceListStartedOldchange}
              checked={substanceUseValue?.eachSubstanceListStartedOld}
              errors={errors.eachSubstanceListStartedOld}
              title2="Age(1-100)"
              onChange2={handleAgeChange}
              errors2={textErrors?.eachSubstanceListStartedOldAge}
            />

            <CardCheckFollowUp
              title="Do you have a history of experiencing tolerance (needing more to get the same effect) from any of the following substances?"
              type="checkbox"
              options={ToleranceFollowingSubstancesOptions}
              options2={Options2}
              type2="radio"
              onChange={handleToleranceFollowingSubstancesChange}
              errors={errors.toleranceFollowingSubstances}
              checked={substanceUseValue?.toleranceFollowingSubstances}
              onChange2={handleToleranceChange}
            />

            <CardCheckFollowUp
              title="Do you have a history of experiencing withdrawal symptoms from any of the following substances?"
              type="checkbox"
              options={WithdrawalFollowingSubstancesOptions}
              options2={Options2}
              type2="radio"
              onChange={handleWithdrawalFollowingSubstancesChange}
              errors={errors.withdrawalFollowingSubstances}
              checked={substanceUseValue?.withdrawalFollowingSubstances}
              onChange2={handleWithdrawalChange}
            />

            <CardField
              title="Regarding your alcohol or substance use, have you experienced any of the following (check all that apply)?"
              type="checkbox"
              options={RegardingAlcoholAnyFollowingOptions}
              onChange={handleRegardingAlcoholAnyFollowingchange}
              checked={substanceUseValue?.regardingAlcoholAnyFollowing}
              errors={errors.regardingAlcoholAnyFollowing}
            />
          </div>
        ) : null}

        <CardField
          title="Have you ever enrolled in a substance recovery treatment program?"
          type="radio"
          options={EnrolledTreatmentProgramOptions}
          onChange={handleEnrolledTreatmentProgramchange}
          checked={substanceUseValue?.enrolledTreatmentProgram}
          errors={errors.enrolledTreatmentProgram}
        />

        {substanceUseValue?.enrolledTreatmentProgram === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="Did you complete this treatment program?"
                onChange={handleCompleteTreatmentProgramChange}
                options={CompleteTreatmentProgramOptions}
                checked={substanceUseValue?.completeTreatmentProgram}
                error={errors.completeTreatmentProgram}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <div className="w-[95%] mx-auto p-3  shadow-lg ">
                <p className="text-left text-[20px] mt-2">
                  This treatment lasted from what date to what date?
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
                          { "border-b-red-500": errors.treatmentLastedDateFrom }
                        )}
                        name="treatmentLastedDateFrom"
                        value={substanceUseValue?.treatmentLastedDateFrom}
                        onChange={handleChange}
                      />
                    </div>

                    {errors.treatmentLastedDateFrom && (
                      <div className="text-red-500 text-left text-[12px] mt-2 block ml-11">
                        {errors.treatmentLastedDateFrom}
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
                          { "border-b-red-500": errors.treatmentLastedDateTo }
                        )}
                        name="treatmentLastedDateTo"
                        value={substanceUseValue?.treatmentLastedDateTo}
                        onChange={handleChange}
                      />
                    </div>

                    {errors.treatmentLastedDateTo && (
                      <div className="text-red-500 text-left text-[12px] mt-2 ml-6">
                        {errors.treatmentLastedDateTo}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Following this treatment you remained clean and sober for how long?"
                onChange={handleChange}
                name="remainedTreatmentClean"
                value={substanceUseValue?.remainedTreatmentClean}
                error={errors.remainedTreatmentClean}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="What is the longest that you have ever remained completely clean and sober from all alcohol and substance use?"
                onChange={handleRemainedTreatmentCleanLongestChange}
                options={RemainedTreatmentCleanLongestOptions}
                checked={substanceUseValue?.remainedTreatmentCleanLongest}
                error={errors.remainedTreatmentCleanLongest}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="While you were clean and sober, did you continue to experience any of your previously described psychiatric symptoms, such as depression and/or anxiety?"
                onChange={handlePreviouslyDescribedPsychiatricCleanChange}
                options={PreviouslyDescribedPsychiatricCleanOptions}
                checked={substanceUseValue?.previouslyDescribedPsychiatricClean}
                error={errors.previouslyDescribedPsychiatricClean}
              />
            </div>
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

export default SubstanceUse;
