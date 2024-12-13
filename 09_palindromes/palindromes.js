const palindromes = function (string) {
  const cleanedString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  const reversedString = cleanedString.split("").reverse().join("");

  return cleanedString == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
