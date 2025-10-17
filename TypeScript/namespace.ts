//namespace
// 用法：嵌套 抽离 导出 简化 合并
// 示例
export namespace Test {

    // 定义变量 方法, 外部使用必须用export关键字
    export let a = 1;
    export function b() {
      console.log("b方法");
    }
}
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
namespace ios{
    export const pushNotification = (title:string,type:number)=>{
        console.log('ios推送');
    }
}
namespace android{
    export const pushNotification = (title:string)=>{
        console.log('android推送');
    }
    export const callPhone = (phone:string)=>{
        console.log('android打电话');
    }
}

namespace h5{
    export const pushNotification = (title:string)=>{
        console.log('h5推送');
    }
}
namespace miniProgram{
    export const pushNotification = (title:string)=>{
        console.log('小程序推送');
    }
}
