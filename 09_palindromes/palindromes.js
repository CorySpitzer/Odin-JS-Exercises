const palindromes = function (str) {
  // 2nd replace removes whitespace
  let noPunctStr = str.replace(/[^\w\s\']|_/g, "")
                      .replace(/\s+/g, '')
                      .toLowerCase();;
  
  let reversedStr = noPunctStr.split('').reverse().join('')
                              .toLowerCase();

  return reversedStr == noPunctStr.toLowerCase();
};

// palindromes('r3ace3car');

// Do not edit below this line
module.exports = palindromes;
