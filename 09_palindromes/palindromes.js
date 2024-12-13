const palindromes = function (string) {
  const array = string
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "")
    .split("");

  const reverse = array.toReversed().join("");
  const forward = array.join("");

  return forward == reverse;
};

// Do not edit below this line
module.exports = palindromes;
