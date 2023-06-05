const validatePCL = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.stressfulExperienceMemories.trim()) {
    errors.stressfulExperienceMemories = "Your Field is required.";
    isValid = false;
  } else {
    errors.stressfulExperienceMemories = "";
  }

  if (!value.stressfulExperience.trim()) {
    errors.stressfulExperience = "Your Field is required.";
    isValid = false;
  } else if (value?.stressfulExperience !== "Not at all") {
    if (value.disturbingDreamsOccur === "") {
      errors.disturbingDreamsOccur = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.stressfulExperience = "";
  }

  if (!value.suddenlyStressfulExperience.trim()) {
    errors.suddenlyStressfulExperience = "Your Field is required.";
    isValid = false;
  } else {
    errors.suddenlyStressfulExperience = "";
  }

  if (!value.veryUpsetStressfulExperience.trim()) {
    errors.veryUpsetStressfulExperience = "Your Field is required.";
    isValid = false;
  } else {
    errors.veryUpsetStressfulExperience = "";
  }

  if (!value.strongPhysicalReactionStressfulExperience.trim()) {
    errors.strongPhysicalReactionStressfulExperience =
      "Your Field is required.";
    isValid = false;
  } else {
    errors.strongPhysicalReactionStressfulExperience = "";
  }

  if (!value.avoidingMemories.trim()) {
    errors.avoidingMemories = "Your Field is required.";
    isValid = false;
  } else {
    errors.avoidingMemories = "";
  }

  if (!value.avoidingExternalReminders.trim()) {
    errors.avoidingExternalReminders = "Your Field is required.";
    isValid = false;
  } else if (value.avoidingExternalReminders !== "Not at all") {
    if (value.describeSituations === "") {
      errors.describeSituations = "Your Field is required.";
      isValid = false;
    }
    if (value.avoidActivities === "") {
      errors.avoidActivities = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.avoidingExternalReminders = "";
  }

  if (!value.troubleStressfulExperience.trim()) {
    errors.troubleStressfulExperience = "Your Field is required.";
    isValid = false;
  } else {
    errors.troubleStressfulExperience = "";
  }

  if (!value.strongNegativeBeliefs.trim()) {
    errors.strongNegativeBeliefs = "Your Field is required.";
    isValid = false;
  } else {
    errors.strongNegativeBeliefs = "";
  }

  if (!value.stressfulExperienceBlaming.trim()) {
    errors.stressfulExperienceBlaming = "Your Field is required.";
    isValid = false;
  } else {
    errors.stressfulExperienceBlaming = "";
  }

  if (!value.strongNegativefeelings.trim()) {
    errors.strongNegativefeelings = "Your Field is required.";
    isValid = false;
  } else {
    errors.strongNegativefeelings = "";
  }

  if (!value.lossInterestActivity.trim()) {
    errors.lossInterestActivity = "Your Field is required.";
    isValid = false;
  } else {
    errors.lossInterestActivity = "";
  }

  if (!value.feelingDistantPeople.trim()) {
    errors.feelingDistantPeople = "Your Field is required.";
    isValid = false;
  } else {
    errors.feelingDistantPeople = "";
  }

  if (!value.troubleExperiencePositiveFeeling.trim()) {
    errors.troubleExperiencePositiveFeeling = "Your Field is required.";
    isValid = false;
  } else {
    errors.troubleExperiencePositiveFeeling = "";
  }

  if (!value.irritableBehavior.trim()) {
    errors.irritableBehavior = "Your Field is required.";
    isValid = false;
  } else {
    errors.irritableBehavior = "";
  }

  if (!value.manyRisksThing.trim()) {
    errors.manyRisksThing = "Your Field is required.";
    isValid = false;
  } else {
    errors.manyRisksThing = "";
  }

  if (!value.beingWatchful.trim()) {
    errors.beingWatchful = "Your Field is required.";
    isValid = false;
  } else {
    errors.beingWatchful = "";
  }

  if (!value.easilyStartled.trim()) {
    errors.easilyStartled = "Your Field is required.";
    isValid = false;
  } else {
    errors.easilyStartled = "";
  }

  if (!value.difficultyConcentrating.trim()) {
    errors.difficultyConcentrating = "Your Field is required.";
    isValid = false;
  } else {
    errors.difficultyConcentrating = "";
  }

  if (!value.troubleFallingAsleep.trim()) {
    errors.troubleFallingAsleep = "Your Field is required.";
    isValid = false;
  } else {
    errors.troubleFallingAsleep = "";
  }

  if (!value.currentRelatedSymptoms.trim()) {
    errors.currentRelatedSymptoms = "Your Field is required.";
    isValid = false;
  } else {
    errors.currentRelatedSymptoms = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validatePCL;
