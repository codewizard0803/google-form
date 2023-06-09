const validateAdditionalInformation = (value) => {
  let isValid = true;
  let errors = {};

  if (!value?.evaluatingClinician.trim()) {
    errors.evaluatingClinician = "Your Field is required.";
    isValid = false;
  } else {
    errors.evaluatingClinician = "";
  }

  if (!value?.yourAdditionalInformation.trim()) {
    errors.yourAdditionalInformation = "Your Field is required.";
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
