const findTheOldest = function(people) {
  let oldestAge = 0;
  let age = 0;
  let oldestPerson = people[0].name;
  console.log("OP: " + people[0].name);
  for (let i = 0; i < people.length; i++) {
    age = people[i].yearOfDeath - people[i].yearOfBirth
    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = people[i];
      console.log("OP " + people[i].name);
    }
  } 
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
