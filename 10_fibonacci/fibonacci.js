const fibonacci = function (num) {
  let thisStep = 1;
  let lastStep = 0;

  for (let i = 1; i < num; i++) {
    let temp = lastStep;
    lastStep = thisStep;
    thisStep += temp;
  }
  return thisStep;
};

// Do not edit below this line
module.exports = fibonacci;
