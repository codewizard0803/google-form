const validateRelationshipHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.currentlyIntimateRelationship.trim()) {
    errors.currentlyIntimateRelationship = "Your Field is required.";
    isValid = false;
  } else if (value.currentlyIntimateRelationship === "Yes") {
    if (!value.currentlyMarried.trim()) {
      errors.currentlyMarried = "Your Field is required.";
      isValid = false;
    }

    const currentInvolveRegex = /^[1-9][0-9]*$/;

    if (!value.currentRelationshipInvolve.trim()) {
      errors.currentRelationshipInvolve = "Your Field is required.";
      isValid = false;
    } else if (!currentInvolveRegex.test(value.currentRelationshipInvolve)) {
      errors.currentRelationshipInvolve =
        "This Field is invalid. Please Enter Only Numbers";
    }

    if (!value.describeIntimateRelationship.trim()) {
      errors.describeIntimateRelationship = "Your Field is required.";
      isValid = false;
    }

    if (!value.PartnerOccupation.trim()) {
      errors.PartnerOccupation = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.currentlyIntimateRelationship = "";
  }

  if (!value.marriedNumber.trim()) {
    errors.marriedNumber = "Your Field is required.";
    isValid = false;
  } else {
    errors.marriedNumber = "";
  }

  if (!value.longTermRelationshipsLast.trim()) {
    errors.longTermRelationshipsLast = "Your Field is required.";
    isValid = false;
  } else {
    errors.longTermRelationshipsLast = "";
  }

  if (!value.reasonPreviousRelationships.trim()) {
    errors.reasonPreviousRelationships = "Your Field is required.";
    isValid = false;
  } else {
    errors.reasonPreviousRelationships = "";
  }

  if (!value.domesticViolence.trim()) {
    errors.domesticViolence = "Your Field is required.";
    isValid = false;
  } else {
    errors.domesticViolence = "";
  }

  if (!value.haveChildren.trim()) {
    errors.haveChildren = "Your Field is required.";
    isValid = false;
  } else if (value.haveChildren === "Yes") {
    if (!value.childrenNumberAndAge.trim()) {
      errors.childrenNumberAndAge = "Your Field is required.";
      isValid = false;
    }
    if (!value.childrenDoingSchool.trim()) {
      errors.childrenDoingSchool = "Your Field is required.";
      isValid = false;
    }
    if (!value.relationshipChildren.trim()) {
      errors.relationshipChildren = "Your Field is required.";
      isValid = false;
    }
    if (!value.childrenHealthIssues.trim()) {
      errors.childrenHealthIssues = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.haveChildren = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validateRelationshipHistory;
