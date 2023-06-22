const validateEducationHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.highestLevelEducation.trim()) {
    errors.highestLevelEducation = "See required fields above.";
    isValid = false;
  } else if (value.highestLevelEducation === "Currently a student") {
    if (!value.currentlyEnrolledEducation.trim()) {
      errors.currentlyEnrolledEducation = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.highestLevelEducation = "";
  }

  if (value.mostlyReceiveGrade.length === 0) {
    errors.mostlyReceiveGrade = "See required fields above.";
    isValid = false;
  } else {
    errors.mostlyReceiveGrade = "";
  }

  if (!value.learningDisability.trim()) {
    errors.learningDisability = "See required fields above.";
    isValid = false;
  } else if (value.learningDisability === "Yes") {
    if (!value.describeLearningDifficulties.trim()) {
      errors.describeLearningDifficulties = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.learningDisability = "";
  }

  if (!value.graduateHighSchool.trim()) {
    errors.graduateHighSchool = "See required fields above.";
    isValid = false;
  } else if (value.graduateHighSchool === "Yes") {
    if (!value.graduateOnTime.trim()) {
      errors.graduateOnTime = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.graduateHighSchool = "";
  }

  if (!value.goToCollege.trim()) {
    errors.goToCollege = "See required fields above.";
    isValid = false;
  } else if (value.goToCollege === "Yes") {
    if (!value.completeYourDegree.trim()) {
      errors.completeYourDegree = "See required fields above.";
      isValid = false;
    }

    if (!value.collegeName.trim()) {
      errors.collegeName = "See required fields above.";
      isValid = false;
    }

    if (!value.collegeMajor.trim()) {
      errors.collegeMajor = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.goToCollege = "";
  }

  return {
    isValid,
    errors,
  };
};
export default validateEducationHistory;
