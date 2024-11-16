const findTheOldest = function(people) {
  let oldestAge = 0;
  let age = 0;
  let oldestPerson = people[0].name;
  let deathYear = 0;
  console.log("OP: " + people[0].name);
  for (let i = 0; i < people.length; i++) {
    deathYear = people[i].yearOfDeath
    if (typeof deathYear == 'undefined') { 
        const date = new Date(); 
        deathYear = date.getFullYear();
    }
    age = deathYear - people[i].yearOfBirth
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
