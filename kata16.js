const makeCase = function(input, styles) {
  let styledStr = input;

  if (styles.includes("camel"))
    styledStr = input.replace(/\s\w/g, str => str.toUpperCase().trim());

  else if (styles.includes("pascal"))
    styledStr = input.replace(/(?:^\w|\s\w)/g, str => str.toUpperCase().trim());

  else if (styles.includes("snake"))
    styledStr = input.replace(/(?:[_]|\W)/g, "_");

  else if (styles.includes("kebab"))
    styledStr = input.replace(/(?:[_]|\W)/g, "-");

  else if (styles.includes("title"))
    styledStr = input.replace(/(?:^|\s)\w/g, str => str.toUpperCase());

  if (styles.includes("vowel"))
    styledStr = styledStr.replace(/[aeiou]/g, str => str.toUpperCase());

  else if (styles.includes("consonant"))
    styledStr = styledStr.replace(/[^aeiou]/g, str => str.toUpperCase());

  if (styles.includes("upper"))
    styledStr = styledStr.replace(/\w/g, str => str.toUpperCase());

  else if (styles.includes("lower"))
    styledStr = styledStr.replace(/\w/g, str => str.toLowerCase());

  return styledStr;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING

// Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

// camel, pascal, snake, kebab, title
// vowel, consonant
// upper, lower