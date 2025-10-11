// 1. Promise Async 同步和异步, 常见的异步: 定时器 Ajax
// Promise解决异步嵌套复杂的问题
// console.log('任务1:...同步')
// console.log('任务2:...同步')
// setTimeout(() => {
//     console.log('任务3:...同步')
//     console.log('任务4:...同步')
//     setTimeout(() => {
//         console.log('任务5:...同步')
//         console.log('任务6:...同步')
//     });
// });

// const p1 = new Promise((resolve, reject) => {
//     // resolve('任务1:成功得到的数据')
//     reject('失败的信息')
// })

// // console.log(p1)

// p1.then(data1 => {
//     console.log(data1)
//     return new Promise((resolve, reject) => {
//     // resolve('任务2:成功得到的数据')
//     reject('失败的信息')
// })
// }, () => {
//     console.log('任务1: 失败了')
//     throw new Error('任务1失败')  // 注意失败的时候处理返回值
// })
// .then(data2 => {// 对应return new Promise
//     console.log(data2)})
// .catch(err_finally => {
//     console.log(err_finally)
// })

// Async await
// 步骤1：准备一个返回promise对象的函数
// function asyncTask() {
//     return new Promise((resovle,reject) => {
//         // 假装有一些关键代码..
//         const isSuccess = true
//         if (isSuccess) {
//             resovle('任务2:..成功的处理结果')
//         } else {
//             reject('任务2:..失败的处理结果')
//         }
//     })
// }

// // 步骤2：为使用await的函数添加async
// async function main() {
//     console.log('任务1')
//     const data = await asyncTask()
//     console.log(data)
//     console.log('任务3')
// }
// main()

// Proxy 代理对象
// const obj = {name:'leixuewen',age:19}
// const container = document.getElementById('container')
// container.textContent = obj.name
// obj.name = 'abc'
// container.textContent = obj.name
// const p1 = new Proxy(obj,{
//     get(target, property, receiver) {
//         return obj[property]
//     },
//     set(target,property,value) {
//         obj[property] = value
//         container.textContent = obj.name
//     }
// })
// console.log(p1.name)
// p1.age = 21
// p1.name = 'Jack'

// 3. Module
// ESM
// import moduleA from "./a.js"; //moduleA就是export default导出的内容
// import moduleB from "./b.js";
// import { aTitle, aFn } from "./a.js";
// import { bTitle, bFn as bFunction } from "./b.js";

// console.log(moduleA);
// console.log(moduleB);
// console.log(aTitle, aFn, bTitle, bFunction);

// CommonJS
const moduleA = require('./c')
console.log(moduleA)