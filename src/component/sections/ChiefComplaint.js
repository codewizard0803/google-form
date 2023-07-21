/** @format */

import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";

import TextField from "../common/TextField";
import useGlobalContext from "../../hooks/useGlobalContext";
import CardField from "../common/CardField";
import validateChiefComplaint from "../../validation/validateChiefComplaint";
import TextFollowUp from "../common/TextFollowUp";
import { toast } from "react-toastify";

const ChiefComplaint = ({ currentSection, setCurrentSection }) => {
  const { chiefComplaint, setChiefComplaint } = useGlobalContext();
  const [errors, setErrors] = useState({});

  const [chiefComplaintValue, setChiefComplaintValue] = useState({
    mostBothered: "",
    currentlyExperiencingSymptom: [],
    currentEpisodeDate: "",
    specificStressfulSymptom: "",
    specificStressfulEvent: "",
    stressFollowing: [],
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setChiefComplaintValue(chiefComplaint);
  }, [chiefComplaint]);

  const currentlyExperiencingSymptomsOptions = [
    {
      label: "Anxiety",
      value: "anxiety",
      name: "currentlyExperiencingSymptomsAnxiety",
    },
    {
      label: "Panic",
      value: "panic",
      name: "currentlyExperiencingSymptomsPanic",
    },
    {
      label: "Depression",
      value: "depression",
      name: "currentlyExperiencingSymptomsDepression",
    },
    {
      label: "Post-traumatic stress",
      value: "post-traumatic stress",
      name: "currentlyExperiencingSymptomsPost-traumatic stress",
    },
    {
      label: "Mania",
      value: "mania",
      name: "currentlyExperiencingSymptomsMania",
    },
    {
      label: "Hypomania",
      value: "hypomania",
      name: "currentlyExperiencingSymptomsHypomania",
    },
    {
      label: "Psychosis",
      value: "psychosis",
      name: "currentlyExperiencingSymptomsPsychosis",
    },
    {
      label: "Other",
      value: "other",
      name: "currentlyExperiencingSymptomsOther",
    },
    {
      label: "None of the above",
      value: "none of the above",
      name: "currentlyExperiencingSymptomsNone of the above",
    },
  ];

  const currentEpisodeDateOptions = [
    {
      label: "A few hours ago",
      value: "a few hours ago",
      name: "currentEpisodeDateA few hours ago",
    },
    {
      label: "A few days ago",
      value: "a few days ago",
      name: "currentEpisodeDateA few days ago",
    },
    {
      label: "A week ago",
      value: "a week ago",
      name: "currentEpisodeDateA week ago",
    },
    {
      label: "Several weeks ago",
      value: "several weeks ago",
      name: "currentEpisodeDateSeveral weeks ago",
    },
    {
      label: "A month ago",
      value: "a month ago",
      name: "currentEpisodeDateA month ago",
    },
    {
      label: "Several months ago",
      value: "several months ago",
      name: "currentEpisodeDateSeveral months ago",
    },
    {
      label: "6-12 months ago",
      value: "6-12 months ago",
      name: "currentEpisodeDate6-12 months ago",
    },
    {
      label: "A year ago",
      value: "a year ago",
      name: "currentEpisodeDateA year ago",
    },
    {
      label: "Several years ago",
      value: "several years ago",
      name: "currentEpisodeDateSeveral years ago",
    },
    {
      label: "Over ten years ago",
      value: "over ten years ago",
      name: "currentEpisodeDateOver ten years ago",
    },
    {
      label: "I can not remember a time when I did not feel these emotions",
      value: "I can not remember a time when I did not feel these emotions",
      name: "currentEpisodeDateI can not remember a time when I did not feel these emotions",
    },
  ];

  const stressFollowingOptions = [
    {
      label: "Loss of a job or other financial changes",
      value: "loss of a job or other financial changes",
      name: "loss of a job or other financial changes",
    },
    {
      label: "Unstable housing",
      value: "unstable housing",
      name: "unstable housing",
    },
    {
      label: "Death or loss of a friend or relative",
      value: "death or loss of a friend or relative",
      name: "death or loss of a friend or relative",
    },
    {
      label:
        "Relationship stress such as friends, significant others, or family members",
      value:
        "relationship stress such as friends, significant others, or family members",
      name: "relationship stress such as friends, significant others, or family members",
    },
    {
      label: "Housing, career changes, new children and other family changes",
      value: "housing, career changes, new children and other family changes",
      name: "housing, career changes, new children and other family changes",
    },
    { label: "Other", value: "other", name: "Other" },
    {
      label: "None of the above",
      value: "none of the above",
      name: "None of the above",
    },
  ];

  const handleChange = (event) => {
    setChiefComplaintValue({
      ...chiefComplaintValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleStressFollowChange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...chiefComplaintValue?.stressFollowing];

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
    setChiefComplaintValue({
      ...chiefComplaintValue,
      stressFollowing: newCheckedItems,
    });
  };

  const handleCurrentlyExperiencingSymptomChange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [
      ...chiefComplaintValue?.currentlyExperiencingSymptom,
    ];

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

    setChiefComplaintValue({
      ...chiefComplaintValue,
      currentlyExperiencingSymptom: newCheckedItems,
      currentEpisodeDate: "",
    });
  };

  const handleCurrentEpisodeDateChange = (event) => {
    setChiefComplaintValue({
      ...chiefComplaintValue,
      currentEpisodeDate: event.target.value,
    });
  };

  const handleSpecificStressfulSymptomChange = (event) => {
    setChiefComplaintValue({
      ...chiefComplaintValue,
      specificStressfulSymptom: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setChiefComplaint(chiefComplaintValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateChiefComplaint(chiefComplaintValue);
    setErrors(errors);
    setChiefComplaint(chiefComplaintValue);
    setCurrentSection(currentSection + 1);

    // if (isValid) {
    //   setChiefComplaint(chiefComplaintValue);
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
        Chief Complaint
      </p>

      <form>
        <TextField
          title="51. I am most bothered on this day by the following:"
          placeholder="Your answer"
          name="mostBothered"
          value={chiefComplaintValue.mostBothered}
          onChange={handleChange}
          error={errors.mostBothered}
        />

        <CardField
          title="52. What emotional symptoms are you currently experiencing or recently experienced?"
          type="checkbox"
          options={currentlyExperiencingSymptomsOptions}
          onChange={handleCurrentlyExperiencingSymptomChange}
          checked={chiefComplaintValue?.currentlyExperiencingSymptom}
          errors={errors.currentlyExperiencingSymptom}
        />
        {chiefComplaintValue?.currentlyExperiencingSymptom.length > 0 ? (
          <CardField
            title="When did this current episode of these emotional symptoms begin?"
            type="radio"
            options={currentEpisodeDateOptions}
            onChange={handleCurrentEpisodeDateChange}
            checked={chiefComplaintValue?.currentEpisodeDate}
            errors={errors.currentEpisodeDate}
          />
        ) : null}

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              53. Have you experienced any of your above emotional symptoms in
              response to a specific stressful event in your life?
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
            <div className="mt-5">
              <div
                className={classnames("mt-5 p-2", {
                  "border-red-500 border": errors.specificStressfulSymptom,
                })}
              >
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="Yes"
                      name="specificStressfulSymptomYes"
                      className="mr-2"
                      checked={
                        chiefComplaintValue?.specificStressfulSymptom === "Yes"
                      }
                      onChange={handleSpecificStressfulSymptomChange}
                    />
                    Yes
                  </label>
                  {chiefComplaintValue?.specificStressfulSymptom === "Yes" ? (
                    <TextFollowUp
                      title="What was the stressful event that triggered your emotional symptoms?"
                      onChange={handleChange}
                      name="specificStressfulEvent"
                      value={chiefComplaintValue.specificStressfulEvent}
                      error={errors.specificStressfulEvent}
                    />
                  ) : null}
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="No"
                      name="specificStressfulSymptomNo"
                      className="mr-2"
                      checked={
                        chiefComplaintValue?.specificStressfulSymptom === "No"
                      }
                      onChange={handleSpecificStressfulSymptomChange}
                    />
                    No
                  </label>
                </div>
                <div className="text-left">
                  <label>
                    <input
                      type="radio"
                      value="N/A"
                      name="specificStressfulSymptomN/A"
                      className="mr-2"
                      checked={
                        chiefComplaintValue?.specificStressfulSymptom === "N/A"
                      }
                      onChange={handleSpecificStressfulSymptomChange}
                    />
                    N/A
                  </label>
                </div>
              </div>
              {errors.specificStressfulSymptom && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.specificStressfulSymptom}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <CardField
          title="54. Do you have stress from any of the following?"
          type="checkbox"
          options={stressFollowingOptions}
          onChange={handleStressFollowChange}
          checked={chiefComplaintValue.stressFollowing}
          errors={errors.stressFollowing}
        />

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

export default ChiefComplaint;
