// 1. Class的基本用法，继承和类型约束，implements
// 2. Class的修饰符：public（默认）、private（类内部使用，子类和外部不行）、protected（类内部和子类可用，外部不行）、readonly、static
// 3. super的原理
// 4. 静态方法
// 5. get，set 与Object.defineProperty类似

// interface Options {
//   el: string | HTMLElement;
// }

// interface VueCls {
//   options: Options;
//   init(): void;
// }

// interface Vnode {
//   tag: string; // div section header
//   text?: string;
//   children?: Vnode[];
// }

// //虚拟DOM 简单版
// class DOM {
//   // 创建节点的方法
//   private createElement(el: string) {
//     return document.createElement(el);
//   }
//   //填充文本的方法
//   private setText(el: HTMLElement, text: string | null) {
//     el.textContent = text;
//   }
//   // 渲染函数
//   protected render(data: Vnode) {
//     let root = this.createElement(data.tag);
//     if (data.children && Array.isArray(data.children)) {
//       data.children.forEach((item) => {
//         let child = this.render(item);
//         root.appendChild(child);
//       });
//     } else {
//       this.setText(root, data.text || null);
//     }
//     return root;
//   }
// }

// class Vue extends DOM implements VueCls {
//   static environment: string = "production"; // 静态属性
//   readonly  options: Options; // readonly用于修饰属性，表示该属性只能在构造函数中被赋值
//   constructor(options: Options) {
//     super(); // 父类的prototype.constructor.call(this)
//     this.options = options;
//     this.init();
//   }
//   static version(){
//     this.environment
//     return 'v3.0.0'
//     // 这里注意，不能调用实例的方法和属性
//   }
//   init(): void {
//     // 虚拟DOM 就是通过js去渲染真实DOM
//     let data: Vnode = {
//       tag: "div",
//       children: [
//         { tag: "section", text: "子节点1" },
//         { tag: "section", text: "子节点2" },
//         { tag: "section", text: "子节点3" },
//       ],
//     };
//     let app = typeof  this.options.el==='string'?  document.querySelector(this.options.el): this.options.el;
//     app?.appendChild(this.render(data))
//     ;
//   }
// }

// let vue = new Vue({ el: "#app" });
// Vue.version()

// // 不用new 也能调用的就是静态方法
// Promise.all 


class Ref {
  _value: any;
  constructor(value: any) {
    this._value = value;
  }

  get value() {
    return this._value + 'leixw';
  }
  set value(newVal) {
    this._value = newVal + 'keifd';
  }
}
const ref = new Ref('123');
ref.value = 'leixw'
console.log(ref.value);

