// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // => returns "(111) 111-1111"

// 解法一
function createPhoneNumber1(numbers){
  var format = "(xxx) xxx-xxxx";
  for(var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }
  return format;
}
console.log(`createPhoneNumber1`, createPhoneNumber1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// 解法二
function createPhoneNumber2(numbers){
  const format = "(xxx) xxx-xxxx";
  const loop = (cur, next) => cur.replace('x',next)
  return numbers.reduce(loop, format)
}
console.log(`createPhoneNumber2`, createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// 解法三
function createPhoneNumber3(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/,'($1) $2-$3')
}
console.log(`createPhoneNumber3`, createPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))