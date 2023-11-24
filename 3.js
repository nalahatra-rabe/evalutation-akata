function pairProgramming(experiences, mostExperienced) {
  if (experiences.length === 0) {
    return null;
  }

  let min1 = experiences[0];
  let min2 = experiences[1];
  let max1 = experiences[0];
  let max2 = experiences[1];

  let min1Position = 0;
  let min2Position = 0;
  let max1Position = 0;
  let max2Position = 0;

  for (let i = 2; i < experiences.length; i++) {
    if (experiences[i] < min1) {
      min2 = min1;
      min1 = experiences[i];
      min1Position = i;
    } else if (experiences[i] < min2) {
      min2 = experiences[i];
      min2Position = i;
    }

    if (experiences[i] > max1) {
      max2 = max1;
      max1 = experiences[i];
      max1Position = i;
    } else if (experiences[i] > max2) {
      max2 = experiences[i];
      max2Position = i;
    }
  }

  if (!mostExperienced) {
    return [min1Position, min2Position];
  } else {
    return [max1Position, max1Position];
  }
}

console.log(pairProgramming([1, 4, 4, 2, 8, 3], false));
console.log(pairProgramming([1, 4, 4, 2, 8, 3], true));
