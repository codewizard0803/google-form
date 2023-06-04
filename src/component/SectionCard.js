import React, { useState } from "react";
import { Button } from "@mui/material";
import DemographicInformation from "./sections/DemographicInformation";
import EmploymentInjuryPhysical from "./sections/EmploymentInjuryPhysical";
import CurrentEmployer from "./sections/CurrentEmployer";

const SectionCard = (props) => {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSection = 2;

  const sections = [
    <DemographicInformation
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <EmploymentInjuryPhysical
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <CurrentEmployer
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
  ];

  return (
    <div className="mt-4">
      {sections[currentSection]}
    </div>
  );
};

export default SectionCard;
