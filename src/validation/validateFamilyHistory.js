const validateFamilyHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.familyPsychiatricConditions.trim()) {
    errors.familyPsychiatricConditions = "See required fields above.";
    isValid = false;
  } else if (value.familyPsychiatricConditions === "Other") {
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
