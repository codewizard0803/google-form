const validateSocialHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.barriersReceivingHealthcare.trim()) {
    errors.barriersReceivingHealthcare = "Your Field is required.";
    isValid = false;
  } else if (value.barriersReceivingHealthcare === "Yes") {
    if (value.selectbarriersHealthcare.length === 0) {
      errors.selectbarriersHealthcare = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.barriersReceivingHealthcare = "";
  }

  if (!value.describeCurrentLivingSituation.trim()) {
    errors.describeCurrentLivingSituation = "Your Field is required.";
    isValid = false;
  } else if (
    value?.describeCurrentLivingSituation !== "Homeless" &&
    value?.describeCurrentLivingSituation !== "Other"
  ) {
    if (value.livesYourHome.length === 0) {
      errors.livesYourHome = "Your Field is required.";
      isValid = false;
    }

    if (!value.ownYourHome.trim()) {
      errors.ownYourHome = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.describeCurrentLivingSituation = "";
  }

  if (!value.presentTimeDanger.trim()) {
    errors.presentTimeDanger = "Your Field is required.";
    isValid = false;
  } else if (value.presentTimeDanger === "Yes") {
    if (!value.describeFeelDanger.trim()) {
      errors.describeFeelDanger = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.presentTimeDanger = "";
  }

  if (!value.allStressorsPastYear.trim()) {
    errors.allStressorsPastYear = "Your Field is required.";
    isValid = false;
  } else {
    errors.allStressorsPastYear = "";
    if (!value.stressorsAffect.trim()) {
      errors.stressorsAffect = "Your Field is required.";
      isValid = false;
    }

    if (!value.eachStressorsAffect.trim()) {
      errors.eachStressorsAffect = "Your Field is required.";
      isValid = false;
    }
  }

  if (!value.otherStressorsBesides.trim()) {
    errors.otherStressorsBesides = "Your Field is required.";
    isValid = false;
  } else if (value.otherStressorsBesides === "Yes") {
    if (!value.explainAllStressors.trim()) {
      errors.explainAllStressors = "Your Field is required.";
      isValid = false;
    }

    if (!value.affectEmotionalSymptoms.trim()) {
      errors.affectEmotionalSymptoms = "Your Field is required.";
      isValid = false;
    }

    if (!value.eachAffectEmotionalSymptoms.trim()) {
      errors.eachAffectEmotionalSymptoms = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.otherStressorsBesides = "";
  }

  if (!value.otherStressorsExperience.trim()) {
    errors.otherStressorsExperience = "Your Field is required.";
    isValid = false;
  } else if (value.otherStressorsExperience === "Yes") {
    if (!value.explainStressorsExperience.trim()) {
      errors.explainStressorsExperience = "Your Field is required.";
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
