// 1. 对象混入  合并  A对象  B对象  合并到一起
// 2. 类的混入  A类  B类  A类和B类合并到一起
interface A {
  age: number;
}
interface B {
  name: string;
}

let a: A = { age: 18 };
let b: B = { name: "张三" };

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
  log(msg: string) {
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

type Custructor<T> = new (...args: any[]) => T;
function pluginMinxins<T extends Custructor<App>>(Base: T) {
  return class extends Base {
    private logger = new Logger();
    private html = new Html();
    constructor(...args: any[]) {
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

