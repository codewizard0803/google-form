import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";
import { toast } from "react-toastify";

import CardField from "../common/CardField";
import RadioFollowUp from "../common/RadioFollowUp";
import useGlobalContext from "../../hooks/useGlobalContext";
import TextField from "../common/TextField";
import TextFollowUp from "../common/TextFollowUp";
import validateSocialHistory from "../../validation/validateSocialHistory";

const SocialHistory = ({ currentSection, setCurrentSection }) => {
  const { globalSocialHistory, setGlobalSocialHistory } = useGlobalContext();

  const [socialHistoryValue, setSocialHistoryValue] = useState({
    barriersReceivingHealthcare: "",
    selectbarriersHealthcare: [],
    describeCurrentLivingSituation: [],
    livesYourHome: [],
    residedCurrentHomeLong: "",
    ownYourHome: "",
    describeAdditionalStressors: "",
    presentTimeDanger: "",
    describeFeelDanger: "",
    allStressorsPastYear: "",
    stressorsAffect: "",
    eachStressorsAffect: "",
    otherStressorsBesides: "",
    explainAllStressors: "",
    affectEmotionalSymptoms: "",
    eachAffectEmotionalSymptoms: "",
    otherStressorsExperience: "",
    explainStressorsExperience: "",
  });

  const [errors, setErrors] = useState({});

  const BarriersReceivingHealthcareOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "BarriersReceivingHealthcareOptionsYes",
    },
    { label: "No", value: "No", name: "BarriersReceivingHealthcareOptionsNo" },
  ];

  const SelectbarriersHealthcareOptions = [
    {
      label: "Financial constraint",
      value: "Financial constraint",
      name: "SelectbarriersHealthcareOptionsFinancial constraint",
    },
    {
      label: "Unstable housing",
      value: "Unstable housing",
      name: "SelectbarriersHealthcareOptionsUnstable housing",
    },
    {
      label: "Transportation access",
      value: "Transportation access",
      name: "SelectbarriersHealthcareOptionsTransportation access",
    },
    {
      label: "Child-care",
      value: "Child-care",
      name: "SelectbarriersHealthcareOptionsChild-care",
    },
    {
      label: "Family disapproval",
      value: "Family disapproval",
      name: "SelectbarriersHealthcareOptionsFamily disapproval",
    },
    {
      label: "Other",
      value: "Other",
      name: "SelectbarriersHealthcareOptionsOther",
    },
  ];

  const DescribeCurrentLivingSituationOptions = [
    {
      label: "Rent a home",
      value: "Rent a home",
      name: "DescribeCurrentLivingSituationOptionsRent a home",
    },
    {
      label: "Own my own home",
      value: "Own my own home",
      name: "DescribeCurrentLivingSituationOptionsOwn my own home",
    },
    {
      label: "Live with family",
      value: "Live with family",
      name: "DescribeCurrentLivingSituationOptionsLive with family",
    },
    {
      label: "Live with friends",
      value: "Live with friends",
      name: "DescribeCurrentLivingSituationOptionsLive with friends",
    },
    {
      label: "Live alone",
      value: "Live alone",
      name: "DescribeCurrentLivingSituationOptionsLive alone",
    },
    {
      label: "Temporary housing",
      value: "Temporary housing",
      name: "DescribeCurrentLivingSituationOptionsTemporary housing",
    },
    {
      label: "Hotel",
      value: "Hotel",
      name: "DescribeCurrentLivingSituationOptionsHotel",
    },
    {
      label: "Homeless",
      value: "Homeless",
      name: "DescribeCurrentLivingSituationOptionsHomeless",
    },
    {
      label: "Other",
      value: "Other",
      name: "DescribeCurrentLivingSituationOptionsOther",
    },
  ];

  const LivesYourHomeOptions = [
    {
      label: "husband",
      value: "husband",
      name: "LivesYourHomeOptionshusband",
    },
    {
      label: "wife",
      value: "wife",
      name: "LivesYourHomeOptionswife",
    },
    {
      label: "brother",
      value: "brother",
      name: "LivesYourHomeOptionsbrother",
    },
    {
      label: "sister",
      value: "sister",
      name: "LivesYourHomeOptionssister",
    },
    {
      label: "mother",
      value: "mother",
      name: "LivesYourHomeOptionsmother",
    },
    {
      label: "father",
      value: "father",
      name: "LivesYourHomeOptionsfather",
    },
    {
      label: "friend",
      value: "friend",
      name: "LivesYourHomeOptionsfriend",
    },
    {
      label: "roommate",
      value: "roommate",
      name: "LivesYourHomeOptionsroommate",
    },
    {
      label: "Lives alone",
      value: "Lives alone",
      name: "LivesYourHomeOptionsLives alone",
    },
    {
      label: "is homeless",
      value: "is homeless",
      name: "LivesYourHomeOptionsis homeless",
    },
  ];

  const OwnYourHomeOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "OwnYourHomeOptionsYes",
    },
    { label: "No", value: "No", name: "OwnYourHomeOptionsNo" },
  ];

  const PresentTimeDangerOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "PresentTimeDangerOptionsYes",
    },
    { label: "No", value: "No", name: "PresentTimeDangerOptionsNo" },
  ];

  const StressorsAffectOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "StressorsAffectOptionsYes",
    },
    { label: "No", value: "No", name: "StressorsAffectOptionsNo" },
  ];

  const OtherStressorsBesidesOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "OtherStressorsBesidesOptionsYes",
    },
    { label: "No", value: "No", name: "OtherStressorsBesidesOptionsNo" },
  ];

  const AffectEmotionalSymptomsOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "AffectEmotionalSymptomsOptionsYes",
    },
    { label: "No", value: "No", name: "AffectEmotionalSymptomsOptionsNo" },
  ];

  const OtherStressorsExperienceOptions = [
    {
      label: "Yes",
      value: "Yes",
      name: "OtherStressorsExperienceOptionsYes",
    },
    { label: "No", value: "No", name: "OtherStressorsExperienceOptionsNo" },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setSocialHistoryValue(globalSocialHistory);
  }, [globalSocialHistory]);

  const handleBarriersReceivingHealthcarechange = (event) => {
    setSocialHistoryValue({
      ...socialHistoryValue,
      barriersReceivingHealthcare: event.target.value,
      selectbarriersHealthcare: [],
    });
  };

  const handleOwnYourHomechange = (event) => {
    setSocialHistoryValue({
      ...socialHistoryValue,
      ownYourHome: event.target.value,
    });
  };

  const handleSelectbarriersHealthcarechange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...socialHistoryValue.selectbarriersHealthcare];

    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }

    setSocialHistoryValue({
      ...socialHistoryValue,
      selectbarriersHealthcare: newCheckedItems,
    });
  };

  const handleDescribeCurrentLivingSituationchange = (event) => {
    let itemValue = event.target.value;
    let isChecked = event.target.checked;

    let newCheckedItems = [
      ...socialHistoryValue.describeCurrentLivingSituation,
    ];

    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }

    setSocialHistoryValue({
      ...socialHistoryValue,
      describeCurrentLivingSituation: newCheckedItems,
      livesYourHome:
        newCheckedItems.length !== 0 &&
        newCheckedItems.filter(
          (item) => item !== "Homeless" && item !== "Other"
        ).length > 0
          ? socialHistoryValue.livesYourHome
          : [],
      residedCurrentHomeLong:
        newCheckedItems.length !== 0 &&
        newCheckedItems.filter(
          (item) => item !== "Homeless" && item !== "Other"
        ).length > 0
          ? "1"
          : "",
      ownYourHome:
        newCheckedItems.length !== 0 &&
        newCheckedItems.filter(
          (item) => item !== "Homeless" && item !== "Other"
        ).length > 0
          ? socialHistoryValue.ownYourHome
          : "",
      describeAdditionalStressors:
        newCheckedItems.length !== 0 &&
        newCheckedItems.filter(
          (item) => item !== "Homeless" && item !== "Other"
        ).length > 0
          ? socialHistoryValue.describeAdditionalStressors
          : "",
    });
  };

  const handleLivesYourHomechange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...socialHistoryValue.livesYourHome];

    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }

    setSocialHistoryValue({
      ...socialHistoryValue,
      livesYourHome: newCheckedItems,
    });
  };

  const handleResidedCurrentHomeLongSelect = (event) => {
    setSocialHistoryValue({
      ...socialHistoryValue,
      residedCurrentHomeLong: event.target.value,
    });
  };

  const handlePresentTimeDangerchange = (event) => {
    setSocialHistoryValue({
      ...socialHistoryValue,
      presentTimeDanger: event.target.value,
      describeFeelDanger: "",
    });
  };

  const handleStressorsAffectchange = (event) => {
    setSocialHistoryValue({
      ...socialHistoryValue,
      stressorsAffect: event.target.value,
    });
  };

  const handleOtherStressorsBesideschange = (event) => {
    setSocialHistoryValue({
      ...socialHistoryValue,
      otherStressorsBesides: event.target.value,
      explainAllStressors: "",
      affectEmotionalSymptoms: "",
      eachAffectEmotionalSymptoms: "",
    });
  };

  const handleAffectEmotionalSymptomschange = (event) => {
    setSocialHistoryValue({
      ...socialHistoryValue,
      affectEmotionalSymptoms: event.target.value,
    });
  };

  const handleOtherStressorsExperiencechange = (event) => {
    setSocialHistoryValue({
      ...socialHistoryValue,
      otherStressorsExperience: event.target.value,
      explainStressorsExperience: "",
    });
  };

  const handleChange = (event) => {
    setSocialHistoryValue({
      ...socialHistoryValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalSocialHistory(socialHistoryValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateSocialHistory(socialHistoryValue);
    setErrors(errors);

    setGlobalSocialHistory(socialHistoryValue);
    setCurrentSection(currentSection + 1);

    // if (isValid) {
    //   setGlobalSocialHistory(socialHistoryValue);
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
        Social History
      </p>

      <form>
        <CardField
          title="158. Are you experiencing any barriers to receiving healthcare?"
          type="radio"
          options={BarriersReceivingHealthcareOptions}
          onChange={handleBarriersReceivingHealthcarechange}
          checked={socialHistoryValue?.barriersReceivingHealthcare}
          errors={errors.barriersReceivingHealthcare}
        />

        {socialHistoryValue?.barriersReceivingHealthcare === "Yes" ? (
          <div>
            <CardField
              title="Please select the barriers to healthcare you are experiencing:"
              type="checkbox"
              options={SelectbarriersHealthcareOptions}
              onChange={handleSelectbarriersHealthcarechange}
              checked={socialHistoryValue?.selectbarriersHealthcare}
              errors={errors.selectbarriersHealthcare}
            />
          </div>
        ) : null}

        <CardField
          title="159. Please describe your current living situation(select all that apply):"
          type="checkbox"
          options={DescribeCurrentLivingSituationOptions}
          onChange={handleDescribeCurrentLivingSituationchange}
          checked={socialHistoryValue?.describeCurrentLivingSituation}
          errors={errors.describeCurrentLivingSituation}
        />

        {socialHistoryValue?.describeCurrentLivingSituation.length !== 0 &&
        !(
          socialHistoryValue?.describeCurrentLivingSituation.filter(
            (item) => item === "Homeless"
          ).length > 0
        ) &&
        !(
          socialHistoryValue?.describeCurrentLivingSituation.filter(
            (item) => item === "Live alone"
          ).length > 0
        ) ? (
          <div>
            <CardField
              title="Who else lives in your home with you?"
              type="checkbox"
              options={LivesYourHomeOptions}
              onChange={handleLivesYourHomechange}
              checked={socialHistoryValue?.livesYourHome}
              errors={errors.livesYourHome}
            />

            <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
              <CardContent>
                <Typography sx={{ fontSize: 20, textAlign: "left" }}>
                  If yes, how many times have you attempted suicide?
                </Typography>
                <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                <div className="mt-5">
                  <div className="flex mt-2">
                    <select
                      id="residedCurrentHomeLong"
                      className="w-[85%] ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus: outline-none"
                      value={socialHistoryValue?.residedCurrentHomeLong}
                      onChange={handleResidedCurrentHomeLongSelect}
                    >
                      {[...Array(50)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <p className="mx-5">Years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <CardField
              title="Do You Own Your Home?"
              type="radio"
              options={OwnYourHomeOptions}
              onChange={handleOwnYourHomechange}
              checked={socialHistoryValue?.ownYourHome}
              errors={errors.ownYourHome}
            />

            {/* <TextField
              title="Please describe the additional stressors in your life, not already covered above:"
              type="text"
              name="describeAdditionalStressors"
              value={socialHistoryValue?.describeAdditionalStressors}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.describeAdditionalStressors}
            /> */}
          </div>
        ) : null}

        <CardField
          title="160. Do you feel that you are in any danger at the present time?"
          type="radio"
          options={PresentTimeDangerOptions}
          onChange={handlePresentTimeDangerchange}
          checked={socialHistoryValue?.presentTimeDanger}
          errors={errors.presentTimeDanger}
        />

        {socialHistoryValue?.presentTimeDanger === "Yes" ? (
          <div>
            <TextField
              title="Please describe the situation in which you feel in danger."
              type="text"
              name="describeFeelDanger"
              value={socialHistoryValue?.describeFeelDanger}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.describeFeelDanger}
            />
          </div>
        ) : null}

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              161. List ALL stressors NOT related to work which happened in the
              past year (i.e., separation/divorce, death in family, problems
              with children, financial, foreclosure, bankruptcy, repossessions,
              etc).
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div className="flex mt-2 mb-5">
                <input
                  type="text"
                  className={classnames(
                    "mt-2 border-b-2 border-b-gray-300 w-full focus:outline-none focus:border-b-green-400 form-control form-control-lg",
                    { "border-b-red-500": errors.allStressorsPastYear }
                  )}
                  name="allStressorsPastYear"
                  value={socialHistoryValue.allStressorsPastYear}
                  onChange={handleChange}
                  placeholder="Your answer"
                />
              </div>
              {errors.allStressorsPastYear && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.allStressorsPastYear}
                </div>
              )}

              <RadioFollowUp
                title="Did these stressors affect your emotional symptoms"
                type="radio"
                options={StressorsAffectOptions}
                onChange={handleStressorsAffectchange}
                checked={socialHistoryValue?.stressorsAffect}
                errors={errors.stressorsAffect}
              />

              <TextFollowUp
                title="How did each of these stressors affect your emotional symptoms?"
                onChange={handleChange}
                name="eachStressorsAffect"
                value={socialHistoryValue.eachStressorsAffect}
                error={errors.eachStressorsAffect}
              />
            </div>
          </CardContent>
        </Card>

        <CardField
          title="162. Since Your Injury, Have You Experienced Any Other Stressors Besides Your Injury or Psychiatric Issue?"
          type="radio"
          options={OtherStressorsBesidesOptions}
          onChange={handleOtherStressorsBesideschange}
          checked={socialHistoryValue?.otherStressorsBesides}
          errors={errors.otherStressorsBesides}
        />

        {socialHistoryValue?.otherStressorsBesides === "Yes" ? (
          <div>
            <TextField
              title="Please explain all of the stressors in your life?"
              type="text"
              name="explainAllStressors"
              value={socialHistoryValue?.explainAllStressors}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.explainAllStressors}
            />

            <CardField
              title="Did these stressors affect your emotional symptoms"
              type="radio"
              options={AffectEmotionalSymptomsOptions}
              onChange={handleAffectEmotionalSymptomschange}
              checked={socialHistoryValue?.affectEmotionalSymptoms}
              errors={errors.affectEmotionalSymptoms}
            />

            <TextField
              title="How did each of these stressors affect your emotional symptoms?"
              type="text"
              name="eachAffectEmotionalSymptoms"
              value={socialHistoryValue?.eachAffectEmotionalSymptoms}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.eachAffectEmotionalSymptoms}
            />
          </div>
        ) : null}

        <CardField
          title="163. Are you experiencing any other stressors in your life not covered above?"
          type="radio"
          options={OtherStressorsExperienceOptions}
          onChange={handleOtherStressorsExperiencechange}
          checked={socialHistoryValue?.otherStressorsExperience}
          errors={errors.otherStressorsExperience}
        />

        {socialHistoryValue?.otherStressorsExperience === "Yes" ? (
          <div>
            <TextField
              title="Explain:"
              type="text"
              name="explainStressorsExperience"
              value={socialHistoryValue?.explainStressorsExperience}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.explainStressorsExperience}
            />
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

export default SocialHistory;
