/* 
DESCRIPTION:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. 
*/

// SOLUTION

function positiveSum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let localArr = arr.filter((element) => element > 0);
  return localArr.length === 0 ? 0 : localArr.reduce((sum, el) => sum + el);
}
