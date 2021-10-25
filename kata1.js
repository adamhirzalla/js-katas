const sumLargestNumbers = function (data) {
  let maxA = 0;
  let maxB = 0;
  for (let index of data) {
    if (index > maxA && maxA < maxB) maxA = index; // save the current index in top 2 only if #2 < #1
    else if (index > maxB) maxB = index; // save a new #1
  }
  return maxA + maxB;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));