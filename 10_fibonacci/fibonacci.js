const fibonacci = function (num) {
  let current = 1;
  let last = 0;

  if (num < 0) return "OOPS";
  if (num == 0) return 0;
  if (num == 1) return 1;

  for (let i = 2; i <= num; i++) {
    let temp = current;
    current += last;
    last = temp;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
