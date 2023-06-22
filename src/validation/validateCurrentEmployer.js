const validateCurrentEmployer = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.currentlyWorkEmployerInjury.trim()) {
    errors.currentlyWorkEmployerInjury = "See required fields above.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkEmployerName === ""
  ) {
    errors.currentlyWorkEmployerName = "See required fields above.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkNatureBusiness === ""
  ) {
    errors.currentlyWorkNatureBusiness = "See required fields above.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkJobTitle === ""
  ) {
    errors.currentlyWorkJobTitle = "See required fields above.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkJobDuties === ""
  ) {
    errors.currentlyWorkJobDuties = "See required fields above.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkJobBeganDate === ""
  ) {
    errors.currentlyWorkJobBeganDate = "See required fields above.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkSchedule === ""
  ) {
    errors.currentlyWorkSchedule = "See required fields above.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkSalary === ""
  ) {
    errors.currentlyWorkSalary = "See required fields above.";
    isValid = false;
  } else if (
    value.currentlyWorkEmployerInjury === "No" &&
    value.currentlyWorkLikeThisJob === ""
  ) {
    errors.currentlyWorkLikeThisJob = "See required fields above.";
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
