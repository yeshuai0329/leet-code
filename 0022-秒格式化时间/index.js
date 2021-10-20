// 编写一个函数，以非负整数（秒）作为输入，并以可读格式（HH:MM:SS）返回时间
// HH=小时，填充到2位数，范围：00-99
// MM=分钟，填充为2位数字，范围：00-59
// SS=秒，填充为2位，范围：00-59
// 最长时间从不超过359999（99:59:59）
// 您可以在测试夹具中找到一些示例。

// 解法一:
const humanReadable1 =(seconds) => {
  const second = seconds % 60 >= 10 ? `${seconds % 60}` : `0${seconds % 60}`
  let min = Math.floor(seconds / 60) % 60
  min = min > 10 ? `${min}` : `0${min}`
  let hour = Math.floor(seconds / 60 / 60 )
  hour = hour > 10 ? `${hour}` : `0${hour}`
  return `${hour}:${min}:${second}`
}

console.log(`humanReadable1`, humanReadable1(359999))

// 解法二:
const humanReadable2 =(seconds) => {
  const pad = x => x >= 10 ? x : `0{x}`
  return `${pad(Math.floor(seconds / 60 / 60 ))}:${pad(Math.floor(seconds / 60) % 60)}:${pad(seconds % 60)}`
}

console.log(`humanReadable2`, humanReadable2(359999))

// 解法三:
const humanReadable3 =(seconds) => {
  const pad = x => `0${x}`.slice(-2)
  return `${pad(Math.floor(seconds / 60 / 60 ))}:${pad(Math.floor(seconds / 60) % 60)}:${pad(seconds % 60)}`
}

console.log(`humanReadable3`, humanReadable3(359999))