// 1. 什么是 发布订阅模式？ 是设计模式的其中一种
// 2. 面试经常问，思想被人们广泛使用
// 3. 谁在用？ vue2 eventBus $on监听 $emit派发
// 4. electron ipcRenderer ipcMain 通讯
// 5. DOM2 addEventListener removeEventListener

// 用法示例
// const cb = () => {
//   console.log("触发了");
// };
// // 监听器
// document.addEventListener("asd", cb, {
//   once: true, // 只执行一次
// });
// document.removeEventListener("asd", cb);//移除监听函数

// const e = new Event("asd"); //订阅中心

// document.dispatchEvent(e);

// 实现 once on emit off 订阅中心Map<事件的名称，[Funnction]订阅者集合>
interface I {
  events: Map<string, Function[]>;
  once: (event: string, fn: Function) => void; //触发一次订阅器
  on: (event: string, fn: Function) => void; //监听
  emit: (event: string, ...args: any[]) => void; //派发
  off: (event: string, fn: Function) => void; //删除监听器
}
class Emitter implements I {
  events: Map<string, Function[]>;
  constructor() {
    this.events = new Map();
  }
  once(event: string, fn: Function) {
    // 1. 创建一个自定义函数 通过on触发，触发完之后立马通过off回收掉
    const cb = (...args: any[]) => {
      fn(...args);
      this.off(event, cb);
    };
    this.on(event, cb);
  }
  off(event: string, fn: Function) {
    const callbackList = this.events.get(event);
    if (callbackList) {
      callbackList.splice(callbackList.indexOf(fn), 1);
    }
  }
  on(event: string, fn: Function) {
    // 证明存过了
    if (this.events.has(event)) {
      this.events?.get(event)?.push(fn);
    } else {
      this.events.set(event, [fn]);
    }
  }
  emit(event: string, ...args: any[]) {
    const callbackList = this.events.get(event);
    // console.log(callbackList);
    if (callbackList) {
      callbackList.forEach((fn) => fn(...args));
    }
  }
}

const emitter = new Emitter();
const fn = (b: boolean, n: number) => {
  console.log(1, b, n);
};
emitter.on("message", fn);
emitter.off("message", fn);
emitter.once("message", fn);

// console.log(emitter);

emitter.emit("message", false, 1);
emitter.emit("message", false, 1);
emitter.emit("message", false, 1);
emitter.emit("message", false, 1);
