const validateDevelopmentalHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.bornPlace.trim()) {
    errors.bornPlace = "See required fields above.";
    isValid = false;
  } else {
    errors.bornPlace = "";
  }

  if (!value.primarilyRaised.trim()) {
    errors.primarilyRaised = "See required fields above.";
    isValid = false;
  } else {
    errors.primarilyRaised = "";
  }

  if (!value.raisedChilhood.trim()) {
    errors.raisedChilhood = "See required fields above.";
    isValid = false;
  } else if (value.raisedChilhood !== "") {
    if (!value.describeRelationshipPerson.trim()) {
      errors.describeRelationshipPerson = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.raisedChilhood = "";
  }

  if (value.relationshipPrimaryAdults.length === 0) {
    errors.relationshipPrimaryAdults = "See required fields above.";
    isValid = false;
  } else {
    errors.relationshipPrimaryAdults = "";
  }

  if (!value.haveSiblings.trim()) {
    errors.haveSiblings = "See required fields above.";
    isValid = false;
  } else {
    errors.haveSiblings = "";
  }

  if (value.experienceAbuseChildhood.length === 0) {
    errors.experienceAbuseChildhood = "See required fields above.";
    isValid = false;
  } else {
    errors.experienceAbuseChildhood = "";
  }

  if (!value.parentsMarried.trim()) {
    errors.parentsMarried = "See required fields above.";
    isValid = false;
  } else if (value.parentsMarried === "Yes") {
    if (!value.parentsRemainMarried.trim()) {
      errors.parentsRemainMarried = "See required fields above.";
      isValid = false;
    }
  } else if (value.parentsMarried === "No") {
    if (!value.parentsDivorce.trim()) {
      errors.parentsDivorce = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.parentsMarried = "";
  }

  if (!value.motherWork.trim()) {
    errors.motherWork = "See required fields above.";
    isValid = false;
  } else if (value.motherWork === "Yes") {
    if (!value.motherJob.trim()) {
      errors.motherJob = "See required fields above.";
      isValid = false;
    }

    if (!value.motherStillWork.trim()) {
      errors.motherStillWork = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.motherWork = "";
  }

  if (!value.motherCurrentLiving.trim()) {
    errors.motherCurrentLiving = "See required fields above.";
    isValid = false;
  } else if (value.motherCurrentLiving === "No") {
    if (!value.diedMotherOld.trim()) {
      errors.diedMotherOld = "See required fields above.";
      isValid = false;
    }

    if (!value.whatDiedMother.trim()) {
      errors.whatDiedMother = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.motherCurrentLiving = "";
  }

  if (!value.fatherWork.trim()) {
    errors.fatherWork = "See required fields above.";
    isValid = false;
  } else if (value.fatherWork === "Yes") {
    if (!value.fatherJob.trim()) {
      errors.fatherJob = "See required fields above.";
      isValid = false;
    }

    if (!value.fatherStillWork.trim()) {
      errors.fatherStillWork = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.fatherWork = "";
  }

  if (!value.fatherCurrentLiving.trim()) {
    errors.fatherCurrentLiving = "See required fields above.";
    isValid = false;
  } else if (value.fatherCurrentLiving === "No") {
    if (!value.diedFatherOld.trim()) {
      errors.diedFatherOld = "See required fields above.";
      isValid = false;
    }

    if (!value.whatDiedFather.trim()) {
      errors.whatDiedFather = "See required fields above.";
      isValid = false;
    }
  } else {
    errors.fatherCurrentLiving = "";
  }

  if (!value.bestDescribesSocialLifeChild.trim()) {
    errors.bestDescribesSocialLifeChild = "See required fields above.";
    isValid = false;
  } else {
    errors.bestDescribesSocialLifeChild = "";
  }

  if (!value.enjoyActivitiesChild.trim()) {
    errors.enjoyActivitiesChild = "See required fields above.";
    isValid = false;
  } else {
    errors.enjoyActivitiesChild = "";
  }

  return {
    isValid,
    errors,
  };
};

export default validateDevelopmentalHistory;
