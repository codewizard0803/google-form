import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";

import CardField from "../../common/CardField";
import RadioFollowUp from "../../common/RadioFollowUp";
import useGlobalContext from "../../../hooks/useGlobalContext";
import TextFollowUp from "../../common/TextFollowUp";
import validateGAD from "../../../validation/validateGAD";

const GAD = ({ currentSection, setCurrentSection }) => {
  const { GAD7, setGAD7 } = useGlobalContext();

  const [errors, setErrors] = useState({});

  const [GADValue, setGADValue] = useState({
    feelingNervous: "",
    feltAnxiousLong: "",
    feelAnxiousOften: "",
    stopControlWorring: "",
    worringDifferentThing: "",
    worringThing: "",
    describeWorringThing: "",
    specificAnxietyWorse: "",
    troubleRelaxing: "",
    restlessSitHard: "",
    easilyAnnoyed: "",
    feelingAfraidAwfulThing: "",
    currentAnxietySymptoms: "0",
    panicAttacks: "",
    panicPhysicalSymptoms: "",
    panicAttacksLastLong: "",
    panicAttacksList: "",
    panicAttacksSpontaneous: "",
    pastTraumaticEvents: "",
    traumaticEventExperience: "",
    describeTraumaticExperience: "",
  });

  useEffect(() => {
    setGADValue(GAD7);
  }, [GAD7]);

  const FeelingNervousOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "FeelingNervousOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "Several Days",
      name: "FeelingNervousOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "More than half the days",
      name: "FeelingNervousOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "Nearly every day",
      name: "FeelingNervousOptionsNearly every day",
    },
  ];

  const FeltAnxiousLongOptions = [
    {
      label: "Several hours",
      value: "Several hours",
      name: "FeltAnxiousLongOptionsSeveral hours",
    },
    {
      label: "Several days",
      value: "Several days",
      name: "FeltAnxiousLongOptionsSeveral days",
    },
    {
      label: "Several weeks",
      value: "Several weeks",
      name: "FeltAnxiousLongOptionsSeveral weeks",
    },
    {
      label: "Several months",
      value: "Several months",
      name: "FeltAnxiousLongOptionsSeveral months",
    },
    {
      label: "Several years",
      value: "Several years",
      name: "FeltAnxiousLongOptionsSeveral years",
    },
    {
      label: "Other",
      value: "Other",
      name: "FeltAnxiousLongOptionsOther",
    },
  ];

  const FeelAnxiousOftenOptions = [
    {
      label: "Part of some days",
      value: "Part of some days",
      name: "FeelAnxiousOftenOptionsPart of some days",
    },
    {
      label: "Part of every day",
      value: "Part of every day",
      name: "FeelAnxiousOftenOptionsPart of every day",
    },
    {
      label: "Several days per week",
      value: "Several days per week",
      name: "FeelAnxiousOftenOptionsSeveral days per week",
    },
    {
      label: "All day every day",
      value: "All day every day",
      name: "FeelAnxiousOftenOptionsAll day every day",
    },
    {
      label: "Other",
      value: "Other",
      name: "FeelAnxiousOftenOptionsOther",
    },
  ];

  const StopControlWorringOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "StopControlWorringOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "Several Days",
      name: "StopControlWorringOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "More than half the days",
      name: "StopControlWorringOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "Nearly every day",
      name: "StopControlWorringOptionsNearly every day",
    },
  ];

  const WorringDifferentThingOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "WorringDifferentThingOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "Several Days",
      name: "WorringDifferentThingOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "More than half the days",
      name: "WorringDifferentThingOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "Nearly every day",
      name: "WorringDifferentThingOptionsNearly every day",
    },
  ];

  const WorringThingOptions = [
    {
      label: "Physical pain",
      value: "Physical pain",
      name: "WorringThingOptionsPhysical pain",
    },
    {
      label: "Employment situation",
      value: "Employment situation",
      name: "WorringThingOptionsEmployment situation",
    },
    {
      label: "Financial situation",
      value: "Financial situation",
      name: "WorringThingOptionsFinancial situation",
    },
    {
      label: "Relationships",
      value: "Relationships",
      name: "WorringThingOptionsRelationships",
    },
    {
      label: "Family difficulties",
      value: "Family difficulties",
      name: "WorringThingOptionsFamily difficulties",
    },
    {
      label: "Family death",
      value: "Family death",
      name: "WorringThingOptionsFamily death",
    },
    {
      label: "Previous trauma",
      value: "Previous trauma",
      name: "WorringThingOptionsPrevious trauma",
    },
    {
      label: "Conflicts with family or at employment",
      value: "Conflicts with family or at employment",
      name: "WorringThingOptionsConflicts with family or at employment",
    },
    {
      label: "Medical condition",
      value: "Medical condition",
      name: "WorringThingOptionsMedical condition",
    },
    {
      label: "Other",
      value: "Other",
      name: "WorringThingOptionsOther",
    },
    {
      label: "N/A",
      value: "N/A",
      name: "WorringThingOptionsN/A",
    },
  ];

  const TroubleRelaxingOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "TroubleRelaxingOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "Several Days",
      name: "TroubleRelaxingOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "More than half the days",
      name: "TroubleRelaxingOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "Nearly every day",
      name: "TroubleRelaxingOptionsNearly every day",
    },
  ];

  const RestlessSitHardOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "RestlessSitHardOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "Several Days",
      name: "RestlessSitHardOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "More than half the days",
      name: "RestlessSitHardOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "Nearly every day",
      name: "RestlessSitHardOptionsNearly every day",
    },
  ];

  const EasilyAnnoyedOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "EasilyAnnoyedOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "Several Days",
      name: "EasilyAnnoyedOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "More than half the days",
      name: "EasilyAnnoyedOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "Nearly every day",
      name: "EasilyAnnoyedOptionsNearly every day",
    },
  ];

  const FeelingAfraidAwfulThingOptions = [
    {
      label: "Not at all",
      value: "Not at all",
      name: "FeelingAfraidAwfulThingOptionsNot at all",
    },
    {
      label: "Several Days",
      value: "Several Days",
      name: "FeelingAfraidAwfulThingOptionsSeveral Days",
    },
    {
      label: "More than half the days",
      value: "More than half the days",
      name: "FeelingAfraidAwfulThingOptionsMore than half the days",
    },
    {
      label: "Nearly every day",
      value: "Nearly every day",
      name: "FeelingAfraidAwfulThingOptionsNearly every day",
    },
  ];

  const PanicAttacksOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "PanicAttacksOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "PanicAttacksOptionsNo",
    },
    {
      label: "Unsure",
      value: "Unsure",
      name: "PanicAttacksOptionsUnsure",
    },
  ];

  const PanicPhysicalSymptomsOptions = [
    {
      label: "Increased heart rate",
      value: "Increased heart rate",
      name: "PanicPhysicalSymptomsOptionsIncreased heart rate",
    },
    {
      label: "Shortness of breath",
      value: "Shortness of breath",
      name: "PanicPhysicalSymptomsOptionsShortness of breath",
    },
    {
      label: "Difficulty swallowing",
      value: "Difficulty swallowing",
      name: "PanicPhysicalSymptomsOptionsDifficulty swallowing",
    },
    {
      label: "Excessive sweating",
      value: "Excessive sweating",
      name: "PanicPhysicalSymptomsOptionsExcessive sweating",
    },
    {
      label: "Lightheadedness",
      value: "Lightheadedness",
      name: "PanicPhysicalSymptomsOptionsLightheadedness",
    },
    {
      label: "Feeling like going to pass out",
      value: "Feeling like going to pass out",
      name: "PanicPhysicalSymptomsOptionsFeeling like going to pass out",
    },
    {
      label: "Shaking",
      value: "Shaking",
      name: "PanicPhysicalSymptomsOptionsShaking",
    },
    {
      label: "Feeling of choking",
      value: "Feeling of choking",
      name: "PanicPhysicalSymptomsOptionsFeeling of choking",
    },
    {
      label: "Nausea",
      value: "Nausea",
      name: "PanicPhysicalSymptomsOptionsNausea",
    },
    {
      label: "Chest pain",
      value: "Chest pain",
      name: "PanicPhysicalSymptomsOptionsChest pain",
    },
    {
      label: "Chills or heat",
      value: "Chills or heat",
      name: "PanicPhysicalSymptomsOptionsChills or heat",
    },
    {
      label: "Numbness or tingling",
      value: "Numbness or tingling",
      name: "PanicPhysicalSymptomsOptionsNumbness or tingling",
    },
    {
      label: "Feeling detached",
      value: "Feeling detached",
      name: "PanicPhysicalSymptomsOptionsFeeling detached",
    },
    {
      label: "Fear of “going crazy”",
      value: "Fear of “going crazy”",
      name: "PanicPhysicalSymptomsOptionsFear of “going crazy”",
    },
    {
      label: "Fear of dying",
      value: "Fear of dying",
      name: "PanicPhysicalSymptomsOptionsFear of dying",
    },
    {
      label: "N/A",
      value: "N/A",
      name: "PanicPhysicalSymptomsOptionsN/A",
    },
  ];

  const PanicAttacksLastLongOptions = [
    {
      label: "1-10 minutes",
      value: "1-10 minutes",
      name: "PanicAttacksLastLongOptions1-10 minutes",
    },
    {
      label: "11-30 minutes",
      value: "11-30 minutes",
      name: "PanicAttacksLastLongOptions11-30 minutes",
    },
    {
      label: "31-60 minutes",
      value: "31-60 minutes",
      name: "PanicAttacksLastLongOptions31-60 minutes",
    },
    {
      label: "Several hours",
      value: "Several hours",
      name: "PanicAttacksLastLongOptionsSeveral hours",
    },
    {
      label: "24 hours",
      value: "24 hours",
      name: "PanicAttacksLastLongOptions24 hours",
    },
    {
      label: "Several days",
      value: "Several days",
      name: "PanicAttacksLastLongOptionsSeveral days",
    },
  ];

  const PanicAttacksSpontaneousOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "PanicAttacksSpontaneousOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "PanicAttacksSpontaneousOptionsNo",
    },
    {
      label: "Unsure",
      value: "Unsure",
      name: "PanicAttacksSpontaneousOptionsUnsure",
    },
  ];

  const PastTraumaticEventsOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "PastTraumaticEventsOptionsYes",
    },
    {
      label: "No",
      value: "No",
      name: "PastTraumaticEventsOptionsNo",
    },
  ];

  const TraumaticEventExperienceOptions = [
    {
      label: "Childhood trauma",
      value: "Childhood trauma",
      name: "TraumaticEventExperienceOptionsChildhood trauma",
    },
    {
      label: "Intimate partner violence",
      value: "Intimate partner violence",
      name: "TraumaticEventExperienceOptionsIntimate partner violence",
    },
    {
      label: "Victim of other violence",
      value: "Victim of other violence",
      name: "TraumaticEventExperienceOptionsVictim of other violence",
    },
    {
      label: "Sexual assault",
      value: "Sexual assault",
      name: "TraumaticEventExperienceOptionsSexual assault",
    },
    {
      label: "Witnessing violence",
      value: "Witnessing violence",
      name: "TraumaticEventExperienceOptionsWitnessing violence",
    },
    {
      label: "First responder trauma",
      value: "First responder trauma",
      name: "TraumaticEventExperienceOptionsFirst responder trauma",
    },
    {
      label: "Traumatic loss of loved one",
      value: "Traumatic loss of loved one",
      name: "TraumaticEventExperienceOptionsTraumatic loss of loved one",
    },
    {
      label: "Military combat",
      value: "Military combat",
      name: "TraumaticEventExperienceOptionsMilitary combat",
    },
    {
      label: "Other",
      value: "Other",
      name: "TraumaticEventExperienceOptionsOther",
    },
  ];

  const handleChange = (event) => {
    setGADValue({ ...GADValue, [event.target.name]: event.target.value });
  };

  const handleFeelingNervousChange = (event) => {
    setGADValue({
      ...GADValue,
      feelingNervous: event.target.value,
      feltAnxiousLong: "",
      feelAnxiousOften: "",
    });
  };

  const handleFeltAnxiousLongChange = (event) => {
    setGADValue({
      ...GADValue,
      feltAnxiousLong: event.target.value,
    });
  };

  const handleFeelAnxiousOftenChange = (event) => {
    setGADValue({
      ...GADValue,
      feelAnxiousOften: event.target.value,
    });
  };

  const handleStopControlWorringChange = (event) => {
    setGADValue({
      ...GADValue,
      stopControlWorring: event.target.value,
    });
  };

  const handleWorringDifferentThingChange = (event) => {
    setGADValue({
      ...GADValue,
      worringDifferentThing: event.target.value,
      worringThing: "",
      describeWorringThing: "",
      specificAnxietyWorse: "",
    });
  };

  const handleWorringThingChange = (event) => {
    setGADValue({
      ...GADValue,
      worringThing: event.target.value,
      describeWorringThing: "",
    });
  };

  const handleTroubleRelaxingChange = (event) => {
    setGADValue({
      ...GADValue,
      troubleRelaxing: event.target.value,
    });
  };

  const handleRestlessSitHardChange = (event) => {
    setGADValue({
      ...GADValue,
      restlessSitHard: event.target.value,
    });
  };

  const handleEasilyAnnoyedChange = (event) => {
    setGADValue({
      ...GADValue,
      easilyAnnoyed: event.target.value,
    });
  };

  const handleFeelingAfraidAwfulThingChange = (event) => {
    setGADValue({
      ...GADValue,
      feelingAfraidAwfulThing: event.target.value,
    });
  };

  const handleCurrentAnxietySymptomsSelect = (event) => {
    setGADValue({
      ...GADValue,
      currentAnxietySymptoms: event.target.value,
    });
  };

  const handlePanicAttacksChange = (event) => {
    setGADValue({
      ...GADValue,
      panicAttacks: event.target.value,
      panicPhysicalSymptoms: "",
      panicAttacksLastLong: "",
      panicAttacksSpontaneous: "",
    });
  };

  const handlePanicPhysicalSymptomsChange = (event) => {
    setGADValue({
      ...GADValue,
      panicPhysicalSymptoms: event.target.value,
    });
  };

  const handlePanicAttacksLastLongChange = (event) => {
    setGADValue({
      ...GADValue,
      panicAttacksLastLong: event.target.value,
    });
  };

  const handlePanicAttacksSpontaneousChange = (event) => {
    setGADValue({
      ...GADValue,
      panicAttacksSpontaneous: event.target.value,
    });
  };

  const handlePastTraumaticEventsChange = (event) => {
    setGADValue({
      ...GADValue,
      pastTraumaticEvents: event.target.value,
      traumaticEventExperience: "",
      describeTraumaticExperience: "",
    });
  };

  const handleTraumaticEventExperienceChange = (event) => {
    setGADValue({
      ...GADValue,
      traumaticEventExperience: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGAD7(GADValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateGAD(GADValue);
    setErrors(errors);

    if (isValid) {
      setGAD7(GADValue);
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        Current Symptoms
      </p>
      <p className="bg-blue-400 w-[65%] mx-auto p-1 text-lg text-white rounded-lg mt-3 shadow-lg">
        GAD-7
      </p>
      <p className="bg-lime-400 w-[65%] mx-auto p-1 text-lg text-white rounded-lg mt-3 shadow-lg">
        Over the last two weeks, how often have you been bothered by the
        following problems?
      </p>

      <form>
        <CardField
          title="Feeling nervous, anxious, or on edge"
          type="radio"
          options={FeelingNervousOptions}
          onChange={handleFeelingNervousChange}
          checked={GADValue?.feelingNervous}
          errors={errors.feelingNervous}
        />
        {GADValue?.feelingNervous !== "" &&
        GADValue?.feelingNervous !== "Not at all" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="How long have you felt anxious during this or your most recent episode?"
                onChange={handleFeltAnxiousLongChange}
                options={FeltAnxiousLongOptions}
                checked={GADValue?.feltAnxiousLong}
                error={errors.feltAnxiousLong}
              />
            </div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="How often do you feel anxious?"
                onChange={handleFeelAnxiousOftenChange}
                options={FeelAnxiousOftenOptions}
                checked={GADValue?.feelAnxiousOften}
                error={errors.feelAnxiousOften}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="Not being able to stop or control worrying"
          type="radio"
          options={StopControlWorringOptions}
          onChange={handleStopControlWorringChange}
          checked={GADValue?.stopControlWorring}
          errors={errors.stopControlWorring}
        />

        <CardField
          title="Worrying too much about different things"
          type="radio"
          options={WorringDifferentThingOptions}
          onChange={handleWorringDifferentThingChange}
          checked={GADValue?.worringDifferentThing}
          errors={errors.worringDifferentThing}
        />

        {GADValue?.worringDifferentThing !== "" &&
        GADValue?.worringDifferentThing !== "Not at all" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="What do you worry about?"
                onChange={handleWorringThingChange}
                options={WorringThingOptions}
                checked={GADValue?.worringThing}
                error={errors.worringThing}
              />
            </div>
            {GADValue?.worringThing === "Other" ? (
              <div className="w-[68%] mx-auto mt-3">
                <TextFollowUp
                  title="You selected 'other'. Please describe what you worry about."
                  onChange={handleChange}
                  name="describeWorringThing"
                  value={GADValue.describeWorringThing}
                  error={errors.describeWorringThing}
                />
              </div>
            ) : null}
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Does anything specific make your anxiety worse?"
                onChange={handleChange}
                name="specificAnxietyWorse"
                value={GADValue.specificAnxietyWorse}
                error={errors.specificAnxietyWorse}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="Trouble relaxing"
          type="radio"
          options={TroubleRelaxingOptions}
          onChange={handleTroubleRelaxingChange}
          checked={GADValue?.troubleRelaxing}
          errors={errors.troubleRelaxing}
        />

        <CardField
          title="Being so restless that it's hard to sit still"
          type="radio"
          options={RestlessSitHardOptions}
          onChange={handleRestlessSitHardChange}
          checked={GADValue?.restlessSitHard}
          errors={errors.restlessSitHard}
        />

        <CardField
          title="Becoming easily annoyed or irritable"
          type="radio"
          options={EasilyAnnoyedOptions}
          onChange={handleEasilyAnnoyedChange}
          checked={GADValue?.easilyAnnoyed}
          errors={errors.easilyAnnoyed}
        />

        <CardField
          title="Feeling afraid as if something awful might happen"
          type="radio"
          options={FeelingAfraidAwfulThingOptions}
          onChange={handleFeelingAfraidAwfulThingChange}
          checked={GADValue?.feelingAfraidAwfulThing}
          errors={errors.feelingAfraidAwfulThing}
        />

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              With zero to 1 equaling no or minimal symptoms and 10 equaling the
              most severe symptoms possible, how do you rate your current
              anxiety symptoms?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div className="flex mt-2">
                <select
                  id="currentAnxietySymptoms"
                  className="w-[85%] ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus: outline-none"
                  value={GADValue?.currentAnxietySymptoms}
                  onChange={handleCurrentAnxietySymptomsSelect}
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

        <CardField
          title="Do you experience panic attacks, in which your heart races, you feel like you can't breathe, you shake or sweat?"
          type="radio"
          options={PanicAttacksOptions}
          onChange={handlePanicAttacksChange}
          checked={GADValue?.panicAttacks}
          errors={errors.panicAttacks}
        />
        {GADValue?.panicAttacks === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="If you experience panic attacks, indicate the physical symptoms that occur."
                options={PanicPhysicalSymptomsOptions}
                onChange={handlePanicPhysicalSymptomsChange}
                checked={GADValue?.panicPhysicalSymptoms}
                error={errors.panicPhysicalSymptoms}
              />
            </div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="If you experience panic attacks, how long do they last?"
                options={PanicAttacksLastLongOptions}
                onChange={handlePanicAttacksLastLongChange}
                checked={GADValue?.panicAttacksLastLong}
                error={errors.panicAttacksLastLong}
              />
            </div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="Please list anything that triggers your panic attacks:"
                onChange={handleChange}
                name="panicAttacksList"
                value={GADValue.panicAttacksList}
                error={errors.panicAttacksList}
              />
            </div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="Are your panic attacks spontaneous and unrelated to any events?"
                options={PanicAttacksSpontaneousOptions}
                onChange={handlePanicAttacksSpontaneousChange}
                checked={GADValue?.panicAttacksSpontaneous}
                error={errors.panicAttacksSpontaneous}
              />
            </div>
          </div>
        ) : null}

        <CardField
          title="Have you experienced past traumatic event(s)"
          type="radio"
          options={PastTraumaticEventsOptions}
          onChange={handlePastTraumaticEventsChange}
          checked={GADValue?.pastTraumaticEvents}
          errors={errors.pastTraumaticEvents}
        />
        {GADValue?.pastTraumaticEvents === "Yes" ? (
          <div>
            <div className="w-[68%] mx-auto mt-3">
              <RadioFollowUp
                title="What traumatic event(s) did you experience?"
                options={TraumaticEventExperienceOptions}
                onChange={handleTraumaticEventExperienceChange}
                checked={GADValue?.traumaticEventExperience}
                error={errors.traumaticEventExperience}
              />
            </div>
            <div className="w-[68%] mx-auto mt-3">
              <TextFollowUp
                title="If you feel comfortable, please describe your traumatic experiences:"
                onChange={handleChange}
                name="describeTraumaticExperience"
                value={GADValue.describeTraumaticExperience}
                error={errors.describeTraumaticExperience}
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

export default GAD;
