const validateSubstanceUse = (value) => {
  let isValid = true;
  let errors = {};
  let textErrors = {
    eachSubstanceListAmount: [],
    eachSubstanceListStartedOldAge: [],
    eachSubstanceLastDate: [],
  };

  if (value.followingSubstances.length === 0) {
    errors.followingSubstances = "See required fields above.";
    isValid = false;
  } else if (value.followingSubstances.length > 0) {
    if (value.currentlySubstance.length === 0) {
      errors.currentlySubstance = "See required fields above.";
      isValid = false;
    }

    if (value.eachSubstanceList.length === 0) {
      errors.eachSubstanceList = "See required fields above.";
      isValid = false;
    } else {
      const cond = value.eachSubstanceList?.filter(
        (item) => item.effect === ""
      );
      if (cond.length > 0) {
        cond.map((item) => {
          textErrors?.eachSubstanceListAmount.push({
            [item.condition]: "See required fields above",
          });
          isValid = false;
        });
      }
    }

    if (value.eachSubstanceListStartedOld.length === 0) {
      errors.eachSubstanceListStartedOld = "See required fields above.";
      isValid = false;
    } else {
      const cond = value.eachSubstanceListStartedOld?.filter(
        (item) => item.effect === ""
      );
      if (cond.length > 0) {
        cond.map((item) => {
          textErrors?.eachSubstanceListStartedOldAge.push({
            [item.condition]: "See required fields above",
          });
          isValid = false;
        });
      }
    }

    if (value.eachSubstanceLast.length === 0) {
      errors.eachSubstanceLast = "See required fields above.";
      isValid = false;
    } else {
      const cond = value.eachSubstanceLast?.filter(
        (item) => item.effect === ""
      );
      if (cond.length > 0) {
        cond.map((item) => {
          textErrors?.eachSubstanceLastDate.push({
            [item.condition]: "See required fields above",
          });
          isValid = false;
        });
      }
    }

    if (value.toleranceFollowingSubstances.length === 0) {
      errors.toleranceFollowingSubstances = "See required fields above.";
      isValid = false;
    }

    if (value.withdrawalFollowingSubstances.length === 0) {
      errors.withdrawalFollowingSubstances = "See required fields above.";
      isValid = false;
    }

    if (value.regardingAlcoholAnyFollowing.length === 0) {
      errors.regardingAlcoholAnyFollowing = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.followingSubstances = "";
  }

  if (!value.enrolledTreatmentProgram.trim()) {
    errors.enrolledTreatmentProgram = "See required fields above.";
    isValid = false;
  } else if (value.enrolledTreatmentProgram === "Yes") {
    if (!value.completeTreatmentProgram.trim()) {
      errors.completeTreatmentProgram = "See required fields above.";
      isValid = false;
    }

    if (!value.treatmentLastedDateFrom.trim()) {
      errors.treatmentLastedDateFrom = "See required fields above.";
      isValid = false;
    }

    if (!value.treatmentLastedDateTo.trim()) {
      errors.treatmentLastedDateTo = "See required fields above.";
      isValid = false;
    }

    if (
      value.treatmentLastedDateTo.trim() &&
      value.treatmentLastedDateFrom.trim()
    ) {
      const d1 = new Date(value.treatmentLastedDateFrom);
      const d2 = new Date(value.treatmentLastedDateTo);
      if (d1 > d2) {
        errors.treatmentLastedDateTo = "This Date is invalid.";
        isValid = false;
      } else {
        errors.treatmentLastedDateTo = "";
      }
    }

    if (!value.cleanSoberLastedFrom.trim()) {
      errors.cleanSoberLastedFrom = "See required fields above.";
      isValid = false;
    }

    if (!value.cleanSoberLastedTo.trim()) {
      errors.cleanSoberLastedTo = "See required fields above.";
      isValid = false;
    }

    if (value.cleanSoberLastedTo.trim() && value.cleanSoberLastedFrom.trim()) {
      const d1 = new Date(value.cleanSoberLastedFrom);
      const d2 = new Date(value.cleanSoberLastedTo);
      if (d1 > d2) {
        errors.cleanSoberLastedTo = "This Date is invalid.";
        isValid = false;
      } else {
        errors.cleanSoberLastedTo = "";
      }
    }

    if (!value.remainedTreatmentClean.trim()) {
      errors.remainedTreatmentClean = "See required fields above.";
      isValid = false;
    }

    if (!value.remainedTreatmentCleanLongest.trim()) {
      errors.remainedTreatmentCleanLongest = "See required fields above.";
      isValid = false;
    }

    if (!value.previouslyDescribedPsychiatricClean.trim()) {
      errors.previouslyDescribedPsychiatricClean = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.enrolledTreatmentProgram = "";
  }

  return {
    isValid,
    errors,
    textErrors,
  };
};

export default validateSubstanceUse;
