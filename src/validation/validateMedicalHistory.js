const validateMedicalHistory = (value, global) => {
  let isValid = true;
  let errors = {};

  if (value?.diagnosedHealthcareProvider.length === 0) {
    errors.diagnosedHealthcareProvider = "Your Field is required.";
    isValid = false;
  } else if (
    value?.diagnosedHealthcareProvider?.filter((item) => item === "Other")
      .length > 0
  ) {
    if (!value?.otherMedicalCondition.trim()) {
      errors.otherMedicalCondition = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.diagnosedHealthcareProvider = "";
  }

  if (global?.radioSexItem === "Female") {
    if (!value.pregnantPlanning.trim()) {
      errors.pregnantPlanning = "Your Field is required.";
      isValid = false;
    } else if (
      value?.pregnantPlanning === "Yes" &&
      !value?.plannedPregnancyProvider.trim()
    ) {
      errors.plannedPregnancyProvider = "Your Field is required.";
      isValid = false;
    } else {
      errors.pregnantPlanning = "";
    }
  }

  if (!value.physicalHealthMedicationsLists.trim()) {
    errors.physicalHealthMedicationsLists = "Your Field is required.";
    isValid = false;
  } else {
    errors.physicalHealthMedicationsLists = "";
  }

  if (!value.surgeries.trim()) {
    errors.surgeries = "Your Field is required.";
    isValid = false;
  } else if (value.surgeries === "Yes") {
    if (!value.surgeriesDateList.trim()) {
      errors.surgeriesDateList = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.surgeries = "";
  }

  if (!value.medicationsSideEffect.trim()) {
    errors.medicationsSideEffect = "Your Field is required.";
    isValid = false;
  } else {
    errors.medicationsSideEffect = "";
  }

  if (!value.futureMedicalPlan.trim()) {
    errors.futureMedicalPlan = "Your Field is required.";
    isValid = false;
  } else if (value.futureMedicalPlan === "Yes") {
    if (!value.futureMedicalPlanList.trim()) {
      errors.futureMedicalPlanList = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.futureMedicalPlan = "";
  }

  if (!value.currentPrimarycarePractitioner.trim()) {
    errors.currentPrimarycarePractitioner = "Your Field is required.";
    isValid = false;
  } else {
    errors.currentPrimarycarePractitioner = "";
  }

  if (!value.pastprimarycarePractitioner.trim()) {
    errors.pastprimarycarePractitioner = "Your Field is required.";
    isValid = false;
  } else if (
    value.pastprimarycarePractitioner.trim() &&
    value.periodReceiveProvider === ""
  ) {
    errors.periodReceiveProvider = "Your Field is required.";
    isValid = false;
  } else {
    errors.pastprimarycarePractitioner = "";
  }

  if (!value.hospitalListEverBeen.trim()) {
    errors.hospitalListEverBeen = "Your Field is required.";
    isValid = false;
  } else {
    errors.hospitalListEverBeen = "";
  }

  if (!value.medicationsListTaking.trim()) {
    errors.medicationsListTaking = "Your Field is required.";
    isValid = false;
  } else {
    errors.medicationsListTaking = "";
  }

  if (!value.allergiesMedication.trim()) {
    errors.allergiesMedication = "Your Field is required.";
    isValid = false;
  } else if (value.allergiesMedication.trim() && value.allergiesList === "") {
    errors.allergiesList = "Your Field is required.";
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
