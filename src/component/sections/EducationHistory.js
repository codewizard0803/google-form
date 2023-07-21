/** @format */

import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

import CardField from "../common/CardField";
import useGlobalContext from "../../hooks/useGlobalContext";
import TextField from "../common/TextField";
import validateEducationHistory from "../../validation/validateEducationHistory";

const EducationHistory = ({ currentSection, setCurrentSection }) => {
  const { globalEducationHistory, setGlobalEducationHistory } =
    useGlobalContext();

  const [educationHistoryValue, setEducationHistoryValue] = useState({
    highestLevelEducation: "",
    currentlyEnrolledEducation: "",
    mostlyReceiveGrade: [],
    learningDisability: "",
    describeLearningDifficulties: "",
    graduateHighSchool: "",
    graduateOnTime: "",
    goToCollege: "",
    completeYourDegree: "",
    collegeName: "",
    collegeMajor: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setEducationHistoryValue(globalEducationHistory);
  }, [globalEducationHistory]);

  const HighestLevelEducationOptions = [
    {
      label: "Less than 8th grade",
      value: "less than 8th grade",
      name: "HighestLevelEducationOptionsLess than 8th grade",
    },
    {
      label: "8th grade",
      value: "8th grade",
      name: "HighestLevelEducationOptions8th grade",
    },
    {
      label: "9th grade",
      value: "9th grade",
      name: "HighestLevelEducationOptions9th grade",
    },
    {
      label: "10th grade",
      value: "10th grade",
      name: "HighestLevelEducationOptions10th grade",
    },
    {
      label: "11th grade",
      value: "11th grade",
      name: "HighestLevelEducationOptions11th grade",
    },
    {
      label: "High school graduate",
      value: "high school graduate",
      name: "HighestLevelEducationOptionsHigh school graduate",
    },
    { label: "GED", value: "GED", name: "HighestLevelEducationOptionsGED" },
    {
      label: "Some college courses",
      value: "some college courses",
      name: "HighestLevelEducationOptionsSome college courses",
    },
    {
      label: "Associates degree or professional certification",
      value: "associates degree or professional certification",
      name: "HighestLevelEducationOptionsAssociates degree or professional certification",
    },
    {
      label: "Bachelors degree",
      value: "bachelors degree",
      name: "HighestLevelEducationOptionsBachelors degree",
    },
    {
      label: "Masters degree",
      value: "masters degree",
      name: "HighestLevelEducationOptionsMasters degree",
    },
    {
      label: "Doctoral degree or beyond",
      value: "doctoral degree or beyond",
      name: "HighestLevelEducationOptionsDoctoral degree or beyond",
    },
    {
      label: "Currently a student",
      value: "currently a student",
      name: "HighestLevelEducationOptionsCurrently a student",
    },
  ];

  const MostlyReceiveGradeOptions = [
    { label: "As", value: "As", name: "MostlyReceiveGradeOptionsAs" },
    { label: "Bs", value: "Bs", name: "MostlyReceiveGradeOptionsBs" },
    { label: "Cs", value: "Cs", name: "MostlyReceiveGradeOptionsCs" },
    { label: "Ds", value: "Ds", name: "MostlyReceiveGradeOptionsDs" },
    { label: "Fs", value: "Fs", name: "MostlyReceiveGradeOptionsFs" },
  ];

  const LearningDisabilityOptions = [
    { label: "Yes", value: "Yes", name: "LearningDisabilityOptionsYes" },
    { label: "No", value: "No", name: "LearningDisabilityOptionsNo" },
  ];

  const GraduateHighSchoolOptions = [
    { label: "Yes", value: "Yes", name: "GraduateHighSchoolOptionsYes" },
    { label: "No", value: "No", name: "GraduateHighSchoolOptionsNo" },
  ];

  const GraduateOnTimeOptions = [
    { label: "Yes", value: "Yes", name: "GraduateOnTimeOptionsYes" },
    { label: "No", value: "No", name: "GraduateOnTimeOptionsNo" },
  ];

  const GoToCollegeOptions = [
    { label: "Yes", value: "Yes", name: "GoToCollegeOptionsYes" },
    { label: "No", value: "No", name: "GoToCollegeOptionsNo" },
  ];

  const CompleteYourDegreeOptions = [
    { label: "Yes", value: "Yes", name: "CompleteYourDegreeOptionsYes" },
    { label: "No", value: "No", name: "CompleteYourDegreeOptionsNo" },
  ];

  const handleHighestLevelEducationchange = (event) => {
    setEducationHistoryValue({
      ...educationHistoryValue,
      highestLevelEducation: event.target.value,
      currentlyEnrolledEducation: "",
    });
  };

  const handleMostlyReceiveGradechange = (event) => {
    const itemValue = event.target.value;
    const isChecked = event.target.checked;

    let newCheckedItems = [...educationHistoryValue.mostlyReceiveGrade];

    if (isChecked) {
      newCheckedItems.push(itemValue);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemValue);
    }

    setEducationHistoryValue({
      ...educationHistoryValue,
      mostlyReceiveGrade: newCheckedItems,
    });
  };

  const handleLearningDisabilitychange = (event) => {
    setEducationHistoryValue({
      ...educationHistoryValue,
      learningDisability: event.target.value,
      describeLearningDifficulties: "",
    });
  };

  const handleGraduateHighSchoolchange = (event) => {
    setEducationHistoryValue({
      ...educationHistoryValue,
      graduateHighSchool: event.target.value,
      graduateOnTime: "",
    });
  };

  const handleGraduateOnTimechange = (event) => {
    setEducationHistoryValue({
      ...educationHistoryValue,
      graduateOnTime: event.target.value,
    });
  };

  const handleGoToCollegechange = (event) => {
    setEducationHistoryValue({
      ...educationHistoryValue,
      goToCollege: event.target.value,
      completeYourDegree: "",
      collegeName: "",
      collegeMajor: "",
    });
  };

  const handleCompleteYourDegreechange = (event) => {
    setEducationHistoryValue({
      ...educationHistoryValue,
      completeYourDegree: event.target.value,
    });
  };

  const handleChange = (event) => {
    setEducationHistoryValue({
      ...educationHistoryValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setGlobalEducationHistory(educationHistoryValue);
    setCurrentSection(currentSection - 1);
  };

  const handleNextClick = (event) => {
    event.preventDefault();

    const { isValid, errors } = validateEducationHistory(educationHistoryValue);
    setErrors(errors);

    setGlobalEducationHistory(educationHistoryValue);
    setCurrentSection(currentSection + 1);

    // if (isValid) {
    //   setGlobalEducationHistory(educationHistoryValue);
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
        Education History
      </p>

      <form>
        <CardField
          title="151. What is your highest level of education?"
          type="radio"
          options={HighestLevelEducationOptions}
          onChange={handleHighestLevelEducationchange}
          checked={educationHistoryValue?.highestLevelEducation}
          errors={errors.highestLevelEducation}
        />

        {educationHistoryValue?.highestLevelEducation ===
        "Currently a student" ? (
          <div>
            <TextField
              title="If you are currently enrolled in an education program, please describe:"
              type="text"
              name="currentlyEnrolledEducation"
              value={educationHistoryValue?.currentlyEnrolledEducation}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.currentlyEnrolledEducation}
            />
          </div>
        ) : null}

        <CardField
          title="152. What grades did you mostly receive during your education (choose all that apply)?"
          type="checkbox"
          options={MostlyReceiveGradeOptions}
          onChange={handleMostlyReceiveGradechange}
          checked={educationHistoryValue?.mostlyReceiveGrade}
          errors={errors.mostlyReceiveGrade}
        />

        <CardField
          title="153. Were you ever identified as having a learning disability, or placed in any special education classes?"
          type="radio"
          options={LearningDisabilityOptions}
          onChange={handleLearningDisabilitychange}
          checked={educationHistoryValue?.learningDisability}
          errors={errors.learningDisability}
        />

        {educationHistoryValue?.learningDisability === "Yes" ? (
          <div>
            <TextField
              title="Please describe your learning difficulties?"
              type="text"
              name="describeLearningDifficulties"
              value={educationHistoryValue?.describeLearningDifficulties}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.describeLearningDifficulties}
            />
          </div>
        ) : null}

        <CardField
          title="154. Did you graduate high school?"
          type="radio"
          options={GraduateHighSchoolOptions}
          onChange={handleGraduateHighSchoolchange}
          checked={educationHistoryValue?.graduateHighSchool}
          errors={errors.graduateHighSchool}
        />

        {educationHistoryValue?.graduateHighSchool === "Yes" ? (
          <div>
            <CardField
              title="Did You Graduate On Time?"
              type="radio"
              options={GraduateOnTimeOptions}
              onChange={handleGraduateOnTimechange}
              checked={educationHistoryValue?.graduateOnTime}
              errors={errors.graduateOnTime}
            />
          </div>
        ) : null}

        <CardField
          title="155. Did you go to college"
          type="radio"
          options={GoToCollegeOptions}
          onChange={handleGoToCollegechange}
          checked={educationHistoryValue?.goToCollege}
          errors={errors.goToCollege}
        />

        {educationHistoryValue?.goToCollege === "Yes" ? (
          <div>
            <CardField
              title="If so, did you complete your degree?"
              type="radio"
              options={CompleteYourDegreeOptions}
              onChange={handleCompleteYourDegreechange}
              checked={educationHistoryValue?.completeYourDegree}
              errors={errors.completeYourDegree}
            />

            <TextField
              title="Name of college:"
              type="text"
              name="collegeName"
              value={educationHistoryValue?.collegeName}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.collegeName}
            />

            <TextField
              title="College major or primary topic of study:"
              type="text"
              name="collegeMajor"
              value={educationHistoryValue?.collegeMajor}
              placeholder="Your answer..."
              onChange={handleChange}
              error={errors.collegeMajor}
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

export default EducationHistory;
