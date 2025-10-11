var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
//1.增长枚举
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
console.log(Color2.Red);
console.log(Color2.Green);
console.log(Color2.Blue);
//2.自定义枚举
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 3] = "Green";
    Color3[Color3["Blue"] = 5] = "Blue";
})(Color3 || (Color3 = {}));
console.log(Color3.Red);
console.log(Color3.Green);
console.log(Color3.Blue);
//3.字符串枚举
var Color4;
(function (Color4) {
    Color4["Red"] = "red";
    Color4["Green"] = "green";
    Color4["Blue"] = "blue";
})(Color4 || (Color4 = {}));
console.log(Color4.Red);
console.log(Color4.Green);
console.log(Color4.Blue);
//4.异构枚举
var Color5;
(function (Color5) {
    Color5["No"] = "No";
    Color5[Color5["Yes"] = 1] = "Yes";
})(Color5 || (Color5 = {}));
console.log(Color5.No);
console.log(Color5.Yes);
var obj = {
    red: Color5.Yes
};
var code = 0;
if (code === 0 /* Types.sucess */) {
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
var Types2;
(function (Types2) {
    Types2[Types2["sucess"] = 456] = "sucess";
})(Types2 || (Types2 = {}));
var sucess = Types2.sucess;
var key = Types2[sucess];
console.log("value:".concat(sucess, "---key:").concat(key));
