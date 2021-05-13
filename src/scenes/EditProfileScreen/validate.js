const isValidEmail = (email) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return regex.test(email);
};

const isValidPhoneNumber = (phone) => {
  const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  return regex.test(phone);
};

const isValidName = (name) => {
  if (isEmpty(name)) {
    console.log("is empty");
    return false;
  }
  if (isTooShort(name)) {
    console.log("is too short");
    return false;
  }
  if (isContainsDigits(name)) {
    console.log("contains digits");
    return false;
  }
  return true;
};

const isValidBio = (bio) => {
  return true;
};

// helpers
const isEmpty = (str) => {
  return String(str).length === 0;
};
const isTooShort = (str) => {
  return String(str).length < 2;
};
const isContainsDigits = (str) => {
  const regex = /\d/;
  return regex.test(str);
};
// const regex = /^[\s\da-zA-ZåäöÅÄÖ&()+%/*$€é,.'"-]*$/;

export { isValidEmail, isValidPhoneNumber, isValidName, isValidBio };
