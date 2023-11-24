function nonConsecutiveDigits(N) {
  let J = N + 1;
  let temp = 0;
  const digits = J.toString().split("").map(Number);
  console.log(digits);
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] === digits[i + 1]) {
      console.log("mitovy");
      console.log(J + 2);
      temp = J + 2;
    } else {
      console.log(J + 1);
    }
  }
  return temp;
}

console.log("Valiny", nonConsecutiveDigits(1765));
