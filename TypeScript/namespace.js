//namespace
// 用法：嵌套 抽离 导出 简化 合并
// 示例
export var Test;
(function (Test) {
    // 定义变量 方法, 外部使用必须用export关键字
    Test.a = 1;
    function b() {
        console.log("b方法");
    }
    Test.b = b;
})(Test || (Test = {}));
// 同名合并
// namespace Test {
//   // 定义变量 方法, 外部使用必须用export关键字
//   export let b = 2;
// }
// console.log(Test.b);
// 别的文件可以这样引用
// import { Test } from './namespace'
// import a = Test.a
// console.log(a);
//案例： 跨端的项目 h5 Android ios 小程序
var ios;
(function (ios) {
    ios.pushNotification = (title, type) => {
        console.log('ios推送');
    };
})(ios || (ios = {}));
var android;
(function (android) {
    android.pushNotification = (title) => {
        console.log('android推送');
    };
    android.callPhone = (phone) => {
        console.log('android打电话');
    };
})(android || (android = {}));
var h5;
(function (h5) {
    h5.pushNotification = (title) => {
        console.log('h5推送');
    };
})(h5 || (h5 = {}));
var miniProgram;
(function (miniProgram) {
    miniProgram.pushNotification = (title) => {
        console.log('小程序推送');
    };
})(miniProgram || (miniProgram = {}));
//# sourceMappingURL=namespace.js.map