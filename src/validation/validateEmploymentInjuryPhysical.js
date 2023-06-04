const validateEmploymentInjuryPhysical = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.currentEmployerName.trim()) {
    errors.currentEmployerName = "Your Field is required.";
    isValid = false;
  } else {
    errors.currentEmployerName = "";
  }

  if (!value.businessNature.trim()) {
    errors.businessNature = "Your Field is required.";
    isValid = false;
  } else {
    errors.businessNature = "";
  }

  if (!value.jobBeganDate.trim()) {
    errors.jobBeganDate = "Your Field is required.";
    isValid = false;
  } else {
    errors.jobBeganDate = "";
  }

  if (!value.jobLastDate.trim()) {
    errors.jobLastDate = "Your Field is required.";
    isValid = false;
  } else {
    errors.jobLastDate = "";
  }

  if (!value.startedJobTitle.trim()) {
    errors.startedJobTitle = "Your Field is required.";
    isValid = false;
  } else {
    errors.startedJobTitle = "";
  }

  if (!value.currentTitle.trim()) {
    errors.currentTitle = "Your Field is required.";
    isValid = false;
  } else {
    errors.currentTitle = "";
  }

  if (!value.employmentDuty.trim()) {
    errors.employmentDuty = "Your Field is required.";
    isValid = false;
  } else {
    errors.employmentDuty = "";
  }

  if (!value.typicalWorkSchedule.trim()) {
    errors.typicalWorkSchedule = "Your Field is required.";
    isValid = false;
  } else {
    errors.typicalWorkSchedule = "";
  }

  if (!value.salary.trim()) {
    errors.salary = "Your Field is required.";
    isValid = false;
  } else {
    errors.salary = "";
  }

  if (!value.likeJob.trim()) {
    errors.likeJob = "Your Field is required.";
    isValid = false;
  } else {
    errors.likeJob = "";
  }

  if (!value.notLikeJob.trim()) {
    errors.notLikeJob = "Your Field is required.";
    isValid = false;
  } else {
    errors.notLikeJob = "";
  }

  if (!value.radioPhysicalConditionBeforeInjuryItem.trim()) {
    errors.radioPhysicalConditionBeforeInjuryItem = "Your Field is required.";
    isValid = false;
  } else {
    errors.radioPhysicalConditionBeforeInjuryItem = "";
  }

  if (!value.radioMentalConditionBeforeInjuryItem.trim()) {
    errors.radioMentalConditionBeforeInjuryItem = "Your Field is required.";
    isValid = false;
  } else {
    errors.radioMentalConditionBeforeInjuryItem = "";
  }

  if (!value.radioEmotionalSymptomsBeforeInjuryItem.trim()) {
    errors.radioEmotionalSymptomsBeforeInjuryItem = "Your Field is required.";
    isValid = false;
  } else {
    errors.radioEmotionalSymptomsBeforeInjuryItem = "";
  }

  if (!value.describeMedicalCondition.trim()) {
    errors.describeMedicalCondition = "Your Field is required.";
    isValid = false;
  } else {
    errors.describeMedicalCondition = "";
  }

  if (!value.injuryDate.trim()) {
    errors.injuryDate = "Your Field is required.";
    isValid = false;
  } else {
    errors.injuryDate = "";
  }

  if (!value.describeInjuryOccurred.trim()) {
    errors.describeInjuryOccurred = "Your Field is required.";
    isValid = false;
  } else {
    errors.describeInjuryOccurred = "";
  }

  if (!value.radioMedicationsBeforeInjuryItem.trim()) {
    errors.radioMedicationsBeforeInjuryItem = "Your Field is required.";
    isValid = false;
  } else {
    errors.radioMedicationsBeforeInjuryItem = "";
  }

  if (!value.radioMedicationsNameBeforeInjuryItem.trim()) {
    errors.radioMedicationsNameBeforeInjuryItem = "Your Field is required.";
    isValid = false;
  } else {
    errors.radioMedicationsNameBeforeInjuryItem = "";
  }

  if (!value.radioDisabilityConnectionClaimItem.trim()) {
    errors.radioDisabilityConnectionClaimItem = "Your Field is required.";
    isValid = false;
  } else if (
    value.radioDisabilityConnectionClaimItem === "Yes" &&
    value.currentDisability === null
  ) {
    errors.currentDisability = "Your Field is required";
    isValid = false;
  } else {
    errors.radioDisabilityConnectionClaimItem = "";
  }

  if (!value.radioContinuedWorkingItem.trim()) {
    errors.radioContinuedWorkingItem = "Your Field is required.";
    isValid = false;
  } else {
    errors.radioContinuedWorkingItem = "";
  }

  if (!value.radioCurrentlyWorkingItem.trim()) {
    errors.radioCurrentlyWorkingItem = "Your Field is required.";
    isValid = false;
  } else {
    errors.radioCurrentlyWorkingItem = "";
  }

  if (!value.radioConflictsItem.trim()) {
    errors.radioConflictsItem = "Your Field is required.";
    isValid = false;
  } else if (
    value.radioConflictsItem === "Yes" &&
    value.conflictsCount === ""
  ) {
    errors.conflictsCount = "Your Field is required.";
    isValid = false;
  } else if (
    value.radioConflictsItem === "Yes" &&
    value.eachConflicts === ""
  ) {
    errors.eachConflicts = "Your Field is required.";
    isValid = false;
  } else if (
    value.radioConflictsItem === "Yes" &&
    value.conflictsRate === ""
  ) {
    errors.conflictsRate = "Your Field is required.";
    isValid = false;
  } else {
    errors.radioConflictsItem = "";
  }

  if (!value.relationShipLikeManagement.trim()) {
    errors.relationShipLikeManagement = "Your Field is required.";
    isValid = false;
  } else {
    errors.relationShipLikeManagement = "";
  }

  if (!value.immediateSupervisorName.trim()) {
    errors.immediateSupervisorName = "Your Field is required.";
    isValid = false;
  } else {
    errors.immediateSupervisorName = "";
  }

  if (!value.relationshipImmediateSupervisor.trim()) {
    errors.relationshipImmediateSupervisor = "Your Field is required.";
    isValid = false;
  } else if(value.relationshipImmediateSupervisor === "Poor" && value.explainSuperVisorReason === "") {
    errors.explainSuperVisorReason = "Your Field is required.";
    isValid = false;
  } else {
    errors.relationshipImmediateSupervisor = "";
  }

  if (!value.performanceAppraisals.trim()) {
    errors.performanceAppraisals = "Your Field is required.";
    isValid = false;
  } else if(value.performanceAppraisals === "Poor" && value.explainSuperVisorReason === "") {
    errors.explainPerformanceAppraisals = "Your Field is required.";
    isValid = false;
  } else {
    errors.performanceAppraisals = "";
  }

  if (!value.relationshipCoWorkers.trim()) {
    errors.relationshipCoWorkers = "Your Field is required.";
    isValid = false;
  } else if(value.relationshipCoWorkers === "Poor" && value.explainSuperVisorReason === "") {
    errors.explainRelationshipCoWorkers = "Your Field is required.";
    isValid = false;
  } else {
    errors.relationshipCoWorkers = "";
  }

  if (!value.verbalWarning.trim()) {
    errors.verbalWarning = "Your Field is required.";
    isValid = false;
  } else if(value.verbalWarning === "Yes" && value.explainSuperVisorReason === "") {
    errors.verbalWarningDateReason = "Your Field is required.";
    isValid = false;
  } else {
    errors.verbalWarning = "";
  }

  if (!value.lastStraw.trim()) {
    errors.lastStraw = "Your Field is required.";
    isValid = false;
  } else if(value.lastStraw === "Yes" && value.explainSuperVisorReason === "") {
    errors.explainLastStraw = "Your Field is required.";
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
