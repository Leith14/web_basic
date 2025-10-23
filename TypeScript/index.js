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
    once() { }
    off() { }
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
        console.log(callbackList);
    }
}
const emitter = new Emitter();
emitter.on("message", (b, n) => {
    console.log("触发了1", b, n);
});
emitter.on("message", (b, n) => {
    console.log("触发了2", b, n);
});
console.log(emitter);
emitter.emit("message", false, 1);
export {};
//# sourceMappingURL=index.js.map