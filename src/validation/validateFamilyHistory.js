const validateFamilyHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.familyPsychiatricConditions.trim()) {
    errors.familyPsychiatricConditions = "Your Field is required.";
    isValid = false;
  } else if (value.familyPsychiatricConditions === "Other") {
    if (!value.psychiatricConditionsList.trim()) {
      errors.psychiatricConditionsList = "Your Field is required.";
      isValid = false;
    }

    if (value.psychiatricConditionsTreatment.length === 0) {
      errors.psychiatricConditionsTreatment = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.familyPsychiatricConditions = "";
  }

  if (!value.familyAttemptedSuicide.trim()) {
    errors.familyAttemptedSuicide = "Your Field is required.";
    isValid = false;
  } else {
    errors.familyAttemptedSuicide = "";
  }

  return {
    isValid,
    errors,
  };
};
export default validateFamilyHistory;
