//1. 函数定义类型和返回值 | 箭头函数定义类型和返回值
//2. 函数默认的参数 | 可选参数
//3. 参数是一个对象如何定义
//4. 函数this类型
//5. 函数重载
function add1(a = 10, b) {
    return a + (b || 0);
}
const add2 = (a, b) => a + b;
console.log(add1(1, 2));
function add3(user) {
    return user;
}
console.log(add3({ name: 'leixw', age: 37 }));
// ts 可以定义this的类型，在js中无法使用
let obj = {
    user: [1, 2, 3],
    // 必须是第一个参数定义this的类型
    add(num) { this.user.push(num); },
};
obj.add(5);
console.log(obj);
let user = [1, 2, 3];
function findNum(ids) {
    if (typeof ids === 'number') {
        return user.filter(item => item === ids);
    }
    else if (Array.isArray(ids)) {
        user.push(...ids);
        return user;
    }
    else {
        return user;
    }
}
console.log(findNum());
console.log(findNum(2));
console.log(findNum([4, 5, 6]));
export {};
//# sourceMappingURL=function_type.js.map