// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// SOLUTION

function remove(s, n) {
  let newString = "";
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") {
      newString += s[i];
    } else {
      counter++;
      if (counter > n) {
        newString += s[i];
      }
    }
  }
  return newString;
}