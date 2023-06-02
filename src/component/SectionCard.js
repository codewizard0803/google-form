import React, { useState } from "react";
import { Button } from "@mui/material";
import DemographicInformation from "./sections/DemographicInformation";

const SectionCard = (props) => {
  const [currentSection, setCurrentSection] = useState(0);
  const allSection = 2;

  const sections = [
    <DemographicInformation
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
  ];

  const handleNextClick = (event) => {
    // event.preventDefault();
    // console.log("validate", validate);
    // if (currentSection < validate.length && validate[currentSection]) {
    //   setCurrentSection(currentSection + 1);
    // }
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    setCurrentSection(currentSection - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("onSubmitted");
  };

  return (
    <div className="mt-4">
      {sections[currentSection]}
      <div className="mx-auto w-[65%] flex justify-between mt-3">
        {currentSection > 0 && (
          <Button variant="contained" onClick={handleBackClick}>
            Back
          </Button>
        )}
        {currentSection === allSection - 1 ? (
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default SectionCard;
