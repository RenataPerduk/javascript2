function findLongestWord(string) {
  // Change code below this line
let bigWord = string[0]
string = string.split(' ')
for (const word of string) {
if (word.length >= bigWord.length){
	bigWord = word;
}
}
  return bigWord
  // Change code above this line
}
