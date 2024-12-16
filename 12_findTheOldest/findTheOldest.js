const findTheOldest = function (arr) {
  const sorted = arr.sort(function (a, b) {
    const lastPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - a.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  });
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
