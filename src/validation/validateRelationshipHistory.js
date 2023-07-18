/** @format */

const validateRelationshipHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.currentlyIntimateRelationship.trim()) {
    errors.currentlyIntimateRelationship = "See required fields above.";
    isValid = false;
  } else if (value.currentlyIntimateRelationship === "Yes") {
    if (!value.currentlyMarried.trim()) {
      errors.currentlyMarried = "See required fields above.";
      isValid = false;
    }

    const currentInvolveRegex = /^[1-9][0-9]*$/;

    if (!value.currentRelationshipInvolve.trim()) {
      errors.currentRelationshipInvolve = "See required fields above.";
      isValid = false;
    } else if (!currentInvolveRegex.test(value.currentRelationshipInvolve)) {
      errors.currentRelationshipInvolve =
        "This Field is invalid. Please Enter Only Numbers";
    }

    if (!value.describeIntimateRelationship.length === 0) {
      errors.describeIntimateRelationship = "See required fields above.";
      isValid = false;
    }

    if (!value.PartnerOccupation.trim()) {
      errors.PartnerOccupation = "See required fields above.";
      isValid = false;
    }

    if (!value.sufferPsychiatricConditions.trim()) {
      errors.sufferPsychiatricConditions = "See required fields above.";
      isValid = false;
    }

    if (!value.stressfulPsychiatricConditions.trim()) {
      errors.stressfulPsychiatricConditions = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.currentlyIntimateRelationship = "";
  }

  if (!value.marriedNumber.trim()) {
    errors.marriedNumber = "See required fields above.";
    isValid = false;
  } else {
    errors.marriedNumber = "";
  }

  if (!value.longTermRelationshipsLast.trim()) {
    errors.longTermRelationshipsLast = "See required fields above.";
    isValid = false;
  } else {
    errors.longTermRelationshipsLast = "";
  }

  if (!value.reasonPreviousRelationships.trim()) {
    errors.reasonPreviousRelationships = "See required fields above.";
    isValid = false;
  } else {
    errors.reasonPreviousRelationships = "";
  }

  if (!value.domesticViolence.trim()) {
    errors.domesticViolence = "See required fields above.";
    isValid = false;
  } else {
    errors.domesticViolence = "";
  }

  if (!value.haveChildren.trim()) {
    errors.haveChildren = "See required fields above.";
    isValid = false;
  } else if (value.haveChildren === "Yes") {
    if (!value.childrenNumberAndAge.trim()) {
      errors.childrenNumberAndAge = "See required fields above.";
      isValid = false;
    }
    if (!value.childrenDoingSchool.trim()) {
      errors.childrenDoingSchool = "See required fields above.";
      isValid = false;
    }
    if (!value.relationshipChildren.trim()) {
      errors.relationshipChildren = "See required fields above.";
      isValid = false;
    }
    if (!value.childrenHealthIssues.trim()) {
      errors.childrenHealthIssues = "See required fields above.";
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
