const validateCurrentDailyActivites = (value) => {
  let errors = {};
  let isValid = true;

  if (!value.awakenTimeWorkDays.trim()) {
    errors.awakenTimeWorkDays = "See required fields above.";
    isValid = false;
  } else {
    errors.awakenTimeWorkDays = "";
  }

  if (!value.awakenTimeNotWorkDays.trim()) {
    errors.awakenTimeNotWorkDays = "See required fields above.";
    isValid = false;
  } else {
    errors.awakenTimeNotWorkDays = "";
  }

  if (!value.goToBed.trim()) {
    errors.goToBed = "See required fields above.";
    isValid = false;
  } else {
    errors.goToBed = "";
  }

  if (!value.fallAsleepTime.trim()) {
    errors.fallAsleepTime = "See required fields above.";
    isValid = false;
  } else {
    errors.fallAsleepTime = "";
  }

  if (!value.do6am.trim()) {
    errors.do6am = "See required fields above.";
    isValid = false;
  } else {
    errors.do6am = "";
  }

  if (!value.do8am.trim()) {
    errors.do8am = "See required fields above.";
    isValid = false;
  } else {
    errors.do8am = "";
  }

  if (!value.do10am.trim()) {
    errors.do10am = "See required fields above.";
    isValid = false;
  } else {
    errors.do10am = "";
  }

  if (!value.do12pm.trim()) {
    errors.do12pm = "See required fields above.";
    isValid = false;
  } else {
    errors.do12pm = "";
  }

  if (!value.do2pm.trim()) {
    errors.do2pm = "See required fields above.";
    isValid = false;
  } else {
    errors.do2pm = "";
  }

  if (!value.do4pm.trim()) {
    errors.do4pm = "See required fields above.";
    isValid = false;
  } else {
    errors.do4pm = "";
  }

  if (!value.do6pm.trim()) {
    errors.do6pm = "See required fields above.";
    isValid = false;
  } else {
    errors.do6pm = "";
  }

  if (!value.do8pm.trim()) {
    errors.do8pm = "See required fields above.";
    isValid = false;
  } else {
    errors.do8pm = "";
  }

  if (!value.do10pm.trim()) {
    errors.do10pm = "See required fields above.";
    isValid = false;
  } else {
    errors.do10pm = "";
  }

  if (!value.do12p6am.trim()) {
    errors.do12p6am = "See required fields above.";
    isValid = false;
  } else {
    errors.do12p6am = "";
  }

  if (!value.leisureActivities.trim()) {
    errors.leisureActivities = "See required fields above.";
    isValid = false;
  } else {
    errors.leisureActivities = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validateCurrentDailyActivites;
