// 有一个你不知道的秘密字符串。给定字符串中的随机三元组集合，恢复原始字符串。
// 这里的三元组定义为三个字母的序列，每个字母出现在给定字符串中下一个字母之前的某个位置。
// “whi”是字符串“whatisup”的三元组。
// 作为一种简化，您可以假设机密字符串中字母不重复。
// 对于提供给您的三元组，您只能假设它们是有效的三元组，并且它们包含足够的信息来推断原始字符串。
// 特别是，这意味着机密字符串永远不会包含在给定给您的三元组之一中未出现的字母。

// 机密字符串
const secret1 = "whatisup"
// 线索三元组集合
const triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

// 分析:

// 解法一:
var recoverSecret = function(triplets) {
  const firstArr = [...new Set(triplets.map(item => item[0]))]
  console.log(`firstArr`, firstArr)
  
}
// console.log(`recoverSecret`, recoverSecret(triplets1))
recoverSecret(triplets1)