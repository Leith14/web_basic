// 泛型约束
// 在类型后加一个extends 再跟一个约束类型
// function add<T extends number>(a: T, b: T) {
//   return a + b;
// }

// add(1,2)

interface Len {
    length:number
}
function fn<T extends Len>(a:T){
    a.length
}
fn('leixw')
fn([1,2,3])

let obj = {
    name:'lei',
    sex:"女"
}
// keyof 约束 key值类型
type Key =keyof typeof obj
function ob<T extends object,K extends keyof T>(obj:T,key:K){
    return obj[key]
}

ob(obj,'name')

interface Data {
    name:string
    age:number
    sex:string
}
// for in for(let key in obj)
type Options<T extends object> = {
    // Key 是T的联合类型
    readonly [Key in keyof T]?:T[Key]
}
type B = Options<Data>