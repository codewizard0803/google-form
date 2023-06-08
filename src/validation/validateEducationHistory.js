const validateEducationHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.highestLevelEducation.trim()) {
    errors.highestLevelEducation = "Your Field is required.";
    isValid = false;
  } else if (value.highestLevelEducation === "Currently a student") {
    if (!value.currentlyEnrolledEducation.trim()) {
      errors.currentlyEnrolledEducation = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.highestLevelEducation = "";
  }

  if (value.mostlyReceiveGrade.length === 0) {
    errors.mostlyReceiveGrade = "Your Field is required.";
    isValid = false;
  } else {
    errors.mostlyReceiveGrade = "";
  }

  if (!value.learningDisability.trim()) {
    errors.learningDisability = "Your Field is required.";
    isValid = false;
  } else if (value.learningDisability === "Yes") {
    if (!value.describeLearningDifficulties.trim()) {
      errors.describeLearningDifficulties = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.learningDisability = "";
  }

  if (!value.graduateHighSchool.trim()) {
    errors.graduateHighSchool = "Your Field is required.";
    isValid = false;
  } else if (value.graduateHighSchool === "Yes") {
    if (!value.graduateOnTime.trim()) {
      errors.graduateOnTime = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.graduateHighSchool = "";
  }

  if (!value.goToCollege.trim()) {
    errors.goToCollege = "Your Field is required.";
    isValid = false;
  } else if (value.goToCollege === "Yes") {
    if (!value.completeYourDegree.trim()) {
      errors.completeYourDegree = "Your Field is required.";
      isValid = false;
    }

    if (!value.collegeName.trim()) {
      errors.collegeName = "Your Field is required.";
      isValid = false;
    }

    if (!value.collegeMajor.trim()) {
      errors.collegeMajor = "Your Field is required.";
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
