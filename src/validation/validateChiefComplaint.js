const validateChiefComplaint = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.mostBothered.trim()) {
    errors.mostBothered = "See required fields above.";
    isValid = false;
  } else {
    errors.mostBothered = "";
  }

  if (!value.currentlyExperiencingSymptom.length === 0) {
    errors.currentlyExperiencingSymptom = "See required fields above.";
    isValid = false;
  } else if (
    value.currentlyExperiencingSymptom.length > 0 &&
    value.currentEpisodeDate === ""
  ) {
    errors.currentEpisodeDate = "See required fields above.";
    isValid = false;
  } else {
    errors.currentlyExperiencingSymptom = "";
  }

  if (!value.specificStressfulSymptom.trim()) {
    errors.specificStressfulSymptom = "See required fields above.";
    isValid = false;
  } else if (
    value.specificStressfulSymptom === "Yes" &&
    value.specificStressfulEvent === ""
  ) {
    errors.specificStressfulEvent = "See required fields above.";
    isValid = false;
  } else {
    errors.specificStressfulSymptom = "";
  }

  if (value.stressFollowing.length === 0) {
    errors.stressFollowing = "See required fields above.";
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
