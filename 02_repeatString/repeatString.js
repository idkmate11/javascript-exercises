const repeatString = function (string, num) {
  for (let i = 0; i < num; i++) {
    return string.repeat(num);
  }
  if (num < 0) return "ERROR";
  if (num === 0) return string.repeat(num);
};
repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
