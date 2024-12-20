const findTheOldest = function (arr) {
  const sorted = arr
    .map(function (person) {
      if (person.yearOfDeath === undefined)
        person.yearOfDeath = new Date().getFullYear();
      return person;
    })
    .sort(function (a, b) {
      const lastPerson = a.yearOfDeath - a.yearOfBirth;
      const nextPerson = b.yearOfDeath - b.yearOfBirth;
      return lastPerson > nextPerson ? -1 : 1;
    });
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
