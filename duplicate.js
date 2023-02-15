
function removeDuplicates(arr) {
  arr.sort((a, b) => a - b);
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return arr.slice(0, i + 1);
}

let arr = [1, 2, 2, 4, 2, 5, 6, 8, 6, 6, 6, 6, 3, 3, 4, 5];
let uniqueArray = removeDuplicates(arr);
console.log(uniqueArray);
