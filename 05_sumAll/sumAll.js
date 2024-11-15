const sumAll = function(int1, int2) {
  if (int1 < 0 || int2 < 0 || 
      typeof int1 != typeof 1 || typeof int2 != typeof 1  ||
      int1 % 1 != 0 || int2 % 1 != 0) {
    return "ERROR";
  }
  if (int1 > int2) {
    let swap = int1;
    int1 = int2;
    int2 = swap;
  }
  let sum = 0;
  for (let i = int1; i <= int2; i++) {
    sum += i;
  }
  return sum;
};
// const sumAll = function(int1, int2) {
//   let sum = BigInt(0);
//   for (let i = BigInt(int1); i <= BigInt(int2); i++) {
//     sum += i;
//   }
//   return Number(sum);
// };

// Do not edit below this line
module.exports = sumAll;

// 5 6 7 8
