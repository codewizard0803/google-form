const validateLongitudinalHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.emotionEpisodeBegan.trim()) {
    errors.emotionEpisodeBegan = "Your Field is required.";
    isValid = false;
  } else {
    errors.emotionEpisodeBegan = "";
  }

  if (!value.emotionSymptom.trim()) {
    errors.emotionSymptom = "Your Field is required.";
    isValid = false;
  } else {
    errors.emotionSymptom = "";
  }

  if (!value.mostWorstSymptom.trim()) {
    errors.mostWorstSymptom = "Your Field is required.";
    isValid = false;
  } else {
    errors.mostWorstSymptom = "";
  }

  if (!value.emotionalSymptomBecome.trim()) {
    errors.emotionalSymptomBecome = "Your Field is required.";
    isValid = false;
  } else {
    errors.emotionalSymptomBecome = "";
  }

  if (!value.feelEmotion.trim()) {
    errors.feelEmotion = "Your Field is required.";
    isValid = false;
  } else if (value.feelEmotion === "other" && value.explainFeelEmotion === "") {
    errors.explainFeelEmotion = "Your Field is required.";
    isValid = false;
  } else {
    errors.feelEmotion = "";
  }

  if (!value.compareEmotionalSymptom.trim()) {
    errors.compareEmotionalSymptom = "Your Field is required.";
    isValid = false;
  } else {
    errors.compareEmotionalSymptom = "";
  }

  if (!value.symptomsAffectedJob.trim()) {
    errors.symptomsAffectedJob = "Your Field is required.";
    isValid = false;
  } else if (
    value.symptomsAffectedJob === "Yes" &&
    value.describeSymptomsAffectedJob === ""
  ) {
    errors.describeSymptomsAffectedJob = "Your Field is required.";
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
