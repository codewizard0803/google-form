const validateAdditionalInformation = (value) => {
  let isValid = true;
  let errors = {};

  if (!value?.evaluatingClinician.trim()) {
    errors.evaluatingClinician = "See required fields above.";
    isValid = false;
  } else {
    errors.evaluatingClinician = "";
  }

  if (!value?.yourAdditionalInformation.trim()) {
    errors.yourAdditionalInformation = "See required fields above.";
    isValid = false;
  } else {
    errors.yourAdditionalInformation = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validateAdditionalInformation;
