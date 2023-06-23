const validateEmploymentHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.currentEmploymentStatus.trim()) {
    errors.currentEmploymentStatus = "See required fields above.";
    isValid = false;
  } else if (
    value?.currentEmploymentStatus === "Employed <20 hours per week" ||
    value?.currentEmploymentStatus ===
      "Employed >20 hours per week, but not full time" ||
    value?.currentEmploymentStatus === "Employed full time"
  ) {
    if (!value.employerName.trim()) {
      errors.employerName = "See required fields above.";
      isValid = false;
    }

    if (!value.employmentTitle.trim()) {
      errors.employmentTitle = "See required fields above.";
      isValid = false;
    }

    if (!value.jobDuties.trim()) {
      errors.jobDuties = "See required fields above.";
      isValid = false;
    }

    if (!value.difficultyJobDuties.trim()) {
      errors.difficultyJobDuties = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.currentEmploymentStatus = "";
  }

  if (!value?.pastEmployerName?.trim()) {
    errors.pastEmployerName = "See required fields above.";
    isValid = false;
  } else {
    errors.pastEmployerName = "";
    if (!value?.jobTitle?.trim()) {
      errors.jobTitle = "See required fields above.";
      isValid = false;
    }

    if (!value?.pastEmploymentBegan?.trim()) {
      errors.pastEmploymentBegan = "See required fields above.";
      isValid = false;
    }

    if (!value?.pastEmploymentEnd?.trim()) {
      errors.pastEmploymentEnd = "See required fields above.";
      isValid = false;
    }

    if (!value?.pastEmploymentEndReason?.trim()) {
      errors.pastEmploymentEndReason = "See required fields above.";
      isValid = false;
    }
  }

  if (!value.pastImmediatelyEmployerName.trim()) {
    errors.pastImmediatelyEmployerName = "See required fields above.";
    isValid = false;
  } else {
    errors.pastImmediatelyEmployerName = "";
  }

  if (!value.pastWorkplaceInjuries.trim()) {
    errors.pastWorkplaceInjuries = "See required fields above.";
    isValid = false;
  } else if (value.pastWorkplaceInjuries === "Yes") {
    if (!value.injuriesOccurTime.trim()) {
      errors.injuriesOccurTime = "See required fields above.";
      isValid = false;
    }

    if (!value.injuryNature.trim()) {
      errors.injuryNature = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.pastWorkplaceInjuries = "";
  }

  if (!value.workerCompensationClaim.trim()) {
    errors.workerCompensationClaim = "See required fields above.";
    isValid = false;
  } else {
    errors.workerCompensationClaim = "";
  }

  if (!value.placedDisability.trim()) {
    errors.placedDisability = "See required fields above.";
    isValid = false;
  } else if (value.placedDisability === "Yes" && value.disabilityDates === "") {
    errors.disabilityDates = "See required fields above.";
    isValid = false;
  } else {
    errors.placedDisability = "";
  }

  if (!value.receivedNegativeWork.trim()) {
    errors.receivedNegativeWork = "See required fields above.";
    isValid = false;
  } else if (
    value.receivedNegativeWork === "Yes" &&
    value.workEvaluationsExplain === ""
  ) {
    errors.workEvaluationsExplain = "See required fields above.";
    isValid = false;
  } else {
    errors.receivedNegativeWork = "";
  }

  if (!value.currentSourcesIncome.trim()) {
    errors.currentSourcesIncome = "See required fields above.";
    isValid = false;
  } else if (value.currentSourcesIncome !== "") {
    if (!value.otherEmploymentList.trim()) {
      errors.otherEmploymentList = "See required fields above.";
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
