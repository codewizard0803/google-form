const validateCurrentDailyActivites = (value) => {
  let errors = {};
  let isValid = true;

  if (!value.awakenTimeWorkDays.trim()) {
    errors.awakenTimeWorkDays = "Your Field is required.";
    isValid = false;
  } else {
    errors.awakenTimeWorkDays = "";
  }

  if (!value.awakenTimeNotWorkDays.trim()) {
    errors.awakenTimeNotWorkDays = "Your Field is required.";
    isValid = false;
  } else {
    errors.awakenTimeNotWorkDays = "";
  }

  if (!value.goToBed.trim()) {
    errors.goToBed = "Your Field is required.";
    isValid = false;
  } else {
    errors.goToBed = "";
  }

  if (!value.fallAsleepTime.trim()) {
    errors.fallAsleepTime = "Your Field is required.";
    isValid = false;
  } else {
    errors.fallAsleepTime = "";
  }

  if (!value.do6am.trim()) {
    errors.do6am = "Your Field is required.";
    isValid = false;
  } else {
    errors.do6am = "";
  }

  if (!value.do8am.trim()) {
    errors.do8am = "Your Field is required.";
    isValid = false;
  } else {
    errors.do8am = "";
  }

  if (!value.do10am.trim()) {
    errors.do10am = "Your Field is required.";
    isValid = false;
  } else {
    errors.do10am = "";
  }

  if (!value.do12pm.trim()) {
    errors.do12pm = "Your Field is required.";
    isValid = false;
  } else {
    errors.do12pm = "";
  }

  if (!value.do2pm.trim()) {
    errors.do2pm = "Your Field is required.";
    isValid = false;
  } else {
    errors.do2pm = "";
  }

  if (!value.do4pm.trim()) {
    errors.do4pm = "Your Field is required.";
    isValid = false;
  } else {
    errors.do4pm = "";
  }

  if (!value.do6pm.trim()) {
    errors.do6pm = "Your Field is required.";
    isValid = false;
  } else {
    errors.do6pm = "";
  }

  if (!value.do8pm.trim()) {
    errors.do8pm = "Your Field is required.";
    isValid = false;
  } else {
    errors.do8pm = "";
  }

  if (!value.do10pm.trim()) {
    errors.do10pm = "Your Field is required.";
    isValid = false;
  } else {
    errors.do10pm = "";
  }

  if (!value.do12p6am.trim()) {
    errors.do12p6am = "Your Field is required.";
    isValid = false;
  } else {
    errors.do12p6am = "";
  }

  if (!value.leisureActivities.trim()) {
    errors.leisureActivities = "Your Field is required.";
    isValid = false;
  } else {
    errors.leisureActivities = "";
  }

  if (!value.comprehendingInstructions.trim()) {
    errors.comprehendingInstructions = "Your Field is required.";
    isValid = false;
  } else {
    errors.comprehendingInstructions = "";
  }

  if (!value.performingRepetitiveTasks.trim()) {
    errors.performingRepetitiveTasks = "Your Field is required.";
    isValid = false;
  } else {
    errors.performingRepetitiveTasks = "";
  }

  if (!value.maintaininPace.trim()) {
    errors.maintaininPace = "Your Field is required.";
    isValid = false;
  } else {
    errors.maintaininPace = "";
  }

  if (!value.performingComplexTasks.trim()) {
    errors.performingComplexTasks = "Your Field is required.";
    isValid = false;
  } else {
    errors.performingComplexTasks = "";
  }

  if (!value.relatingReceivingInstructions.trim()) {
    errors.relatingReceivingInstructions = "Your Field is required.";
    isValid = false;
  } else {
    errors.relatingReceivingInstructions = "";
  }

  if (!value.makingGeneralizations.trim()) {
    errors.makingGeneralizations = "Your Field is required.";
    isValid = false;
  } else {
    errors.makingGeneralizations = "";
  }

  if (!value.acceptingResponsibility.trim()) {
    errors.acceptingResponsibility = "Your Field is required.";
    isValid = false;
  } else {
    errors.acceptingResponsibility = "";
  }

  if (!value.anyActivitiesListBefore.trim()) {
    errors.anyActivitiesListBefore = "Your Field is required.";
    isValid = false;
  } else {
    errors.anyActivitiesListBefore = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validateCurrentDailyActivites;
