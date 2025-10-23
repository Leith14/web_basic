// 使用import 如果是默认导出 名字随便起
// import {add as add2,arr,x} from './test'
// 导入所有 
// import * as api from './test'
// console.log(api);
// console.log(obj);
// console.log(add2(1,2));
// console.log(arr);
// console.log(x);
// 动态引入
if (true) {
    import('./test.js').then(res => {
        console.log(res);
    });
}
