const validateCurrentEmployer = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.currentlyWorkEmployerInjury.trim()) {
    errors.currentlyWorkEmployerInjury = "Your Field is required.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkEmployerName === ""
  ) {
    errors.currentlyWorkEmployerName = "Your Field is required.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkNatureBusiness === ""
  ) {
    errors.currentlyWorkNatureBusiness = "Your Field is required.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkJobTitle === ""
  ) {
    errors.currentlyWorkJobTitle = "Your Field is required.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkJobDuties === ""
  ) {
    errors.currentlyWorkJobDuties = "Your Field is required.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkJobBeganDate === ""
  ) {
    errors.currentlyWorkJobBeganDate = "Your Field is required.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkSchedule === ""
  ) {
    errors.currentlyWorkSchedule = "Your Field is required.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkSalary === ""
  ) {
    errors.currentlyWorkSalary = "Your Field is required.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkLikeThisJob === ""
  ) {
    errors.currentlyWorkLikeThisJob = "Your Field is required.";
    isValid = false;
  } else {
    errors.currentlyWorkEmployerInjury = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validateCurrentEmployer;
