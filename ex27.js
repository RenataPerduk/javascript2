function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for ( let number of numbers) {
  
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}