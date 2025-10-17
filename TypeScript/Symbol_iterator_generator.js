let a1 = Symbol(1);
let a2 = Symbol(1);
console.log(a1 === a2); // false
// 1. Symbol.for() // 全局注册的
let b1 = Symbol.for("abc");
let b2 = Symbol.for("abc");
console.log(b1 === b2); // true
// let obj = {
//   name: 1,
//   [a1]: 111,
//   [a2]: 222,
// };
// console.log(obj); // { name: 1, [Symbol(1)]: 222 }
// 2. for in 读取不到symbol
// for (let key in obj) {
//   console.log(key); // name
// }
// console.log(Object.keys(obj)); // [ 'name' ]
// console.log(Object.getOwnPropertyNames(obj)); //[ 'name' ]
// console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(1), Symbol(1) ]
// console.log(Reflect.ownKeys(obj)); // [ 'name', Symbol(1), Symbol(1) ]
// 3.Symbol生成器
function* gen() {
    yield Promise.resolve("leixw"); //同步异步都行
    yield "leijing";
    yield "hello";
    yield "world";
}
const man = gen();
console.log(man.next());
console.log(man.next());
console.log(man.next());
console.log(man.next());
console.log(man.next());
// 4.Symbol迭代器
// set map
let set = new Set([1, 1, 2, 2, 3, 3]); // 自动去重
console.log(set); // Set(3) { 1, 2, 3 }
let map = new Map();
let Arr = [1, 2, 3]; //引用类型也可用做key
map.set(Arr, "hello");
console.log(map.get(Arr)); // hello
function args() {
    console.log(arguments); //伪数组
}
// let list = document.querySelectorAll('div') // nodelist 伪数组
// const each = (value: any) => {
//   let it: any = value[Symbol.iterator]();
//   let next: any = { done: false };
//   while (!next.done) {
//     next = it.next();
//     if (!next.done) {
//       console.log(next.value);
//     }
//   }
// };
// each(map)
// each(set)
// each(Arr)
// 5. 迭代器语法糖  for of
// 6. 注意：对象不能用for of，因为没有Symbol.iterator属性
for (let key of set) {
    console.log(key); // 1 2 3
}
// 7. 解构 底层原理也是去调用iterator
let [a, b, c] = [4, 5, 6];
let d = [4, 5, 6];
let copy = [...d];
console.log(a, b, c); // 4 5 6
console.log(d);
// 8. 对象支持 for of
let obj = {
    max: 5,
    current: 0,
    [Symbol.iterator]() {
        return {
            max: this.max,
            current: this.current,
            next() {
                if (this.current === this.max) {
                    return { value: undefined, done: true };
                }
                else {
                    return { value: this.current++, done: false };
                }
            },
        };
    },
};
// for (let key of obj) {
//   console.log(key);
// }
let x = [...obj];
let y = { ...obj }; // 对象是什么实现解构的呢？
console.log(x); // [ 0, 1, 2, 3, 4 ]
console.log(y);
export {};
//# sourceMappingURL=Symbol_iterator_generator.js.map