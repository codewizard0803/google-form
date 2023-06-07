import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";

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
    stopedPsychiatricMedicationsReason: "",
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
    psychiatricHospitalizationReason: "",
    receivedTreatment: "",
    admittedHospitalName: "",
    hospitalizedLong: "",
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
      value: "High energy",
      name: "LackSleepEnergyOptionsHigh energy",
    },
    {
      label: "Normal energy",
      value: "Normal energy",
      name: "LackSleepEnergyOptionsNormal energy",
    },
    {
      label: "Low energy, fatigued",
      value: "Low energy, fatigued",
      name: "LackSleepEnergyOptionsLow energy, fatigued",
    },
  ];

  const SleepFewerOptions = [
    { label: "Yes", value: "Yes", name: "SleepFewerOptionsYes" },
    { label: "No", value: "No", name: "SleepFewerOptionsNo" },
  ];

  const MoodOptions = [
    { label: "Euphoric", value: "Euphoric", name: "MoodOptionsEuphoric" },
    { label: "Elevated", value: "Elevated", name: "MoodOptionsElevated" },
    { label: "Irritable", value: "Irritable", name: "MoodOptionsIrritable" },
    { label: "Anxious", value: "Anxious", name: "MoodOptionsAnxious" },
    { label: "Normal", value: "Normal", name: "MoodOptionsNormal" },
    { label: "Low", value: "Low", name: "MoodOptionsLow" },
    { label: "Depressed", value: "Depressed", name: "MoodOptionsDepressed" },
    { label: "Other", value: "Other", name: "MoodOptionsOther" },
  ];

  const AlcoholSubstancesOptions = [
    { label: "Yes", value: "Yes", name: "AlcoholSubstancesOptionsYes" },
    { label: "No", value: "No", name: "AlcoholSubstancesOptionsNo" },
  ];

  const ExperienceFollowingOptions = [
    {
      label: "Heard a voice that no one else hears",
      value: "Heard a voice that no one else hears",
      name: "ExperienceFollowingOptionsHeard a voice that no one else hears",
    },
    {
      label:
        "Felt like people you don't know are talking about you or following you",
      value:
        "Felt like people you don't know are talking about you or following you",
      name:
        "ExperienceFollowingOptionsFelt like people you don't know are talking about you or following you",
    },
    {
      label:
        "Had thoughts, behaviors, or rituals that are recurrent, intrusive, and time consuming",
      value:
        "Had thoughts, behaviors, or rituals that are recurrent, intrusive, and time consuming",
      name:
        "ExperienceFollowingOptionsHad thoughts, behaviors, or rituals that are recurrent, intrusive, and time consuming",
    },
    {
      label: "None of the above",
      value: "None of the above",
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
      value: "Anxiety",
      name: "DiagnosedMentalHealthOptionsAnxiety",
    },
    {
      label: "Autism Spectrum Disorder",
      value: "Autism Spectrum Disorder",
      name: "DiagnosedMentalHealthOptionsAutism Spectrum Disorder",
    },
    {
      label: "Bipolar disorder",
      value: "Bipolar disorder",
      name: "DiagnosedMentalHealthOptionsBipolar disorder",
    },
    {
      label: "Depression",
      value: "Depression",
      name: "DiagnosedMentalHealthOptionsDepression",
    },
    {
      label: "Eating disorder",
      value: "Eating disorder",
      name: "DiagnosedMentalHealthOptionsEating disorder",
    },
    {
      label: "Mood disorder",
      value: "Mood disorder",
      name: "DiagnosedMentalHealthOptionsMood disorder",
    },
    {
      label: "Obsessive Compulsive Disorder",
      value: "Obsessive Compulsive Disorder",
      name: "DiagnosedMentalHealthOptionsObsessive Compulsive Disorder",
    },
    {
      label: "Personality disorder",
      value: "Personality disorder",
      name: "DiagnosedMentalHealthOptionsPersonality disorder",
    },
    {
      label: "Mania or Hypomania",
      value: "Mania or Hypomania",
      name: "DiagnosedMentalHealthOptionsMania or Hypomania",
    },
    {
      label: "Panic attacks",
      value: "Panic attacks",
      name: "DiagnosedMentalHealthOptionsPanic attacks",
    },
    {
      label: "Schizophrenia or other psychotic disorder",
      value: "Schizophrenia or other psychotic disorder",
      name:
        "DiagnosedMentalHealthOptionsSchizophrenia or other psychotic disorder",
    },
    {
      label: "Post-traumatic stress disorder",
      value: "Post-traumatic stress disorder",
      name: "DiagnosedMentalHealthOptionsPost-traumatic stress disorder",
    },
    {
      label: "Other",
      value: "Other",
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
      value: "Depression",
      name: "PastPsychiatricMedicationOptionsDepression",
    },
    {
      label: "Anxiety",
      value: "Anxiety",
      name: "PastPsychiatricMedicationOptionsAnxiety",
    },
    {
      label: "Mania",
      value: "Mania",
      name: "PastPsychiatricMedicationOptionsMania",
    },
    {
      label: "Psychotic symptoms",
      value: "Psychotic symptoms",
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
      value: "Other",
      name: "PastPsychiatricMedicationOptionsOther",
    },
  ];

  const PastPhysicalLogicOptions = [
    {
      label: "Improved symptoms",
      value: "Improved symptoms",
      name: "PastPhysicalLogicImproved symptoms",
    },
    {
      label: "Worsened symptoms",
      value: "Worsened symptoms",
      name: "PastPhysicalLogicWorsened symptoms",
    },
    {
      label: "No effect on symptoms",
      value: "No effect on symptoms",
      name: "PastPhysicalLogicNo effect on symptoms",
    },
  ];

  const StopedPsychiatricMedicationsReasonOptions = [
    {
      label: "No longer working",
      value: "No longer working",
      name: "StopedPsychiatricMedicationsReasonOptionsNo longer working",
    },
    {
      label: "No longer wanted to take them",
      value: "No longer wanted to take them",
      name:
        "StopedPsychiatricMedicationsReasonOptionsNo longer wanted to take them",
    },
    {
      label: "Cost",
      value: "Cost",
      name: "StopedPsychiatricMedicationsReasonOptionsCost",
    },
    {
      label: "Ended treatment with prescriber",
      value: "Ended treatment with prescriber",
      name:
        "StopedPsychiatricMedicationsReasonOptionsEnded treatment with prescriber",
    },
    {
      label: "Medication side effects",
      value: "Medication side effects",
      name: "StopedPsychiatricMedicationsReasonOptionsMedication side effects",
    },
    {
      label: "Concerns about the medication",
      value: "Concerns about the medication",
      name:
        "StopedPsychiatricMedicationsReasonOptionsConcerns about the medication",
    },
    {
      label: "Felt medication was no longer needed",
      value: "Felt medication was no longer needed",
      name:
        "StopedPsychiatricMedicationsReasonOptionsFelt medication was no longer needed",
    },
    {
      label: "Psychiatric symptoms had resolved",
      value: "Psychiatric symptoms had resolved",
      name:
        "StopedPsychiatricMedicationsReasonOptionsPsychiatric symptoms had resolved",
    },
    {
      label: "Other",
      value: "Other",
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
      label: "psychiatric nurse practitionaer",
      value: "psychiatric nurse practitionaer",
      name: "PrescribeThisMedicationOptionspsychiatric nurse practitionaer",
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
      value: "Weekly",
      name: "AttendedSessionsPsychiatristOptionsWeekly",
    },
    {
      label: "Twice per month",
      value: "Twice per month",
      name: "AttendedSessionsPsychiatristOptionsTwice per month",
    },
    {
      label: "Monthly",
      value: "Monthly",
      name: "AttendedSessionsPsychiatristOptionsMonthly",
    },
    {
      label: "Every few months",
      value: "Every few months",
      name: "AttendedSessionsPsychiatristOptionsEvery few months",
    },
    {
      label: "A few times per year",
      value: "A few times per year",
      name: "AttendedSessionsPsychiatristOptionsA few times per year",
    },
    {
      label: "Infrequently",
      value: "Infrequently",
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
      label: "one session",
      value: "one session",
      name: "ReceivedPsychotherapyLongOptionsone session",
    },
    {
      label: "several sessions",
      value: "several sessions",
      name: "ReceivedPsychotherapyLongOptionsseveral sessions",
    },
    {
      label: "several months",
      value: "several months",
      name: "ReceivedPsychotherapyLongOptionsseveral months",
    },
    {
      label: "approximately 6 months",
      value: "approximately 6 months",
      name: "ReceivedPsychotherapyLongOptionsapproximately 6 months",
    },
    {
      label: "approximatley one year",
      value: "approximatley one year",
      name: "ReceivedPsychotherapyLongOptionsapproximatley one year",
    },
    {
      label: "several years",
      value: "several years",
      name: "ReceivedPsychotherapyLongOptionsseveral years",
    },
    {
      label: "more than 5 years",
      value: "more than 5 years",
      name: "ReceivedPsychotherapyLongOptionsmore than 5 years",
    },
    {
      label: "until the present",
      value: "until the present",
      name: "ReceivedPsychotherapyLongOptionsuntil the present",
    },
  ];

  const AttendedSessionsPsychotherapyOptions = [
    {
      label: "Weekly",
      value: "Weekly",
      name: "AttendedSessionsPsychotherapyOptionsWeekly",
    },
    {
      label: "Twice per month",
      value: "Twice per month",
      name: "AttendedSessionsPsychotherapyOptionsTwice per month",
    },
    {
      label: "Monthly",
      value: "Monthly",
      name: "AttendedSessionsPsychotherapyOptionsMonthly",
    },
    {
      label: "Every few months",
      value: "Every few months",
      name: "AttendedSessionsPsychotherapyOptionsEvery few months",
    },
    {
      label: "A few times per year",
      value: "A few times per year",
      name: "AttendedSessionsPsychotherapyOptionsA few times per year",
    },
    {
      label: "Infrequently",
      value: "Infrequently",
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
      label: "worsening of depressive symptoms",
      value: "worsening of depressive symptoms",
      name:
        "PsychiatricHospitalizationReasonOptionsworsening of depressive symptoms",
    },
    {
      label: "suicidal ideation",
      value: "suicidal ideation",
      name: "PsychiatricHospitalizationReasonOptionssuicidal ideation",
    },
    {
      label: "suicide attempt",
      value: "suicide attempt",
      name: "PsychiatricHospitalizationReasonOptionssuicide attempt",
    },
    {
      label: "worsening of anxiety symptoms",
      value: "worsening of anxiety symptoms",
      name:
        "PsychiatricHospitalizationReasonOptionsworsening of anxiety symptoms",
    },
    {
      label: "worsening of post traumatic symptoms",
      value: "worsening of post traumatic symptoms",
      name:
        "PsychiatricHospitalizationReasonOptionsworsening of post traumatic symptoms",
    },
    {
      label: "worsening of manic symptoms",
      value: "worsening of manic symptoms",
      name:
        "PsychiatricHospitalizationReasonOptionsworsening of manic symptoms",
    },
    {
      label: "worsening of psychotic symptoms",
      value: "worsening of psychotic symptoms",
      name:
        "PsychiatricHospitalizationReasonOptionsworsening of psychotic symptoms",
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
      value: "Psychiatric medications",
      name: "ReceivedTreatmentOptionsPsychiatric medications",
    },
    {
      label: "psychotherapy",
      value: "psychotherapy",
      name: "ReceivedTreatmentOptionspsychotherapy",
    },
    {
      label: "case management or social support services,",
      value: "case management or social support services,",
      name:
        "ReceivedTreatmentOptionscase management or social support services,",
    },
    {
      label: "substance recovery treatment",
      value: "substance recovery treatment",
      name: "ReceivedTreatmentOptionssubstance recovery treatment",
    },
    {
      label: "Other",
      value: "Other",
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

  const handleExperienceFollowingchange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...pastHistoryValue?.experienceFollowing];

    if (isChecked) {
      if (itemValue === "None of the above") {
        newCheckedItems = ["None of the above"];
      } else {
        if (
          newCheckedItems.filter((item) => item === "None of the above")
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
      stopedPsychiatricMedicationsReason: "",
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
      newCheckedItems.push({
        condition: itemValue,
        effect: "Improved symptoms",
      });
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
    setPastHistoryValue({
      ...pastHistoryValue,
      stopedPsychiatricMedicationsReason: event.target.value,
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

  const handleAdmittedPsychiatricHospitalchange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      admittedPsychiatricHospital: event.target.value,
      psychiatricHospitalizationReason: "",
      receivedTreatment: "",
      admittedHospitalName: "",
      hospitalizedLong: "",
    });
  };

  const handlePsychiatricHospitalizationReasonChange = (event) => {
    setPastHistoryValue({
      ...pastHistoryValue,
      psychiatricHospitalizationReason: event.target.value,
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

    if (isValid) {
      setGlobalPastHistory(pastHistoryValue);
      setCurrentSection(currentSection + 1);
    }
    // setCurrentSection(currentSection + 1);
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Past History
      </p>

      <form>
        <CardTextFollowUp
          type="radio"
          title="Have you ever previously experienced any of the following symptoms"
          options={PreviouslyExperiencedSymptomOptions}
          onChange={handlePreviouslyExperiencedSymptomchange}
          checked={pastHistoryValue?.previouslyExperiencedSymptom}
          errors={errors.previouslyExperiencedSymptom}
          title2="Please describe your symptoms at that time:"
          onChange2={handleChange}
          name="describeSymptoms"
          value={pastHistoryValue.describeSymptoms}
          errors2={errors.describeSymptoms}
        />

        <CardField
          title="Have you ever experienced having so much energy that you do not need to sleep for several days or a week at a time?"
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
                title="During this time did you sleep fewer than 4 hours per night for 4-7 or more consecutive nights, without feeling excessively tired?"
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

            {pastHistoryValue?.mood === "Other" ? (
              <div>
                <div className="w-[68%] mx-auto mt-3">
                  <TextFollowUp
                    title="Please list the name, dose, and how often you take this medication."
                    onChange={handleChange}
                    name="describeMood"
                    value={pastHistoryValue?.describeMood}
                    error={errors.describeMood}
                  />
                </div>
              </div>
            ) : null}

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="During this time, did you drink alcohol or use any other substances?"
                options={AlcoholSubstancesOptions}
                onChange={handleAlcoholSubstancesChange}
                checked={pastHistoryValue?.alcoholSubstances}
                error={errors.alcoholSubstances}
              />
            </div>

            <CardField
              title="During this high energy time did you engage in any high-risk behaviors?XXX"
              type="radio"
              options={HighEnergyTimeOptions}
              onChange={handleHighEnergyTimechange}
              checked={pastHistoryValue?.highEnergyTime}
              errors={errors.highEnergyTime}
            />
          </div>
        ) : null}

        <CardField
          title="Have you ever experienced any of the following?"
          type="checkbox"
          options={ExperienceFollowingOptions}
          onChange={handleExperienceFollowingchange}
          checked={pastHistoryValue?.experienceFollowing}
          errors={errors.experienceFollowing}
        />

        <CardField
          title="Recently, have you been thinking about how you might harm or kill yourself?"
          type="radio"
          options={HarmKillYourSelfOptions}
          onChange={handleHarmKillYourSelfchange}
          checked={pastHistoryValue?.harmKillYourSelf}
          errors={errors.harmKillYourSelf}
        />

        <CardField
          title="Have any of your emotional symptoms (sadness, depression, anxiety) had a negative effect upon your work, school, or relationships?"
          type="radio"
          options={EmotionalSymptomsRelationShipOptions}
          onChange={handleEmotionalSymptomsRelationShipchange}
          checked={pastHistoryValue?.emotionalSymptomsRelationShip}
          errors={errors.emotionalSymptomsRelationShip}
        />

        <TextField
          title="If you have ever experienced symptoms of depression, when did you first feel depressed?"
          type="text"
          name="firstFeelDepressed"
          value={pastHistoryValue?.firstFeelDepressed}
          placeholder="Your answer"
          onChange={handleChange}
          error={errors.firstFeelDepressed}
        />

        <TextField
          title="If you have ever experienced symptoms of anxiety, when did you first feel high levels of anxiety?"
          type="text"
          name="feelHighLevelAnxiety"
          value={pastHistoryValue?.feelHighLevelAnxiety}
          placeholder="Your answer"
          onChange={handleChange}
          error={errors.feelHighLevelAnxiety}
        />

        <CardField
          title="Have you ever been diagnosed by a healthcare provider with any of the following mental health conditions?"
          type="checkbox"
          options={DiagnosedMentalHealthOptions}
          onChange={handleDiagnosedMentalHealthchange}
          checked={pastHistoryValue?.diagnosedMentalHealth}
          errors={errors.diagnosedMentalHealth}
        />
        {pastHistoryValue?.diagnosedMentalHealth &&
        pastHistoryValue?.diagnosedMentalHealth.filter(
          (item) => item === "Other"
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
          title="Have you ever taken any other medications in the past for a psychiatric or mental health condition, not listed above? This may include medications that did not work well or that were discontinued for other reasons."
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
                title="Please list the name(s) of the past medication, dose, and how often you take the medication."
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
              onChange={handlePastPsychiatricMedicationChange}
              errors={errors.pastPsychiatricMedication}
              checked={pastHistoryValue?.pastPsychiatricMedication}
              onChange2={handlePsychiatricMedicationChange}
            />

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="Past psychiatric medications were stopped due to:"
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
                title="From what date to what date did you see this psychiatrist?"
                onChange={handleChange}
                name="thisPsychiatristSeeDate"
                value={pastHistoryValue?.thisPsychiatristSeeDate}
                error={errors.thisPsychiatristSeeDate}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="During this psychiatric, I attended sessions with your psychiatrist?"
                options={AttendedSessionsPsychiatristOptions}
                onChange={handleAttendedSessionsPsychiatristChange}
                checked={pastHistoryValue?.attendedSessionsPsychiatrist}
                error={errors.attendedSessionsPsychiatrist}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="Have you ever previously received psychotherapy (talk therapy/counseling)?"
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
                title="During this psychotherapy, I attended sessions:"
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
          title="Have you ever been admitted to a psychiatric hospital?"
          type="radio"
          options={AdmittedPsychiatricHospitalOptions}
          onChange={handleAdmittedPsychiatricHospitalchange}
          checked={pastHistoryValue?.admittedPsychiatricHospital}
          errors={errors.admittedPsychiatricHospital}
        />

        {pastHistoryValue?.admittedPsychiatricHospital === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="Please list the reason for the psychiatric hospitalization"
                onChange={handlePsychiatricHospitalizationReasonChange}
                options={PsychiatricHospitalizationReasonOptions}
                checked={pastHistoryValue?.psychiatricHospitalizationReason}
                error={errors.psychiatricHospitalizationReason}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="Please list the treatment you received during the psychiatric hospitalization"
                onChange={handleReceivedTreatmentChange}
                options={ReceivedTreatmentOptions}
                checked={pastHistoryValue?.receivedTreatment}
                error={errors.receivedTreatment}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list the name of the hospital you were admitted to. If there is more than one instance, please list the information for all admissions."
                onChange={handleChange}
                name="admittedHospitalName"
                value={pastHistoryValue?.admittedHospitalName}
                error={errors.admittedHospitalName}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list how long you were hospitalized"
                onChange={handleChange}
                name="hospitalizedLong"
                value={pastHistoryValue?.hospitalizedLong}
                error={errors.hospitalizedLong}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="Have you ever experienced suicidal ideation?"
          type="radio"
          options={SuicidalIdeationOptions}
          onChange={handleSuicidalIdeationchange}
          checked={pastHistoryValue?.suicidalIdeation}
          errors={errors.suicidalIdeation}
        />

        <CardField
          title="Have you ever made a suicide attempt?"
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
          title="Have you ever experienced any other psychiatric symptoms that are not described above"
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
          title="Have you received any other psychotherapy or psychiatric medication treatment besides that described above?"
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
          title="Have you ever been evaluated otherwise by psychiatrists or psychologists for any other purpose?"
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
          title="Have you ever been involved in physical altercations or violence?"
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
