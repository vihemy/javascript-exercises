const fibonacci = function (num) {
  let thisStep = 0;
  let lastStep = 1;

  for (let i = 1; i <= num; i++) {
    let temp = lastStep;
    lastStep = thisStep;
    thisStep += temp;
  }
  return thisStep;
};

// Do not edit below this line
module.exports = fibonacci;
