// let phone:number|string = 12345678901;
// 联合类型
let fn = function (type) {
    return !!type;
};
let result = fn(false);
console.log(result);
const leixw = (man) => {
    console.log(man);
};
leixw({
    name: "leixw",
    age: 37,
    sex: 1,
});
// 类型断言
let fn1 = function (num) {
    console.log(num.length);
};
fn1("123");
let fn2 = (type) => {
    console.log(type.run);
    console.log(type.run);
};
// 不要滥用类型断言
const fn3 = (type) => {
    return type;
};
console.log(fn3(1));
export {};
//# sourceMappingURL=Type_as.js.map