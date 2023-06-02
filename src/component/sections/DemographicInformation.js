import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Button } from "@mui/material";
import classnames from "classnames";

import ValidateDemoGraphic from "../../validation/validateDemoGraphic";
import TextField from "../common/TextField";
import useGlobalContext from "../../hooks/useGlobalContext";

const DemographicInformation = ({ currentSection, setCurrentSection }) => {
  const {
    demographicInformation,
    setDemographicInformation,
  } = useGlobalContext();

  const [checkedEthnicityItems, setCheckedEthnicityItems] = useState([]);
  const [errors, setErrors] = useState({});

  const [
    demographicInformationValue,
    setDemographicInformationValue,
  ] = useState({
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
    },
    { label: "Southeast Asian", value: "Southeast Asian" },
    { label: "Black or African American", value: "Black or African American" },
    {
      label: "Native Hawaiian or Other Pacific Islander",
      value: "Native Hawaiian or Other Pacific Islander",
    },
    { label: "White or Caucasian", value: "White or Caucasian" },
    {
      label: "Hispanic or Latino or Spanish Origin",
      value: "Hispanic or Latino or Spanish Origin",
    },
    { label: "East Indian", value: "East Indian" },
    { label: "Prefer not to answer", value: "Prefer not to answer" },
    { label: "Other", value: "Other" },
  ];

  const radioFemalePregnantOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
    { label: "I don't know/I'm not sure", value: "I don't know/I'm not sure" },
  ];

  const radioPreferPronounOptions = [
    { label: "He/him/his", value: "He/him/his" },
    { label: "She/her/hers", value: "She/her/hers" },
    { label: "They/them/theirs", value: "They/them/theirs" },
    { label: "Ze", value: "Ze" },
    { label: "Hir", value: "Hir" },
    { label: "Other non-binary", value: "Other non-binary" },
    { label: "Prefer not to say", value: "Prefer not to say" },
  ];

  const maritalStatusOptions = [
    { label: "Single", value: "Single" },
    { label: "Married", value: "Married" },
    { label: "Divorced", value: "Divorced" },
    { label: "Separated", value: "Separated" },
    { label: "Widowed", value: "Widowed" },
    { label: "Living together", value: "Living together" },
  ];

  useEffect(() => {
    setDemographicInformationValue(demographicInformation);
  }, []);

  const handleCheckboxEthnicityChange = (event) => {
    const itemName = event.target.name;
    const isChecked = event.target.checked;

    let newCheckedItems = [...checkedEthnicityItems];

    if (isChecked) {
      newCheckedItems.push(itemName);
    } else {
      newCheckedItems = newCheckedItems.filter((item) => item !== itemName);
    }
    setCheckedEthnicityItems(newCheckedItems);
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

  const handleNameChange = (event) => {
    setDemographicInformationValue({
      ...demographicInformationValue,
      fullName: event.target.value,
    });
  };

  const handleBirthChange = (event) => {
    setDemographicInformationValue({
      ...demographicInformationValue,
      birth: event.target.value,
    });
  };

  const handleEmailChange = (event) => {
    setDemographicInformationValue({
      ...demographicInformationValue,
      email: event.target.value,
    });
  };

  const handlePhoneNumberChange = (event) => {
    setDemographicInformationValue({
      ...demographicInformationValue,
      phoneNumber: event.target.value,
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

    console.log("isValid", isValid);
    if (isValid) {
      setDemographicInformation(demographicInformationValue);
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="mt-4">
      <div>
        <p className="bg-green-400 w-[65%] mx-auto p-3 text-xl text-white rounded-lg mt-5 shadow-lg">
          Demographic Information, Part I
        </p>

        <form>
          <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
            <CardContent>
              <Typography sx={{ fontSize: 20, textAlign: "left" }}>
                What is your full name?
              </Typography>
              <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
              <TextField
                type="text"
                name="name"
                value={demographicInformationValue?.fullName}
                placeholder="Your Full Name"
                onChange={handleNameChange}
                error={errors.name}
              />
            </CardContent>
          </Card>

          <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
            <CardContent>
              <Typography sx={{ fontSize: 20, textAlign: "left" }}>
                What is your date of birth?
              </Typography>
              <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
              <TextField
                type="text"
                name="birth"
                value={demographicInformationValue?.birth}
                placeholder="Your Date of Birth"
                onChange={handleBirthChange}
                error={errors.birth}
              />
            </CardContent>
          </Card>

          <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
            <CardContent>
              <Typography sx={{ fontSize: 20, textAlign: "left" }}>
                Please select any of the following that represent your race or
                ethnicity. You may select more than one.
              </Typography>
              <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
              <div
                className={classnames("mt-5 p-2", {
                  "border-red-500 border": errors.checkedEthnicityItems,
                })}
              >
                {checkedEthnicityOptions.map((item, index) => (
                  <div className="text-left" key={index}>
                    <label key={item.value}>
                      <input
                        type="checkbox"
                        name={item.label}
                        className="mr-2"
                        checked={demographicInformationValue.checkedEthnicityItems.includes(
                          item.label
                        )}
                        onChange={handleCheckboxEthnicityChange}
                      />
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
              {errors.checkedEthnicityItems && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.checkedEthnicityItems}
                </div>
              )}
            </CardContent>
          </Card>

          <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
            <CardContent>
              <Typography sx={{ fontSize: 25, textAlign: "left" }}>
                What sex was assigned to you at birth?
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
                      <div className="w-[95%] mx-auto p-2 shadow-lg">
                        <p className="text-left text-[23px]">
                          Are you pregnant, planning on getting pregnant, or
                          breastfeeding?
                        </p>
                        <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
                        <div
                          className={classnames("mt-5 p-2", {
                            "border-red-500 border": errors.pregnant,
                          })}
                        >
                          {radioFemalePregnantOptions.map((item, index) => (
                            <div className="text-left mt-1" key={index}>
                              <label key={item.value}>
                                <input
                                  type="radio"
                                  value={item.value}
                                  className="mr-2"
                                  checked={
                                    demographicInformationValue?.pregnant ===
                                    item.value
                                  }
                                  onChange={handlePregnantChange}
                                />
                                {item.label}
                              </label>
                            </div>
                          ))}
                        </div>

                        {errors.pregnant && (
                          <div className="text-red-500 text-left text-[12px] mt-2">
                            {errors.pregnant}
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>
                  <div className="text-left">
                    <label>
                      <input
                        type="radio"
                        value="Other"
                        className="mr-2"
                        checked={
                          demographicInformationValue?.radioSexItem === "Other"
                        }
                        onChange={handleRadioSexChange}
                      />
                      Other
                    </label>
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

          <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
            <CardContent>
              <Typography sx={{ fontSize: 25, textAlign: "left" }}>
                What pronoun do you currently prefer?
              </Typography>
              <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
              <div
                className={classnames("mt-5 p-2", {
                  "border-red-500 border": errors.radioSexItem,
                })}
              >
                {radioPreferPronounOptions.map((item, index) => (
                  <div className="text-left" key={index}>
                    <label key={item.value}>
                      <input
                        type="radio"
                        value={item.value}
                        className="mr-2"
                        checked={
                          demographicInformationValue?.radioPreferPronounItem ===
                          item.value
                        }
                        onChange={handleRadioPreferPronounChange}
                      />
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
              {errors.radioPreferPronounItem && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.radioPreferPronounItem}
                </div>
              )}
            </CardContent>
          </Card>

          <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
            <CardContent>
              <Typography sx={{ fontSize: 25, textAlign: "left" }}>
                What is your marital status?
              </Typography>
              <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
              <div
                className={classnames("mt-5 p-2", {
                  "border-red-500 border": errors.radioSexItem,
                })}
              >
                {maritalStatusOptions.map((item, index) => (
                  <div className="text-left" key={index}>
                    <label key={item.value}>
                      <input
                        type="radio"
                        value={item.value}
                        className="mr-2"
                        checked={
                          demographicInformationValue?.maritalStatusItems ===
                          item.value
                        }
                        onChange={handleRadioMaritalStatusChange}
                      />
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
              {errors.maritalStatusItems && (
                <div className="text-red-500 text-left text-[12px] mt-2">
                  {errors.maritalStatusItems}
                </div>
              )}
            </CardContent>
          </Card>

          <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
            <CardContent>
              <Typography sx={{ fontSize: 20, textAlign: "left" }}>
                What is your email?
              </Typography>
              <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
              <TextField
                type="text"
                name="email"
                value={demographicInformationValue?.email}
                placeholder="Your Email"
                onChange={handleEmailChange}
                error={errors.email}
              />
            </CardContent>
          </Card>

          <Card sx={{ width: "65%", margin: "auto", marginTop: 3 }}>
            <CardContent>
              <Typography sx={{ fontSize: 20, textAlign: "left" }}>
                What is your phone number?
              </Typography>
              <p className="h-0.5 bg-gray-400 w-100 mt-2"></p>
              <TextField
                type="text"
                name="phoneNumber"
                value={demographicInformationValue?.phoneNumber}
                placeholder="Your Phone Number"
                onChange={handlePhoneNumberChange}
                error={errors.phoneNumber}
              />
            </CardContent>
          </Card>

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
