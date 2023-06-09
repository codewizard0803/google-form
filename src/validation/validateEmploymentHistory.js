const validateEmploymentHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.currentEmploymentStatus.trim()) {
    errors.currentEmploymentStatus = "Your Field is required.";
    isValid = false;
  } else if (
    value?.currentEmploymentStatus === "Employed <20 hours per week" ||
    value?.currentEmploymentStatus ===
      "Employed >20 hours per week, but not full time" ||
    value?.currentEmploymentStatus === "Employed full time"
  ) {
    if (!value.employerName.trim()) {
      errors.employerName = "Your Field is required.";
      isValid = false;
    }

    if (!value.employmentTitle.trim()) {
      errors.employmentTitle = "Your Field is required.";
      isValid = false;
    }

    if (!value.jobDuties.trim()) {
      errors.jobDuties = "Your Field is required.";
      isValid = false;
    }

    if (!value.difficultyJobDuties.trim()) {
      errors.difficultyJobDuties = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.currentEmploymentStatus = "";
  }

  if (!value?.pastEmployerName?.trim()) {
    errors.pastEmployerName = "Your Field is required.";
    isValid = false;
  } else {
    errors.pastEmployerName = "";
    if (!value?.jobTitle?.trim()) {
      errors.jobTitle = "Your Field is required.";
      isValid = false;
    }

    if (!value?.pastEmploymentBegan?.trim()) {
      errors.pastEmploymentBegan = "Your Field is required.";
      isValid = false;
    }

    if (!value?.pastEmploymentEnd?.trim()) {
      errors.pastEmploymentEnd = "Your Field is required.";
      isValid = false;
    }

    if (!value?.pastEmploymentEndReason?.trim()) {
      errors.pastEmploymentEndReason = "Your Field is required.";
      isValid = false;
    }
  }

  if (!value.pastImmediatelyEmployerName.trim()) {
    errors.pastImmediatelyEmployerName = "Your Field is required.";
    isValid = false;
  } else {
    errors.pastImmediatelyEmployerName = "";
  }

  if (!value.pastWorkplaceInjuries.trim()) {
    errors.pastWorkplaceInjuries = "Your Field is required.";
    isValid = false;
  } else {
    errors.pastWorkplaceInjuries = "";
    if (!value.injuriesOccurTime.trim()) {
      errors.injuriesOccurTime = "Your Field is required.";
      isValid = false;
    }

    if (!value.injuryNature.trim()) {
      errors.injuryNature = "Your Field is required.";
      isValid = false;
    }
  }

  if (!value.workerCompensationClaim.trim()) {
    errors.workerCompensationClaim = "Your Field is required.";
    isValid = false;
  } else {
    errors.workerCompensationClaim = "";
  }

  if (!value.placedDisability.trim()) {
    errors.placedDisability = "Your Field is required.";
    isValid = false;
  } else {
    errors.placedDisability = "";
  }

  if (!value.receivedNegativeWork.trim()) {
    errors.receivedNegativeWork = "Your Field is required.";
    isValid = false;
  } else {
    errors.receivedNegativeWork = "";
  }

  if (!value.currentSourcesIncome.trim()) {
    errors.currentSourcesIncome = "Your Field is required.";
    isValid = false;
  } else if (value.currentSourcesIncome !== "") {
    if (value.otherEmploymentList === "") {
      errors.otherEmploymentList = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.currentSourcesIncome = "";
  }
  return {
    isValid,
    errors,
  };
};

export default validateEmploymentHistory;
