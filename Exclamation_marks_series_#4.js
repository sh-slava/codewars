// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// SOLUTION

function remove(string) {
  const index = string.length;
  let result = "";
  for (let i = 0; i < index; i++) {
    if (string[i] !== "!") {
      result += string[i];
    }
  }
  return result.concat("!");
}