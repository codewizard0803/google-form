const validateMilitaryHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.enrolledMilitary.trim()) {
    errors.enrolledMilitary = "Your Field is required.";
    isValid = false;
  } else if (value.enrolledMilitary === "Yes") {
    if (!value.branchMilitary.trim()) {
      errors.branchMilitary = "Your Field is required.";
      isValid = false;
    }

    if (!value.militaryDates.trim()) {
      errors.militaryDates = "Your Field is required.";
      isValid = false;
    }

    if (!value.militaryJob.trim()) {
      errors.militaryJob = "Your Field is required.";
      isValid = false;
    }

    if (!value.dischargeStatus.trim()) {
      errors.dischargeStatus = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.enrolledMilitary = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validateMilitaryHistory;
