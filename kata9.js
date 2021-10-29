const camelCase = function(input) {
  let words = input.split(" ");
  let camelCased = "";
  let isFirstWord = true;
  for (const word of words) {
    if (isFirstWord === true) { // no camel casing for 1st word
      camelCased += word;
      isFirstWord = false;
      continue;
    }
    if (word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122) { // camel casing needed
      String.prototype.replaceAt = function(index, replacement) { // function definition off the internet to replace a string character
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
      };
      camelCased += word.replaceAt(0, String.fromCharCode(word.charCodeAt(0) - 32)); // capitalize first letter
      continue;
    }
    camelCased += word; // no camel casing needed (1st character of word isnt a letter)
  }
  return camelCased;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious