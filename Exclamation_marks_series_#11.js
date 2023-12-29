function replace(s) {
  let data = "aeiouAEIOU";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (data.includes(s[i])) {
      result += "!";
    } else {
      result += s[i];
    }
  }
  return result;
}

// function replace(s) {
//   let data = "aeiouAEIOU";
//   let result = "";

//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0; j < data.length; j++) {
//       if (s[i] !== data[j]) {
//         result += s[i];
//       } else {
//         result += "!";
//       }
//     }
//   }
//   return result;
// }
