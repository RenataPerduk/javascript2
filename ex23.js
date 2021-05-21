function filterArray(numbers, value) {
   // Change code below this line
const newArray = []
for ( const number of numbers) {
	if(number > value) {
    newArray.push(number)
    }
}
return newArray

  // Change code above this line
}