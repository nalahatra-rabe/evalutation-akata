function nonConsecutiveDigits(N) {
  let J = N + 1;
  let temp = 0;
  const digits = J.toString().split("").map(Number);

  if (digits.length === 1) {
    return J;
  } else {
    for (let i = 0; i < digits.length - 1; i++) {
      if (digits[i] === digits[i + 1]) {
        temp = J + 2;
      } else {
        temp = J + 1;
        break;
      }
    }
    return temp;
  }
}

console.log("Valiny", nonConsecutiveDigits(98));
