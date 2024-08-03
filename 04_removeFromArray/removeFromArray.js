const removeFromArray = function (...anArray) {
  let newArray = [];
  let excludedArrays = anArray.slice(1);

  for (number of anArray[0]) {
    if (!excludedArrays.includes(number)) {
      newArray.push(number);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
