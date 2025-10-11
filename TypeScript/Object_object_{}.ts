// 1. Oject
let a: Object = 123
let a1: Object = '123'
let a2: Object = []
let a3: Object = {}
let a4: Object = () => 123

// 2.object 小写的object表示非原始类型,常用于泛型约束
// let b: object = '123' //报错 string是原始类型
// let b1: object = 123 //报错 number是原始类型
// let b2: object = true //报错 boolean是原始类型
let b3: object = [] //数组是非原始类型
let b4: object = {} //对象是非原始类型
let b5: object = () => 123 //函数是非原始类型

// 3. 字面量模式
let c: {} = '123' // 等于new Object()
let c1: {} = 123
let c2: {} = true
let c3: {} = []
let c4: {} = {}
let c5: {} = () => 123
// 不能修改变量的属性
// c4.name = 'leixw' //报错