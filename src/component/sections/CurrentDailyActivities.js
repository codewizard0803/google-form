import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";

import useGlobalContext from "../../hooks/useGlobalContext";
import TextField from "../common/TextField";
import TextFollowUp from "../common/TextFollowUp";
import validateCurrentDailyActivites from "../../validation/validateCurrentDailyActivites";
import TableCheckBox from "../common/TableCheckBox";
import { toast } from "react-toastify";

const CurrentDailyActivities = ({ currentSection, setCurrentSection }) => {
  const {
    globalCurrentDailyActivities,
    setGlobalCurrentDailyActivities,
  } = useGlobalContext();

  const [
    currentDailyActivitiesValue,
    setCurrentDailyActivitiesValue,
  ] = useState({
    awakenTimeWorkDays: "",
    awakenTimeNotWorkDays: "",
    goToBed: "",
    fallAsleepTime: "",
    do6am: "",
    do8am: "",
    do10am: "",
    do12pm: "",
    do2pm: "",
    do4pm: "",
    do6pm: "",
    do8pm: "",
    do10pm: "",
    do12p6am: "",
    leisureActivities: "",
    dailyLivingFollowing: [],
    difficultAmount: [],
    anyActivitiesListBefore: "",
    troubleFollowing: [],
  });
  const [errors, setErrors] = useState({});

  const dailyLivingThead = [
    "Function",
    "Able to Do Independently",
    "Need Help",
    "Can't Do",
    "Don’t Do",
    "N/A",
  ];

  const dailyLivingTbody = [
    "Bathing",
    "Dressing",
    "Grooming",
    "Oral Care",
    "Toileting",
    "Transferring",
    "Walking",
    "Climbing Stairs",
    "Cooking",
    "Doing Dishes",
    "Eating",
    "Shopping",
    "Managing Medications",
    "Using the Phone",
    "Housework",
    "Doing Laundry",
    "Driving",
    " Managing Finances",
    "Recreation",
  ];

  const troubleFollowingThead = ["Function", "Yes", "No"];

  const troubleFollowingTbody = [
    "Comprehending and following instructions",
    "Performing simple and repetitive tasks",
    "Maintaining a work pace appropriate to a given work load",
    "Performing complex or varied tasks",
    "Relating to other people beyond giving and receiving instructions",
    "Making generalizations, evaluations or decisions without immediate supervision",
    "Accepting and carrying out responsibility for direction, control, and planning",
  ];

  const difficultAmouhtThead = [
    "Task",
    "No Difficulty",
    "Some Difficulty",
    "Much Difficulty",
    "Unable to Do",
  ];

  const difficultAmouhtTbody = [
    "Concentrating",
    "Listening",
    "Reading",
    "Studying",
    "Writing",
  ];

  useEffect(() => {
    setCurrentDailyActivitiesValue(globalCurrentDailyActivities);
  }, [globalCurrentDailyActivities]);

  const handleDailyLivingChange = (event) => {
    const itemValue = event.target.value;

    let newItem = [...currentDailyActivitiesValue.dailyLivingFollowing];

    if (
      newItem.filter(
        (item) =>
          Object.keys(item).filter((p) => p === event.target.name).length !== 0
      ).length === 0
    ) {
      newItem.push({ [event.target.name]: itemValue });
    } else {
      newItem = newItem.map((item) =>
        Object.keys(item).filter((p) => p === event.target.name).length === 1
          ? { ...item, [event.target.name]: itemValue }
          : item
      );
    }

    setCurrentDailyActivitiesValue({
      ...currentDailyActivitiesValue,
      dailyLivingFollowing: newItem,
    });
  };

  const handleTroubleFollwingChange = (event) => {
    const itemValue = event.target.value;

    let newItem = [...currentDailyActivitiesValue.troubleFollowing];

    if (
      newItem.filter(
        (item) =>
          Object.keys(item).filter((p) => p === event.target.name).length !== 0
      ).length === 0
    ) {
      newItem.push({ [event.target.name]: itemValue });
    } else {
      newItem = newItem.map((item) =>
        Object.keys(item).filter((p) => p === event.target.name).length === 1
          ? { ...item, [event.target.name]: itemValue }
          : item
      );
    }

    setCurrentDailyActivitiesValue({
      ...currentDailyActivitiesValue,
      troubleFollowing: newItem,
    });
  };

  const handleDiffultAmountChange = (event) => {
    const itemValue = event.target.value;

    let newItem = [...currentDailyActivitiesValue.difficultAmount];

    if (
      newItem.filter(
        (item) =>
          Object.keys(item).filter((p) => p === event.target.name).length !== 0
      ).length === 0
    ) {
      newItem.push({ [event.target.name]: itemValue });
    } else {
      newItem = newItem.map((item) =>
        Object.keys(item).filter((p) => p === event.target.name).length === 1
          ? { ...item, [event.target.name]: itemValue }
          : item
      );
    }

    setCurrentDailyActivitiesValue({
      ...currentDailyActivitiesValue,
      difficultAmount: newItem,
    });
  };

  const handleChange = (event) => {
    setCurrentDailyActivitiesValue({
      ...currentDailyActivitiesValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalCurrentDailyActivities(currentDailyActivitiesValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateCurrentDailyActivites(
      currentDailyActivitiesValue
    );
    setErrors(errors);

    if (isValid) {
      setGlobalCurrentDailyActivities(currentDailyActivitiesValue);
      setCurrentSection(currentSection + 1);
    } else {
      toast.error("Please fill in all fields correctly!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="mt-4">
      <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
        CURRENT DAILY ACTIVITIES
      </p>

      <form>
        <TextField
          title="169. Time You Awaken- On Work Days:"
          type="text"
          name="awakenTimeWorkDays"
          value={currentDailyActivitiesValue?.awakenTimeWorkDays}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.awakenTimeWorkDays}
        />

        <TextField
          title="170. Time You Awaken- On Not Work Days:"
          type="text"
          name="awakenTimeNotWorkDays"
          value={currentDailyActivitiesValue?.awakenTimeNotWorkDays}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.awakenTimeNotWorkDays}
        />

        <TextField
          title="171. Time You Go To Bed:"
          type="text"
          name="goToBed"
          value={currentDailyActivitiesValue?.goToBed}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.goToBed}
        />

        <TextField
          title="172. Time Fall Asleep:"
          type="text"
          name="fallAsleepTime"
          value={currentDailyActivitiesValue?.fallAsleepTime}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.fallAsleepTime}
        />

        <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, textAlign: "left" }}>
              173. Describe All of the Activities You Do From the Time You Wake
              Up Until You Go To Bed at Night:
            </Typography>
            <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>

            <div>
              <TextFollowUp
                title="What You Do From 6 a.m. to 8 a.m.:"
                onChange={handleChange}
                name="do6am"
                value={currentDailyActivitiesValue.do6am}
                error={errors.do6am}
              />

              <TextFollowUp
                title="What You Do From 8 a.m. to 10 a.m.:"
                onChange={handleChange}
                name="do8am"
                value={currentDailyActivitiesValue.do8am}
                error={errors.do8am}
              />

              <TextFollowUp
                title="What You Do From 10 a.m. to 12 p.m.:"
                onChange={handleChange}
                name="do10am"
                value={currentDailyActivitiesValue.do10am}
                error={errors.do10am}
              />

              <TextFollowUp
                title="What You Do From 12 p.m. to 2 p.m.:"
                onChange={handleChange}
                name="do12pm"
                value={currentDailyActivitiesValue.do12pm}
                error={errors.do12pm}
              />

              <TextFollowUp
                title="What You Do From 2 p.m. to 4 p.m.:"
                onChange={handleChange}
                name="do2pm"
                value={currentDailyActivitiesValue.do2pm}
                error={errors.do2pm}
              />

              <TextFollowUp
                title="What You Do From 4 p.m. to 6 p.m.:"
                onChange={handleChange}
                name="do4pm"
                value={currentDailyActivitiesValue.do4pm}
                error={errors.do4pm}
              />

              <TextFollowUp
                title="What You Do From 6 p.m. to 8 p.m.:"
                onChange={handleChange}
                name="do6pm"
                value={currentDailyActivitiesValue.do6pm}
                error={errors.do6pm}
              />

              <TextFollowUp
                title="What You Do From 8 p.m. to 10 p.m.:"
                onChange={handleChange}
                name="do8pm"
                value={currentDailyActivitiesValue.do8pm}
                error={errors.do8pm}
              />

              <TextFollowUp
                title="What You Do From 10 p.m. to 12 p.m. (or time to bed):"
                onChange={handleChange}
                name="do10pm"
                value={currentDailyActivitiesValue.do10pm}
                error={errors.do10pm}
              />

              <TextFollowUp
                title="What You Do From 12 p.m. to 6 a.m.:"
                onChange={handleChange}
                name="do12p6am"
                value={currentDailyActivitiesValue.do12p6am}
                error={errors.do12p6am}
              />
            </div>
          </CardContent>
        </Card>

        <TextField
          title="174. What Are Your Leisure Activities or Hobbies?"
          type="text"
          name="leisureActivities"
          value={currentDailyActivitiesValue?.leisureActivities}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.leisureActivities}
        />

        <TableCheckBox
          title="175. Do You Have Any Trouble With the Following?"
          thead={troubleFollowingThead}
          tbody={troubleFollowingTbody}
          checked={currentDailyActivitiesValue?.troubleFollowing}
          onChange={handleTroubleFollwingChange}
        />

        <TableCheckBox
          title="176. Activities of Daily Living Worksheet. Please put a mark in the box that describes your ability to carry out the following:"
          thead={dailyLivingThead}
          tbody={dailyLivingTbody}
          checked={currentDailyActivitiesValue?.dailyLivingFollowing}
          onChange={handleDailyLivingChange}
        />

        <TableCheckBox
          title="177. Please rate the amount of difficulty you have with the following:"
          thead={difficultAmouhtThead}
          tbody={difficultAmouhtTbody}
          checked={currentDailyActivitiesValue?.difficultAmount}
          onChange={handleDiffultAmountChange}
        />

        <TextField
          title="178. Please List Any Activities Not Included Above That You Used To Do But Are Unable To Do Or Don't Do Because Of Your Condition And Explain Why"
          type="text"
          name="anyActivitiesListBefore"
          value={currentDailyActivitiesValue?.anyActivitiesListBefore}
          placeholder="Your answer..."
          onChange={handleChange}
          error={errors.anyActivitiesListBefore}
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

export default CurrentDailyActivities;
