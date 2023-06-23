const GAD = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.feelingNervous.trim()) {
    errors.feelingNervous = "See required fields above.";
    isValid = false;
  } else if (
    value.feelingNervous !== "Not at all" &&
    value.feltAnxiousLong === ""
  ) {
    errors.feltAnxiousLong = "See required fields above.";
    isValid = false;
  } else if (
    value.feelingNervous !== "Not at all" &&
    value.feelAnxiousOften === ""
  ) {
    errors.feelAnxiousOften = "See required fields above.";
    isValid = false;
  } else {
    errors.feelingNervous = "";
  }

  if (!value.stopControlWorring.trim()) {
    errors.stopControlWorring = "See required fields above.";
    isValid = false;
  } else {
    errors.stopControlWorring = "";
  }

  if (!value.worringDifferentThing.trim()) {
    errors.worringDifferentThing = "See required fields above.";
    isValid = false;
  } else if (value.worringDifferentThing !== "Not at all") {
    if (value.worringThing.length === 0) {
      errors.worringThing = "See required fields above.";
      isValid = false;
    } else if (
      value.worringThing.filter((item) => item === "Other").length > 0 &&
      value.describeWorringThing === ""
    ) {
      errors.describeWorringThing = "See required fields above.";
      isValid = false;
    } else if (value.specificAnxietyWorse === "") {
      errors.specificAnxietyWorse = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.worringDifferentThing = "";
  }

  if (!value.troubleRelaxing.trim()) {
    errors.troubleRelaxing = "See required fields above.";
    isValid = false;
  } else {
    errors.troubleRelaxing = "";
  }

  if (!value.restlessSitHard.trim()) {
    errors.restlessSitHard = "See required fields above.";
    isValid = false;
  } else {
    errors.restlessSitHard = "";
  }

  if (!value.easilyAnnoyed.trim()) {
    errors.easilyAnnoyed = "See required fields above.";
    isValid = false;
  } else {
    errors.easilyAnnoyed = "";
  }

  if (!value.feelingAfraidAwfulThing.trim()) {
    errors.feelingAfraidAwfulThing = "See required fields above.";
    isValid = false;
  } else {
    errors.feelingAfraidAwfulThing = "";
  }

  if (!value.panicAttacks.trim()) {
    errors.panicAttacks = "See required fields above.";
    isValid = false;
  } else if (value.panicAttacks === "Yes") {
    if (value.panicPhysicalSymptoms === "") {
      errors.panicPhysicalSymptoms = "See required fields above.";
      isValid = false;
    }
    if (value.panicAttacksLastLong === "") {
      errors.panicAttacksLastLong = "See required fields above.";
      isValid = false;
    }
    if (value.panicAttacksList === "") {
      errors.panicAttacksList = "See required fields above.";
      isValid = false;
    }
    if (value.panicAttacksSpontaneous === "") {
      errors.panicAttacksSpontaneous = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.panicAttacks = "";
  }

  if (!value.pastTraumaticEvents.trim()) {
    errors.pastTraumaticEvents = "See required fields above.";
    isValid = false;
  } else if (value.pastTraumaticEvents === "Yes") {
    if (value.traumaticEventExperience.length === 0) {
      errors.traumaticEventExperience = "See required fields above.";
      isValid = false;
    }
    if (value.describeTraumaticExperience === "") {
      errors.describeTraumaticExperience = "See required fields above.";
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
