/** @format */

import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";
import { toast } from "react-toastify";

import CardField from "../common/CardField";
import RadioFollowUp from "../common/RadioFollowUp";
import useGlobalContext from "../../hooks/useGlobalContext";
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
    toleranceDefinedFollowing: [],
    withdrawalEitherFollowing: [],
    amountValue: "",
    eachSubstanceLast: [],
    eachSubstanceLastDate: "",
    cleanSoberLastedFrom: "",
    cleanSoberLastedTo: "",
    cleanSoberLongest: "",
  });

  const [errors, setErrors] = useState({});
  const [textErrors, setTextErrors] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setSubstanceUseValue(globalSubStanceUse);
  }, [globalSubStanceUse]);

  useEffect(
    () =>
      console.log(
        substanceUseValue?.toleranceFollowingSubstances,
        substanceUseValue?.withdrawalFollowingSubstances
      ),
    [substanceUseValue]
  );

  const FollowingSubstancesOptions = [
    {
      label: "Caffeine (coffee, pills, soft drinks, etc)",
      value: "caffeine (coffee, pills, soft drinks, etc)",
      name: "FollowingSubstancesOptionsCaffeine (coffee, pills, soft drinks, etc)",
    },
    {
      label: "Alcohol",
      value: "alcohol",
      name: "FollowingSubstancesOptionsAlcohol",
    },
    {
      label: "Tobaco or nicotine products",
      value: "tobaco or nicotine products",
      name: "FollowingSubstancesOptionsTobaco or nicotine products",
    },
    {
      label: "Cocaine",
      value: "cocaine",
      name: "FollowingSubstancesOptionsCocaine",
    },
    {
      label: "Heroin",
      value: "heroin",
      name: "FollowingSubstancesOptionsHeroin",
    },
    {
      label: "Prescription pain medications",
      value: "prescription pain medications",
      name: "FollowingSubstancesOptionsPrescription pain medications",
    },
    {
      label: "Marijuana",
      value: "marijuana",
      name: "FollowingSubstancesOptionsMarijuana",
    },
    {
      label: "Methamphetamine or other stimulants",
      value: "methamphetamine or other stimulants",
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
    { label: "Other", value: "other", name: "FollowingSubstancesOptionsOther" },
  ];

  const CurrentlySubstanceOptions = [
    {
      label: "Caffeine (coffee, pills, soft drinks, etc)",
      value: "caffeine (coffee, pills, soft drinks, etc)",
      name: "CurrentlySubstanceOptionsCaffeine (coffee, pills, soft drinks, etc)",
    },
    {
      label: "Alcohol",
      value: "alcohol",
      name: "CurrentlySubstanceOptionsAlcohol",
    },
    {
      label: "Tobaco or nicotine products",
      value: "tobaco or nicotine products",
      name: "CurrentlySubstanceOptionsTobaco or nicotine products",
    },
    {
      label: "Cocaine",
      value: "cocaine",
      name: "CurrentlySubstanceOptionsCocaine",
    },
    {
      label: "Heroin",
      value: "heroin",
      name: "CurrentlySubstanceOptionsHeroin",
    },
    {
      label: "Prescription pain medications",
      value: "prescription pain medications",
      name: "CurrentlySubstanceOptionsPrescription pain medications",
    },
    {
      label: "Marijuana",
      value: "marijuana",
      name: "CurrentlySubstanceOptionsMarijuana",
    },
    {
      label: "Methamphetamine or other stimulants",
      value: "methamphetamine or other stimulants",
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
    { label: "Never", value: "never", name: "EachSubstanceOptionsNever" },
    {
      label: "Socially (1-2 per month)",
      value: "socially (1-2 per month)",
      name: "EachSubstanceOptionsSocially (1-2 per month)",
    },
    { label: "Weekly", value: "weekly", name: "EachSubstanceOptionsWeekly" },
    { label: "Daily", value: "daily", name: "EachSubstanceOptionsDaily" },
    {
      label: "I previously used this substance but have not recently",
      value: "previously but has not recently",
      name: "EachSubstanceOptionsI previously used this substance but have not recently",
    },
  ];

  const EachSubstanceListOptions = [
    {
      label: "Caffeine (coffee, pills, soft drinks, etc)",
      value: "caffeine (coffee, pills, soft drinks, etc)",
      name: "EachSubstanceListOptionsCaffeine (coffee, pills, soft drinks, etc)",
    },
    {
      label: "Alcohol",
      value: "alcohol",
      name: "EachSubstanceListOptionsAlcohol",
    },
    {
      label: "Tobaco or nicotine products",
      value: "tobaco or nicotine products",
      name: "EachSubstanceListOptionsTobaco or nicotine products",
    },
    {
      label: "Cocaine",
      value: "cocaine",
      name: "EachSubstanceListOptionsCocaine",
    },
    {
      label: "Heroin",
      value: "heroin",
      name: "EachSubstanceListOptionsHeroin",
    },
    {
      label: "Prescription pain medications",
      value: "prescription pain medications",
      name: "EachSubstanceListOptionsPrescription pain medications",
    },
    {
      label: "Marijuana",
      value: "marijuana",
      name: "EachSubstanceListOptionsMarijuana",
    },
    {
      label: "Methamphetamine or other stimulants",
      value: "methamphetamine or other stimulants",
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
      value: "caffeine (coffee, pills, soft drinks, etc)",
      name: "EachSubstanceListStartedOldOptionsCaffeine (coffee, pills, soft drinks, etc)",
    },
    {
      label: "Alcohol",
      value: "alcohol",
      name: "EachSubstanceListStartedOldOptionsAlcohol",
    },
    {
      label: "Tobaco or nicotine products",
      value: "tobaco or nicotine products",
      name: "EachSubstanceListStartedOldOptionsTobaco or nicotine products",
    },
    {
      label: "Cocaine",
      value: "cocaine",
      name: "EachSubstanceListStartedOldOptionsCocaine",
    },
    {
      label: "Heroin",
      value: "heroin",
      name: "EachSubstanceListStartedOldOptionsHeroin",
    },
    {
      label: "Prescription pain medications",
      value: "prescription pain medications",
      name: "EachSubstanceListStartedOldOptionsPrescription pain medications",
    },
    {
      label: "Marijuana",
      value: "marijuana",
      name: "EachSubstanceListStartedOldOptionsMarijuana",
    },
    {
      label: "Methamphetamine or other stimulants",
      value: "methamphetamine or other stimulants",
      name: "EachSubstanceListStartedOldOptionsMethamphetamine or other stimulants",
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

  const EachSubstanceLastOptions = [
    {
      label: "Caffeine (coffee, pills, soft drinks, etc)",
      value: "caffeine (coffee, pills, soft drinks, etc)",
      name: "EachSubstanceLastOptionsCaffeine (coffee, pills, soft drinks, etc)",
    },
    {
      label: "Alcohol",
      value: "alcohol",
      name: "EachSubstanceLastOptionsAlcohol",
    },
    {
      label: "Tobaco or nicotine products",
      value: "tobaco or nicotine products",
      name: "EachSubstanceLastOptionsTobaco or nicotine products",
    },
    {
      label: "Cocaine",
      value: "cocaine",
      name: "EachSubstanceLastOptionsCocaine",
    },
    {
      label: "Heroin",
      value: "heroin",
      name: "EachSubstanceLastOptionsHeroin",
    },
    {
      label: "Prescription pain medications",
      value: "prescription pain medications",
      name: "EachSubstanceLastOptionsPrescription pain medications",
    },
    {
      label: "Marijuana",
      value: "marijuana",
      name: "EachSubstanceLastOptionsMarijuana",
    },
    {
      label: "Methamphetamine or other stimulants",
      value: "methamphetamine or other stimulants",
      name: "EachSubstanceLastOptionsMethamphetamine or other stimulants",
    },
    {
      label: "MDMA, PCP, or other club drugs",
      value: "MDMA, PCP, or other club drugs",
      name: "EachSubstanceLastOptionsMDMA, PCP, or other club drugs",
    },
    {
      label: "LSD or other hallucinogens",
      value: "LSD or other hallucinogens",
      name: "EachSubstanceLastOptionsLSD or other hallucinogens",
    },
  ];

  const ToleranceFollowingSubstancesOptions = [
    {
      label: "Caffeine (coffee, pills, soft drinks, etc)",
      value: "caffeine (coffee, pills, soft drinks, etc)",
      name: "ToleranceFollowingSubstancesOptionsCaffeine (coffee, pills, soft drinks, etc)",
    },
    {
      label: "Alcohol",
      value: "alcohol",
      name: "ToleranceFollowingSubstancesOptionsAlcohol",
    },
    {
      label: "Tobaco or nicotine products",
      value: "tobaco or nicotine products",
      name: "ToleranceFollowingSubstancesOptionsTobaco or nicotine products",
    },
    {
      label: "Cocaine",
      value: "cocaine",
      name: "ToleranceFollowingSubstancesOptionsCocaine",
    },
    {
      label: "Heroin",
      value: "heroin",
      name: "ToleranceFollowingSubstancesOptionsHeroin",
    },
    {
      label: "Prescription pain medications",
      value: "prescription pain medications",
      name: "ToleranceFollowingSubstancesOptionsPrescription pain medications",
    },
    {
      label: "Marijuana",
      value: "marijuana",
      name: "ToleranceFollowingSubstancesOptionsMarijuana",
    },
    {
      label: "Methamphetamine or other stimulants",
      value: "methamphetamine or other stimulants",
      name: "ToleranceFollowingSubstancesOptionsMethamphetamine or other stimulants",
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
      value: "caffeine (coffee, pills, soft drinks, etc)",
      name: "WithdrawalFollowingSubstancesOptionsCaffeine (coffee, pills, soft drinks, etc)",
    },
    {
      label: "Alcohol",
      value: "alcohol",
      name: "WithdrawalFollowingSubstancesOptionsAlcohol",
    },
    {
      label: "Tobaco or nicotine products",
      value: "tobaco or nicotine products",
      name: "WithdrawalFollowingSubstancesOptionsTobaco or nicotine products",
    },
    {
      label: "Cocaine",
      value: "cocaine",
      name: "WithdrawalFollowingSubstancesOptionsCocaine",
    },
    {
      label: "Heroin",
      value: "heroin",
      name: "WithdrawalFollowingSubstancesOptionsHeroin",
    },
    {
      label: "Prescription pain medications",
      value: "prescription pain medications",
      name: "WithdrawalFollowingSubstancesOptionsPrescription pain medications",
    },
    {
      label: "Marijuana",
      value: "marijuana",
      name: "WithdrawalFollowingSubstancesOptionsMarijuana",
    },
    {
      label: "Methamphetamine or other stimulants",
      value: "methamphetamine or other stimulants",
      name: "WithdrawalFollowingSubstancesOptionsMethamphetamine or other stimulants",
    },
    {
      label: "MDMA, PCP, or other club drugs",
      value: "MDMA, PCP, or other club drugs",
      name: "WithdrawalFollowingSubstancesOptionsMDMA, PCP, or other club drugs",
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
        "alcohol or substance is often taken in larger amounts or over a longer period of time than intended",
      name: "RegardingAlcoholAnyFollowingOptionsAlcohol or substance is often taken in larger amounts or over a longer period of time than intended",
    },
    {
      label:
        "There is a persistent desire or unsuccessful effort to cut down or control alcohol or substance use",
      value:
        "there is a persistent desire or unsuccessful effort to cut down or control alcohol or substance use",
      name: "RegardingAlcoholAnyFollowingOptionsThere is a persistent desire or unsuccessful effort to cut down or control alcohol or substance use",
    },

    {
      label:
        "A great deal of time is spent in activities necessary to obtain alcohol alcohol or substances, use these, or recover from its effects",
      value:
        "a great deal of time is spent in activities necessary to obtain alcohol alcohol or substances, use these, or recover from its effects",
      name: "RegardingAlcoholAnyFollowingOptionsA great deal of time is spent in activities necessary to obtain alcohol alcohol or substances, use these, or recover from its effects",
    },

    {
      label: "Craving, or a strong desire or urge to use alcohol or substances",
      value: "craving, or a strong desire or urge to use alcohol or substances",
      name: "RegardingAlcoholAnyFollowingOptionsCraving, or a strong desire or urge to use alcohol or substances",
    },
    {
      label:
        "Recurrent alcohol or substance use resulting in a failure to fulfill major role obligations at work, school, or home",
      value:
        "recurrent alcohol or substance use resulting in a failure to fulfill major role obligations at work, school, or home",
      name: "RegardingAlcoholAnyFollowingOptionsRecurrent alcohol or substance use resulting in a failure to fulfill major role obligations at work, school, or home",
    },
    {
      label:
        "Continued alcohol or substance use despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of alcohol or substances",
      value:
        "continued alcohol or substance use despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of alcohol or substances",
      name: "RegardingAlcoholAnyFollowingOptionsContinued alcohol or substance use despite having persistent or recurrent social or interpersonal problems caused or exacerbated by the effects of alcohol or substances",
    },
    {
      label:
        "Important social, occupational, or recreational activities are given up or reduced because of alcohol or substance use",
      value:
        "important social, occupational, or recreational activities are given up or reduced because of alcohol or substance use",
      name: "RegardingAlcoholAnyFollowingOptionsImportant social, occupational, or recreational activities are given up or reduced because of alcohol or substance use",
    },
    {
      label:
        "Recurrent alcohol or substance use in situations where it is physically dangerous",
      value:
        "recurrent alcohol or substance use in situations where it is physically dangerous",
      name: "RegardingAlcoholAnyFollowingOptionsRecurrent alcohol or substance use in situations where it is physically dangerous",
    },
    {
      label:
        "alcohol or substance use is continued despite knowledge of having a persistent or recurrent physical or psychological problem that is likely to have been caused or exacerbated by alcohol or substance",
      value:
        "alcohol or substance use is continued despite knowledge of having a persistent or recurrent physical or psychological problem that is likely to have been caused or exacerbated by alcohol or substance",
      name: "RegardingAlcoholAnyFollowingOptionsalcohol or substance use is continued despite knowledge of having a persistent or recurrent physical or psychological problem that is likely to have been caused or exacerbated by alcohol or substance",
    },
    {
      label: "Tolerance as defined by either of the following:",
      value: "tolerance as defined by either of the following",
      name: "RegardingAlcoholAnyFollowingOptionsTolerance as defined by either of the following: a) a need for markedly increased amounts of alcohol to achieve intoxication or desired effect, b) a markedly diminished effect with continued use of the same amount of alcohol or substances",
    },
    {
      label: "Withdrawal as manifested by either of the following:",
      value: "withdrawal as manifested by either of the following",
      name: "RegardingAlcoholAnyFollowingOptionsWithdrawal as manifested by either of the following: a) the characteristic withdrawal syndrome for alcohol or substances, b) alcohol or substances (or a closely related substance, such as a benzodiazepine) is taken to relieve or avoid withdrawal symptoms",
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
      value: "several months",
      name: "RemainedTreatmentCleanLongestOptionsSeveral months",
    },
    {
      label: "1 year",
      value: "1 year",
      name: "RemainedTreatmentCleanLongestOptions1 year",
    },
    {
      label: "Several years",
      value: "several years",
      name: "RemainedTreatmentCleanLongestOptionsSeveral years",
    },
    {
      label: "Never",
      value: "Never",
      name: "RemainedTreatmentCleanLongestOptionsNever",
    },
    {
      label: "Other",
      value: "other",
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
        effect: "",
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
          ? { ...item, effect: event.target.value }
          : item
      ),
      amountValue: event.target.value,
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
      toleranceFollowingSubstances:
        substanceUseValue.toleranceFollowingSubstances.map((item) =>
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
        effect: "",
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
      eachSubstanceListStartedOld:
        substanceUseValue.eachSubstanceListStartedOld.map((item) =>
          item.condition === condition[0].value
            ? { ...item, effect: event.target.value }
            : item
        ),
    });
  };

  const handleEachSubstanceLastchange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...substanceUseValue?.eachSubstanceLast];

    if (isChecked) {
      newCheckedItems.push({
        condition: itemValue,
        effect: "",
      });
    } else {
      newCheckedItems = newCheckedItems.filter(
        (item) => item.condition !== itemValue
      );
    }
    setSubstanceUseValue({
      ...substanceUseValue,
      eachSubstanceLast: newCheckedItems,
    });
  };

  const handleLastDateChange = (event) => {
    const itemName = event.target.name;

    const condition = EachSubstanceLastOptions.filter(
      (item) => item.name === itemName
    );

    setSubstanceUseValue({
      ...substanceUseValue,
      eachSubstanceLast: substanceUseValue.eachSubstanceLast.map((item) =>
        item.condition === condition[0].value
          ? { ...item, effect: event.target.value }
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
      withdrawalFollowingSubstances:
        substanceUseValue.withdrawalFollowingSubstances.map((item) =>
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
    let newTolerance = [...substanceUseValue?.toleranceDefinedFollowing];
    let newwithdrawal = [...substanceUseValue?.withdrawalEitherFollowing];

    if (isChecked) {
      newCheckedItems.push(itemValue);
      if (itemValue === "tolerance as defined by either of the following") {
        newTolerance = [
          "a need for markedly increased amounts of alcohol to achieve intoxication or desired effect",
          "a markedly diminished effect with continued use of the same amount of alcohol or substances",
        ];
      }

      if (itemValue === "withdrawal as manifested by either of the following") {
        newwithdrawal = [
          "the characteristic withdrawal syndrome for alcohol or substances",
          "alcohol or substances (or a closely related substance, such as a benzodiazepine) is taken to relieve or avoid withdrawal symptoms",
        ];
      }
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }
    setSubstanceUseValue({
      ...substanceUseValue,
      regardingAlcoholAnyFollowing: newCheckedItems,
      toleranceDefinedFollowing:
        itemValue === "tolerance as defined by either of the following" &&
        isChecked === false
          ? []
          : newTolerance,
      withdrawalEitherFollowing:
        itemValue === "withdrawal as manifested by either of the following" &&
        isChecked === false
          ? []
          : newwithdrawal,
    });
  };

  const handleToleranceDefinedFollowingChange = (event) => {
    let isChecked = event.target.checked;
    let isValue = event.target.value;
    let newItem = [...substanceUseValue.regardingAlcoholAnyFollowing];
    let newCheckedItem = [...substanceUseValue.toleranceDefinedFollowing];

    if (isChecked) {
      if (
        !(
          newItem.filter(
            (item) => item === "tolerance as defined by either of the following"
          ).length > 0
        )
      ) {
        newItem.push("tolerance as defined by either of the following");
      }
      newCheckedItem.push(isValue);
    } else {
      newCheckedItem = newCheckedItem.filter((item) => item !== isValue);
    }

    if (newCheckedItem.length === 0) {
      let newRegardingAlcohol =
        substanceUseValue.regardingAlcoholAnyFollowing.filter(
          (item) => item !== "tolerance as defined by either of the following"
        );
      setSubstanceUseValue({
        ...substanceUseValue,
        regardingAlcoholAnyFollowing: newRegardingAlcohol,
        toleranceDefinedFollowing: newCheckedItem,
      });
    } else {
      setSubstanceUseValue({
        ...substanceUseValue,
        regardingAlcoholAnyFollowing: newItem,
        toleranceDefinedFollowing: newCheckedItem,
      });
    }
  };

  const handleWithdrawalEitherFollowingChange = (event) => {
    let isChecked = event.target.checked;
    let isValue = event.target.value;
    let newItem = [...substanceUseValue.regardingAlcoholAnyFollowing];
    let newCheckItem = [...substanceUseValue.withdrawalEitherFollowing];

    if (isChecked) {
      if (
        !(
          newItem.filter(
            (item) =>
              item === "withdrawal as manifested by either of the following"
          ).length > 0
        )
      ) {
        newItem.push("withdrawal as manifested by either of the following");
      }

      newCheckItem.push(isValue);
    } else {
      newCheckItem = newCheckItem.filter((item) => item !== isValue);
    }

    if (newCheckItem.length === 0) {
      let newRegardingAlcohol =
        substanceUseValue.regardingAlcoholAnyFollowing.filter(
          (item) =>
            item !== "withdrawal as manifested by either of the following"
        );

      setSubstanceUseValue({
        ...substanceUseValue,
        regardingAlcoholAnyFollowing: newRegardingAlcohol,
        withdrawalEitherFollowing: newCheckItem,
      });
    } else {
      setSubstanceUseValue({
        ...substanceUseValue,
        regardingAlcoholAnyFollowing: newItem,
        withdrawalEitherFollowing: newCheckItem,
      });
    }
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

    const { isValid, errors, textErrors } =
      validateSubstanceUse(substanceUseValue);
    setErrors(errors);
    setTextErrors(textErrors);

    setGlobalSubStanceUse(substanceUseValue);
    setCurrentSection(currentSection + 1);

    // if (isValid) {
    //   setGlobalSubStanceUse(substanceUseValue);
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
        Substance Use
      </p>

      <form>
        <CardField
          title="128. Have you ever used any of the following substances?"
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
              title="Please list how old you were when you started using each substance."
              options={EachSubstanceListStartedOldOptions}
              onChange={handleEachSubstanceListStartedOldchange}
              checked={substanceUseValue?.eachSubstanceListStartedOld}
              errors={errors.eachSubstanceListStartedOld}
              title2="Age"
              onChange2={handleAgeChange}
              errors2={textErrors?.eachSubstanceListStartedOldAge}
            />

            <CardTextFollowUp
              type="checkbox"
              title="When did you last use each of these substances?"
              options={EachSubstanceLastOptions}
              onChange={handleEachSubstanceLastchange}
              checked={substanceUseValue?.eachSubstanceLast}
              errors={errors.eachSubstanceLast}
              onChange2={handleLastDateChange}
              errors2={textErrors?.eachSubstanceLastDate}
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

            <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, textAlign: "left" }}>
                  Regarding your alcohol or substance use, have you experienced
                  any of the following (check all that apply)?
                </Typography>
                <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                <div
                  className={classnames("mt-5 p-2", {
                    "border-red-500 border":
                      errors.regardingAlcoholAnyFollowing,
                  })}
                >
                  {RegardingAlcoholAnyFollowingOptions.map((item, index) => (
                    <div className="text-left" key={index}>
                      <label key={item.value}>
                        <input
                          type="checkbox"
                          name={item.name}
                          value={item.value}
                          className="mr-2"
                          checked={
                            substanceUseValue?.regardingAlcoholAnyFollowing?.filter(
                              (p) => p === item.value
                            ).length > 0
                          }
                          onChange={handleRegardingAlcoholAnyFollowingchange}
                        />
                        {item.label}
                      </label>
                      {item.label ===
                      "Tolerance as defined by either of the following:" ? (
                        <div className="px-5">
                          <div className="text-left my-3">
                            <label>
                              <input
                                type="checkbox"
                                value="a need for markedly increased amounts of alcohol to achieve intoxication or desired effect"
                                className="mr-2"
                                checked={
                                  substanceUseValue?.toleranceDefinedFollowing.filter(
                                    (item) =>
                                      item ===
                                      "a need for markedly increased amounts of alcohol to achieve intoxication or desired effect"
                                  ).length > 0
                                }
                                onChange={handleToleranceDefinedFollowingChange}
                              />
                              a need for markedly increased amounts of alcohol
                              to achieve intoxication or desired effect
                            </label>
                          </div>

                          <div className="text-left">
                            <label>
                              <input
                                type="checkbox"
                                value="a markedly diminished effect with continued use of the same amount of alcohol or substances"
                                className="mr-2"
                                checked={
                                  substanceUseValue?.toleranceDefinedFollowing.filter(
                                    (item) =>
                                      item ===
                                      "a markedly diminished effect with continued use of the same amount of alcohol or substances"
                                  ).length > 0
                                }
                                onChange={handleToleranceDefinedFollowingChange}
                              />
                              a markedly diminished effect with continued use of
                              the same amount of alcohol or substances
                            </label>
                          </div>
                        </div>
                      ) : null}

                      {item.label ===
                      "Withdrawal as manifested by either of the following:" ? (
                        <div className="px-5">
                          <div className="text-left my-3">
                            <label>
                              <input
                                type="checkbox"
                                value="the characteristic withdrawal syndrome for alcohol or substances"
                                className="mr-2"
                                checked={
                                  substanceUseValue?.withdrawalEitherFollowing.filter(
                                    (item) =>
                                      item ===
                                      "the characteristic withdrawal syndrome for alcohol or substances"
                                  ).length > 0
                                }
                                onChange={handleWithdrawalEitherFollowingChange}
                              />
                              the characteristic withdrawal syndrome for alcohol
                              or substances
                            </label>
                          </div>

                          <div className="text-left">
                            <label>
                              <input
                                type="checkbox"
                                value="alcohol or substances (or a closely related substance, such as a benzodiazepine) is taken to relieve or avoid withdrawal symptoms"
                                className="mr-2"
                                checked={
                                  substanceUseValue?.withdrawalEitherFollowing.filter(
                                    (item) =>
                                      item ===
                                      "alcohol or substances (or a closely related substance, such as a benzodiazepine) is taken to relieve or avoid withdrawal symptoms"
                                  ).length > 0
                                }
                                onChange={handleWithdrawalEitherFollowingChange}
                              />
                              Alcohol or substances (or a closely related
                              substance, such as a benzodiazepine) is taken to
                              relieve or avoid withdrawal symptoms
                            </label>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
                {errors.regardingAlcoholAnyFollowing && (
                  <div className="text-red-500 text-left text-[12px] mt-2">
                    {errors.regardingAlcoholAnyFollowing}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ) : null}

        <CardField
          title="129. Have you ever enrolled in a substance recovery treatment program?"
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
                        type="text"
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
                        type="text"
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
              <div className="w-[95%] mx-auto p-3  shadow-lg ">
                <p className="text-left text-[20px] mt-2">
                  This clean and sober period lasted from when to when?
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
                          { "border-b-red-500": errors.cleanSoberLastedFrom }
                        )}
                        name="cleanSoberLastedFrom"
                        value={substanceUseValue?.cleanSoberLastedFrom}
                        onChange={handleChange}
                      />
                    </div>

                    {errors.cleanSoberLastedFrom && (
                      <div className="text-red-500 text-left text-[12px] mt-2 block ml-11">
                        {errors.cleanSoberLastedFrom}
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
                          { "border-b-red-500": errors.cleanSoberLastedTo }
                        )}
                        name="cleanSoberLastedTo"
                        value={substanceUseValue?.cleanSoberLastedTo}
                        onChange={handleChange}
                      />
                    </div>

                    {errors.cleanSoberLastedTo && (
                      <div className="text-red-500 text-left text-[12px] mt-2 ml-6">
                        {errors.cleanSoberLastedTo}
                      </div>
                    )}
                  </div>
                </div>
              </div>
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
              <TextFollowUp
                title="When was this longest period of remaining clean and sober?"
                onChange={handleChange}
                name="cleanSoberLongest"
                value={substanceUseValue?.cleanSoberLongest}
                error={errors.cleanSoberLongest}
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
