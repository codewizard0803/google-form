const validateFamilyHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (value.familyPsychiatricConditions.length === 0) {
    errors.familyPsychiatricConditions = "See required fields above.";
    isValid = false;
  } else if (
    value.familyPsychiatricConditions.filter((item) => item === "Other")
      .length > 0
  ) {
    if (!value.psychiatricConditionsList.trim()) {
      errors.psychiatricConditionsList = "See required fields above.";
      isValid = false;
    }

    if (value.psychiatricConditionsTreatment.length === 0) {
      errors.psychiatricConditionsTreatment = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.familyPsychiatricConditions = "";
  }

  if (!value.familyAttemptedSuicide.trim()) {
    errors.familyAttemptedSuicide = "See required fields above.";
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
