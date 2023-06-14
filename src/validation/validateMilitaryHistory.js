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

    if (!value.militaryDatesFrom.trim()) {
      errors.militaryDatesFrom = "Your Field is required.";
      isValid = false;
    }

    if (!value.militaryDatesTo.trim()) {
      errors.militaryDatesTo = "Your Field is required.";
      isValid = false;
    }

    if (value.militaryDatesTo.trim() && value.militaryDatesFrom.trim()) {
      const d1 = new Date(value.militaryDatesFrom);
      const d2 = new Date(value.militaryDatesTo);
      if (d1 > d2) {
        errors.militaryDatesTo = "This Date is invalid.";
        isValid = false;
      } else {
        errors.militaryDatesTo = "";
      }
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
