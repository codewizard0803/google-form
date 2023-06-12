const GAD = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.feelingNervous.trim()) {
    errors.feelingNervous = "Your Field is required.";
    isValid = false;
  } else if (
    value.feelingNervous !== "Not at all" &&
    value.feltAnxiousLong === ""
  ) {
    errors.feltAnxiousLong = "Your Field is required.";
    isValid = false;
  } else if (
    value.feelingNervous !== "Not at all" &&
    value.feelAnxiousOften === ""
  ) {
    errors.feelAnxiousOften = "Your Field is required.";
    isValid = false;
  } else {
    errors.feelingNervous = "";
  }

  if (!value.stopControlWorring.trim()) {
    errors.stopControlWorring = "Your Field is required.";
    isValid = false;
  } else {
    errors.stopControlWorring = "";
  }

  if (!value.worringDifferentThing.trim()) {
    errors.worringDifferentThing = "Your Field is required.";
    isValid = false;
  } else if (value.worringDifferentThing !== "Not at all") {
    if (value.worringThing === "") {
      errors.worringThing = "Your Field is required.";
      isValid = false;
    } else if (
      value.worringThing === "Other" &&
      value.describeWorringThing === ""
    ) {
      errors.describeWorringThing = "Your Field is required.";
      isValid = false;
    } else if (value.specificAnxietyWorse === "") {
      errors.specificAnxietyWorse = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.worringDifferentThing = "";
  }

  if (!value.troubleRelaxing.trim()) {
    errors.troubleRelaxing = "Your Field is required.";
    isValid = false;
  } else {
    errors.troubleRelaxing = "";
  }

  if (!value.restlessSitHard.trim()) {
    errors.restlessSitHard = "Your Field is required.";
    isValid = false;
  } else {
    errors.restlessSitHard = "";
  }

  if (!value.easilyAnnoyed.trim()) {
    errors.easilyAnnoyed = "Your Field is required.";
    isValid = false;
  } else {
    errors.easilyAnnoyed = "";
  }

  if (!value.feelingAfraidAwfulThing.trim()) {
    errors.feelingAfraidAwfulThing = "Your Field is required.";
    isValid = false;
  } else {
    errors.feelingAfraidAwfulThing = "";
  }

  if (!value.panicAttacks.trim()) {
    errors.panicAttacks = "Your Field is required.";
    isValid = false;
  } else if (value.panicAttacks === "Yes") {
    if (value.panicPhysicalSymptoms === "") {
      errors.panicPhysicalSymptoms = "Your Field is required.";
      isValid = false;
    }
    if (value.panicAttacksLastLong === "") {
      errors.panicAttacksLastLong = "Your Field is required.";
      isValid = false;
    }
    if (value.panicAttacksList === "") {
      errors.panicAttacksList = "Your Field is required.";
      isValid = false;
    }
    if (value.panicAttacksSpontaneous === "") {
      errors.panicAttacksSpontaneous = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.panicAttacks = "";
  }

  if (!value.pastTraumaticEvents.trim()) {
    errors.pastTraumaticEvents = "Your Field is required.";
    isValid = false;
  } else if (value.pastTraumaticEvents === "Yes") {
    if (value.traumaticEventExperience === "") {
      errors.traumaticEventExperience = "Your Field is required.";
      isValid = false;
    }
    if (value.describeTraumaticExperience === "") {
      errors.describeTraumaticExperience = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.pastTraumaticEvents = "";
  }

  return {
    isValid,
    errors,
  };
};

export default GAD;
