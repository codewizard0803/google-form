const validateCriminalHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.arrested.trim()) {
    errors.arrested = "See required fields above.";
    isValid = false;
  } else if (value.arrested === "Yes") {
    if (!value.charges.trim()) {
      errors.charges = "See required fields above.";
      isValid = false;
    }

    if (!value.arrestedDate.trim()) {
      errors.arrestedDate = "See required fields above.";
      isValid = false;
    }

    if (!value.everIncarcerated.trim()) {
      errors.everIncarcerated = "See required fields above.";
      isValid = false;
    }

    if (!value.currentlyParole.trim()) {
      errors.currentlyParole = "See required fields above.";
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
