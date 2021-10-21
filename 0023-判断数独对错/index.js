// 题目: 
// 数独是一种在9x9网格上玩的游戏。游戏的目标是用1到9的数字填充网格的所有单元格，
// 以便每列、每行和九个3x3子网格（也称为块）中的每一个都包含1到9的所有数字。
// 数独解决方案验证程序
// 编写一个函数validSolution（），该函数接受表示数独板的2D数组，如果该数组是有效的解决方案，
// 则返回true，否则返回false。数独板的单元格也可能包含0，这表示空单元格。包含一个或多个零的电路板被视为无效解决方案。
// 电路板始终是9个单元格乘以9个单元格，每个单元格只包含0到9之间的整数。

// Examples
// validSolution([
  // [5, 3, 4, 6, 7, 8, 9, 1, 2],
  // [6, 7, 2, 1, 9, 5, 3, 4, 8],
  // [1, 9, 8, 3, 4, 2, 5, 6, 7],
  // [8, 5, 9, 7, 6, 1, 4, 2, 3],
  // [4, 2, 6, 8, 5, 3, 7, 9, 1],
  // [7, 1, 3, 9, 2, 4, 8, 5, 6],
  // [9, 6, 1, 5, 3, 7, 2, 8, 4],
  // [2, 8, 7, 4, 1, 9, 6, 3, 5],
  // [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true

// 思路
// 判断如果数独中出现0,就是false
// 判断如果数独中每一行去重以后的长度等于9,return true,否则 return false
// 判断如果数独中每一列去重以后的长度等于9,return true,否则 return false
// 判断如果每个3*3方块去重长度等于9,return true,否则 return false
// 解法一: 
const validSolution1 = (board) => {
  // 
  if (board.some(row => row.includes(0))) return false
  const boo1 = board.every(row => [...new Set(row)].length === 9)
  const board1 = board.map((_,index) => board.map(item => item[index]))
  const boo2 = board1.every(row => [...new Set(row)].length === 9)
  const splitArrfn = (arr, num) => {
    let temp =[]
    let index = 0
    while(index < arr.length) {
      temp.push(arr.slice(index, index+=num))
    }
    return temp
  }
  const board2 = splitArrfn(board, 3)
    .map(list3 => {
      return list3.map(item => splitArrfn(item, 3)).reduce((pre,cur) => pre.concat(cur))
    })
  
  const board3 = board2.map((list3) => {
    return board2.map((_,index) => {
      return [...list3[index],...list3[index+3],...list3[index+6]]
    })
  })
  
  const board4 = board3.reduce((pre,cur) => [...pre, ...cur])
  const boo3 = board4.every(row => [...new Set(row)].length === 9)
  
  return boo1 && boo2 && boo3
}

console.log(`validSolution1`, validSolution1([  
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]]
))