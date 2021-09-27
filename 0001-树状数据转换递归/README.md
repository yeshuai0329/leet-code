### 考察技术点:
- 主要考察对树桩数组的数据处理,以及递归知识点.
### 分析:
```JavaScript
// 树装数组
const treeData = [
  {
    id: 1,
    name: 'xx',
    children:[
      {
        id: 11,
        name: '1xx',
        children: [
          {
            id: 111,
            name: '11xx'
          }
        ]
      },
      {
        id: 12,
        name: '12x'
      }
    ]
  }
]

// 转换的目标数组

const toTreeData =  {
  1: {
    name: 'xx',
    children: [11,22]
  },
  11: {
    name: '1xx',
    children: [111],
    parent: 1
  },
  12: {
    name: '1xx',
    parent: 1
  },
  111: {
    name: '11xx',
    parentId: 11
  }

  // ...
}
```
- 数组转为目标对象
- 数组中每一个对象元素的id变成转换以后的对象key, 思路: 就要遍历一遍数组.
- 目标对象中的children 保存的是直系子代.
- 目标对象中新增了parent, 记录父id

### 上代码:
```JavaScript
// 设定一个函数dataToMap,要接收需要转化的数组进来
// 也要接受一个隐形参数,用来存放父id,当递归的时候传下去
const dataToMap = (tree = [], parentId) => {
  // 写一个打平以后的对象,存放目标对象
  let flatTree = {}
  tree.forEach(ele => {
    const { id, name, children } = ele
    // 遍历数组,给目标对象添加 key
    flatTree[id] = { name }
    // 查找同级子元素id
    if (children && children.length) {
      flatTree[id].children = children.map(item => item.id)
    }
    // 查找父级元素
    if (parentId) {
      flatTree[id].parentId = parentId
    }
    // 遍历出所有元素
    if (children && children.length) {
      const obj =  dataToMap(children, id)
      flatTree = {...flatTree, ...obj}
    }
  })
  return flatTree
}
console.log(dataToMap(treeData))
```