import React, { useState } from "react";
import DemographicInformation from "./sections/DemographicInformation";
import EmploymentInjuryPhysical from "./sections/EmploymentInjuryPhysical";
import CurrentEmployer from "./sections/CurrentEmployer";
import PhysicalInjury from "./sections/physicalInjury";
import ChiefComplaint from "./sections/ChiefComplaint";
import LongitudinalHistory from "./sections/LongitudinalHistory";
import PHQ from "./sections/CurrentSymptoms/PHQ-9";
import GAD from "./sections/CurrentSymptoms/GAD-7";
import PCL from "./sections/CurrentSymptoms/PCL-5";
import CurrentTreatment from "./sections/CurrentTreatment";
import PastHistroy from "./sections/PastHistory";
import SubstanceUse from "./sections/SubstanceUse";
import MedicalHistory from "./sections/MedicalHistory";
import FamilyHistory from "./sections/FamilyHistory";
import RelationshipHistory from "./sections/RelationshipHistory";
import EmploymentHistory from "./sections/EmploymentHistory";
import EducationHistory from "./sections/EducationHistory";
import SocialHistory from "./sections/SocialHistory";
import CriminalHistory from "./sections/CriminalHistory";
import ViolenceHistory from "./sections/ViolenceHistory";
import MilitaryHistory from "./sections/MilitaryHistory";
import CurrentDailyActivities from "./sections/CurrentDailyActivities";
import DevelopmentalHistory from "./sections/DevelopmentalHistory";
import AdditinalInformation from "./sections/AdditionalInformation";

const SectionCard = (props) => {
  const [currentSection, setCurrentSection] = useState(0);
  // const totalSection = 2;

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
    <LongitudinalHistory
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <PHQ
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <GAD
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <PCL
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <CurrentTreatment
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <PastHistroy
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <SubstanceUse
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <MedicalHistory
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <FamilyHistory
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <RelationshipHistory
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <EmploymentHistory
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <EducationHistory
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <SocialHistory
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <CriminalHistory
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <ViolenceHistory
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <MilitaryHistory
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <CurrentDailyActivities
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <DevelopmentalHistory
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
    <AdditinalInformation
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />,
  ];

  return <div className="mt-4">{sections[currentSection]}</div>;
};

export default SectionCard;
