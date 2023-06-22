import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";
import { toast } from "react-toastify";

import TextField from "../common/TextField";
import useGlobalContext from "../../hooks/useGlobalContext";
import CardField from "../common/CardField";
import TextFollowUp from "../common/TextFollowUp";
import validateLongitudinalHistory from "../../validation/validateLongitudinalHistory";

const LongitudinalHistory = ({ currentSection, setCurrentSection }) => {
  const { longitudinalHistory, setLongitudinalHistory } = useGlobalContext();

  const [longitudinalHistoryValue, setLongitudinalHistoryValue] = useState({
    emotionEpisodeBegan: "",
    emotionSymptom: "",
    mostWorstSymptom: "",
    emotionalSymptomBecome: "",
    feelEmotion: "",
    explainFeelEmotion: "",
    depressiveSymptom: "0",
    anxietySymptom: "0",
    postTraumaSymptom: "0",
    compareEmotionalSymptom: "",
    symptomsAffectedJob: "",
    describeSymptomsAffectedJob: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setLongitudinalHistoryValue(longitudinalHistory);
  }, [longitudinalHistory]);

  const feelEmotionOptions = [
    { label: "briefly", value: "briefly", name: "feelEmotionbriefly" },
    {
      label: "part of some days,",
      value: "part of some days,",
      name: "feelEmotionpart of some days,",
    },
    {
      label: "all day every day",
      value: "all day every day",
      name: "feelEmotionall day every day",
    },
    {
      label: "a few days a week",
      value: "a few days a week",
      name: "feelEmotiona few days a week",
    },
    { label: "other", value: "other", name: "feelEmotionother" },
  ];

  const compareEmotionalSymptomOptions = [
    { label: "1", value: "1", name: "compareEmotional1" },
    { label: "2", value: "2", name: "compareEmotional2" },
    { label: "3", value: "3", name: "compareEmotional3" },
    { label: "4", value: "4", name: "compareEmotional4" },
    { label: "5", value: "5", name: "compareEmotional5" },
    { label: "6", value: "6", name: "compareEmotional6" },
    { label: "7", value: "7", name: "compareEmotional7" },
    { label: "8", value: "8", name: "compareEmotional8" },
    { label: "9", value: "9", name: "compareEmotional9" },
    { label: "10", value: "10", name: "compareEmotional10" },
  ];

  const handleChange = (event) => {
    setLongitudinalHistoryValue({
      ...longitudinalHistoryValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleFeelEmotionChange = (event) => {
    setLongitudinalHistoryValue({
      ...longitudinalHistoryValue,
      feelEmotion: event.target.value,
    });
  };

  const handleCompareEmotionalSymptomChange = (event) => {
    setLongitudinalHistoryValue({
      ...longitudinalHistoryValue,
      compareEmotionalSymptom: event.target.value,
    });
  };

  const handleSymptomsAffectedJobChange = (event) => {
    setLongitudinalHistoryValue({
      ...longitudinalHistoryValue,
      symptomsAffectedJob: event.target.value,
    });
  };

  const handleDepressiveSypmtomSelect = (event) => {
    setLongitudinalHistoryValue({
      ...longitudinalHistoryValue,
      depressiveSymptom: event.target.value,
    });
  };

  const handleAnxietySymptomSelect = (event) => {
    setLongitudinalHistoryValue({
      ...longitudinalHistoryValue,
      anxietySymptom: event.target.value,
    });
  };

  const handlePostTraumaSymptomSypmtomSelect = (event) => {
    setLongitudinalHistoryValue({
      ...longitudinalHistoryValue,
      postTraumaSymptom: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setLongitudinalHistory(longitudinalHistoryValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateLongitudinalHistory(
      longitudinalHistoryValue
    );
    setErrors(errors);

    setLongitudinalHistory(longitudinalHistoryValue);
    setCurrentSection(currentSection + 1);

    // if (isValid) {
    //   setLongitudinalHistory(longitudinalHistoryValue);
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
        Longitudinal History
      </p>

      <form>
        <TextField
          title="54. When did this episode of your depression, anxiety, or post-trauma emotions start?"
          placeholder="Your answer"
          name="emotionEpisodeBegan"
          value={longitudinalHistoryValue?.emotionEpisodeBegan}
          onChange={handleChange}
          error={errors.emotionEpisodeBegan}
        />

        <TextField
          title="55. Describe the emotional/psychiatric symptoms you have experienced"
          placeholder="Your answer"
          name="emotionSymptom"
          value={longitudinalHistoryValue?.emotionSymptom}
          onChange={handleChange}
          error={errors.emotionSymptom}
        />

        <TextField
          title="56. During this current or most recent symptom episode, when were your symptoms the worst?"
          placeholder="Your answer"
          name="mostWorstSymptom"
          value={longitudinalHistoryValue?.mostWorstSymptom}
          onChange={handleChange}
          error={errors.mostWorstSymptom}
        />

        <TextField
          title="57. Have your emotional symptoms become worse or better since they started or since a specific date or event?"
          placeholder="Your answer"
          name="emotionalSymptomBecome"
          value={longitudinalHistoryValue?.emotionalSymptomBecome}
          onChange={handleChange}
          error={errors.emotionalSymptomBecome}
        />

        <CardField
          title="58. How often do you feel the above emotions?"
          type="radio"
          options={feelEmotionOptions}
          onChange={handleFeelEmotionChange}
          checked={longitudinalHistoryValue?.feelEmotion}
          errors={errors.feelEmotion}
        />
        {longitudinalHistoryValue?.feelEmotion === "other" ? (
          <div className="w-[68%] mx-auto mt-3">
            <TextFollowUp
              title="If other: Explain how often you feel the above emotions"
              onChange={handleChange}
              name="explainFeelEmotion"
              value={longitudinalHistoryValue?.explainFeelEmotion}
              error={errors.explainFeelEmotion}
            />
          </div>
        ) : null}

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              59. How would you rate your depressive, anxiety, or post trauma
              symptoms <u>when they were most severe</u>, with zero to 1
              equaling no or minimal symptoms and 10 equaling the most severe
              symptoms imaginable?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div className="flex mt-2">
                <label htmlFor="depressive-Symptom">Depressive: </label>
                <select
                  id="depressive-Symptom"
                  className="w-[85%] ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus: outline-none"
                  value={longitudinalHistoryValue?.depressiveSymptom}
                  onChange={handleDepressiveSypmtomSelect}
                >
                  {[...Array(11)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex mt-2">
                <label htmlFor="anxiety-Symptom">Anxiety: </label>
                <select
                  id="anxiety-Symptom"
                  className="w-[85%] ml-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus: outline-none"
                  value={longitudinalHistoryValue?.anxietySymptom}
                  onChange={handleAnxietySymptomSelect}
                >
                  {[...Array(11)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex mt-2">
                <label htmlFor="postTrauma-Symptom">PostTrauma: </label>
                <select
                  id="postTrauma-Symptom"
                  className="w-[85%] ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus: outline-none"
                  value={longitudinalHistoryValue?.postTraumaSymptom}
                  onChange={handlePostTraumaSymptomSypmtomSelect}
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

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              60. <u>Currently</u>, how do you rate your depressive, anxiety, or
              post trauma symptoms on the same 1-10 scale?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div
              className={classnames("mt-5 p-2 flex justify-between", {
                "border-red-500 border": errors.compareEmotionalSymptom,
              })}
            >
              {compareEmotionalSymptomOptions.map((item, index) => (
                <div className="text-left mt-1" key={index}>
                  <label key={item.value}>
                    <input
                      type="radio"
                      value={item.value}
                      className="mr-2"
                      checked={
                        longitudinalHistoryValue?.compareEmotionalSymptom ===
                        item.value
                      }
                      onChange={handleCompareEmotionalSymptomChange}
                    />
                    {item.label}
                  </label>
                </div>
              ))}
            </div>

            {errors.compareEmotionalSymptom && (
              <div className="text-red-500 text-left text-[12px] mt-2">
                {errors.compareEmotionalSymptom}
              </div>
            )}
          </CardContent>
        </Card>

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              61. Have your emotional symptoms affected your ability to do your
              job?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div
                className={classnames("mt-5 p-2", {
                  "border-red-500 border": errors.symptomsAffectedJob,
                })}
              >
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Yes"
                      name="symptomsAffectedJobYes"
                      className="mr-2"
                      checked={
                        longitudinalHistoryValue?.symptomsAffectedJob === "Yes"
                      }
                      onChange={handleSymptomsAffectedJobChange}
                    />
                    Yes
                  </label>
                  {longitudinalHistoryValue?.symptomsAffectedJob === "Yes" ? (
                    <TextFollowUp
                      title="Please describe how your emotional symptoms have affected your ability to do your job?"
                      onChange={handleChange}
                      name="describeSymptomsAffectedJob"
                      value={
                        longitudinalHistoryValue.describeSymptomsAffectedJob
                      }
                      error={errors.describeSymptomsAffectedJob}
                    />
                  ) : null}
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="No"
                      name="symptomsAffectedJobNo"
                      className="mr-2"
                      checked={
                        longitudinalHistoryValue?.symptomsAffectedJob === "No"
                      }
                      onChange={handleSymptomsAffectedJobChange}
                    />
                    No
                  </label>
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="N/A"
                      name="symptomsAffectedJobN/A"
                      className="mr-2"
                      checked={
                        longitudinalHistoryValue?.symptomsAffectedJob === "N/A"
                      }
                      onChange={handleSymptomsAffectedJobChange}
                    />
                    N/A
                  </label>
                </div>
              </div>
              {errors.symptomsAffectedJob && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.symptomsAffectedJob}
                </div>
              )}
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

export default LongitudinalHistory;
