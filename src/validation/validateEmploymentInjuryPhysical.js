const validateEmploymentInjuryPhysical = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.currentEmployerName.trim()) {
    errors.currentEmployerName = "See required fields above.";
    isValid = false;
  } else {
    errors.currentEmployerName = "";
  }

  if (!value.businessNature.trim()) {
    errors.businessNature = "See required fields above.";
    isValid = false;
  } else {
    errors.businessNature = "";
  }

  if (!value.jobBeganDate.trim()) {
    errors.jobBeganDate = "See required fields above.";
    isValid = false;
  } else {
    errors.jobBeganDate = "";
  }

  if (!value.jobLastDate.trim()) {
    errors.jobLastDate = "See required fields above.";
    isValid = false;
  } else {
    errors.jobLastDate = "";
  }

  if (!value.startedJobTitle.trim()) {
    errors.startedJobTitle = "See required fields above.";
    isValid = false;
  } else {
    errors.startedJobTitle = "";
  }

  if (!value.currentTitle.trim()) {
    errors.currentTitle = "See required fields above.";
    isValid = false;
  } else {
    errors.currentTitle = "";
  }

  if (!value.employmentDuty.trim()) {
    errors.employmentDuty = "See required fields above.";
    isValid = false;
  } else {
    errors.employmentDuty = "";
  }

  if (!value.typicalWorkSchedule.trim()) {
    errors.typicalWorkSchedule = "See required fields above.";
    isValid = false;
  } else {
    errors.typicalWorkSchedule = "";
  }

  if (!value.salary.trim()) {
    errors.salary = "See required fields above.";
    isValid = false;
  } else {
    errors.salary = "";
  }

  if (!value.likeJob.trim()) {
    errors.likeJob = "See required fields above.";
    isValid = false;
  } else {
    errors.likeJob = "";
  }

  if (!value.notLikeJob.trim()) {
    errors.notLikeJob = "See required fields above.";
    isValid = false;
  } else {
    errors.notLikeJob = "";
  }

  if (!value.radioPhysicalConditionBeforeInjuryItem.trim()) {
    errors.radioPhysicalConditionBeforeInjuryItem =
      "See required fields above.";
    isValid = false;
  } else {
    errors.radioPhysicalConditionBeforeInjuryItem = "";
  }

  if (!value.radioMentalConditionBeforeInjuryItem.trim()) {
    errors.radioMentalConditionBeforeInjuryItem = "See required fields above.";
    isValid = false;
  } else {
    errors.radioMentalConditionBeforeInjuryItem = "";
  }

  if (!value.radioEmotionalSymptomsBeforeInjuryItem.trim()) {
    errors.radioEmotionalSymptomsBeforeInjuryItem =
      "See required fields above.";
    isValid = false;
  } else {
    errors.radioEmotionalSymptomsBeforeInjuryItem = "";
  }

  if (!value.describeMedicalCondition.trim()) {
    errors.describeMedicalCondition = "See required fields above.";
    isValid = false;
  } else {
    errors.describeMedicalCondition = "";
  }

  if (!value.injuryDate.trim()) {
    errors.injuryDate = "See required fields above.";
    isValid = false;
  } else {
    errors.injuryDate = "";
  }

  if (!value.describeInjuryOccurred.trim()) {
    errors.describeInjuryOccurred = "See required fields above.";
    isValid = false;
  } else {
    errors.describeInjuryOccurred = "";
  }

  if (!value.radioMedicationsBeforeInjuryItem.trim()) {
    errors.radioMedicationsBeforeInjuryItem = "See required fields above.";
    isValid = false;
  } else {
    errors.radioMedicationsBeforeInjuryItem = "";
  }

  if (!value.radioMedicationsNameBeforeInjuryItem.trim()) {
    errors.radioMedicationsNameBeforeInjuryItem = "See required fields above.";
    isValid = false;
  } else {
    errors.radioMedicationsNameBeforeInjuryItem = "";
  }

  if (!value.radioDisabilityConnectionClaimItem.trim()) {
    errors.radioDisabilityConnectionClaimItem = "See required fields above.";
    isValid = false;
  } else if (
    value.radioDisabilityConnectionClaimItem === "Yes" &&
    value.currentDisability === null
  ) {
    errors.currentDisability = "See required fields above";
    isValid = false;
  } else {
    errors.radioDisabilityConnectionClaimItem = "";
  }

  if (!value.radioContinuedWorkingItem.trim()) {
    errors.radioContinuedWorkingItem = "See required fields above.";
    isValid = false;
  } else {
    errors.radioContinuedWorkingItem = "";
  }

  if (!value.radioCurrentlyWorkingItem.trim()) {
    errors.radioCurrentlyWorkingItem = "See required fields above.";
    isValid = false;
  } else {
    errors.radioCurrentlyWorkingItem = "";
  }

  if (!value.radioConflictsItem.trim()) {
    errors.radioConflictsItem = "See required fields above.";
    isValid = false;
  } else if (
    value.radioConflictsItem === "Yes" &&
    value.conflictsCount === ""
  ) {
    errors.conflictsCount = "See required fields above.";
    isValid = false;
  } else if (value.radioConflictsItem === "Yes" && value.eachConflicts === "") {
    errors.eachConflicts = "See required fields above.";
    isValid = false;
  } else if (value.radioConflictsItem === "Yes" && value.conflictsRate === "") {
    errors.conflictsRate = "See required fields above.";
    isValid = false;
  } else {
    errors.radioConflictsItem = "";
  }

  if (!value.relationShipLikeManagement.trim()) {
    errors.relationShipLikeManagement = "See required fields above.";
    isValid = false;
  } else {
    errors.relationShipLikeManagement = "";
  }

  if (!value.immediateSupervisorName.trim()) {
    errors.immediateSupervisorName = "See required fields above.";
    isValid = false;
  } else {
    errors.immediateSupervisorName = "";
  }

  if (!value.relationshipImmediateSupervisor.trim()) {
    errors.relationshipImmediateSupervisor = "See required fields above.";
    isValid = false;
  } else if (
    value.relationshipImmediateSupervisor === "Poor" &&
    value.explainSuperVisorReason === ""
  ) {
    errors.explainSuperVisorReason = "See required fields above.";
    isValid = false;
  } else {
    errors.relationshipImmediateSupervisor = "";
  }

  if (!value.performanceAppraisals.trim()) {
    errors.performanceAppraisals = "See required fields above.";
    isValid = false;
  } else if (
    value.performanceAppraisals === "Poor" &&
    value.explainPerformanceAppraisals === ""
  ) {
    errors.explainPerformanceAppraisals = "See required fields above.";
    isValid = false;
  } else {
    errors.performanceAppraisals = "";
  }

  if (!value.relationshipCoWorkers.trim()) {
    errors.relationshipCoWorkers = "See required fields above.";
    isValid = false;
  } else if (
    value.relationshipCoWorkers === "Poor" &&
    value.explainRelationshipCoWorkers === ""
  ) {
    errors.explainRelationshipCoWorkers = "See required fields above.";
    isValid = false;
  } else {
    errors.relationshipCoWorkers = "";
  }

  if (!value.verbalWarning.trim()) {
    errors.verbalWarning = "See required fields above.";
    isValid = false;
  } else if (
    value.verbalWarning === "Yes" &&
    value.verbalWarningDateReason === ""
  ) {
    errors.verbalWarningDateReason = "See required fields above.";
    isValid = false;
  } else {
    errors.verbalWarning = "";
  }

  if (!value.lastStraw.trim()) {
    errors.lastStraw = "See required fields above.";
    isValid = false;
  } else if (value.lastStraw === "Yes" && value.explainLastStraw === "") {
    errors.explainLastStraw = "See required fields above.";
    isValid = false;
  } else {
    errors.lastStraw = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validateEmploymentInjuryPhysical;
