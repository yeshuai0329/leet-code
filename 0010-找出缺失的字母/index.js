// 题目: 找出缺失的字母
// Example
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// 解法一:

function findMissingLetter1(array) {
  let CharCodeArr = array.map(item =>　item.charCodeAt(0))
  let ite
  for (var i = 0; i < CharCodeArr.length; i++) {
    if (CharCodeArr[i+1]) {
      if (CharCodeArr[i] + 1 !== CharCodeArr[i+1]) {
        ite = CharCodeArr[i] + 1
      }
    }
  }
  return String.fromCharCode(ite);
}

解法二: 
function findMissingLetter2(array) {
  let missLetter = array[0].charCodeAt(0)
  array.forEach(letter => letter.charCodeAt(0) === missLetter ? missLetter++ : missLetter)
  return String.fromCharCode(missLetter);
}

console.log(`findMissingLetter2`, findMissingLetter2(["a","b","c","d","f"]))
