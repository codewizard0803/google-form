const validateViolenceHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.physicalAltercations.trim()) {
    errors.physicalAltercations = "See required fields above.";
    isValid = false;
  } else if (value.physicalAltercations === "Yes") {
    if (!value.circumstancesSurrounding.trim()) {
      errors.circumstancesSurrounding = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.physicalAltercations = "";
  }

  if (!value.thoughtsHurtAnyone.trim()) {
    errors.thoughtsHurtAnyone = "See required fields above.";
    isValid = false;
  } else if (value.thoughtsHurtAnyone === "Yes") {
    if (!value.explainAccomplishingHurt.trim()) {
      errors.explainAccomplishingHurt = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.thoughtsHurtAnyone = "";
  }

  if (!value.victimViolence.trim()) {
    errors.victimViolence = "See required fields above.";
    isValid = false;
  } else if (value.victimViolence === "Yes") {
    if (!value.currentlyDangerViolence.trim()) {
      errors.currentlyDangerViolence = "See required fields above.";
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
