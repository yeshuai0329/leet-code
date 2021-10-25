// 封装 JavaScript Stack 结构
class Stack {
  constructor() {
    this.items=[]
  }
  // 1. push(item): 实现压栈方法 push, 没有返回值.
  push(item) {
    this.items.push(item)
  }

  // 2. pop(): 出栈的方法 pop, 返回值是出栈的元素
  pop() {
    return this.items.pop()
  }

  // 3. peek(): 查看一下栈顶元素
  peek() {
    return this.items[this.items.length - 1]
  }

  // 4. isEmpty(): 判断栈内是否为空
  isEmpty() {
    return !this.items.length
  }

  // 5. size(): 获取栈中元素的个数
  size() {
    return this.items.length
  }

  // 6. toString(): 以字符串形式输出栈内数据
  toString() {
    // 期望输出形式 20 10 12 8 
    return this.items.join(' ')
  }
}

// 解析一:
const stack1 = new Stack()
stack1.push(20)
stack1.push(10)
stack1.push(12)
stack1.push(8)

console.log(`stack1.pop()`, stack1.pop()) // 8
console.log(`stack1.pop()`, stack1.pop()) // 12
console.log(`stack1.peek()`, stack1.peek()) // 10
console.log(`stack1.isEmpty()`, stack1.isEmpty())  // false
console.log(`stack1.size()`, stack1.size()) // 2
console.log(`stack1.toString()`, stack1.toString())  // 20 10

// 栈结构应用题目
/**
 * 封装函数将十进制转化成而二进制(十进制转二进制的运算最后倒序取余数的特点符合栈 '先进后出')
 */

const dec2bin = decNumber => {
  const Stack2 = new Stack()
  while(decNumber > 0) {
    Stack2.push(decNumber % 2)
    decNumber =  Math.floor(decNumber / 2)
  }
  let str = ''
  while(!Stack2.isEmpty()) {
    str += Stack2.pop()
  }
  return str
}

console.log(`dec2bin`, dec2bin(10))
console.log(`dec2bin`, dec2bin(100))
console.log(`dec2bin`, dec2bin(1000))

// 3.练习：题目：有6个元素6，5，4，3，2，1按顺序进栈，问下列哪一个不是合法的出栈顺序？
// A：5 4 3 6 1 2 （√）
// B：4 5 3 2 1 6 （√）
// C：3 4 6 5 2 1 （×）
// D：2 3 4 1 5 6 （√）

// 分析: 题目所说的按顺序进栈指的不是一次性全部进栈，而是有进有出，进栈顺序为6 -> 5 -> 4 -> 3 -> 2 -> 1。
// A: 6进栈,5进栈出栈,4进栈出栈,3进栈出栈,6出栈,2进栈,1进栈出栈,2出栈. √
// B: 65进栈,4进栈出栈,5出栈,3进栈出栈,2进栈出栈,1进栈出栈,6出栈.√
// C: 654进栈,3进栈出栈,4出栈,此时栈内还剩65,必须5先出栈,6才可以出栈.×
// D: 6543进栈,2进栈出栈,3出栈,4出栈,1进栈出栈,5出栈,6出栈.√

// 4. 编写一个函数，该函数接受一个括号字符串，并确定括号的顺序是否有效。
// 如果字符串有效，函数应返回true；如果字符串无效，函数应返回false。

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// ((()))()()()()()(())() => true

// 分析:
// 遇到左括号，就把做括号压入栈中
// 遇到右括号，判断栈是否为空，如果为空则说明没有左括号与之相对应，字符串括号不合法。如果栈不为空，则把栈顶元素移除，这对括号就抵消了。
// 当for循环结束，如果栈是空的，说明所有的左右括号都抵消了，如果栈力还有元素，则说明缺少右括号，字符串括号不合法。
const validParentheses = (str) => {
  // 先生成一个栈
  const stack = new Stack()
  let i = 0
  // 当i < str.length 的时候就一直执行
  while(i < str.length) {
    // 当遇到左括号的时候就推送的栈内
    if (str[i] === '(') {
      stack.push(str[i])
    // 当遇到有括号的时候,判断栈内是否还有左括号,如果有,抵消一个,如果没有就代表至少多出了一个右括号
    } else if(str[i] === ')'){
      // 栈内为空,就返回false
      if (stack.isEmpty()) {
        return false
      } else {
        // 栈内不为空就消除一个
        stack.pop()
      }
    }
    i++
  }
  // 循环完毕 如果栈内为空就返回true
  if (stack.isEmpty()) return true
  // 循环完毕 如果栈内为不为空就返回false
  if (!stack.isEmpty()) return false
}

console.log(`validParentheses`, validParentheses("()")) // true
console.log(`validParentheses`, validParentheses(")(()))")) // false
console.log(`validParentheses`, validParentheses("(")) // false
console.log(`validParentheses`, validParentheses("(())((()())())")) // true
console.log(`validParentheses`, validParentheses("((()))()()()()()(())()")) // true
