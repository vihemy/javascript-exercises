const repeatString = function (string, num) {
  let output = "";
  if (num < 0) output = "ERROR";
  else {
    for (let i = 0; i < num; i++) {
      output = output.concat(string);
    }
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;
