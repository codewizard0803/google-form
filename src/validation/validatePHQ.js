const validatePHQ = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.interestThing.trim()) {
    errors.interestThing = "Your Field is required.";
    isValid = false;
  } else if (
    value.interestThing !== "Not at all" &&
    value.previouslyEnjoyable === ""
  ) {
    errors.previouslyEnjoyable = "Your Field is required.";
    isValid = false;
  } else {
    errors.interestThing = "";
  }

  if (!value.feelingDepressed.trim()) {
    errors.feelingDepressed = "Your Field is required.";
    isValid = false;
  } else if (
    value.feelingDepressed !== "Not at all" &&
    value.duringFeelingDepressed === ""
  ) {
    errors.duringFeelingDepressed = "Your Field is required.";
    isValid = false;
  } else if (
    value.feelingDepressed !== "Not at all" &&
    value.depressiveSymptomsImproved === ""
  ) {
    errors.depressiveSymptomsImproved = "Your Field is required.";
    isValid = false;
  } else if (
    value.feelingDepressed !== "Not at all" &&
    value.oftenFeelDepressed === ""
  ) {
    errors.oftenFeelDepressed = "Your Field is required.";
    isValid = false;
  } else if (
    value.feelingDepressed !== "Not at all" &&
    value.experienceDepression === ""
  ) {
    errors.experienceDepression = "Your Field is required.";
    isValid = false;
  } else {
    errors.feelingDepressed = "";
  }

  if (!value.troubleFallingAsleep.trim()) {
    errors.troubleFallingAsleep = "Your Field is required.";
    isValid = false;
  } else if (
    value.troubleFallingAsleep !== "Not at all" &&
    value.fallAsleepLong === ""
  ) {
    errors.fallAsleepLong = "Your Field is required.";
    isValid = false;
  } else if (
    value.troubleFallingAsleep !== "Not at all" &&
    value.wakeUpTimes === ""
  ) {
    errors.wakeUpTimes = "Your Field is required.";
    isValid = false;
  } else if (
    value.troubleFallingAsleep !== "Not at all" &&
    value.stayAwakeLong === ""
  ) {
    errors.stayAwakeLong = "Your Field is required.";
    isValid = false;
  } else if (
    value.troubleFallingAsleep !== "Not at all" &&
    value.awakeSleepReason === ""
  ) {
    errors.awakeSleepReason = "Your Field is required.";
    isValid = false;
  } else if (
    value.troubleFallingAsleep !== "Not at all" &&
    value.totalSleepTimes === ""
  ) {
    errors.totalSleepTimes = "Your Field is required.";
    isValid = false;
  } else {
    errors.troubleFallingAsleep = "";
  }

  if (!value.feelingEnergy.trim()) {
    errors.feelingEnergy = "Your Field is required.";
    isValid = false;
  } else {
    errors.feelingEnergy = "";
  }

  if (!value.poorAppetite.trim()) {
    errors.poorAppetite = "Your Field is required.";
    isValid = false;
  } else if (
    value.poorAppetite !== "Not at all" &&
    value.recentlyWeightPounds === ""
  ) {
    errors.recentlyWeightPounds = "Your Field is required.";
    isValid = false;
  } else if (
    value.poorAppetite !== "Not at all" &&
    value.weightGainLostLong === ""
  ) {
    errors.weightGainLostLong = "Your Field is required.";
    isValid = false;
  } else {
    errors.poorAppetite = "";
  }

  if (!value.yourselfFeelingBad.trim()) {
    errors.yourselfFeelingBad = "Your Field is required.";
    isValid = false;
  } else {
    errors.yourselfFeelingBad = "";
  }

  if (!value.troubleConCentratingThing.trim()) {
    errors.troubleConCentratingThing = "Your Field is required.";
    isValid = false;
  } else {
    errors.troubleConCentratingThing = "";
  }

  if (!value.fidgetyMoving.trim()) {
    errors.fidgetyMoving = "Your Field is required.";
    isValid = false;
  } else {
    errors.fidgetyMoving = "";
  }

  if (!value.betterOffDeadYourself.trim()) {
    errors.betterOffDeadYourself = "Your Field is required.";
    isValid = false;
  } else {
    errors.betterOffDeadYourself = "";
  }

  if (!value.deadWishWakeUp.trim()) {
    errors.deadWishWakeUp = "Your Field is required.";
    isValid = false;
  } else {
    errors.deadWishWakeUp = "";
  }

  if (!value.killingYourself.trim()) {
    errors.killingYourself = "Your Field is required.";
    isValid = false;
  } else if (value.killingYourself !== "No") {
    if (!value.killMethod.trim()) {
      errors.killMethod = "Your Field is required.";
      isValid = false;
    } else if (value.killMethod !== "No") {
      if (!value.actingIntention.trim()) {
        errors.actingIntention = "Your Field is required.";
        isValid = false;
      } else if (value.actingIntention !== "No") {
        if (!value.killIntentionCarryout.trim()) {
          errors.killIntentionCarryout = "Your Field is required.";
          isValid = false;
        }
      }
    }
  } else {
    errors.killingYourself = "";
  }

  if (!value.preparedAnythingEndYourlife.trim()) {
    errors.preparedAnythingEndYourlife = "Your Field is required.";
    isValid = false;
  } else {
    errors.preparedAnythingEndYourlife = "";
  }

  if (!value.hurtingAnyone.trim()) {
    errors.hurtingAnyone = "Your Field is required.";
    isValid = false;
  } else {
    errors.hurtingAnyone = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validatePHQ;
