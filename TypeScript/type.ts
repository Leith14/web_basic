// 1.类型推断
let arr = [1,2,3];
//推断为any类型
let str

//2.类型别名
type s = string
let str2:s = 'hello'

//类型别名与接口的区别
//类型别名可以定义基本类型，联合类型，元组等
type Name = string & B  // 交叉类型
type Name2 = string | number //联合类型
type Name3 = [string,number] //元组

interface A extends B{}
interface B {}

//高级用法
// 1. any unknown
// 2. Object
// 3. Number String Boolean
// 4. number string boolean
// 5. 1 true 'hello'
// 6. never
type num = 1 extends number? 1:0 //extends是包含的意思，左边值会做为右边的子集
