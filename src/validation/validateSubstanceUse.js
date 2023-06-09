const validateSubstanceUse = (value) => {
  let isValid = true;
  let errors = {};
  let textErrors = {
    eachSubstanceListAmount: [],
    eachSubstanceListStartedOldAge: [],
  };

  if (value.followingSubstances.length === 0) {
    errors.followingSubstances = "Your Field is required.";
    isValid = false;
  } else if (value.followingSubstances.length > 0) {
    if (value.currentlySubstance.length === 0) {
      errors.currentlySubstance = "Your Field is required.";
      isValid = false;
    }

    if (value.eachSubstanceList.length === 0) {
      errors.eachSubstanceList = "Your Field is required.";
      isValid = false;
    } else {
      const cond = value.eachSubstanceList?.filter(
        (item) => item.amount === ""
      );
      if (cond.length > 0) {
        cond.map((item) => {
          textErrors?.eachSubstanceListAmount.push({
            [item.condition]: "Your Field is required",
          });
          isValid = false;
        });
      }
    }

    if (value.eachSubstanceListStartedOld.length === 0) {
      errors.eachSubstanceListStartedOld = "Your Field is required.";
      isValid = false;
    } else {
      const cond = value.eachSubstanceListStartedOld?.filter(
        (item) => item.age === ""
      );
      if (cond.length > 0) {
        cond.map((item) => {
          textErrors?.eachSubstanceListStartedOldAge.push({
            [item.condition]: "Your Field is required",
          });
          isValid = false;
        });
      }
    }

    if (value.toleranceFollowingSubstances.length === 0) {
      errors.toleranceFollowingSubstances = "Your Field is required.";
      isValid = false;
    }

    if (value.withdrawalFollowingSubstances.length === 0) {
      errors.withdrawalFollowingSubstances = "Your Field is required.";
      isValid = false;
    }

    if (value.regardingAlcoholAnyFollowing.length === 0) {
      errors.regardingAlcoholAnyFollowing = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.followingSubstances = "";
  }

  if (!value.enrolledTreatmentProgram.trim()) {
    errors.enrolledTreatmentProgram = "Your Field is required.";
    isValid = false;
  } else if (value.enrolledTreatmentProgram === "Yes") {
    if (!value.completeTreatmentProgram.trim()) {
      errors.completeTreatmentProgram = "Your Field is required.";
      isValid = false;
    }

    if (!value.treatmentLastedDateFrom.trim()) {
      errors.treatmentLastedDateFrom = "Your Field is required.";
      isValid = false;
    }

    if (!value.treatmentLastedDateTo.trim()) {
      errors.treatmentLastedDateTo = "Your Field is required.";
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

    if (!value.remainedTreatmentClean.trim()) {
      errors.remainedTreatmentClean = "Your Field is required.";
      isValid = false;
    }

    if (!value.remainedTreatmentCleanLongest.trim()) {
      errors.remainedTreatmentCleanLongest = "Your Field is required.";
      isValid = false;
    }

    if (!value.previouslyDescribedPsychiatricClean.trim()) {
      errors.previouslyDescribedPsychiatricClean = "Your Field is required.";
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
