const validatePhysicalInjury = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.firstSymptoms.trim()) {
    errors.firstSymptoms = "See required fields aboveS.";
    isValid = false;
  } else {
    errors.firstSymptoms = "";
  }

  if (!value.firstTreatment.trim()) {
    errors.firstTreatment = "See required fields aboveS.";
    isValid = false;
  } else {
    errors.firstTreatment = "";
  }

  if (!value.restYourTreatment.trim()) {
    errors.restYourTreatment = "See required fields aboveS.";
    isValid = false;
  } else {
    errors.restYourTreatment = "";
  }

  if (!value.doctorsList.trim()) {
    errors.doctorsList = "See required fields aboveS.";
    isValid = false;
  } else {
    errors.doctorsList = "";
  }

  if (!value.receivedSurgery.trim()) {
    errors.receivedSurgery = "See required fields aboveS.";
    isValid = false;
  } else {
    errors.receivedSurgery = "";
  }

  if (!value.surgeryList.trim()) {
    errors.surgeryList = "See required fields aboveS.";
    isValid = false;
  } else {
    errors.surgeryList = "";
  }

  if (!value.medicationList.trim()) {
    errors.medicationList = "See required fields aboveS.";
    isValid = false;
  } else {
    errors.medicationList = "";
  }

  if (!value.treatmentsHelped.trim()) {
    errors.treatmentsHelped = "See required fields aboveS.";
    isValid = false;
  } else {
    errors.treatmentsHelped = "";
  }

  if (!value.stillWorking.trim()) {
    errors.stillWorking = "See required fields aboveS.";
    isValid = false;
  } else {
    errors.stillWorking = "";
  }

  if (!value.leavingReason.trim()) {
    errors.leavingReason = "See required fields aboveS.";
    isValid = false;
  } else {
    errors.leavingReason = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validatePhysicalInjury;
