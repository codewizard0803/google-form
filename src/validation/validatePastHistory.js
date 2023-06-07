const validatePastHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.previouslyExperiencedSymptom.trim()) {
    errors.previouslyExperiencedSymptom = "Your Field is required.";
    isValid = false;
  } else if (
    value.previouslyExperiencedSymptom !== "" &&
    value.describeSymptoms === ""
  ) {
    errors.describeSymptoms = "Your Field is required.";
    isValid = false;
  } else {
    errors.previouslyExperiencedSymptom = "";
  }

  if (!value.experienceMuchEnergy.trim()) {
    errors.experienceMuchEnergy = "Your Field is required.";
    isValid = false;
  } else if (value.experienceMuchEnergy === "Yes") {
    if (value.sleptFewer4Hours === "") {
      errors.sleptFewer4Hours = "Your Field is required.";
      isValid = false;
    }
    if (value.lackSleepEnergy === "") {
      errors.lackSleepEnergy = "Your Field is required.";
      isValid = false;
    }

    if (value.sleepFewer === "") {
      errors.sleepFewer = "Your Field is required.";
      isValid = false;
    }

    if (value.mood === "") {
      errors.mood = "Your Field is required.";
      isValid = false;
    } else if (value?.mood === "Other") {
      if (value.describeMood === "") {
        errors.describeMood = "Your Field i required";
        isValid = false;
      }
    }

    if (value.alcoholSubstances === "") {
      errors.alcoholSubstances = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.experienceMuchEnergy = "";
  }

  if (value?.experienceFollowing.length === 0) {
    errors.experienceFollowing = "Your Field is required.";
    isValid = false;
  } else if (value.experienceFollowing.length > 0) {
    if (value?.recurrentRituals === "") {
      errors.recurrentRituals = "Your Field is required.";
      isValid = false;
    }

    if (value?.symptomsDrinkingAlcohol === "") {
      errors.symptomsDrinkingAlcohol = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.experienceFollowing = "";
  }

  if (!value.harmKillYourSelf.trim()) {
    errors.harmKillYourSelf = "Your Field is required.";
    isValid = false;
  } else {
    errors.harmKillYourSelf = "";
  }

  if (!value.emotionalSymptomsRelationShip.trim()) {
    errors.emotionalSymptomsRelationShip = "Your Field is required.";
    isValid = false;
  } else {
    errors.emotionalSymptomsRelationShip = "";
  }

  if (!value.firstFeelDepressed.trim()) {
    errors.firstFeelDepressed = "Your Field is required.";
    isValid = false;
  } else {
    errors.firstFeelDepressed = "";
  }

  if (!value.feelHighLevelAnxiety.trim()) {
    errors.feelHighLevelAnxiety = "Your Field is required.";
    isValid = false;
  } else {
    errors.feelHighLevelAnxiety = "";
  }

  if (value.diagnosedMentalHealth.length === 0) {
    errors.diagnosedMentalHealth = "Your Field is required.";
    isValid = false;
  } else if (
    value.diagnosedMentalHealth.filter((item) => item === "Other").length > 0 &&
    value.describeHealthCondition === ""
  ) {
    errors.describeHealthCondition = "Your Field is required.";
    isValid = false;
  } else {
    errors.diagnosedMentalHealth = "";
  }

  if (!value.otherMedications.trim()) {
    errors.otherMedications = "Your Field is required.";
    isValid = false;
  } else if (value.otherMedications === "Yes") {
    if (!value.pastMedicationName.trim()) {
      errors.pastMedicationName = "Your Field is required.";
      isValid = false;
    }

    if (!value.startedMedicationDate.trim()) {
      errors.startedMedicationDate = "Your Field is required.";
      isValid = false;
    }

    if (!value.stopedMedicationDate.trim()) {
      errors.stopedMedicationDate = "Your Field is required.";
      isValid = false;
    }

    if (value.pastPsychiatricMedication.length === 0) {
      errors.pastPsychiatricMedication = "Your Field is required.";
      isValid = false;
    }

    if (!value.stopedPsychiatricMedicationsReason.trim()) {
      errors.stopedPsychiatricMedicationsReason = "Your Field is required.";
      isValid = false;
    }

    if (!value.prescribeThisMedication.trim()) {
      errors.prescribeThisMedication = "Your Field is required.";
      isValid = false;
    }

    if (!value.prescribeThisMedicationNameDate.trim()) {
      errors.prescribeThisMedicationNameDate = "Your Field is required.";
      isValid = false;
    }

    if (!value.whatClinicWorked.trim()) {
      errors.whatClinicWorked = "Your Field is required.";
      isValid = false;
    }

    if (!value.otherPsychiatrists.trim()) {
      errors.otherPsychiatrists = "Your Field is required.";
      isValid = false;
    }

    if (!value.thisPsychiatristSeeDate.trim()) {
      errors.thisPsychiatristSeeDate = "Your Field is required.";
      isValid = false;
    }

    if (!value.attendedSessionsPsychiatrist.trim()) {
      errors.attendedSessionsPsychiatrist = "Your Field is required.";
      isValid = false;
    }
  }

  if (!value.previouslyReceivedPsychotherapy.trim()) {
    errors.previouslyReceivedPsychotherapy = "Your Field is required.";
    isValid = false;
  } else if (value.previouslyReceivedPsychotherapy === "Yes") {
    if (!value.receivedPsychotherapyBegin.trim()) {
      errors.receivedPsychotherapyBegin = "Your Field is required.";
      isValid = false;
    }

    if (!value.receivedPsychotherapyLong.trim()) {
      errors.receivedPsychotherapyLong = "Your Field is required.";
      isValid = false;
    }

    if (!value.attendedSessionsPsychotherapy.trim()) {
      errors.attendedSessionsPsychotherapy = "Your Field is required.";
      isValid = false;
    }

    if (!value.pastPsychotherapistsDate.trim()) {
      errors.pastPsychotherapistsDate = "Your Field is required.";
      isValid = false;
    }

    if (!value.otherPsychotherapyTreatmentList.trim()) {
      errors.otherPsychotherapyTreatmentList = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.previouslyReceivedPsychotherapy = "";
  }

  if (!value.admittedPsychiatricHospital.trim()) {
    errors.admittedPsychiatricHospital = "Your Field is required.";
    isValid = false;
  } else if (value.admittedPsychiatricHospital === "Yes") {
    if (!value.psychiatricHospitalizationReason.trim()) {
      errors.psychiatricHospitalizationReason = "Your Field is required.";
      isValid = false;
    }

    if (!value.receivedTreatment.trim()) {
      errors.receivedTreatment = "Your Field is required.";
      isValid = false;
    }

    if (!value.admittedHospitalName.trim()) {
      errors.admittedHospitalName = "Your Field is required.";
      isValid = false;
    }

    if (!value.hospitalizedLong.trim()) {
      errors.hospitalizedLong = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.admittedPsychiatricHospital = "";
  }

  if (!value.suicidalIdeation.trim()) {
    errors.suicidalIdeation = "Your Field is required.";
    isValid = false;
  }

  if (!value.suicideAttempt.trim()) {
    errors.suicideAttempt = "Your Field is required.";
    isValid = false;
  } else if (value.suicideAttempt === "Yes") {
    if (!value.suicideAllMethods.trim()) {
      errors.suicideAllMethods = "Your Field is required.";
      isValid = false;
    }

    if (!value.attemptedSuicideDate.trim()) {
      errors.attemptedSuicideDate = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.suicideAttempt = "";
  }

  if (!value.otherPsychiatricSymptoms.trim()) {
    errors.otherPsychiatricSymptoms = "Your Field is required.";
    isValid = false;
  } else if (value.otherPsychiatricSymptoms === "Yes") {
    if (!value.describeOtherPsychiatricSymptoms.trim()) {
      errors.describeOtherPsychiatricSymptoms = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.otherPsychiatricSymptoms = "";
  }

  if (!value.otherPsychotherapyTreatment.trim()) {
    errors.otherPsychotherapyTreatment = "Your Field is required.";
    isValid = false;
  } else if (value.otherPsychotherapyTreatment === "Yes") {
    if (!value.describeOtherPsychotherapyTreatment.trim()) {
      errors.describeOtherPsychotherapyTreatment = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.otherPsychotherapyTreatment = "";
  }

  if (!value.evaluatedOtherwisePsychiatrists.trim()) {
    errors.evaluatedOtherwisePsychiatrists = "Your Field is required.";
    isValid = false;
  } else if (value.evaluatedOtherwisePsychiatrists === "Yes") {
    if (!value.evaluationReason.trim()) {
      errors.evaluationReason = "Your Field is required.";
      isValid = false;
    }

    if (!value.evaluationPerformed.trim()) {
      errors.evaluationPerformed = "Your Field is required.";
      isValid = false;
    }

    if (!value.evaluationOccur.trim()) {
      errors.evaluationOccur = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.evaluatedOtherwisePsychiatrists = "";
  }

  if (!value.physicalAltercations.trim()) {
    errors.physicalAltercations = "Your Field is required.";
    isValid = false;
  } else if (value.physicalAltercations === "Yes") {
    if (!value.physicialAltercationsMany.trim()) {
      errors.physicialAltercationsMany = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.physicalAltercations = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validatePastHistory;
