"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = exports.add = exports.x = void 0;
// 1. 默认导出 默认导出只能有一个 可以是任意类型
exports.default = 123;
// 2. 分别导出  
exports.x = 2;
const add = (a, b) => a + b;
exports.add = add;
exports.arr = [1, 2, 3];
// 3. 解构导出
// let x = 2
// const add = (a: number, b: number) => a + b
// let arr = [1, 2, 3]
// export {x, add, arr}
