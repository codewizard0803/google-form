/** @format */

const validateLongitudinalHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.emotionEpisodeBegan.trim()) {
    errors.emotionEpisodeBegan = "See required fields above.";
    isValid = false;
  } else {
    errors.emotionEpisodeBegan = "";
  }

  if (!value.emotionSymptom.trim()) {
    errors.emotionSymptom = "See required fields above.";
    isValid = false;
  } else {
    errors.emotionSymptom = "";
  }

  if (!value.mostWorstSymptom.trim()) {
    errors.mostWorstSymptom = "See required fields above.";
    isValid = false;
  } else {
    errors.mostWorstSymptom = "";
  }

  if (!value.emotionalSymptomBecome.trim()) {
    errors.emotionalSymptomBecome = "See required fields above.";
    isValid = false;
  } else {
    errors.emotionalSymptomBecome = "";
  }

  if (!value.feelEmotion.trim()) {
    errors.feelEmotion = "See required fields above.";
    isValid = false;
  } else if (value.feelEmotion === "other" && value.explainFeelEmotion === "") {
    errors.explainFeelEmotion = "See required fields above.";
    isValid = false;
  } else {
    errors.feelEmotion = "";
  }

  if (!value.compareEmotionalSymptom.trim()) {
    errors.compareEmotionalSymptom = "See required fields above.";
    isValid = false;
  } else {
    errors.compareEmotionalSymptom = "";
  }

  if (!value.symptomsAffectedJob.trim()) {
    errors.symptomsAffectedJob = "See required fields above.";
    isValid = false;
  } else if (
    value.symptomsAffectedJob === "Yes" &&
    value.describeSymptomsAffectedJob === ""
  ) {
    errors.describeSymptomsAffectedJob = "See required fields above.";
    isValid = false;
  } else {
    errors.symptomsAffectedJob = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validateLongitudinalHistory;
