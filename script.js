const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const upperCaseString = (str) => {
  return str.toUpperCase();
};

const addExclamation = (str) => {

  return "!" + str + "!";
};

const makeExcited = (str) => {
  const reversed = reverseString(str);
  const upperCased = upperCaseString(reversed);
  const exclamated = addExclamation(upperCased);
  return exclamated;
};

const originalString = "hello";
const excitedString = makeExcited(originalString);

console.log(excitedString);
