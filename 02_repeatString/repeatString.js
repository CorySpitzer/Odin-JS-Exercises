// function checkIfNeg (number) {
//   if (number < 0) {
//     throw new Error("times cannot be negative!");
//   }
// }

const repeatString = function(strToRepeat, times) {
  // try {
  //   checkIfNeg(times)
  // } catch (error) {
  //   // throw new Error("times cannot be negative!");
  // }
  if (times < 0) {
    return "ERROR";
  }
  return strToRepeat.repeat(times); 
};

// Do not edit below this line
module.exports = repeatString;
