const validateDevelopmentalHistory = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.bornPlace.trim()) {
    errors.bornPlace = "Your Field is required.";
    isValid = false;
  } else {
    errors.bornPlace = "";
  }

  if (!value.primarilyRaised.trim()) {
    errors.primarilyRaised = "Your Field is required.";
    isValid = false;
  } else {
    errors.primarilyRaised = "";
  }

  if (!value.raisedChilhood.trim()) {
    errors.raisedChilhood = "Your Field is required.";
    isValid = false;
  } else if (value.raisedChilhood !== "") {
    if (!value.describeRelationshipPerson.trim()) {
      errors.describeRelationshipPerson = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.raisedChilhood = "";
  }

  if (!value.haveSiblings.trim()) {
    errors.haveSiblings = "Your Field is required.";
    isValid = false;
  } else {
    errors.haveSiblings = "";
  }

  if (value.experienceAbuseChildhood.length === 0) {
    errors.experienceAbuseChildhood = "Your Field is required.";
    isValid = false;
  } else {
    errors.experienceAbuseChildhood = "";
  }

  if (!value.parentsMarried.trim()) {
    errors.parentsMarried = "Your Field is required.";
    isValid = false;
  } else if (value.parentsMarried === "Yes") {
    if (!value.parentsRemainMarried.trim()) {
      errors.parentsRemainMarried = "Your Field is required.";
      isValid = false;
    }

    if (!value.parentsDivorce.trim()) {
      errors.parentsDivorce = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.parentsMarried = "";
  }

  if (!value.motherWork.trim()) {
    errors.motherWork = "Your Field is required.";
    isValid = false;
  } else if (value.motherWork === "Yes") {
    if (!value.motherJob.trim()) {
      errors.motherJob = "Your Field is required.";
      isValid = false;
    }

    if (!value.motherStillWork.trim()) {
      errors.motherStillWork = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.motherWork = "";
  }

  if (!value.motherCurrentLiving.trim()) {
    errors.motherCurrentLiving = "Your Field is required.";
    isValid = false;
  } else if (value.motherCurrentLiving === "No") {
    if (!value.diedMotherOld.trim()) {
      errors.diedMotherOld = "Your Field is required.";
      isValid = false;
    }

    if (!value.whatDiedMother.trim()) {
      errors.whatDiedMother = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.motherCurrentLiving = "";
  }

  if (!value.fatherWork.trim()) {
    errors.fatherWork = "Your Field is required.";
    isValid = false;
  } else if (value.fatherWork === "Yes") {
    if (!value.fatherJob.trim()) {
      errors.fatherJob = "Your Field is required.";
      isValid = false;
    }

    if (!value.fatherStillWork.trim()) {
      errors.fatherStillWork = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.fatherWork = "";
  }

  if (!value.fatherCurrentLiving.trim()) {
    errors.fatherCurrentLiving = "Your Field is required.";
    isValid = false;
  } else if (value.fatherCurrentLiving === "No") {
    if (!value.diedFatherOld.trim()) {
      errors.diedFatherOld = "Your Field is required.";
      isValid = false;
    }

    if (!value.whatDiedFather.trim()) {
      errors.whatDiedFather = "Your Field is required.";
      isValid = false;
    }
  } else {
    errors.fatherCurrentLiving = "";
  }

  if (!value.bestDescribesSocialLifeChild.trim()) {
    errors.bestDescribesSocialLifeChild = "Your Field is required.";
    isValid = false;
  } else {
    errors.bestDescribesSocialLifeChild = "";
  }

  if (!value.enjoyActivitiesChild.trim()) {
    errors.enjoyActivitiesChild = "Your Field is required.";
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
