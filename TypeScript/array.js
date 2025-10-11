//数组类型
//方式一
let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c"];
let arr3 = [true, false, true];
//方式二
let arr4 = [1, 2, 3];
let arr5 = ["a", "b", "c"];
let arr6 = [true, false, true];
let arr7 = [{ name: "leixw", age: 19 }, { name: "open" }];
let arr8 = [{ name: "leixw" }, { name: "open" }];
//方式三 元组 tuple
let arr9 = ["leixw", 19, true];
let arr10 = [
    ["leixw", 19, true],
    ["open", 20, false],
];
let arr11 = [
    ["leixw", 19, true],
    ["open", 20, false],
];
//二维数组
let arr12 = [
    [1, 2, 3],
    [4, 5, 6],
];
//大杂烩数组
let arr13 = [1, "2", true, {}, []];
function fn1(...args) {
    console.log(args);
    console.log(arguments);
    let args1 = arguments;
}
fn1(1, "2", true, {}, []);
export {};
//# sourceMappingURL=array.js.map