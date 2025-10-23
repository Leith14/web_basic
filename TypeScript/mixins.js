let a = { age: 18 };
let b = { name: "张三" };
// 1. 扩展运算符  浅拷贝  返回新的类型
let c = { ...a, ...b };
console.log(c);
// 2. Object.assign  浅拷贝  返回交叉类型
let c2 = Object.assign({}, a, b);
console.log(c2);
// 3. structuredClone  深拷贝
const c3 = structuredClone(a);
console.log(c3);
// 4. 插件类型的类混入
class Logger {
    log(msg) {
        console.log(msg);
    }
}
class Html {
    render() {
        console.log("render");
    }
}
class App {
    run() {
        console.log("run");
    }
}
function pluginMinxins(Base) {
    return class extends Base {
        logger = new Logger();
        html = new Html();
        constructor(...args) {
            super(...args);
            this.logger = new Logger();
            this.html = new Html();
        }
        run() {
            this.logger.log("run");
        }
        render() {
            this.html.render();
        }
    };
}
const mixins = pluginMinxins(App);
const app = new mixins();
app.render();
export {};
//# sourceMappingURL=mixins.js.map