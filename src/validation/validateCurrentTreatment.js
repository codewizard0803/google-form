const validateCurrentTreatment = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.currentlyPsychiatricMedications.trim()) {
    errors.currentlyPsychiatricMedications = "Your Field is required.";
    isValid = false;
  } else if (value.currentlyPsychiatricMedications === "Yes") {
    if (value.medicationList === "") {
      errors.medicationList = "Your Field is required.";
      isValid = false;
    }
    if (!value.medicationLong.trim()) {
      errors.medicationLong = "Your Field is required.";
      isValid = false;
    }

    if (value.medicationReason.length === 0) {
      errors.medicationReason = "Your Field is required.";
      isValid = false;
    } else if (
      value?.medicationReason.filter((item) => item === "Other").length &&
      value.describeMedicationReason === ""
    ) {
      errors.describeMedicationReason = "Your Field is required.";
      isValid = false;
    }

    if (value.medicationsEffectYourCondition.length === 0) {
      errors.medicationsEffectYourCondition = "Your Field is required.";
      isValid = false;
    }

    if (value.medicationAsPrescribed === "") {
      errors.medicationAsPrescribed = "Your Field is required.";
      isValid = false;
    }

    if (value.experiencedSideEffects.length === 0) {
      errors.experiencedSideEffects = "Your Field is required.";
      isValid = false;
    } else if (
      value.experiencedSideEffects.filter((item) => item === "Other").length >
        0 &&
      value.describeSideEffect === ""
    ) {
      errors.describeSideEffect = "Your Field is required.";
      isValid = false;
    }

    if (value.recentTreatmentProvider === "") {
      errors.recentTreatmentProvider = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.currentlyPsychiatricMedications = "";
  }

  if (value.currentlyPsychotherapyTreatment === "") {
    errors.currentlyPsychotherapyTreatment = "Your Field is required.";
    isValid = false;
  } else if (value.currentlyPsychotherapyTreatment === "Yes") {
    if (value.recentPsychotherapyBegin === "") {
      errors.recentPsychotherapyBegin = "Your Field is required.";
      isValid = false;
    }
    if (value.recentPsychotherapySession === "") {
      errors.recentPsychotherapySession = "Your Field is required.";
      isValid = false;
    }
    if (value.psychotherapySessionsDate === "") {
      errors.psychotherapySessionsDate = "Your Field is required.";
      isValid = false;
    }
    if (value.psychotherapistTreatmentProvider === "") {
      errors.psychotherapistTreatmentProvider = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.currentlyPsychotherapyTreatment = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validateCurrentTreatment;
