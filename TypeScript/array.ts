//数组类型
//方式一
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["a", "b", "c"];
let arr3: boolean[] = [true, false, true];

//方式二
let arr4: Array<number> = [1, 2, 3];
let arr5: Array<string> = ["a", "b", "c"];
let arr6: Array<boolean> = [true, false, true];

//定义对象数组使用interface
interface X {
  name: string;
  age?: number; //可选属性
}
let arr7: X[] = [{ name: "leixw", age: 19 }, { name: "open" }];
let arr8: Array<X> = [{ name: "leixw" }, { name: "open" }];

//方式三 元组 tuple
let arr9: [string, number, boolean] = ["leixw", 19, true];
let arr10: [string, number, boolean][] = [
  ["leixw", 19, true],
  ["open", 20, false],
];
let arr11: Array<[string, number, boolean]> = [
  ["leixw", 19, true],
  ["open", 20, false],
];
//二维数组
let arr12: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
//大杂烩数组
let arr13: any[] = [1, "2", true, {}, []];

function fn1(...args: any[]) {
  console.log(args);
  console.log(arguments);
  let args1:IArguments = arguments;

}
fn1(1, "2", true, {}, []);

interface A {
    callee: Function;
    length: number;
    [index: number]: any;
}