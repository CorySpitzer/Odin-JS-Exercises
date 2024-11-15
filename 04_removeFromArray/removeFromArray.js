const removeFromArray = function(inputArray, elementToRemove) {
  let outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] != elementToRemove) {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
