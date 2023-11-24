function pairProgramming(experiences, mostExperienced) {
  for (let i = 0; i < experiences.lenght; i++) {
    if (experiences[i] === mostExperienced) {
      return [i];
    }
  }
  return [];
}

console.log(pairProgramming([1, 4, 4, 2, 8, 3], false));
function findMinMax(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return [min, max];
}

console.log(findMinMax([1, 4, 4, 2, 8, 3]));
