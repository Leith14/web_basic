// 1. 默认导出 默认导出只能有一个 可以是任意类型
export default 123;
// 2. 分别导出  
export let x = 2;
export const add = (a, b) => a + b;
export let arr = [1, 2, 3];
// 3. 解构导出
// let x = 2
// const add = (a: number, b: number) => a + b
// let arr = [1, 2, 3]
// export {x, add, arr}
