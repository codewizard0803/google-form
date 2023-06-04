const validatePhysicalInjury = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.firstSymptoms.trim()) {
    errors.firstSymptoms = "Your Field is required.";
    isValid = false;
  } else {
    errors.firstSymptoms = "";
  }

  if (!value.firstTreatment.trim()) {
    errors.firstTreatment = "Your Field is required.";
    isValid = false;
  } else {
    errors.firstTreatment = "";
  }

  if (!value.restYourTreatment.trim()) {
    errors.restYourTreatment = "Your Field is required.";
    isValid = false;
  } else {
    errors.restYourTreatment = "";
  }

  if (!value.doctorsList.trim()) {
    errors.doctorsList = "Your Field is required.";
    isValid = false;
  } else {
    errors.doctorsList = "";
  }

  if (!value.receivedSurgery.trim()) {
    errors.receivedSurgery = "Your Field is required.";
    isValid = false;
  } else {
    errors.receivedSurgery = "";
  }

  if (!value.surgeryList.trim()) {
    errors.surgeryList = "Your Field is required.";
    isValid = false;
  } else {
    errors.surgeryList = "";
  }

  if (!value.medicationList.trim()) {
    errors.medicationList = "Your Field is required.";
    isValid = false;
  } else {
    errors.medicationList = "";
  }

  if (!value.treatmentsHelped.trim()) {
    errors.treatmentsHelped = "Your Field is required.";
    isValid = false;
  } else {
    errors.treatmentsHelped = "";
  }

  if (!value.stillWorking.trim()) {
    errors.stillWorking = "Your Field is required.";
    isValid = false;
  } else {
    errors.stillWorking = "";
  }

  if (!value.leavingReason.trim()) {
    errors.leavingReason = "Your Field is required.";
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
