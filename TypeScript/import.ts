// 1. 默认导出 默认导出只能有一个 可以是任意类型
export default 123

// 2. 分别导出  
export let x = 2
export const add = (a: number, b: number) => a + b
export let arr = [1, 2, 3]

// 3. 解构导出
// let x = 2
// const add = (a: number, b: number) => a + b
// let arr = [1, 2, 3]
// export {x, add, arr}




// index.ts 内容

// 使用import 如果是默认导出 名字随便起
// import {add as add2,arr,x} from './test'

// 导入所有 
// import * as api from './test'
// console.log(api);

// console.log(obj);
// console.log(add2(1,2));
// console.log(arr);
// console.log(x);

// 动态引入
// if(true){
//     import('./test').then(res => {
//         console.log(res);
//     })
// }
