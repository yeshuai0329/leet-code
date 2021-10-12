// 超市里有一个排队等候自助结账的柜台。您的任务是编写一个函数 queueTime 来计算所有客户退房所需的总时间！
// 输入参数
// customers：表示队列的正整数数组。每个整数代表一个客户，其值是他们退房所需的时间。
// n：一个正整数，结帐台的数量。
// 输出
// 函数应返回一个整数，即所需的总时间。
// Examples
// queueTime([], 1)  => should return 0
// queueTime([1,2,3,4], 1)  => should return 10
// queueTime([2,2,3,3,4,4], 2) => should return 9
// queueTime([1,2,3,4,5], 100) => should return 5
// queueTime([2,3,10], 2) => should return 12

// 分析思路1
// 首先根据题目和Example分析,
// 需求是如果有n台机器,首先把顾客占满n台机器,占满以后,哪个顾客用时最短,就把下一个顾客上来接替,
// 然后再判断哪台机器累计被用的最短,那就再上来下一位顾客,一直到最后以为顾客,

// 分析思路2
// 其实可以类比去想一下,想一个柱状图,横坐标是每个结账机器, 纵坐标是每个机器顾客用时
// 首先顾客先占满 n 台机器, 此时柱状图是不是就有形状了, 柱状图里最矮的就是用时最短的, 然后第n+1位顾客是去最矮的柱状图的
// 机器去使用, n+2 位顾客也去柱状图最矮的那台机器,这么想是不是就形象多了.
// 那接下来就去写这个函数吧

// 解法一
function queueTime1(customers, n) {
  // 有多少位顾客
  let customerNums = customers.length
  // 如果没有顾客返回0
  if (!customerNums) return 0
  // 如果顾客比机器的数量少,就挑出用时最长的顾客的时间
  if (customerNums < n) return Math.max.apply(this,customers)
  //顾客比机器多的情况
  const computerTime = new Array()
  customers.forEach((item, index) => {
    //遍历顾客的用时数组, index + 1 < = n ,就是首先用顾客吧机器占满
    if (index + 1 <= n) {
      computerTime.push(item) // computerTime, 就是对用机器累计用时数组
    } else {
      // 这里就是第 n 个顾客以后的操作,先找出 computerTime 数组中最小的
      const index = computerTime.indexOf(Math.min.apply(this,computerTime)) 
      // 累加上去
      computerTime[index] = computerTime[index] + item
    }
  })
  //遍历完成以后就找 computerTime 中的最大值
  return Math.max.apply(this,computerTime)
}
console.log(`queueTime1`, queueTime1([2,2,3,3,4,4], 2))

// 解法二
function queueTime2(customers, n) {
  var computerTime = new Array(n).fill(0);
  for (let t of customers) {
    let idx = computerTime.indexOf(Math.min(...computerTime));
    computerTime[idx] += t;
  }
  return Math.max(...computerTime);
}
console.log(`queueTime2`, queueTime2([2,2,3,3,4,4], 2))

// 解法三
function queueTime3(customers, n) {
  return Math.max(...(customers.reduce((prev, next) => {
    prev[prev.indexOf(Math.min(...prev))] += next;
    return prev;
  }, Array(n).fill(0))));
}
console.log(`queueTime3`, queueTime3([2,2,3,3,4,4], 2))