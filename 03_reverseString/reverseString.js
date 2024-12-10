const reverseString = function (text) {
  const textArray = text.split("");
  const reversedArray = textArray.reverse();
  const reverseText = reversedArray.join("");
  return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
