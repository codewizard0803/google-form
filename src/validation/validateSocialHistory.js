/** @format */

const validateSocialHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.barriersReceivingHealthcare.trim()) {
    errors.barriersReceivingHealthcare = "See required fields above.";
    isValid = false;
  } else if (value.barriersReceivingHealthcare === "Yes") {
    if (value.selectbarriersHealthcare.length === 0) {
      errors.selectbarriersHealthcare = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.barriersReceivingHealthcare = "";
  }

  if (value.describeCurrentLivingSituation.length === 0) {
    errors.describeCurrentLivingSituation = "See required fields above.";
    isValid = false;
  } else if (
    value?.describeCurrentLivingSituation.filter(
      (item) => item !== "Homeless" && item !== "other"
    ).length > 0
  ) {
    if (value.livesYourHome.length === 0) {
      errors.livesYourHome = "See required fields above.";
      isValid = false;
    }

    if (!value.ownYourHome.trim()) {
      errors.ownYourHome = "See required fields above.";
      isValid = false;
    }

    if (!value.describeAdditionalStressors.trim()) {
      errors.describeAdditionalStressors = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.describeCurrentLivingSituation = "";
  }

  if (!value.presentTimeDanger.trim()) {
    errors.presentTimeDanger = "See required fields above.";
    isValid = false;
  } else if (value.presentTimeDanger === "Yes") {
    if (!value.describeFeelDanger.trim()) {
      errors.describeFeelDanger = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.presentTimeDanger = "";
  }

  if (!value.allStressorsPastYear.trim()) {
    errors.allStressorsPastYear = "See required fields above.";
    isValid = false;
  } else {
    errors.allStressorsPastYear = "";
    if (!value.stressorsAffect.trim()) {
      errors.stressorsAffect = "See required fields above.";
      isValid = false;
    }

    if (!value.eachStressorsAffect.trim()) {
      errors.eachStressorsAffect = "See required fields above.";
      isValid = false;
    }
  }

  if (!value.otherStressorsBesides.trim()) {
    errors.otherStressorsBesides = "See required fields above.";
    isValid = false;
  } else if (value.otherStressorsBesides === "Yes") {
    if (!value.explainAllStressors.trim()) {
      errors.explainAllStressors = "See required fields above.";
      isValid = false;
    }

    if (!value.affectEmotionalSymptoms.trim()) {
      errors.affectEmotionalSymptoms = "See required fields above.";
      isValid = false;
    }

    if (!value.eachAffectEmotionalSymptoms.trim()) {
      errors.eachAffectEmotionalSymptoms = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.otherStressorsBesides = "";
  }

  if (!value.otherStressorsExperience.trim()) {
    errors.otherStressorsExperience = "See required fields above.";
    isValid = false;
  } else if (value.otherStressorsExperience === "Yes") {
    if (!value.explainStressorsExperience.trim()) {
      errors.explainStressorsExperience = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.otherStressorsExperience = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validateSocialHistory;
