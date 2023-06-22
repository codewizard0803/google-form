const validatePHQ = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.interestThing.trim()) {
    errors.interestThing = "See required fields above.";
    isValid = false;
  } else if (
    value.interestThing !== "Not at all" &&
    value.previouslyEnjoyable === ""
  ) {
    errors.previouslyEnjoyable = "See required fields above.";
    isValid = false;
  } else {
    errors.interestThing = "";
  }

  if (!value.feelingDepressed.trim()) {
    errors.feelingDepressed = "See required fields above.";
    isValid = false;
  } else if (
    value.feelingDepressed !== "Not at all" &&
    value.duringFeelingDepressed === ""
  ) {
    errors.duringFeelingDepressed = "See required fields above.";
    isValid = false;
  } else if (
    value.feelingDepressed !== "Not at all" &&
    value.depressiveSymptomsImproved === ""
  ) {
    errors.depressiveSymptomsImproved = "See required fields above.";
    isValid = false;
  } else if (
    value.feelingDepressed !== "Not at all" &&
    value.oftenFeelDepressed === ""
  ) {
    errors.oftenFeelDepressed = "See required fields above.";
    isValid = false;
  } else if (
    value.feelingDepressed !== "Not at all" &&
    value.experienceDepression === ""
  ) {
    errors.experienceDepression = "See required fields above.";
    isValid = false;
  } else {
    errors.feelingDepressed = "";
  }

  if (!value.troubleFallingAsleep.trim()) {
    errors.troubleFallingAsleep = "See required fields above.";
    isValid = false;
  } else if (
    value.troubleFallingAsleep !== "Not at all" &&
    value.fallAsleepLong === ""
  ) {
    errors.fallAsleepLong = "See required fields above.";
    isValid = false;
  } else if (
    value.troubleFallingAsleep !== "Not at all" &&
    value.wakeUpTimes === ""
  ) {
    errors.wakeUpTimes = "See required fields above.";
    isValid = false;
  } else if (
    value.troubleFallingAsleep !== "Not at all" &&
    value.stayAwakeLong === ""
  ) {
    errors.stayAwakeLong = "See required fields above.";
    isValid = false;
  } else if (
    value.troubleFallingAsleep !== "Not at all" &&
    value.awakeSleepReason === ""
  ) {
    errors.awakeSleepReason = "See required fields above.";
    isValid = false;
  } else if (
    value.troubleFallingAsleep !== "Not at all" &&
    value.totalSleepTimes === ""
  ) {
    errors.totalSleepTimes = "See required fields above.";
    isValid = false;
  } else {
    errors.troubleFallingAsleep = "";
  }

  if (!value.feelingEnergy.trim()) {
    errors.feelingEnergy = "See required fields above.";
    isValid = false;
  } else {
    errors.feelingEnergy = "";
  }

  if (!value.poorAppetite.trim()) {
    errors.poorAppetite = "See required fields above.";
    isValid = false;
  } else if (
    value.poorAppetite !== "Not at all" &&
    value.recentlyWeightPounds === ""
  ) {
    errors.recentlyWeightPounds = "See required fields above.";
    isValid = false;
  } else if (
    value.poorAppetite !== "Not at all" &&
    value.weightGainLostLong === ""
  ) {
    errors.weightGainLostLong = "See required fields above.";
    isValid = false;
  } else {
    errors.poorAppetite = "";
  }

  if (!value.yourselfFeelingBad.trim()) {
    errors.yourselfFeelingBad = "See required fields above.";
    isValid = false;
  } else {
    errors.yourselfFeelingBad = "";
  }

  if (!value.troubleConCentratingThing.trim()) {
    errors.troubleConCentratingThing = "See required fields above.";
    isValid = false;
  } else {
    errors.troubleConCentratingThing = "";
  }

  if (!value.fidgetyMoving.trim()) {
    errors.fidgetyMoving = "See required fields above.";
    isValid = false;
  } else {
    errors.fidgetyMoving = "";
  }

  if (!value.betterOffDeadYourself.trim()) {
    errors.betterOffDeadYourself = "See required fields above.";
    isValid = false;
  } else {
    errors.betterOffDeadYourself = "";
  }

  if (!value.deadWishWakeUp.trim()) {
    errors.deadWishWakeUp = "See required fields above.";
    isValid = false;
  } else {
    errors.deadWishWakeUp = "";
  }

  if (!value.killingYourself.trim()) {
    errors.killingYourself = "See required fields above.";
    isValid = false;
  } else if (value.killingYourself !== "No") {
    if (!value.killMethod.trim()) {
      errors.killMethod = "See required fields above.";
      isValid = false;
    } else if (value.killMethod !== "No") {
      if (!value.actingIntention.trim()) {
        errors.actingIntention = "See required fields above.";
        isValid = false;
      } else if (value.actingIntention !== "No") {
        if (!value.killIntentionCarryout.trim()) {
          errors.killIntentionCarryout = "See required fields above.";
          isValid = false;
        }
      }
    }
  } else {
    errors.killingYourself = "";
  }

  if (!value.preparedAnythingEndYourlife.trim()) {
    errors.preparedAnythingEndYourlife = "See required fields above.";
    isValid = false;
  } else {
    errors.preparedAnythingEndYourlife = "";
  }

  if (!value.hurtingAnyone.trim()) {
    errors.hurtingAnyone = "See required fields above.";
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
