const ValidateDemoGraphic = (value) => {
  let isValid = true;
  let errors = {};

  if (!value.fullName.trim()) {
    errors.name = "Full Name is required.";
    isValid = false;
  } else {
    errors.name = "";
  }

  const birthRegex = /^[1-9][0-9]*$/;

  if (!value.birth.trim()) {
    errors.birth = "Date of birth is required.";
    isValid = false;
  } else if (!birthRegex.test(value.birth)) {
    errors.birth = "Invalid date of birth format";
  } else {
    errors.birth = "";
  }

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!value.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(value.email)) {
    errors.email = "Invalid email format";
    isValid = false;
  } else {
    errors.email = "";
  }

  const phoneNumberRegex = /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{3,}[-.\s]?\d{2,}[-.\s]?\d{2,}$/;
  if (!value.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number is required";
    isValid = false;
  } else if (!phoneNumberRegex.test(value.phoneNumber)) {
    errors.phoneNumber = "Invalid phone number format";
    isValid = false;
  } else {
    errors.phoneNumber = "";
  }

  if (value.checkedEthnicityItems.length === 0) {
    errors.checkedEthnicityItems = "Please select at least one checkbox";
    isValid = false;
  } else {
    errors.checkedEthnicityItems = "";
  }

  if (!value.radioSexItem.trim()) {
    errors.radioSexItem = "Your Sex assigned at birth is required.";
    isValid = false;
  } else if (value.radioSexItem === "female" && value.pregnant === null) {
    errors.pregnant = "Your pregnant is required";
    isValid = false;
  } else {
    errors.radioSexItem = "";
    errors.pregnant = "";
  }

  if (!value.radioPreferPronounItem.trim()) {
    errors.radioPreferPronounItem = "Your preferred pronoun is required.";
    isValid = false;
  } else {
    errors.radioPreferPronounItem = "";
  }

  if (!value.maritalStatusItems.trim()) {
    errors.maritalStatusItems = "Your marital status is required.";
    isValid = false;
  } else {
    errors.maritalStatusItems = "";
  }

  return {
    isValid,
    errors,
  };
};

export default ValidateDemoGraphic;
