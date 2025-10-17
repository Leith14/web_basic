// 泛型约束
// 在类型后加一个extends 再跟一个约束类型
// function add<T extends number>(a: T, b: T) {
//   return a + b;
// }
function fn(a) {
    a.length;
}
fn('leixw');
fn([1, 2, 3]);
let obj = {
    name: 'lei',
    sex: "女"
};
function ob(obj, key) {
    return obj[key];
}
ob(obj, 'name');
export {};
//# sourceMappingURL=generic_type_constraint.js.map