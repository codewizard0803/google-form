import React, { useState } from "react";
import DemographicInformation from "./sections/DemographicInformation";
import EmploymentInjuryPhysical from "./sections/EmploymentInjuryPhysical";
import CurrentEmployer from "./sections/CurrentEmployer";
import PhysicalInjury from "./sections/physicalInjury";
import ChiefComplaint from "./sections/ChiefComplaint";

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
    <PhysicalInjury
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <ChiefComplaint
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
  ];

  return <div className="mt-4">{sections[currentSection]}</div>;
};

export default SectionCard;
