/** @format */

import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

import CardField from "../common/CardField";
import RadioFollowUp from "../common/RadioFollowUp";
import useGlobalContext from "../../hooks/useGlobalContext";
import TextFollowUp from "../common/TextFollowUp";
import validateCurrentTreatment from "../../validation/validateCurrentTreatment";
import CardCheckFollowUp from "../common/CardCheckFollowUp";

const CurrentTreatment = ({ currentSection, setCurrentSection }) => {
  const { globalCurrentTreatment, setGlobalCurrentTreatment } =
    useGlobalContext();

  const [currentTreatmentValue, setCurrentTreatmentValue] = useState({
    currentlyPsychiatricMedications: "",
    medicationList: "",
    medicationLong: "",
    medicationReason: [],
    describeMedicationReason: "",
    medicationsEffectYourCondition: [],
    medicationsEffectOther: "",
    medicationAsPrescribed: "",
    experiencedSideEffects: [],
    describeSideEffect: "",
    recentTreatmentProvider: "",
    currentlyPsychotherapyTreatment: "",
    recentPsychotherapyBegin: "",
    recentPsychotherapySession: "",
    psychotherapySessionsDate: "",
    psychotherapistTreatmentProvider: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setCurrentTreatmentValue(globalCurrentTreatment);
  }, [globalCurrentTreatment]);

  const CurrentlyPsychiatricMedicationsOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "CurrentlyPsychiatricMedicationsOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "CurrentlyPsychiatricMedicationsOptionsNo",
    },
  ];

  const MedicationReasonOptions = [
    {
      label: "Depression",
      value: "depression",
      name: "MedicationReasonOptionsDepression",
    },
    {
      label: "Anxiety",
      value: "anxiety",
      name: "MedicationReasonOptionsAnxiety",
    },
    {
      label: "Mania",
      value: "mania",
      name: "MedicationReasonOptionsMania",
    },
    {
      label: "Psychosis",
      value: "psychosis",
      name: "MedicationReasonOptionsPsychosis",
    },
    {
      label: "PTSD",
      value: "PTSD",
      name: "MedicationReasonOptionsPTSD",
    },
    {
      label: "OCD",
      value: "OCD",
      name: "MedicationReasonOptionsOCD",
    },
    {
      label: "Other",
      value: "other",
      name: "MedicationReasonOptionsOther",
    },
  ];

  const MedicationsEffectYourConditionOptions = [
    {
      label: "Depression",
      value: "depression",
      name: "MedicationsEffectYourConditionOptionsDepression",
    },
    {
      label: "Anxiety",
      value: "anxiety",
      name: "MedicationsEffectYourConditionOptionsAnxiety",
    },
    {
      label: "Mania",
      value: "mania",
      name: "MedicationsEffectYourConditionOptionsMania",
    },
    {
      label: "Psychosis",
      value: "psychosis",
      name: "MedicationsEffectYourConditionOptionsPsychosis",
    },
    {
      label: "PTSD",
      value: "PTSD",
      name: "MedicationsEffectYourConditionOptionsPTSD",
    },
    {
      label: "OCD",
      value: "OCD",
      name: "MedicationsEffectYourConditionOptionsOCD",
    },
    {
      label: "Other",
      value: "other",
      name: "MedicationsEffectYourConditionOptionsOther",
    },
  ];

  const MedicationsEffectOptions = [
    {
      label: "Improved symptoms",
      value: "improved symptoms",
      name: "MedicationsEffectOptionsImproved symptoms",
    },
    {
      label: "Worsened symptoms",
      value: "worsened symptoms",
      name: "MedicationsEffectOptionsWorsened symptoms",
    },
    {
      label: "No effect on symptoms",
      value: "no effect on symptoms",
      name: "MedicationsEffectOptionsNo effect on symptoms",
    },
  ];

  const medicationAsPrescribedOptions = [
    { label: "Yes", value: "Yes", name: "medicationAsPrescribedOptionsYes" },
    { label: "No", value: "No", name: "medicationAsPrescribedOptionsNo" },
  ];

  const ExperiencedSideEffectsOptions = [
    {
      label: "Upset stomach/nausea",
      value: "upset stomach/nausea",
      name: "ExperiencedSideEffectsOptionsUpset stomach/nausea",
    },
    {
      label: "Diarrhea",
      value: "diarrhea",
      name: "ExperiencedSideEffectsOptionsDiarrhea",
    },
    {
      label: "Constipation",
      value: "constipation",
      name: "ExperiencedSideEffectsOptionsConstipation",
    },
    {
      label: "Insomnia",
      value: "insomnia",
      name: "ExperiencedSideEffectsOptionsInsomnia",
    },
    {
      label: "Fatigue",
      value: "fatigue",
      name: "ExperiencedSideEffectsOptionsFatigue",
    },
    {
      label: "Headache",
      value: "headache",
      name: "ExperiencedSideEffectsOptionsHeadache",
    },
    {
      label: "Sexual dysfunction",
      value: "sexual dysfunction",
      name: "ExperiencedSideEffectsOptionsSexual dysfunction",
    },
    {
      label: "Shaking, stiffness, tremors",
      value: "shaking, stiffness, tremors",
      name: "ExperiencedSideEffectsOptionsShaking, stiffness, tremors",
    },
    {
      label: "Weight gain",
      value: "weight gain",
      name: "ExperiencedSideEffectsOptionsWeight gain",
    },
    {
      label: "Weight loss",
      value: "weight loss",
      name: "ExperiencedSideEffectsOptionsWeight loss",
    },
    {
      label: "Withdrawal",
      value: "withdrawal",
      name: "ExperiencedSideEffectsOptionsWithdrawal",
    },
    {
      label: "Other",
      value: "other",
      name: "ExperiencedSideEffectsOptionsOther",
    },
  ];

  const CurrentlyPsychotherapyTreatmentOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "CurrentlyPsychotherapyTreatmentOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "CurrentlyPsychotherapyTreatmentOptionsNo",
    },
  ];

  const PsychotherapySessionsDateOptions = [
    {
      label: "Weekly",
      value: "weekly",
      name: "PsychotherapySessionsDateOptionsWeekly",
    },
    {
      label: "Twice per month",
      value: "twice per month",
      name: "PsychotherapySessionsDateOptionsTwice per month",
    },
    {
      label: "Monthly",
      value: "monthly",
      name: "PsychotherapySessionsDateOptionsMonthly",
    },
    {
      label: "Every few months",
      value: "every few months",
      name: "PsychotherapySessionsDateOptionsEvery few months",
    },
    {
      label: "A few times per year",
      value: "a few times per year",
      name: "PsychotherapySessionsDateOptionsA few times per year",
    },
    {
      label: "Infrequently",
      value: "infrequently",
      name: "PsychotherapySessionsDateOptionsInfrequently",
    },
  ];

  const handleCurrentlyPsychiatricMedicationschange = (event) => {
    setCurrentTreatmentValue({
      ...currentTreatmentValue,
      currentlyPsychiatricMedications: event.target.value,
      medicationList: "",
      medicationLong: "",
      medicationReason: [],
      describeMedicationReason: "",
      medicationsEffectYourCondition: [],
      medicationsEffectOther: "",
      medicationAsPrescribed: "",
      experiencedSideEffects: [],
      describeSideEffect: "",
      recentTreatmentProvider: "",
    });
  };

  const handleMedicationReasonChange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...currentTreatmentValue?.medicationReason];

    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }
    setCurrentTreatmentValue({
      ...currentTreatmentValue,
      medicationReason: newCheckedItems,
    });
  };

  const handleMedicationsEffectYourConditionChange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [
      ...currentTreatmentValue?.medicationsEffectYourCondition,
    ];

    if (isChecked) {
      if (itemValue !== "other") {
        newCheckedItems.push({
          condition: itemValue,
          effect: "improved symptoms",
        });
      } else {
        newCheckedItems.push({
          condition: itemValue,
          effect: currentTreatmentValue.medicationsEffectOther,
        });
      }
    } else {
      newCheckedItems = newCheckedItems.filter(
        (item) => item.condition !== itemValue
      );
    }
    setCurrentTreatmentValue({
      ...currentTreatmentValue,
      medicationsEffectYourCondition: newCheckedItems,
    });
  };

  const handleMedicationsEffectChange = (event) => {
    const itemName = event.target.name;
    const condition = MedicationsEffectYourConditionOptions?.filter(
      (item) => item.name === itemName
    );
    const cond = condition[0].value;

    setCurrentTreatmentValue({
      ...currentTreatmentValue,
      medicationsEffectYourCondition:
        currentTreatmentValue.medicationsEffectYourCondition.map((item) =>
          item.condition === cond
            ? { ...item, effect: event.target.value }
            : item
        ),
    });
  };

  const handleMedicationsEffectOther = (event) => {
    setCurrentTreatmentValue({
      ...currentTreatmentValue,
      medicationsEffectYourCondition:
        currentTreatmentValue.medicationsEffectYourCondition.map((item) =>
          item.condition === "other"
            ? { ...item, effect: event.target.value }
            : item
        ),
      medicationsEffectOther: event.target.value,
    });
  };

  const handleMedicationAsPrescribedchange = (event) => {
    setCurrentTreatmentValue({
      ...currentTreatmentValue,
      medicationAsPrescribed: event.target.value,
    });
  };

  const handleExperiencedSideEffectschange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...currentTreatmentValue?.experiencedSideEffects];

    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }
    setCurrentTreatmentValue({
      ...currentTreatmentValue,
      experiencedSideEffects: newCheckedItems,
    });
  };

  const handleCurrentlyPsychotherapyTreatmentchange = (event) => {
    setCurrentTreatmentValue({
      ...currentTreatmentValue,
      currentlyPsychotherapyTreatment: event.target.value,
      recentPsychotherapyBegin: "",
      recentPsychotherapySession: "",
      psychotherapySessionsDate: "",
      psychotherapistTreatmentProvider: "",
    });
  };

  const handlePsychotherapySessionsDatechange = (event) => {
    setCurrentTreatmentValue({
      ...currentTreatmentValue,
      psychotherapySessionsDate: event.target.value,
    });
  };

  const handleChange = (event) => {
    setCurrentTreatmentValue({
      ...currentTreatmentValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalCurrentTreatment(currentTreatmentValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    const { isValid, errors } = validateCurrentTreatment(currentTreatmentValue);
    setErrors(errors);

    setGlobalCurrentTreatment(currentTreatmentValue);
    setCurrentSection(currentSection + 1);

    // if (isValid) {
    //   setGlobalCurrentTreatment(currentTreatmentValue);
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
        Current Treatment
      </p>

      <form>
        <CardField
          title="107. Do you currently take any psychiatric medications."
          type="radio"
          options={CurrentlyPsychiatricMedicationsOptions}
          onChange={handleCurrentlyPsychiatricMedicationschange}
          checked={currentTreatmentValue?.currentlyPsychiatricMedications}
          errors={errors.currentlyPsychiatricMedications}
        />

        {currentTreatmentValue?.currentlyPsychiatricMedications === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list the name(s), dose(s), and how often you take each of these medications."
                onChange={handleChange}
                name="medicationList"
                value={currentTreatmentValue.medicationList}
                error={errors.medicationList}
              />
            </div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="How long have you been taking each of these medications?"
                onChange={handleChange}
                name="medicationLong"
                value={currentTreatmentValue.medicationLong}
                error={errors.medicationLong}
              />
            </div>
            <CardField
              title="What is the reason you take these medications you listed above? Select all that apply."
              type="checkbox"
              options={MedicationReasonOptions}
              onChange={handleMedicationReasonChange}
              errors={errors.medicationReason}
              checked={currentTreatmentValue?.medicationReason}
            />
            {currentTreatmentValue?.medicationReason &&
            currentTreatmentValue?.medicationReason.filter(
              (item) => item === "other"
            ).length ? (
              <div className="w-[68%] mx-auto mt-3">
                <TextFollowUp
                  title="Please explain the reason you take these medications you listed above."
                  onChange={handleChange}
                  name="describeMedicationReason"
                  value={currentTreatmentValue.describeMedicationReason}
                  error={errors.describeMedicationReason}
                />
              </div>
            ) : null}

            <CardCheckFollowUp
              title="The current medications you take have produced the following effects on your condition:"
              type="checkbox"
              options={MedicationsEffectYourConditionOptions}
              options2={MedicationsEffectOptions}
              type2="radio"
              onChange={handleMedicationsEffectYourConditionChange}
              name3="medicationsEffectOther"
              value3={currentTreatmentValue?.medicationsEffectOther}
              onChange3={handleMedicationsEffectOther}
              errors={errors.medicationsEffectYourCondition}
              errors2={errors.medicationsEffectOther}
              checked={currentTreatmentValue?.medicationsEffectYourCondition}
              onChange2={handleMedicationsEffectChange}
            />

            <CardField
              title="Do you always take the medication as prescribed by your medical provider?"
              type="radio"
              options={medicationAsPrescribedOptions}
              onChange={handleMedicationAsPrescribedchange}
              checked={currentTreatmentValue?.medicationAsPrescribed}
              errors={errors.medicationAsPrescribed}
            />

            <CardField
              title="Have you experienced any of the following side effects from your medication(s)?"
              type="checkbox"
              options={ExperiencedSideEffectsOptions}
              onChange={handleExperiencedSideEffectschange}
              checked={currentTreatmentValue?.experiencedSideEffects}
              errors={errors.experiencedSideEffects}
            />
            {currentTreatmentValue?.experiencedSideEffects &&
            currentTreatmentValue?.experiencedSideEffects.filter(
              (item) => item === "other"
            ).length ? (
              <div className="w-[68%] mx-auto mt-3">
                <TextFollowUp
                  title="You selected 'other,' please describe your side effects here."
                  onChange={handleChange}
                  name="describeSideEffect"
                  value={currentTreatmentValue.describeSideEffect}
                  error={errors.describeSideEffect}
                />
              </div>
            ) : null}

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Your current or most recent psychiatric medication treatment provider was (name/facility/clinic):"
                onChange={handleChange}
                name="recentTreatmentProvider"
                value={currentTreatmentValue.recentTreatmentProvider}
                error={errors.recentTreatmentProvider}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="108. Are you currently in psychotherapy treatment?"
          type="radio"
          options={CurrentlyPsychotherapyTreatmentOptions}
          onChange={handleCurrentlyPsychotherapyTreatmentchange}
          checked={currentTreatmentValue?.currentlyPsychotherapyTreatment}
          errors={errors.currentlyPsychotherapyTreatment}
        />

        {currentTreatmentValue?.currentlyPsychotherapyTreatment === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="When did your current psychotherapy treatment begin?"
                onChange={handleChange}
                name="recentPsychotherapyBegin"
                value={currentTreatmentValue.recentPsychotherapyBegin}
                error={errors.recentPsychotherapyBegin}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="When was your most recent psychotherapy session?"
                onChange={handleChange}
                name="recentPsychotherapySession"
                value={currentTreatmentValue.recentPsychotherapySession}
                error={errors.recentPsychotherapySession}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="I attend psychotherapy sessions:"
                onChange={handlePsychotherapySessionsDatechange}
                options={PsychotherapySessionsDateOptions}
                checked={currentTreatmentValue?.psychotherapySessionsDate}
                error={errors.psychotherapySessionsDate}
              />
            </div>

            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Your current or most recent psychotherapy treatment provider is (name/facility/clinic):"
                onChange={handleChange}
                name="psychotherapistTreatmentProvider"
                value={currentTreatmentValue.psychotherapistTreatmentProvider}
                error={errors.psychotherapistTreatmentProvider}
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

export default CurrentTreatment;
