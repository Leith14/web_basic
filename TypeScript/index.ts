let a1 = Symbol(1)
let a2 = Symbol(1)
console.log(a1 === a2); // false

// Symbol.for() // 全局注册的
let b1 = Symbol.for('abc')
let b2 = Symbol.for('abc')
console.log(b1 === b2); // true

let obj = {
    name:1,
    [a1]:111,
    [a2]:222,
}
console.log(obj); // { name: 1, [Symbol(1)]: 222 }
// for in 读取不到symbol
for(let key in obj){
    console.log(key); // name
}
console.log(Object.keys(obj)); // [ 'name' ]
console.log(Object.getOwnPropertyNames(obj)); //[ 'name' ]
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(1), Symbol(1) ]
console.log(Reflect.ownKeys(obj)); // [ 'name', Symbol(1), Symbol(1) ]

// Symbol生成器
function* gen(){
    yield Promise.resolve('leixw'); //同步异步都行
    yield 'leijing'
    yield 'hello'
    yield 'world'
}
const man = gen()
console.log(man.next());
console.log(man.next());
console.log(man.next());
console.log(man.next());
console.log(man.next());

// Symbol迭代器
// set map
let set:Set<number> = new Set([1,1,2,2,3,3]) // 自动去重
console.log(set); // Set(3) { 1, 2, 3 }
let map = new Map()
let Arr = [1,2,3] //引用类型也可用做key
map.set(Arr,'hello')
console.log(map.get(Arr)); // hello
function args(){
    console.log(arguments); //伪数组
}
// let list = document.querySelectorAll('div') // nodelist 伪数组



