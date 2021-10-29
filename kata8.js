const repeatNumbers = function(data) {
  let sol = ""; // string containing all repeated strings of arrays
  let length = 0; // # of array of numbers done
  for (const array of data) {
    for (let i = 0; i < array[1]; i++) {
      sol += array[0];
    }
    length++; // finished repeating for +1 array
    if (length === data.length) // last array was just repeated -> leave
      return sol;
    sol += ', '; // prepare for next array
  }
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292