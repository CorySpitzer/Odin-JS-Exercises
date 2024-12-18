const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce( function (a, b) {
    return a + b;
  }, 0);
};

const multiply = function(array) {
  return array.reduce( function (a, b) {return a * b}, 1);
};

const power = function(base, power) {
  product = 1;
	for (let i = 0; i < power; i++) {
    product *= base;
  }
  return product;
};

const factorial = function(n) {
	if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
