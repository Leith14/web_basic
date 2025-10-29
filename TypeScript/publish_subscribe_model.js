// 1. 什么是 发布订阅模式？ 是设计模式的其中一种
// 2. 面试经常问，思想被人们广泛使用
// 3. 谁在用？ vue2 eventBus $on监听 $emit派发
// 4. electron ipcRenderer ipcMain 通讯
// 5. DOM2 addEventListener removeEventListener
class Emitter {
    events;
    constructor() {
        this.events = new Map();
    }
    once(event, fn) {
        // 1. 创建一个自定义函数 通过on触发，触发完之后立马通过off回收掉
        const cb = (...args) => {
            fn(...args);
            this.off(event, cb);
        };
        this.on(event, cb);
    }
    off(event, fn) {
        const callbackList = this.events.get(event);
        if (callbackList) {
            callbackList.splice(callbackList.indexOf(fn), 1);
        }
    }
    on(event, fn) {
        // 证明存过了
        if (this.events.has(event)) {
            this.events?.get(event)?.push(fn);
        }
        else {
            this.events.set(event, [fn]);
        }
    }
    emit(event, ...args) {
        const callbackList = this.events.get(event);
        // console.log(callbackList);
        if (callbackList) {
            callbackList.forEach((fn) => fn(...args));
        }
    }
}
const emitter = new Emitter();
const fn = (b, n) => {
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
export {};
//# sourceMappingURL=publish_subscribe_model.js.map