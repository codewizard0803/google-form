const validateViolenceHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.physicalAltercations.trim()) {
    errors.physicalAltercations = "Your Field is required.";
    isValid = false;
  } else if (value.physicalAltercations === "Yes") {
    if (!value.circumstancesSurrounding.trim()) {
      errors.circumstancesSurrounding = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.physicalAltercations = "";
  }

  if (!value.thoughtsHurtAnyone.trim()) {
    errors.thoughtsHurtAnyone = "Your Field is required.";
    isValid = false;
  } else if (value.thoughtsHurtAnyone === "Yes") {
    if (!value.explainAccomplishingHurt.trim()) {
      errors.explainAccomplishingHurt = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.thoughtsHurtAnyone = "";
  }

  if (!value.victimViolence.trim()) {
    errors.victimViolence = "Your Field is required.";
    isValid = false;
  } else if (value.victimViolence === "Yes") {
    if (!value.currentlyDangerViolence.trim()) {
      errors.currentlyDangerViolence = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.victimViolence = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validateViolenceHistory;
