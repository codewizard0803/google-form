const validateCriminalHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.arrested.trim()) {
    errors.arrested = "Your Field is required.";
    isValid = false;
  } else if (value.arrested === "Yes") {
    if (!value.charges.trim()) {
      errors.charges = "Your Field is required.";
      isValid = false;
    }

    if (!value.everIncarcerated.trim()) {
      errors.everIncarcerated = "Your Field is required.";
      isValid = false;
    }

    if (!value.currentlyParole.trim()) {
      errors.currentlyParole = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.arrested = "";
  }
  return {
    isValid,
    errors,
  };
};

export default validateCriminalHistory;
