// 1. Class的基本用法，继承和类型约束，implements
// 2. Class的修饰符：public、private、protected、readonly、static
// 3. super的原理
// 4. 静态方法
// 5. get，set
//虚拟DOM 简单版
class DOM {
    // 创建节点的方法
    createElement(el) {
        return document.createElement(el);
    }
    //填充文本的方法
    setText(el, text) {
        el.textContent = text;
    }
    // 渲染函数
    render(data) {
        let root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach((item) => {
                let child = this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text || null);
        }
        return root;
    }
}
class Vue extends DOM {
    options;
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    init() {
        // 虚拟DOM 就是通过js去渲染真实DOM
        let data = {
            tag: "div",
            children: [
                { tag: "section", text: "子节点1" },
                { tag: "section", text: "子节点2" },
                { tag: "section", text: "子节点3" },
            ],
        };
        let app = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el;
        app?.appendChild(this.render(data));
    }
}
new Vue({ el: "#app" });
export {};
//# sourceMappingURL=index.js.map