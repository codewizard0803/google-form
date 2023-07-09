/** @format */

import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";

import ValidateDemoGraphic from "../../validation/validateDemoGraphic";
import TextField from "../common/TextField";
import useGlobalContext from "../../hooks/useGlobalContext";
import CardField from "../common/CardField";
import RadioFollowUp from "../common/RadioFollowUp";
import { toast } from "react-toastify";

const DemographicInformation = ({ currentSection, setCurrentSection }) => {
  const { demographicInformation, setDemographicInformation } =
    useGlobalContext();

  const [errors, setErrors] = useState({});

  const [demographicInformationValue, setDemographicInformationValue] =
    useState({
      checkedEthnicityItems: [],
      radioSexItem: "",
      radioPreferPronounItem: "",
      maritalStatusItems: "",
      fullName: "",
      birth: "",
      email: "",
      phoneNumber: "",
      pregnant: null,
    });

  const checkedEthnicityOptions = [
    {
      label: "American Indian or Alaska Native",
      value: "American Indian or Alaska Native",
      name: "American Indian or Alaska Native",
    },
    {
      label: "Southeast Asian",
      value: "Southeast Asian",
      name: "Southeast Asian",
    },
    {
      label: "Black or African American",
      value: "Black or African American",
      name: "Black or African American",
    },
    {
      label: "Native Hawaiian or Other Pacific Islander",
      value: "Native Hawaiian or Other Pacific Islander",
      name: "Native Hawaiian or Other Pacific Islander",
    },
    {
      label: "Caucasian",
      value: "Caucasian",
      name: "Caucasian",
    },
    {
      label: "Hispanic or Latino or Spanish Origin",
      value: "Hispanic or Latino or Spanish Origin",
      name: "Hispanic or Latino or Spanish Origin",
    },
    { label: "East Indian", value: "East Indian", name: "East Indian" },
    {
      label: "Prefer not to answer",
      value: "Prefer not to answer",
      name: "Prefer not to answer",
    },
    { label: "Other", value: "other", name: "Other" },
  ];

  const radioFemalePregnantOptions = [
    { label: "Yes", value: "Yes", name: "radioFemalePregnantOptionsYes" },
    { label: "No", value: "No", name: "radioFemalePregnantOptionsNo" },
    {
      label: "I don't know/I'm not sure",
      value: "I don't know/I'm not sure",
      name: "I don't know/I'm not sure",
    },
  ];

  const radioPreferPronounOptions = [
    { label: "He/him/his", value: "he/him/his", name: "PreferPronounHim" },
    { label: "She/her/hers", value: "she/her/hers", name: "PreferPronounHer" },
    {
      label: "They/them/theirs",
      value: "they/them/theirs",
      name: "PreferPronounThem",
    },
    { label: "Hir", value: "hir", name: "PreferPronounHir" },
    {
      label: "Other non-binary",
      value: "other non-binary",
      name: "PreferPronounOther",
    },
    {
      label: "Prefer not to say",
      value: "prefer not to say",
      name: "PreferPronounNotSay",
    },
  ];

  const maritalStatusOptions = [
    { label: "Single", value: "Single", name: "maritalStatusSingle" },
    { label: "Married", value: "Married", name: "maritalStatusMarried" },
    { label: "Divorced", value: "Divorced", name: "maritalStatusDivorced" },
    { label: "Separated", value: "Separated", name: "maritalStatusSeparated" },
    { label: "Widowed", value: "Widowed", name: "maritalStatusWidowed" },
    {
      label: "Living together",
      value: "Living together",
      name: "maritalStatusLivingTogether",
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setDemographicInformationValue(demographicInformation);
  }, [demographicInformation]);

  const handleCheckboxEthnicityChange = (event) => {
    const itemName = event.target.name;
    const isChecked = event.target.checked;

    let newCheckedItems = [
      ...demographicInformationValue?.checkedEthnicityItems,
    ];

    if (isChecked) {
      newCheckedItems.push(itemName);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemName);
    }

    setDemographicInformationValue({
      ...demographicInformationValue,
      checkedEthnicityItems: newCheckedItems,
    });
  };

  const handleRadioSexChange = (event) => {
    setDemographicInformationValue({
      ...demographicInformationValue,
      radioSexItem: event.target.value,
      pregnant: null,
    });
  };

  const handleRadioPreferPronounChange = (event) => {
    setDemographicInformationValue({
      ...demographicInformationValue,
      radioPreferPronounItem: event.target.value,
    });
  };

  const handleRadioMaritalStatusChange = (event) => {
    setDemographicInformationValue({
      ...demographicInformationValue,
      maritalStatusItems: event.target.value,
    });
  };

  const handleChange = (event) => {
    setDemographicInformationValue({
      ...demographicInformationValue,
      [event.target.name]: event.target.value,
    });
  };

  const handlePregnantChange = (event) => {
    setDemographicInformationValue({
      ...demographicInformationValue,
      pregnant: event.target.value,
    });
  };

  const handleNextClick = () => {
    const { isValid, errors } = ValidateDemoGraphic(
      demographicInformationValue
    );
    setErrors(errors);

    setDemographicInformation(demographicInformationValue);
    setCurrentSection(currentSection + 1);

    // if (isValid) {
    //   setDemographicInformation(demographicInformationValue);
    //   setCurrentSection(currentSection + 1);
    // } else {
    //   toast.error("Please fill in all fields correctly!", {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // }
  };

  return (
    <div className="mt-4">
      <div>
        <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
          Demographic Information, Part I
        </p>

        <form>
          <TextField
            title="1. What is your full name?"
            type="text"
            name="fullName"
            value={demographicInformationValue?.fullName}
            placeholder="Your answer..."
            onChange={handleChange}
            error={errors.name}
          />

          <TextField
            title="2. What is your date of birth?"
            type="text"
            name="birth"
            value={demographicInformationValue?.birth}
            placeholder="Your answer..."
            onChange={handleChange}
            error={errors.birth}
          />

          <CardField
            title="3. Please select any of the following that represent your race or ethnicity. You may select more than one."
            type="checkbox"
            options={checkedEthnicityOptions}
            onChange={handleCheckboxEthnicityChange}
            checked={demographicInformationValue.checkedEthnicityItems}
            errors={errors.checkedEthnicityItems}
          />

          <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
            <CardContent>
              <Typography sx={{ fontSize: 20, textAlign: "left" }}>
                4. What sex was assigned to you at birth?
              </Typography>
              <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
              <div className="mt-5">
                <div
                  className={classnames("mt-5 p-2", {
                    "border-red-500 border": errors.radioSexItem,
                  })}
                >
                  <div className="text-left">
                    <label>
                      <input
                        type="radio"
                        value="Male"
                        className="mr-2"
                        checked={
                          demographicInformationValue?.radioSexItem === "Male"
                        }
                        onChange={handleRadioSexChange}
                      />
                      Male
                    </label>
                  </div>
                  <div className="text-left">
                    <label>
                      <input
                        type="radio"
                        value="Female"
                        className="mr-2"
                        checked={
                          demographicInformationValue?.radioSexItem === "Female"
                        }
                        onChange={handleRadioSexChange}
                      />
                      Female
                    </label>
                    {demographicInformationValue?.radioSexItem === "Female" ? (
                      <RadioFollowUp
                        title="Are you pregnant, planning on getting pregnant, or
                          breastfeeding?"
                        options={radioFemalePregnantOptions}
                        onChange={handlePregnantChange}
                        error={errors.pregnant}
                        checked={demographicInformationValue?.pregnant}
                      />
                    ) : null}
                  </div>

                  <div className="text-left">
                    <label>
                      <input
                        type="radio"
                        value="Prefer not to say"
                        className="mr-2"
                        checked={
                          demographicInformationValue?.radioSexItem ===
                          "Prefer not to say"
                        }
                        onChange={handleRadioSexChange}
                      />
                      Prefer not to say
                    </label>
                  </div>
                </div>
                {errors.radioSexItem && (
                  <div className="text-red-500 text-left text-[12px] mt-2">
                    {errors.radioSexItem}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <CardField
            title="5. What pronoun do you currently prefer?"
            type="radio"
            options={radioPreferPronounOptions}
            onChange={handleRadioPreferPronounChange}
            checked={demographicInformationValue?.radioPreferPronounItem}
            errors={errors.radioPreferPronounItem}
          />

          <CardField
            title="6. What is your marital status?"
            type="radio"
            options={maritalStatusOptions}
            onChange={handleRadioMaritalStatusChange}
            checked={demographicInformationValue?.maritalStatusItems}
            errors={errors.maritalStatusItems}
          />

          <TextField
            type="text"
            title="7. What is your email?"
            name="email"
            value={demographicInformationValue?.email}
            placeholder="Your answer..."
            onChange={handleChange}
            error={errors.email}
          />

          <TextField
            title="8. What is your phone number?"
            type="text"
            name="phoneNumber"
            value={demographicInformationValue?.phoneNumber}
            placeholder="Your answer..."
            onChange={handleChange}
            error={errors.phoneNumber}
          />

          <div className="mx-auto w-[65%] flex justify-between mt-3">
            <Button variant="contained" type="button" onClick={handleNextClick}>
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemographicInformation;
