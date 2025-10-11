enum Color{
    Red,
    Green,
    Blue
}
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);

//1.增长枚举
enum Color2{
    Red=1,
    Green,
    Blue
}
console.log(Color2.Red);
console.log(Color2.Green);
console.log(Color2.Blue);

//2.自定义枚举
enum Color3{
    Red=1,
    Green=3,
    Blue=5
}
console.log(Color3.Red);
console.log(Color3.Green);
console.log(Color3.Blue);

//3.字符串枚举
enum Color4{
    Red='red',
    Green='green',
    Blue='blue'
}
console.log(Color4.Red);
console.log(Color4.Green);
console.log(Color4.Blue);

//4.异构枚举
enum Color5{
    No='No',
    Yes=1
}
console.log(Color5.No);
console.log(Color5.Yes);

//5.接口枚举
interface A{
    red:Color5.Yes,
}
let obj:A = {
    red:Color5.Yes
}

//6.const枚举
const enum Types{
    sucess,
    fail
}
let code:number=0
if(code===Types.sucess){
    console.log('sucess');
}

// const枚举编译js后效果
// var code = 0;
// if (code === 0 /* Types.sucess */) {
//     console.log('sucess');
// }
//普通枚举编译js后效果
// var Types;
// (function (Types) {
//     Types[Types["sucess"] = 0] = "sucess";
//     Types[Types["fail"] = 1] = "fail";
// })(Types || (Types = {}));
// var code = 0;
// if (code === Types.sucess) {
//     console.log('sucess');
// }

//7.反向映射
enum Types2{
    // sucess = '456'// 字符串无法反射
    sucess = 456

}
let sucess:number = Types2.sucess
let key = Types2[sucess]
console.log(`value:${sucess}---key:${key}`);