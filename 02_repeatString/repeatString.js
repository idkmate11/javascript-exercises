const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  if (num === 0) return string.repeat(num);

  return string.repeat(num);
};
repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
