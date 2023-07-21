/** @format */

import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import { toast } from "react-toastify";

import CardField from "../common/CardField";
import RadioFollowUp from "../common/RadioFollowUp";
import useGlobalContext from "../../hooks/useGlobalContext";
import TextField from "../common/TextField";
import TextFollowUp from "../common/TextFollowUp";
import validatePastHistory from "../../validation/validatePastHistory";
import CardTextFollowUp from "../common/CardTextFollowUp";
import CardCheckFollowUp from "../common/CardCheckFollowUp";

const PastHistory = ({ currentSection, setCurrentSection }) => {
  const { globalPastHistory, setGlobalPastHistory } = useGlobalContext();

  const [pastHistoryValue, setPastHistoryValue] = useState({
    previouslyExperiencedSymptom: "",
    describeSymptoms: "",
    experienceMuchEnergy: "",
    sleptFewer4Hours: "",
    lackSleepEnergy: "",
    sleepFewer: "",
    mood: "",
    describeMood: "",
    alcoholSubstances: "",
    experienceFollowing: [],
    recurrentRituals: "",
    symptomsDrinkingAlcohol: "",
    harmKillYourSelf: "",
    highEnergyTime: "",
    emotionalSymptomsRelationShip: "",
    firstFeelDepressed: "",
    feelHighLevelAnxiety: "",
    diagnosedMentalHealth: [],
    describeHealthCondition: "",
    otherMedications: "",
    pastMedicationName: "",
    startedMedicationDate: "",
    stopedMedicationDate: "",
    pastPsychiatricMedication: [],
    stopedPsychiatricMedicationsReason: [],
    prescribeThisMedication: "",
    prescribeThisMedicationNameDate: "",
    whatClinicWorked: "",
    otherPsychiatrists: "",
    thisPsychiatristSeeDate: "",
    attendedSessionsPsychiatrist: "",
    previouslyReceivedPsychotherapy: "",
    receivedPsychotherapyBegin: "",
    receivedPsychotherapyLong: "",
    attendedSessionsPsychotherapy: "",
    pastPsychotherapistsDate: "",
    otherPsychotherapyTreatmentList: "",
    admittedPsychiatricHospital: "",
    psychiatricHospitalizationReason: [],
    receivedTreatment: "",
    admittedHospitalName: "",
    hospitalizedLong: "",
    hospitalizedDate: "",
    suicidalIdeation: "",
    suicideAttempt: "",
    attemptedSuicideTimes: "1",
    suicideAllMethods: "",
    attemptedSuicideDate: "",
    otherPsychiatricSymptoms: "",
    describeOtherPsychiatricSymptoms: "",
    otherPsychotherapyTreatment: "",
    describeOtherPsychotherapyTreatment: "",
    evaluatedOtherwisePsychiatrists: "",
    evaluationReason: "",
    evaluationPerformed: "",
    evaluationOccur: "",
    pastPsychiatricMedicationOther: "",
    physicalAltercations: "",
    physicialAltercationsMany: "",
  });

  const [errors, setErrors] = useState({});

  const PreviouslyExperiencedSymptomOptions = [
    {
      label: "depressive mood",
      value: "depressive mood",
      name: "PreviouslyExperiencedSymptomOptionsdepressive mood",
    },
    {
      label: "anxiety",
      value: "anxiety",
      name: "PreviouslyExperiencedSymptomOptionsanxiety",
    },
    {
      label: "post traumatic stress",
      value: "post traumatic stress",
      name: "PreviouslyExperiencedSymptomOptionspost traumatic stress",
    },
    {
      label: "mania",
      value: "mania",
      name: "PreviouslyExperiencedSymptomOptionsmania",
    },
    {
      label: "psychosis",
      value: "psychosis",
      name: "PreviouslyExperiencedSymptomOptionspsychosis",
    },
  ];

  const PreviouslyExperiencedSymptomTitle = [
    {
      label: "depressive mood",
      title: "Please describe your depressive symptoms at that time:",
    },
    {
      label: "anxiety",
      title: "Please describe your anxiety symptoms at that time:",
    },
    {
      label: "post traumatic stress",
      title:
        "Please describe your post traumatic stress symptoms at that time:",
    },
    {
      label: "mania",
      title: "Please describe your mania symptoms at that time:",
    },
    {
      label: "psychosis",
      title: "Please describe your psychosis symptoms at that time:",
    },
  ];

  const experienceMuchEnergyOptions = [
    { label: "Yes", value: "Yes", name: "experienceMuchEnergyOptionsYes" },
    { label: "No", value: "No", name: "experienceMuchEnergyOptionsNo" },
  ];

  const SleptFewer4HoursOptions = [
    {
      label: "1 night",
      value: "1 night",
      name: "SleptFewer4HoursOptions1 night",
    },
    {
      label: "2-4 nights",
      value: "2-4 nights",
      name: "SleptFewer4HoursOptions2-4 nights",
    },
    {
      label: "5-7 nights",
      value: "5-7 nights",
      name: "SleptFewer4HoursOptions5-7 nights",
    },
    {
      label: "8-14 nights",
      value: "8-14 nights",
      name: "SleptFewer4HoursOptions8-14 nights",
    },
    {
      label: "15-30 nights",
      value: "15-30 nights",
      name: "SleptFewer4HoursOptions15-30 nights",
    },
    {
      label: "30+ nights",
      value: "30+ nights",
      name: "SleptFewer4HoursOptions30+ nights",
    },
  ];

  const LackSleepEnergyOptions = [
    {
      label: "High energy",
      value: "high energy",
      name: "LackSleepEnergyOptionsHigh energy",
    },
    {
      label: "Normal energy",
      value: "normal energy",
      name: "LackSleepEnergyOptionsNormal energy",
    },
    {
      label: "Low and fatigued",
      value: "low and fatigued",
      name: "LackSleepEnergyOptionsLow and fatigued",
    },
  ];

  const SleepFewerOptions = [
    { label: "Yes", value: "Yes", name: "SleepFewerOptionsYes" },
    { label: "No", value: "No", name: "SleepFewerOptionsNo" },
  ];

  const MoodOptions = [
    { label: "Euphoric", value: "euphoric", name: "MoodOptionsEuphoric" },
    { label: "Elevated", value: "elevated", name: "MoodOptionsElevated" },
    { label: "Irritable", value: "irritable", name: "MoodOptionsIrritable" },
    { label: "Anxious", value: "anxious", name: "MoodOptionsAnxious" },
    { label: "Normal", value: "normal", name: "MoodOptionsNormal" },
    { label: "Low", value: "low", name: "MoodOptionsLow" },
    { label: "Depressed", value: "depressed", name: "MoodOptionsDepressed" },
    { label: "Other", value: "other", name: "MoodOptionsOther" },
  ];

  const AlcoholSubstancesOptions = [
    { label: "Yes", value: "Yes", name: "AlcoholSubstancesOptionsYes" },
    { label: "No", value: "No", name: "AlcoholSubstancesOptionsNo" },
  ];

  const SymptomsDrinkingAlcoholOptions = [
    { label: "Yes", value: "Yes", name: "SymptomsDrinkingAlcoholOptionsYes" },
    { label: "No", value: "No", name: "SymptomsDrinkingAlcoholOptionsNo" },
    { label: "N/A", value: "N/A", name: "SymptomsDrinkingAlcoholOptionsN/A" },
  ];

  const ExperienceFollowingOptions = [
    {
      label: "Heard a voice that no one else hears",
      value: "heard a voice that no one else hears",
      name: "ExperienceFollowingOptionsHeard a voice that no one else hears",
    },
    {
      label:
        "Felt like people you don't know are talking about you or following you",
      value:
        "felt like people you don't know are talking about you or following you",
      name: "ExperienceFollowingOptionsFelt like people you don't know are talking about you or following you",
    },
    {
      label:
        "Had thoughts, behaviors, or rituals that are recurrent, intrusive, and time consuming",
      value:
        "had thoughts, behaviors, or rituals that are recurrent, intrusive, and time consuming",
      name: "ExperienceFollowingOptionsHad thoughts, behaviors, or rituals that are recurrent, intrusive, and time consuming",
    },
    {
      label: "None of the above",
      value: "none of the above",
      name: "ExperienceFollowingOptionsNone of the above",
    },
  ];

  const HarmKillYourSelfOptions = [
    { label: "Yes", value: "Yes", name: "HarmKillYourSelfOptionsYes" },
    { label: "No", value: "No", name: "HarmKillYourSelfOptionsNo" },
  ];

  const HighEnergyTimeOptions = [
    { label: "Yes", value: "Yes", name: "HighEnergyTimeOptionsYes" },
    { label: "No", value: "No", name: "HighEnergyTimeOptionsNo" },
  ];

  const EmotionalSymptomsRelationShipOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "EmotionalSymptomsRelationShipOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "EmotionalSymptomsRelationShipOptionsNo",
    },
    {
      label: "N/A",
      value: "N/A",
      name: "EmotionalSymptomsRelationShipOptionsN/A",
    },
  ];

  const DiagnosedMentalHealthOptions = [
    {
      label: "Anxiety",
      value: "anxiety",
      name: "DiagnosedMentalHealthOptionsAnxiety",
    },
    {
      label: "Autism Spectrum Disorder",
      value: "autism Spectrum Disorder",
      name: "DiagnosedMentalHealthOptionsAutism Spectrum Disorder",
    },
    {
      label: "Bipolar disorder",
      value: "bipolar disorder",
      name: "DiagnosedMentalHealthOptionsBipolar disorder",
    },
    {
      label: "Depression",
      value: "depression",
      name: "DiagnosedMentalHealthOptionsDepression",
    },
    {
      label: "Eating disorder",
      value: "eating disorder",
      name: "DiagnosedMentalHealthOptionsEating disorder",
    },
    {
      label: "Mood disorder",
      value: "mood disorder",
      name: "DiagnosedMentalHealthOptionsMood disorder",
    },
    {
      label: "Obsessive Compulsive Disorder",
      value: "obsessive Compulsive Disorder",
      name: "DiagnosedMentalHealthOptionsObsessive Compulsive Disorder",
    },
    {
      label: "Personality disorder",
      value: "personality disorder",
      name: "DiagnosedMentalHealthOptionsPersonality disorder",
    },
    {
      label: "Mania or Hypomania",
      value: "mania or Hypomania",
      name: "DiagnosedMentalHealthOptionsMania or Hypomania",
    },
    {
      label: "Panic attacks",
      value: "panic attacks",
      name: "DiagnosedMentalHealthOptionsPanic attacks",
    },
    {
      label: "Schizophrenia or other psychotic disorder",
      value: "schizophrenia or other psychotic disorder",
      name: "DiagnosedMentalHealthOptionsSchizophrenia or other psychotic disorder",
    },
    {
      label: "Post-traumatic stress disorder",
      value: "post-traumatic stress disorder",
      name: "DiagnosedMentalHealthOptionsPost-traumatic stress disorder",
    },
    {
      label: "Other",
      value: "other",
      name: "DiagnosedMentalHealthOptionsOther",
    },
  ];

  const OtherMedicationsOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "OtherMedicationsOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "OtherMedicationsOptionsNo",
    },
  ];

  const PastPsychiatricMedicationOptions = [
    {
      label: "Depression",
      value: "depression",
      name: "PastPsychiatricMedicationOptionsDepression",
    },
    {
      label: "Anxiety",
      value: "anxiety",
      name: "PastPsychiatricMedicationOptionsAnxiety",
    },
    {
      label: "Mania",
      value: "mania",
      name: "PastPsychiatricMedicationOptionsMania",
    },
    {
      label: "Psychotic symptoms",
      value: "psychotic symptoms",
      name: "PastPsychiatricMedicationOptionsPsychotic symptoms",
    },
    {
      label: "PTSD",
      value: "PTSD",
      name: "PastPsychiatricMedicationOptionsPTSD",
    },
    {
      label: "OCD",
      value: "OCD",
      name: "PastPsychiatricMedicationOptionsOCD",
    },
    {
      label: "Other",
      value: "other",
      name: "PastPsychiatricMedicationOptionsOther",
    },
  ];

  const PastPhysicalLogicOptions = [
    {
      label: "Improved symptoms",
      value: "improved symptoms",
      name: "PastPhysicalLogicImproved symptoms",
    },
    {
      label: "Worsened symptoms",
      value: "worsened symptoms",
      name: "PastPhysicalLogicWorsened symptoms",
    },
    {
      label: "No effect on symptoms",
      value: "no effect on symptoms",
      name: "PastPhysicalLogicNo effect on symptoms",
    },
  ];

  const StopedPsychiatricMedicationsReasonOptions = [
    {
      label: "No longer working",
      value: "no longer working",
      name: "StopedPsychiatricMedicationsReasonOptionsNo longer working",
    },
    {
      label: "No longer wanted to take them",
      value: "no longer wanted to take them",
      name: "StopedPsychiatricMedicationsReasonOptionsNo longer wanted to take them",
    },
    {
      label: "Cost",
      value: "cost",
      name: "StopedPsychiatricMedicationsReasonOptionsCost",
    },
    {
      label: "Ended treatment with prescriber",
      value: "ending treatment with that prescriber",
      name: "StopedPsychiatricMedicationsReasonOptionsEnded treatment with prescriber",
    },
    {
      label: "Medication side effects",
      value: "medication side effects",
      name: "StopedPsychiatricMedicationsReasonOptionsMedication side effects",
    },
    {
      label: "Concerns about the medication",
      value: "concerns about the medication",
      name: "StopedPsychiatricMedicationsReasonOptionsConcerns about the medication",
    },
    {
      label: "Felt medication was no longer needed",
      value: "felt the medication was no longer needed",
      name: "StopedPsychiatricMedicationsReasonOptionsFelt medication was no longer needed",
    },
    {
      label: "Psychiatric symptoms had resolved",
      value: "psychiatric symptoms had resolved",
      name: "StopedPsychiatricMedicationsReasonOptionsPsychiatric symptoms had resolved",
    },
    {
      label: "Other",
      value: "other",
      name: "StopedPsychiatricMedicationsReasonOptionsOther",
    },
  ];

  const PrescribeThisMedicationOptions = [
    {
      label: "psychiatrist",
      value: "psychiatrist",
      name: "PrescribeThisMedicationOptionspsychiatrist",
    },
    {
      label: "psychiatric nurse practitioner",
      value: "psychiatric nurse practitioner",
      name: "PrescribeThisMedicationOptionspsychiatric nurse practitioner",
    },
    {
      label: "primacy care clinician",
      value: "primacy care clinician",
      name: "PrescribeThisMedicationOptionsprimacy care clinician",
    },
    {
      label: "I don't know",
      value: "I don't know",
      name: "PrescribeThisMedicationOptionsI don't know",
    },
  ];

  const AttendedSessionsPsychiatristOptions = [
    {
      label: "Weekly",
      value: "weekly",
      name: "AttendedSessionsPsychiatristOptionsWeekly",
    },
    {
      label: "Twice per month",
      value: "twice per month",
      name: "AttendedSessionsPsychiatristOptionsTwice per month",
    },
    {
      label: "Monthly",
      value: "monthly",
      name: "AttendedSessionsPsychiatristOptionsMonthly",
    },
    {
      label: "Every few months",
      value: "every few months",
      name: "AttendedSessionsPsychiatristOptionsEvery few months",
    },
    {
      label: "A few times per year",
      value: "a few times per year",
      name: "AttendedSessionsPsychiatristOptionsA few times per year",
    },
    {
      label: "Infrequently",
      value: "infrequently",
      name: "AttendedSessionsPsychiatristOptionsInfrequently",
    },
  ];

  const PreviouslyReceivedPsychotherapyOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "PreviouslyReceivedPsychotherapyOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "PreviouslyReceivedPsychotherapyOptionsNo",
    },
  ];

  const ReceivedPsychotherapyLongOptions = [
    {
      label: "One session",
      value: "one session",
      name: "ReceivedPsychotherapyLongOptionsone session",
    },
    {
      label: "Several sessions",
      value: "several sessions",
      name: "ReceivedPsychotherapyLongOptionsseveral sessions",
    },
    {
      label: "Several months",
      value: "several months",
      name: "ReceivedPsychotherapyLongOptionsseveral months",
    },
    {
      label: "Approximately 6 months",
      value: "approximately 6 months",
      name: "ReceivedPsychotherapyLongOptionsapproximately 6 months",
    },
    {
      label: "Approximatley one year",
      value: "approximatley one year",
      name: "ReceivedPsychotherapyLongOptionsapproximatley one year",
    },
    {
      label: "Several years",
      value: "several years",
      name: "ReceivedPsychotherapyLongOptionsseveral years",
    },
    {
      label: "More than 5 years",
      value: "more than 5 years",
      name: "ReceivedPsychotherapyLongOptionsmore than 5 years",
    },
    {
      label: "Until the present",
      value: "until the present",
      name: "ReceivedPsychotherapyLongOptionsuntil the present",
    },
  ];

  const AttendedSessionsPsychotherapyOptions = [
    {
      label: "Weekly",
      value: "weekly",
      name: "AttendedSessionsPsychotherapyOptionsWeekly",
    },
    {
      label: "Twice Weekly",
      value: "twice Weekly",
      name: "AttendedSessionsPsychotherapyOptionsTwiceWeekly",
    },
    {
      label: "Twice per month",
      value: "twice per month",
      name: "AttendedSessionsPsychotherapyOptionsTwice per month",
    },
    {
      label: "Monthly",
      value: "monthly",
      name: "AttendedSessionsPsychotherapyOptionsMonthly",
    },
    {
      label: "Every few months",
      value: "every few months",
      name: "AttendedSessionsPsychotherapyOptionsEvery few months",
    },
    {
      label: "A few times per year",
      value: "a few times per year",
      name: "AttendedSessionsPsychotherapyOptionsA few times per year",
    },
    {
      label: "Infrequently",
      value: "infrequently",
      name: "AttendedSessionsPsychotherapyOptionsInfrequently",
    },
  ];

  const AdmittedPsychiatricHospitalOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "AdmittedPsychiatricHospitalOptionsYes",
    },
    { label: "No", value: "No", name: "AdmittedPsychiatricHospitalOptionsNo" },
  ];

  const PsychiatricHospitalizationReasonOptions = [
    {
      label: "Worsening of depressive symptoms",
      value: "worsening of depressive symptoms",
      name: "PsychiatricHospitalizationReasonOptionsworsening of depressive symptoms",
    },
    {
      label: "Suicidal ideation",
      value: "suicidal ideation",
      name: "PsychiatricHospitalizationReasonOptionssuicidal ideation",
    },
    {
      label: "Suicide attempt",
      value: "suicide attempt",
      name: "PsychiatricHospitalizationReasonOptionssuicide attempt",
    },
    {
      label: "Worsening of anxiety symptoms",
      value: "worsening of anxiety symptoms",
      name: "PsychiatricHospitalizationReasonOptionsworsening of anxiety symptoms",
    },
    {
      label: "Worsening of post traumatic symptoms",
      value: "worsening of post traumatic symptoms",
      name: "PsychiatricHospitalizationReasonOptionsworsening of post traumatic symptoms",
    },
    {
      label: "Worsening of manic symptoms",
      value: "worsening of manic symptoms",
      name: "PsychiatricHospitalizationReasonOptionsworsening of manic symptoms",
    },
    {
      label: "Worsening of psychotic symptoms",
      value: "worsening of psychotic symptoms",
      name: "PsychiatricHospitalizationReasonOptionsworsening of psychotic symptoms",
    },
    {
      label: "I don't know",
      value: "I don't know",
      name: "PsychiatricHospitalizationReasonOptionsI don't know",
    },
  ];

  const ReceivedTreatmentOptions = [
    {
      label: "Psychiatric medications",
      value: "psychiatric medications",
      name: "ReceivedTreatmentOptionsPsychiatric medications",
    },
    {
      label: "Psychotherapy",
      value: "psychotherapy",
      name: "ReceivedTreatmentOptionspsychotherapy",
    },
    {
      label: "Case management or social support services,",
      value: "case management or social support services",
      name: "ReceivedTreatmentOptionscase management or social support services,",
    },
    {
      label: "Substance recovery treatment",
      value: "substance recovery treatment",
      name: "ReceivedTreatmentOptionssubstance recovery treatment",
    },
    {
      label: "Other",
      value: "other",
      name: "ReceivedTreatmentOptionsOther",
    },
  ];

  const SuicidalIdeationOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "SuicidalIdeationOptionsYes",
    },
    { label: "No", value: "No", name: "SuicidalIdeationOptionsNo" },
  ];

  const SuicideAttemptOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "SuicideAttemptOptionsYes",
    },
    { label: "No", value: "No", name: "SuicideAttemptOptionsNo" },
  ];

  const OtherPsychiatricSymptomsOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "OtherPsychiatricSymptomsOptionsYes",
    },
    { label: "No", value: "No", name: "OtherPsychiatricSymptomsOptionsNo" },
  ];

  const OtherPsychotherapyTreatmentOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "OtherPsychotherapyTreatmentOptionsYes",
    },
    { label: "No", value: "No", name: "OtherPsychotherapyTreatmentOptionsNo" },
  ];

  const EvaluatedOtherwisePsychiatristsOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "EvaluatedOtherwisePsychiatristsOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "EvaluatedOtherwisePsychiatristsOptionsNo",
    },
  ];

  const PhysicalAltercationsOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "PhysicalAltercationsOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "PhysicalAltercationsOptionsNo",
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setPastHistoryValue(globalPastHistory);
  }, [globalPastHistory]);

  const handlePreviouslyExperiencedSymptomchange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      previouslyExperiencedSymptom: event.target.value,
      describeSymptoms: "",
    });
  };

  const handleExperienceMuchEnergychange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      experienceMuchEnergy: event.target.value,
      sleptFewer4Hours: "",
      lackSleepEnergy: "",
      sleepFewer: "",
      mood: "",
      describeMood: "",
      alcoholSubstances: "",
    });
  };

  const handleSleptFewer4HoursChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      sleptFewer4Hours: event.target.value,
    });
  };

  const handleLackSleepEnergyChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      lackSleepEnergy: event.target.value,
    });
  };

  const handleSleepFewerChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      sleepFewer: event.target.value,
    });
  };

  const handleMoodChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      mood: event.target.value,
      describeMood: "",
    });
  };

  const handleAlcoholSubstancesChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      alcoholSubstances: event.target.value,
    });
  };

  const handlePastPsychiatricMedicationOtherChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      pastPsychiatricMedication: pastHistoryValue.pastPsychiatricMedication.map(
        (item) =>
          item.condition === "other"
            ? { ...item, effect: event.target.value }
            : item
      ),
      pastPsychiatricMedicationOther: event.target.value,
    });
  };

  const handleExperienceFollowingchange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...pastHistoryValue?.experienceFollowing];

    if (isChecked) {
      if (itemValue === "none of the above") {
        newCheckedItems = ["none of the above"];
      } else {
        if (
          newCheckedItems.filter((item) => item === "none of the above")
            .length > 0
        ) {
          newCheckedItems = [];
        }
        newCheckedItems.push(itemValue);
      }
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }
    setPastHistoryValue({
      ...pastHistoryValue,
      experienceFollowing: newCheckedItems,
      recurrentRituals: "",
      symptomsDrinkingAlcohol: "",
    });
  };

  const handleHarmKillYourSelfchange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      harmKillYourSelf: event.target.value,
    });
  };

  const handleHighEnergyTimechange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      highEnergyTime: event.target.value,
    });
  };

  const handleEmotionalSymptomsRelationShipchange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      emotionalSymptomsRelationShip: event.target.value,
    });
  };

  const handleDiagnosedMentalHealthchange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...pastHistoryValue?.diagnosedMentalHealth];

    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }
    setPastHistoryValue({
      ...pastHistoryValue,
      diagnosedMentalHealth: newCheckedItems,
    });
  };

  const handleOtherMedicationschange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      otherMedications: event.target.value,
      pastMedicationName: "",
      startedMedicationDate: "",
      stopedMedicationDate: "",
      pastPsychiatricMedication: [],
      stopedPsychiatricMedicationsReason: [],
      prescribeThisMedication: "",
      prescribeThisMedicationNameDate: "",
      whatClinicWorked: "",
      otherPsychiatrists: "",
      thisPsychiatristSeeDate: "",
      attendedSessionsPsychiatrist: "",
    });
  };

  const handlePastPsychiatricMedicationChange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...pastHistoryValue?.pastPsychiatricMedication];

    if (isChecked) {
      if (itemValue !== "other") {
        newCheckedItems.push({
          condition: itemValue,
          effect: "improved symptoms",
        });
      } else {
        newCheckedItems.push({
          condition: itemValue,
          effect: pastHistoryValue.pastPsychiatricMedicationOther,
        });
      }
    } else {
      newCheckedItems = newCheckedItems.filter(
        (item) => item.condition !== itemValue
      );
    }
    setPastHistoryValue({
      ...pastHistoryValue,
      pastPsychiatricMedication: newCheckedItems,
    });
  };

  const handleSymtomsChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      describeSymptoms: event.target.value,
    });
  };

  const handlePsychiatricMedicationChange = (event) => {
    const itemName = event.target.name;
    const condition = PastPsychiatricMedicationOptions?.filter(
      (item) => item.name === itemName
    );
    const cond = condition[0]?.value;

    setPastHistoryValue({
      ...pastHistoryValue,
      pastPsychiatricMedication: pastHistoryValue.pastPsychiatricMedication.map(
        (item) =>
          item.condition === cond
            ? { ...item, effect: event.target.value }
            : item
      ),
    });
  };

  const handleStopedPsychiatricMedicationsReasonChange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [
      ...pastHistoryValue.stopedPsychiatricMedicationsReason,
    ];

    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }

    setPastHistoryValue({
      ...pastHistoryValue,
      stopedPsychiatricMedicationsReason: newCheckedItems,
    });
  };

  const handlePrescribeThisMedicationChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      prescribeThisMedication: event.target.value,
    });
  };

  const handleAttendedSessionsPsychiatristChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      attendedSessionsPsychiatrist: event.target.value,
    });
  };

  const handlePreviouslyReceivedPsychotherapychange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      previouslyReceivedPsychotherapy: event.target.value,
      receivedPsychotherapyBegin: "",
      receivedPsychotherapyLong: "",
      attendedSessionsPsychotherapy: "",
      pastPsychotherapistsDate: "",
      otherPsychotherapyTreatmentList: "",
    });
  };

  const handleReceivedPsychotherapyLongChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      receivedPsychotherapyLong: event.target.value,
    });
  };

  const handleAttendedSessionsPsychotherapyChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      attendedSessionsPsychotherapy: event.target.value,
    });
  };

  const handleSymptomsDrinkingAlcoholChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      symptomsDrinkingAlcohol: event.target.value,
    });
  };

  const handleAdmittedPsychiatricHospitalchange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      admittedPsychiatricHospital: event.target.value,
      psychiatricHospitalizationReason: [],
      receivedTreatment: "",
      admittedHospitalName: "",
      hospitalizedDate: "",
      hospitalizedLong: "",
    });
  };

  const handlePsychiatricHospitalizationReasonChange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [
      ...pastHistoryValue?.psychiatricHospitalizationReason,
    ];

    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }

    setPastHistoryValue({
      ...pastHistoryValue,
      psychiatricHospitalizationReason: newCheckedItems,
    });
  };

  const handleReceivedTreatmentChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      receivedTreatment: event.target.value,
    });
  };

  const handleSuicidalIdeationchange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      suicidalIdeation: event.target.value,
    });
  };

  const handleSuicideAttemptchange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      suicideAttempt: event.target.value,
      attemptedSuicideTimes: "1",
      suicideAllMethods: "",
      attemptedSuicideDate: "",
    });
  };

  const handleAttemptedSuicideTimesSelect = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      attemptedSuicideTimes: event.target.value,
    });
  };

  const handleOtherPsychiatricSymptomschange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      otherPsychiatricSymptoms: event.target.value,
      describeOtherPsychiatricSymptoms: "",
    });
  };

  const handleOtherPsychotherapyTreatmentchange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      otherPsychotherapyTreatment: event.target.value,
      describeOtherPsychotherapyTreatment: "",
    });
  };

  const handleEvaluatedOtherwisePsychiatristschange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      evaluatedOtherwisePsychiatrists: event.target.value,
      evaluationReason: "",
      evaluationPerformed: "",
      evaluationOccur: "",
    });
  };

  const handlePhysicalAltercationschange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      physicalAltercations: event.target.value,
      physicialAltercationsMany: "",
    });
  };

  const handleChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalPastHistory(pastHistoryValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validatePastHistory(pastHistoryValue);
    setErrors(errors);

    setGlobalPastHistory(pastHistoryValue);
    setCurrentSection(currentSection + 1);

    // if (isValid) {
    //   setGlobalPastHistory(pastHistoryValue);
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
        Past History
      </p>

      <form>
        <CardTextFollowUp
          type="radio"
          title="110. Have you ever previously experienced any of the following symptoms"
          options={PreviouslyExperiencedSymptomOptions}
          onChange={handlePreviouslyExperiencedSymptomchange}
          checked={pastHistoryValue?.previouslyExperiencedSymptom}
          errors={errors.previouslyExperiencedSymptom}
          title2={PreviouslyExperiencedSymptomTitle}
          value={pastHistoryValue?.describeSymptoms}
          onChange2={handleSymtomsChange}
          errors2={errors.describeSymptoms}
        />

        <CardField
          title="111. Have you ever experienced having so much energy that you do not need to sleep for several days or a week at a time?"
          type="radio"
          options={experienceMuchEnergyOptions}
          onChange={handleExperienceMuchEnergychange}
          checked={pastHistoryValue?.experienceMuchEnergy}
          errors={errors.experienceMuchEnergy}
        />
        {pastHistoryValue?.experienceMuchEnergy === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="During this time, if you slept fewer than 4 hours per night, how many nights did it last?"
                onChange={handleSleptFewer4HoursChange}
                options={SleptFewer4HoursOptions}
                checked={pastHistoryValue?.sleptFewer4Hours}
                error={errors.sleptFewer4Hours}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="During this time of lack of sleep, how was your energy when awake?"
                onChange={handleLackSleepEnergyChange}
                options={LackSleepEnergyOptions}
                checked={pastHistoryValue?.lackSleepEnergy}
                error={errors.lackSleepEnergy}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="During this time, did you sleep fewer than 4 hours per night for 4-7 or more consecutive nights, without feeling excessively tired?"
                onChange={handleSleepFewerChange}
                options={SleepFewerOptions}
                checked={pastHistoryValue?.sleepFewer}
                error={errors.sleepFewer}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="During this time, how was your mood?"
                options={MoodOptions}
                onChange={handleMoodChange}
                checked={pastHistoryValue?.mood}
                error={errors.mood}
              />
            </div>

            {pastHistoryValue?.mood === "other" ? (
              <div>
                <div className="w-[68%] mx-auto mt-3">
                  <TextFollowUp
                    title="Please describe your mood here."
                    onChange={handleChange}
                    name="describeMood"
                    value={pastHistoryValue?.describeMood}
                    error={errors.describeMood}
                  />
                </div>
              </div>
            ) : null}

            <CardField
              title="During this high energy time did you engage in any high-risk behaviors?"
              type="radio"
              options={HighEnergyTimeOptions}
              onChange={handleHighEnergyTimechange}
              checked={pastHistoryValue?.highEnergyTime}
              errors={errors.highEnergyTime}
            />
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="During this time, did you drink alcohol or use any other substances?"
                options={AlcoholSubstancesOptions}
                onChange={handleAlcoholSubstancesChange}
                checked={pastHistoryValue?.alcoholSubstances}
                error={errors.alcoholSubstances}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="112. Have you ever experienced any of the following?"
          type="checkbox"
          options={ExperienceFollowingOptions}
          onChange={handleExperienceFollowingchange}
          checked={pastHistoryValue?.experienceFollowing}
          errors={errors.experienceFollowing}
        />

        {pastHistoryValue?.experienceFollowing.filter(
          (item) =>
            item ===
            "had thoughts, behaviors, or rituals that are recurrent, intrusive, and time consuming"
        ).length > 0 ? (
          <div className="w-[68%] mx-auto mt-3">
            <TextFollowUp
              title="If you have thoughts, behaviors, or rituals that are recurrent, what thoughts, behaviors, or rituals are you having?"
              onChange={handleChange}
              name="recurrentRituals"
              value={pastHistoryValue?.recurrentRituals}
              error={errors.recurrentRituals}
            />
          </div>
        ) : null}

        {pastHistoryValue?.experienceFollowing.length > 0 ? (
          <div className="w-[68%] mx-auto mt-3">
            <RadioFollowUp
              title="When experiencing these symptoms, were you drinking alcohol or using any substances?"
              options={SymptomsDrinkingAlcoholOptions}
              onChange={handleSymptomsDrinkingAlcoholChange}
              checked={pastHistoryValue?.symptomsDrinkingAlcohol}
              error={errors.symptomsDrinkingAlcohol}
            />
          </div>
        ) : null}

        <CardField
          title="113. Recently, have you been thinking about how you might harm or kill yourself?"
          type="radio"
          options={HarmKillYourSelfOptions}
          onChange={handleHarmKillYourSelfchange}
          checked={pastHistoryValue?.harmKillYourSelf}
          errors={errors.harmKillYourSelf}
        />

        <CardField
          title="114. Have any of your emotional symptoms (sadness, depression, anxiety) had a negative effect upon your work, school, or relationships?"
          type="radio"
          options={EmotionalSymptomsRelationShipOptions}
          onChange={handleEmotionalSymptomsRelationShipchange}
          checked={pastHistoryValue?.emotionalSymptomsRelationShip}
          errors={errors.emotionalSymptomsRelationShip}
        />

        <TextField
          title="115. If you have ever experienced symptoms of depression, when did you first feel depressed?"
          type="text"
          name="firstFeelDepressed"
          value={pastHistoryValue?.firstFeelDepressed}
          placeholder="Your answer"
          onChange={handleChange}
          error={errors.firstFeelDepressed}
        />

        <TextField
          title="116. If you have ever experienced symptoms of anxiety, when did you first feel high levels of anxiety?"
          type="text"
          name="feelHighLevelAnxiety"
          value={pastHistoryValue?.feelHighLevelAnxiety}
          placeholder="Your answer"
          onChange={handleChange}
          error={errors.feelHighLevelAnxiety}
        />

        <CardField
          title="117. Have you ever been diagnosed by a healthcare provider with any of the following mental health conditions?"
          type="checkbox"
          options={DiagnosedMentalHealthOptions}
          onChange={handleDiagnosedMentalHealthchange}
          checked={pastHistoryValue?.diagnosedMentalHealth}
          errors={errors.diagnosedMentalHealth}
        />
        {pastHistoryValue?.diagnosedMentalHealth &&
        pastHistoryValue?.diagnosedMentalHealth.filter(
          (item) => item === "other"
        ).length ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please enter your mental health conditions here."
                onChange={handleChange}
                name="describeHealthCondition"
                value={pastHistoryValue?.describeHealthCondition}
                error={errors.describeHealthCondition}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="118. Have you ever taken any other medications in the past for a psychiatric or mental health condition, not listed above? This may include medications that did not work well or that were stopped for other reasons."
          type="radio"
          options={OtherMedicationsOptions}
          onChange={handleOtherMedicationschange}
          checked={pastHistoryValue?.otherMedications}
          errors={errors.otherMedications}
        />
        {pastHistoryValue?.otherMedications === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list the name(s) of the past medication(s), dose(s), and how often you took the medication."
                onChange={handleChange}
                name="pastMedicationName"
                value={pastHistoryValue?.pastMedicationName}
                error={errors.pastMedicationName}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list the approximate date you started taking the medication (if applicable)"
                onChange={handleChange}
                name="startedMedicationDate"
                value={pastHistoryValue?.startedMedicationDate}
                error={errors.startedMedicationDate}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list the approximate date you stopped taking the medication (if applicable)"
                onChange={handleChange}
                name="stopedMedicationDate"
                value={pastHistoryValue?.stopedMedicationDate}
                error={errors.stopedMedicationDate}
              />
            </div>

            <CardCheckFollowUp
              title="These past psychiatric medication produced:"
              type="checkbox"
              options={PastPsychiatricMedicationOptions}
              options2={PastPhysicalLogicOptions}
              type2="radio"
              name3="pastPsychiatricMedicationOther"
              value3={pastHistoryValue.pastPsychiatricMedicationOther}
              onChange3={handlePastPsychiatricMedicationOtherChange}
              onChange={handlePastPsychiatricMedicationChange}
              errors={errors.pastPsychiatricMedication}
              checked={pastHistoryValue?.pastPsychiatricMedication}
              onChange2={handlePsychiatricMedicationChange}
            />

            <div>
              <CardField
                title="Past psychiatric medications were stopped due to:"
                type="checkbox"
                options={StopedPsychiatricMedicationsReasonOptions}
                onChange={handleStopedPsychiatricMedicationsReasonChange}
                checked={pastHistoryValue?.stopedPsychiatricMedicationsReason}
                error={errors.stopedPsychiatricMedicationsReason}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="Did a psychiatrist, psychiatric nurse practitionaer, or primacy care clinician prescribe this medication to you?"
                options={PrescribeThisMedicationOptions}
                onChange={handlePrescribeThisMedicationChange}
                checked={pastHistoryValue?.prescribeThisMedication}
                error={errors.prescribeThisMedication}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list the names of your past clinician who prescribed this medication and dates you saw them."
                onChange={handleChange}
                name="prescribeThisMedicationNameDate"
                value={pastHistoryValue?.prescribeThisMedicationNameDate}
                error={errors.prescribeThisMedicationNameDate}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="At what clinic or office did they work at?"
                onChange={handleChange}
                name="whatClinicWorked"
                value={pastHistoryValue?.whatClinicWorked}
                error={errors.whatClinicWorked}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list any other psychiatrists you have ever seen."
                onChange={handleChange}
                name="otherPsychiatrists"
                value={pastHistoryValue?.otherPsychiatrists}
                error={errors.otherPsychiatrists}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="From what date(s) to what date(s) did you see these psychiatrists?"
                onChange={handleChange}
                name="thisPsychiatristSeeDate"
                value={pastHistoryValue?.thisPsychiatristSeeDate}
                error={errors.thisPsychiatristSeeDate}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="During this psychiatric treatment, how often did you attend sessions with your psychiatrist?"
                options={AttendedSessionsPsychiatristOptions}
                onChange={handleAttendedSessionsPsychiatristChange}
                checked={pastHistoryValue?.attendedSessionsPsychiatrist}
                error={errors.attendedSessionsPsychiatrist}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="119. Have you ever previously received psychotherapy (talk therapy/counseling)?"
          type="radio"
          options={PreviouslyReceivedPsychotherapyOptions}
          onChange={handlePreviouslyReceivedPsychotherapychange}
          checked={pastHistoryValue?.previouslyReceivedPsychotherapy}
          errors={errors.previouslyReceivedPsychotherapy}
        />

        {pastHistoryValue?.previouslyReceivedPsychotherapy === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="If you have ever received psychotherapy, when did your psychotherapy begin?"
                onChange={handleChange}
                name="receivedPsychotherapyBegin"
                value={pastHistoryValue?.receivedPsychotherapyBegin}
                error={errors.receivedPsychotherapyBegin}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="How long did you receive psychotherapy?"
                onChange={handleReceivedPsychotherapyLongChange}
                options={ReceivedPsychotherapyLongOptions}
                checked={pastHistoryValue?.receivedPsychotherapyLong}
                error={errors.receivedPsychotherapyLong}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="During this psychotherapy treatment, how often did you attend these sessions:"
                onChange={handleAttendedSessionsPsychotherapyChange}
                options={AttendedSessionsPsychotherapyOptions}
                checked={pastHistoryValue?.attendedSessionsPsychotherapy}
                error={errors.attendedSessionsPsychotherapy}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list the names of your past psychotherapists and dates you saw them."
                onChange={handleChange}
                name="pastPsychotherapistsDate"
                value={pastHistoryValue?.pastPsychotherapistsDate}
                error={errors.pastPsychotherapistsDate}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please describe any other psychotherapy treatment not listed above:"
                onChange={handleChange}
                name="otherPsychotherapyTreatmentList"
                value={pastHistoryValue?.otherPsychotherapyTreatmentList}
                error={errors.otherPsychotherapyTreatmentList}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="120. Have you ever been admitted to a psychiatric hospital?"
          type="radio"
          options={AdmittedPsychiatricHospitalOptions}
          onChange={handleAdmittedPsychiatricHospitalchange}
          checked={pastHistoryValue?.admittedPsychiatricHospital}
          errors={errors.admittedPsychiatricHospital}
        />

        {pastHistoryValue?.admittedPsychiatricHospital === "Yes" ? (
          <div>
            <div>
              <CardField
                title="Please list the reason for the psychiatric hospitalization"
                type="checkbox"
                onChange={handlePsychiatricHospitalizationReasonChange}
                options={PsychiatricHospitalizationReasonOptions}
                checked={pastHistoryValue?.psychiatricHospitalizationReason}
                error={errors.psychiatricHospitalizationReason}
              />
            </div>

            <div>
              <CardField
                title="Please list the treatment you received during the psychiatric hospitalization"
                type="radio"
                onChange={handleReceivedTreatmentChange}
                options={ReceivedTreatmentOptions}
                checked={pastHistoryValue?.receivedTreatment}
                error={errors.receivedTreatment}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list the name(s) of the hospital you were admitted to. If there is more than one instance, please list the information for all admissions."
                onChange={handleChange}
                name="admittedHospitalName"
                value={pastHistoryValue?.admittedHospitalName}
                error={errors.admittedHospitalName}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list the dates or year(s) in which you were hospitalized"
                onChange={handleChange}
                name="hospitalizedDate"
                value={pastHistoryValue?.hospitalizedDate}
                error={errors.hospitalizedDate}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list how long you were hospitalized on each occasion"
                onChange={handleChange}
                name="hospitalizedLong"
                value={pastHistoryValue?.hospitalizedLong}
                error={errors.hospitalizedLong}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="121. Have you ever experienced suicidal ideation?"
          type="radio"
          options={SuicidalIdeationOptions}
          onChange={handleSuicidalIdeationchange}
          checked={pastHistoryValue?.suicidalIdeation}
          errors={errors.suicidalIdeation}
        />

        <CardField
          title="122. Have you ever made a suicide attempt?"
          type="radio"
          options={SuicideAttemptOptions}
          onChange={handleSuicideAttemptchange}
          checked={pastHistoryValue?.suicideAttempt}
          errors={errors.suicideAttempt}
        />

        {pastHistoryValue?.suicideAttempt === "Yes" ? (
          <div>
            <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, textAlign: "left" }}>
                  If yes, how many times have you attempted suicide?
                </Typography>
                <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                <div className="mt-5">
                  <div className="flex mt-2">
                    <select
                      id="currentRelatedSymptoms"
                      className="w-[85%] ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus: outline-none"
                      value={pastHistoryValue?.attemptedSuicideTimes}
                      onChange={handleAttemptedSuicideTimesSelect}
                    >
                      {[...Array(20)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="How did you attempt suicide (list all methods ever used)?"
                onChange={handleChange}
                name="suicideAllMethods"
                value={pastHistoryValue?.suicideAllMethods}
                error={errors.suicideAllMethods}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="When was the most recent time you attempted suicide?"
                onChange={handleChange}
                name="attemptedSuicideDate"
                value={pastHistoryValue?.attemptedSuicideDate}
                error={errors.attemptedSuicideDate}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="123. Have you ever experienced any other psychiatric symptoms that are not described above"
          type="radio"
          options={OtherPsychiatricSymptomsOptions}
          onChange={handleOtherPsychiatricSymptomschange}
          checked={pastHistoryValue?.otherPsychiatricSymptoms}
          errors={errors.otherPsychiatricSymptoms}
        />

        {pastHistoryValue?.otherPsychiatricSymptoms === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please describe the psychiatric symptoms you experienced that were not previously identified above:"
                onChange={handleChange}
                name="describeOtherPsychiatricSymptoms"
                value={pastHistoryValue?.describeOtherPsychiatricSymptoms}
                error={errors.describeOtherPsychiatricSymptoms}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="124. Have you received any other psychotherapy or psychiatric medication treatment besides that described above?"
          type="radio"
          options={OtherPsychotherapyTreatmentOptions}
          onChange={handleOtherPsychotherapyTreatmentchange}
          checked={pastHistoryValue?.otherPsychotherapyTreatment}
          errors={errors.otherPsychotherapyTreatment}
        />

        {pastHistoryValue?.otherPsychotherapyTreatment === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please describe the additional psychotherapy or psychiatric medication treatment that was not described above"
                onChange={handleChange}
                name="describeOtherPsychotherapyTreatment"
                value={pastHistoryValue?.describeOtherPsychotherapyTreatment}
                error={errors.describeOtherPsychotherapyTreatment}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="125. Have you ever been evaluated otherwise by psychiatrists or psychologists for any other purpose?"
          type="radio"
          options={EvaluatedOtherwisePsychiatristsOptions}
          onChange={handleEvaluatedOtherwisePsychiatristschange}
          checked={pastHistoryValue?.evaluatedOtherwisePsychiatrists}
          errors={errors.evaluatedOtherwisePsychiatrists}
        />

        {pastHistoryValue?.evaluatedOtherwisePsychiatrists === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please describe the reason for this psychiatric or psychotherapy evaluation."
                onChange={handleChange}
                name="evaluationReason"
                value={pastHistoryValue?.evaluationReason}
                error={errors.evaluationReason}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Who performed this evaluation?"
                onChange={handleChange}
                name="evaluationPerformed"
                value={pastHistoryValue?.evaluationPerformed}
                error={errors.evaluationPerformed}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="When did this evaluation occur?"
                onChange={handleChange}
                name="evaluationOccur"
                value={pastHistoryValue?.evaluationOccur}
                error={errors.evaluationOccur}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="126. Have you ever been involved in physical altercations or violence?"
          type="radio"
          options={PhysicalAltercationsOptions}
          onChange={handlePhysicalAltercationschange}
          checked={pastHistoryValue?.physicalAltercations}
          errors={errors.physicalAltercations}
        />

        {pastHistoryValue?.physicalAltercations === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="How many physicial altercations have you been invovled in?"
                onChange={handleChange}
                name="physicialAltercationsMany"
                value={pastHistoryValue?.physicialAltercationsMany}
                error={errors.physicialAltercationsMany}
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

export default PastHistory;
