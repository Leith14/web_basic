// interface 重名会自动合并
// interface 任意key   [propName: string]: any; // 任意属性

// interface ? readonly
// interface 接口继承  interface Asdsdsd extends B
// interface 定义函数类型

interface Fn {
  (name: string): number[];
}
const fn: Fn = function (name: string): number[] {
  return [1, 2, 3];
};
