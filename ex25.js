function getCommonElements(array1, array2) {
  // Change code below this line
 let commonElements = []
  for (let el of array1) {
    let isInSecondArray = array2.includes(el);
    if (isInSecondArray) {
      commonElements.push(el);
}
  }
  return commonElements;


 // Change code above this line
}