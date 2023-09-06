/** @format */

const validatePastHistory = (value) => {
  let isValid = true;
  let errors = {};
  let textErrors = {
    describeSymptoms: [],
  };

  if (value.previouslyExperiencedSymptom.length === 0) {
    errors.previouslyExperiencedSymptom = "See required fields above.";
    isValid = false;
  } else {
    const cond = value.previouslyExperiencedSymptom?.filter(
      (item) => item.effect === ""
    );

    if (cond.length > 0) {
      cond.map((item) => {
        textErrors?.describeSymptoms.push({
          [item.condition]: "See required fields above",
        });
        isValid = false;
      });
    }
  }

  if (!value.experienceMuchEnergy.trim()) {
    errors.experienceMuchEnergy = "See required fields above.";
    isValid = false;
  } else if (value.experienceMuchEnergy === "Yes") {
    if (value.sleptFewer4Hours === "") {
      errors.sleptFewer4Hours = "See required fields above.";
      isValid = false;
    }
    if (value.lackSleepEnergy === "") {
      errors.lackSleepEnergy = "See required fields above.";
      isValid = false;
    }

    if (value.sleepFewer === "") {
      errors.sleepFewer = "See required fields above.";
      isValid = false;
    }

    if (value.mood === "") {
      errors.mood = "See required fields above.";
      isValid = false;
    } else if (value?.mood === "other") {
      if (value.describeMood === "") {
        errors.describeMood = "See required fields above.";
        isValid = false;
      }
    }

    if (value.alcoholSubstances === "") {
      errors.alcoholSubstances = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.experienceMuchEnergy = "";
  }

  if (value?.experienceFollowing.length === 0) {
    errors.experienceFollowing = "See required fields above.";
    isValid = false;
  } else if (
    value?.experienceFollowing.filter(
      (item) =>
        item ===
        "Had thoughts, behaviors, or rituals that are recurrent, intrusive, and time consuming"
    ).length >
    0 >
    0
  ) {
    if (value?.recurrentRituals === "") {
      errors.recurrentRituals = "See required fields above.";
      isValid = false;
    }

    if (value?.symptomsDrinkingAlcohol === "") {
      errors.symptomsDrinkingAlcohol = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.experienceFollowing = "";
  }

  if (!value.harmKillYourSelf.trim()) {
    errors.harmKillYourSelf = "See required fields above.";
    isValid = false;
  } else {
    errors.harmKillYourSelf = "";
  }

  if (!value.emotionalSymptomsRelationShip.trim()) {
    errors.emotionalSymptomsRelationShip = "See required fields above.";
    isValid = false;
  } else {
    errors.emotionalSymptomsRelationShip = "";
  }

  if (!value.firstFeelDepressed.trim()) {
    errors.firstFeelDepressed = "See required fields above.";
    isValid = false;
  } else {
    errors.firstFeelDepressed = "";
  }

  if (!value.feelHighLevelAnxiety.trim()) {
    errors.feelHighLevelAnxiety = "See required fields above.";
    isValid = false;
  } else {
    errors.feelHighLevelAnxiety = "";
  }

  if (value.diagnosedMentalHealth.length === 0) {
    errors.diagnosedMentalHealth = "See required fields above.";
    isValid = false;
  } else if (
    value.diagnosedMentalHealth.filter((item) => item === "other").length > 0 &&
    value.describeHealthCondition === ""
  ) {
    errors.describeHealthCondition = "See required fields above.";
    isValid = false;
  } else {
    errors.diagnosedMentalHealth = "";
  }

  if (!value.otherMedications.trim()) {
    errors.otherMedications = "See required fields above.";
    isValid = false;
  } else if (value.otherMedications === "Yes") {
    if (!value.pastMedicationName.trim()) {
      errors.pastMedicationName = "See required fields above.";
      isValid = false;
    }

    if (!value.startedMedicationDate.trim()) {
      errors.startedMedicationDate = "See required fields above.";
      isValid = false;
    }

    if (!value.stopedMedicationDate.trim()) {
      errors.stopedMedicationDate = "See required fields above.";
      isValid = false;
    }

    if (value.pastPsychiatricMedication.length === 0) {
      errors.pastPsychiatricMedication = "See required fields above.";
      isValid = false;
    }

    if (value.stopedPsychiatricMedicationsReason.length === 0) {
      errors.stopedPsychiatricMedicationsReason = "See required fields above.";
      isValid = false;
    }

    if (!value.prescribeThisMedication.trim()) {
      errors.prescribeThisMedication = "See required fields above.";
      isValid = false;
    }

    if (!value.prescribeThisMedicationNameDate.trim()) {
      errors.prescribeThisMedicationNameDate = "See required fields above.";
      isValid = false;
    }

    if (!value.whatClinicWorked.trim()) {
      errors.whatClinicWorked = "See required fields above.";
      isValid = false;
    }

    if (!value.otherPsychiatrists.trim()) {
      errors.otherPsychiatrists = "See required fields above.";
      isValid = false;
    }

    if (!value.thisPsychiatristSeeDate.trim()) {
      errors.thisPsychiatristSeeDate = "See required fields above.";
      isValid = false;
    }

    if (!value.attendedSessionsPsychiatrist.trim()) {
      errors.attendedSessionsPsychiatrist = "See required fields above.";
      isValid = false;
    }
  }

  if (!value.previouslyReceivedPsychotherapy.trim()) {
    errors.previouslyReceivedPsychotherapy = "See required fields above.";
    isValid = false;
  } else if (value.previouslyReceivedPsychotherapy === "Yes") {
    if (!value.receivedPsychotherapyBegin.trim()) {
      errors.receivedPsychotherapyBegin = "See required fields above.";
      isValid = false;
    }

    if (!value.receivedPsychotherapyLong.trim()) {
      errors.receivedPsychotherapyLong = "See required fields above.";
      isValid = false;
    }

    if (!value.attendedSessionsPsychotherapy.trim()) {
      errors.attendedSessionsPsychotherapy = "See required fields above.";
      isValid = false;
    }

    if (!value.pastPsychotherapistsDate.trim()) {
      errors.pastPsychotherapistsDate = "See required fields above.";
      isValid = false;
    }

    if (!value.otherPsychotherapyTreatmentList.trim()) {
      errors.otherPsychotherapyTreatmentList = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.previouslyReceivedPsychotherapy = "";
  }

  if (!value.admittedPsychiatricHospital.trim()) {
    errors.admittedPsychiatricHospital = "See required fields above.";
    isValid = false;
  } else if (value.admittedPsychiatricHospital === "Yes") {
    if (value.psychiatricHospitalizationReason.length === 0) {
      errors.psychiatricHospitalizationReason = "See required fields above.";
      isValid = false;
    }

    if (value.receivedTreatment.length === 0) {
      errors.receivedTreatment = "See required fields above.";
      isValid = false;
    }

    if (!value.admittedHospitalName.trim()) {
      errors.admittedHospitalName = "See required fields above.";
      isValid = false;
    }

    if (!value.hospitalizedDate.trim()) {
      errors.hospitalizedDate = "See required fields above.";
      isValid = false;
    }

    if (!value.hospitalizedLong.trim()) {
      errors.hospitalizedLong = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.admittedPsychiatricHospital = "";
  }

  if (!value.suicidalIdeation.trim()) {
    errors.suicidalIdeation = "See required fields above.";
    isValid = false;
  }

  if (!value.suicideAttempt.trim()) {
    errors.suicideAttempt = "See required fields above.";
    isValid = false;
  } else if (value.suicideAttempt === "Yes") {
    if (!value.suicideAllMethods.trim()) {
      errors.suicideAllMethods = "See required fields above.";
      isValid = false;
    }

    if (!value.attemptedSuicideDate.trim()) {
      errors.attemptedSuicideDate = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.suicideAttempt = "";
  }

  if (!value.otherPsychiatricSymptoms.trim()) {
    errors.otherPsychiatricSymptoms = "See required fields above.";
    isValid = false;
  } else if (value.otherPsychiatricSymptoms === "Yes") {
    if (!value.describeOtherPsychiatricSymptoms.trim()) {
      errors.describeOtherPsychiatricSymptoms = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.otherPsychiatricSymptoms = "";
  }

  if (!value.otherPsychotherapyTreatment.trim()) {
    errors.otherPsychotherapyTreatment = "See required fields above.";
    isValid = false;
  } else if (value.otherPsychotherapyTreatment === "Yes") {
    if (!value.describeOtherPsychotherapyTreatment.trim()) {
      errors.describeOtherPsychotherapyTreatment = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.otherPsychotherapyTreatment = "";
  }

  if (!value.evaluatedOtherwisePsychiatrists.trim()) {
    errors.evaluatedOtherwisePsychiatrists = "See required fields above.";
    isValid = false;
  } else if (value.evaluatedOtherwisePsychiatrists === "Yes") {
    if (!value.evaluationReason.trim()) {
      errors.evaluationReason = "See required fields above.";
      isValid = false;
    }

    if (!value.evaluationPerformed.trim()) {
      errors.evaluationPerformed = "See required fields above.";
      isValid = false;
    }

    if (!value.evaluationOccur.trim()) {
      errors.evaluationOccur = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.evaluatedOtherwisePsychiatrists = "";
  }

  if (!value.physicalAltercations.trim()) {
    errors.physicalAltercations = "See required fields above.";
    isValid = false;
  } else if (value.physicalAltercations === "Yes") {
    if (!value.physicialAltercationsMany.trim()) {
      errors.physicialAltercationsMany = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.physicalAltercations = "";
  }

  return {
    isValid,
    errors,
    textErrors,
  };
};

export default validatePastHistory;
