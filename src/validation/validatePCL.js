/** @format */

const validatePCL = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.stressfulExperienceMemories.trim()) {
    errors.stressfulExperienceMemories = "See required fields above.";
    isValid = false;
  } else {
    errors.stressfulExperienceMemories = "";
  }

  if (!value.stressfulExperience.trim()) {
    errors.stressfulExperience = "See required fields above.";
    isValid = false;
  } else if (value?.stressfulExperience !== "not at all") {
    if (value.disturbingDreamsOccur === "") {
      errors.disturbingDreamsOccur = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.stressfulExperience = "";
  }

  if (!value.suddenlyStressfulExperience.trim()) {
    errors.suddenlyStressfulExperience = "See required fields above.";
    isValid = false;
  } else {
    errors.suddenlyStressfulExperience = "";
  }

  if (!value.veryUpsetStressfulExperience.trim()) {
    errors.veryUpsetStressfulExperience = "See required fields above.";
    isValid = false;
  } else {
    errors.veryUpsetStressfulExperience = "";
  }

  if (!value.strongPhysicalReactionStressfulExperience.trim()) {
    errors.strongPhysicalReactionStressfulExperience =
      "See required fields above.";
    isValid = false;
  } else {
    errors.strongPhysicalReactionStressfulExperience = "";
  }

  if (!value.avoidingMemories.trim()) {
    errors.avoidingMemories = "See required fields above.";
    isValid = false;
  } else {
    errors.avoidingMemories = "";
  }

  if (!value.avoidingExternalReminders.trim()) {
    errors.avoidingExternalReminders = "See required fields above.";
    isValid = false;
  } else if (value.avoidingExternalReminders !== "not at all") {
    if (value.describeSituations === "") {
      errors.describeSituations = "See required fields above.";
      isValid = false;
    }
    if (value.avoidActivities === "") {
      errors.avoidActivities = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.avoidingExternalReminders = "";
  }

  if (!value.troubleStressfulExperience.trim()) {
    errors.troubleStressfulExperience = "See required fields above.";
    isValid = false;
  } else {
    errors.troubleStressfulExperience = "";
  }

  if (!value.strongNegativeBeliefs.trim()) {
    errors.strongNegativeBeliefs = "See required fields above.";
    isValid = false;
  } else {
    errors.strongNegativeBeliefs = "";
  }

  if (!value.stressfulExperienceBlaming.trim()) {
    errors.stressfulExperienceBlaming = "See required fields above.";
    isValid = false;
  } else {
    errors.stressfulExperienceBlaming = "";
  }

  if (!value.strongNegativefeelings.trim()) {
    errors.strongNegativefeelings = "See required fields above.";
    isValid = false;
  } else {
    errors.strongNegativefeelings = "";
  }

  if (!value.lossInterestActivity.trim()) {
    errors.lossInterestActivity = "See required fields above.";
    isValid = false;
  } else {
    errors.lossInterestActivity = "";
  }

  if (!value.feelingDistantPeople.trim()) {
    errors.feelingDistantPeople = "See required fields above.";
    isValid = false;
  } else {
    errors.feelingDistantPeople = "";
  }

  if (!value.troubleExperiencePositiveFeeling.trim()) {
    errors.troubleExperiencePositiveFeeling = "See required fields above.";
    isValid = false;
  } else {
    errors.troubleExperiencePositiveFeeling = "";
  }

  if (!value.irritableBehavior.trim()) {
    errors.irritableBehavior = "See required fields above.";
    isValid = false;
  } else {
    errors.irritableBehavior = "";
  }

  if (!value.manyRisksThing.trim()) {
    errors.manyRisksThing = "See required fields above.";
    isValid = false;
  } else {
    errors.manyRisksThing = "";
  }

  if (!value.beingWatchful.trim()) {
    errors.beingWatchful = "See required fields above.";
    isValid = false;
  } else {
    errors.beingWatchful = "";
  }

  if (!value.easilyStartled.trim()) {
    errors.easilyStartled = "See required fields above.";
    isValid = false;
  } else {
    errors.easilyStartled = "";
  }

  if (!value.difficultyConcentrating.trim()) {
    errors.difficultyConcentrating = "See required fields above.";
    isValid = false;
  } else {
    errors.difficultyConcentrating = "";
  }

  if (!value.troubleFallingAsleep.trim()) {
    errors.troubleFallingAsleep = "See required fields above.";
    isValid = false;
  } else {
    errors.troubleFallingAsleep = "";
  }

  if (!value.currentRelatedSymptoms.trim()) {
    errors.currentRelatedSymptoms = "See required fields above.";
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
