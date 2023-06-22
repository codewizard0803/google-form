const validateMedicalHistory = (value, global) => {
  let isValid = true;
  let errors = {};

  if (value?.diagnosedHealthcareProvider.length === 0) {
    errors.diagnosedHealthcareProvider = "See required fields above.";
    isValid = false;
  } else if (
    value?.diagnosedHealthcareProvider?.filter((item) => item === "Other")
      .length > 0
  ) {
    if (!value?.otherMedicalCondition.trim()) {
      errors.otherMedicalCondition = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.diagnosedHealthcareProvider = "";
  }

  if (global?.radioSexItem === "Female") {
    if (!value.pregnantPlanning.trim()) {
      errors.pregnantPlanning = "See required fields above.";
      isValid = false;
    } else if (
      value?.pregnantPlanning === "Yes" &&
      !value?.plannedPregnancyProvider.trim()
    ) {
      errors.plannedPregnancyProvider = "See required fields above.";
      isValid = false;
    } else {
      errors.pregnantPlanning = "";
    }
  }

  if (!value.physicalHealthMedicationsLists.trim()) {
    errors.physicalHealthMedicationsLists = "See required fields above.";
    isValid = false;
  } else {
    errors.physicalHealthMedicationsLists = "";
  }

  if (!value.surgeries.trim()) {
    errors.surgeries = "See required fields above.";
    isValid = false;
  } else if (value.surgeries === "Yes") {
    if (!value.surgeriesDateList.trim()) {
      errors.surgeriesDateList = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.surgeries = "";
  }

  if (!value.medicationsSideEffect.trim()) {
    errors.medicationsSideEffect = "See required fields above.";
    isValid = false;
  } else {
    errors.medicationsSideEffect = "";
  }

  if (!value.futureMedicalPlan.trim()) {
    errors.futureMedicalPlan = "See required fields above.";
    isValid = false;
  } else if (value.futureMedicalPlan === "Yes") {
    if (!value.futureMedicalPlanList.trim()) {
      errors.futureMedicalPlanList = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.futureMedicalPlan = "";
  }

  if (!value.currentPrimarycarePractitioner.trim()) {
    errors.currentPrimarycarePractitioner = "See required fields above.";
    isValid = false;
  } else {
    errors.currentPrimarycarePractitioner = "";
  }

  if (!value.pastprimarycarePractitioner.trim()) {
    errors.pastprimarycarePractitioner = "See required fields above.";
    isValid = false;
  } else if (
    value.pastprimarycarePractitioner.trim() &&
    value.periodReceiveProvider === ""
  ) {
    errors.periodReceiveProvider = "See required fields above.";
    isValid = false;
  } else {
    errors.pastprimarycarePractitioner = "";
  }

  if (!value.hospitalListEverBeen.trim()) {
    errors.hospitalListEverBeen = "See required fields above.";
    isValid = false;
  } else {
    errors.hospitalListEverBeen = "";
  }

  if (!value.medicationsListTaking.trim()) {
    errors.medicationsListTaking = "See required fields above.";
    isValid = false;
  } else {
    errors.medicationsListTaking = "";
  }

  if (!value.allergiesMedication.trim()) {
    errors.allergiesMedication = "See required fields above.";
    isValid = false;
  } else if (
    value.allergiesMedication === "Yes" &&
    value.allergiesList === ""
  ) {
    errors.allergiesList = "See required fields above.";
    isValid = false;
  } else {
    errors.allergiesMedication = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validateMedicalHistory;
