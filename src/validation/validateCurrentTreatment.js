const validateCurrentTreatment = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.currentlyPsychiatricMedications.trim()) {
    errors.currentlyPsychiatricMedications = "See required fields above.";
    isValid = false;
  } else if (value.currentlyPsychiatricMedications === "Yes") {
    if (value.medicationList === "") {
      errors.medicationList = "See required fields above.";
      isValid = false;
    }
    if (!value.medicationLong.trim()) {
      errors.medicationLong = "See required fields above.";
      isValid = false;
    }

    if (value.medicationReason.length === 0) {
      errors.medicationReason = "See required fields above.";
      isValid = false;
    } else if (
      value?.medicationReason.filter((item) => item === "Other").length &&
      value.describeMedicationReason === ""
    ) {
      errors.describeMedicationReason = "See required fields above.";
      isValid = false;
    }

    if (value.medicationsEffectYourCondition.length === 0) {
      errors.medicationsEffectYourCondition = "See required fields above.";
      isValid = false;
    } else if (
      value.medicationsEffectYourCondition.length > 0 &&
      value.medicationsEffectYourCondition.filter(
        (item) => item.condition === "Other"
      ).length > 0
    ) {
      errors.medicationsEffectOther = "See required fields above.";
      isValid = false;
    }

    if (value.medicationAsPrescribed === "") {
      errors.medicationAsPrescribed = "See required fields above.";
      isValid = false;
    }

    if (value.experiencedSideEffects.length === 0) {
      errors.experiencedSideEffects = "See required fields above.";
      isValid = false;
    } else if (
      value.experiencedSideEffects.filter((item) => item === "Other").length >
        0 &&
      value.describeSideEffect === ""
    ) {
      errors.describeSideEffect = "See required fields above.";
      isValid = false;
    }

    if (value.recentTreatmentProvider === "") {
      errors.recentTreatmentProvider = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.currentlyPsychiatricMedications = "";
  }

  if (value.currentlyPsychotherapyTreatment === "") {
    errors.currentlyPsychotherapyTreatment = "See required fields above.";
    isValid = false;
  } else if (value.currentlyPsychotherapyTreatment === "Yes") {
    if (value.recentPsychotherapyBegin === "") {
      errors.recentPsychotherapyBegin = "See required fields above.";
      isValid = false;
    }
    if (value.recentPsychotherapySession === "") {
      errors.recentPsychotherapySession = "See required fields above.";
      isValid = false;
    }
    if (value.psychotherapySessionsDate === "") {
      errors.psychotherapySessionsDate = "See required fields above.";
      isValid = false;
    }
    if (value.psychotherapistTreatmentProvider === "") {
      errors.psychotherapistTreatmentProvider = "See required fields above.";
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
