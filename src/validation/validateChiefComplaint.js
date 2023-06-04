const validateChiefComplaint = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.mostBothered.trim()) {
    errors.mostBothered = "Your Field is required.";
    isValid = false;
  } else {
    errors.mostBothered = "";
  }

  if (!value.currentlyExperiencingSymptom.trim()) {
    errors.currentlyExperiencingSymptom = "Your Field is required.";
    isValid = false;
  } else if (
    value.currentlyExperiencingSymptom !== "None of the above" &&
    value.currentEpisodeDate === ""
  ) {
    errors.currentEpisodeDate = "Your Field is required.";
    isValid = false;
  } else {
    errors.currentlyExperiencingSymptom = "";
  }

  if (!value.specificStressfulSymptom.trim()) {
    errors.specificStressfulSymptom = "Your Field is required.";
    isValid = false;
  } else if (
    value.specificStressfulSymptom === "Yes" &&
    value.specificStressfulEvent === ""
  ) {
    errors.specificStressfulEvent = "Your Field is required.";
    isValid = false;
  } else {
    errors.specificStressfulSymptom = "";
  }

  if (value.stressFollowing.length === 0) {
    errors.stressFollowing = "Your Field is required.";
    isValid = false;
  } else {
    errors.stressFollowing = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validateChiefComplaint;
