const removeFromArray = function(inputArray, ...elementsToRemove) {
  let outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (!(elementsToRemove.includes((inputArray[i])))) {
      outputArray.push(inputArray[i]);
    }
  }

  // loop over input array
  // if value not in elementsToRemove
  // add to output array

  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
