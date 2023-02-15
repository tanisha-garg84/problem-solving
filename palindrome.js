function check_palindrome(str) {
  let j = str.length - 1;
for (let i = 0; i < j / 2; i++) {
    let x = str[i];
    let y = str[j - i];
    return !(x != y);
  }
}

let ans = check_palindrome("racecar");
console.log(ans);
