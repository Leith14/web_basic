// 基类 抽象类
//abstracts 所定义的抽象类
//abstracts 所定义的抽象方法，只能描述不能实现
//抽象类不能被实例化
abstract class Vue {
    name: string;
    abstract init(name: string): void;
    constructor(name?: string) {
        this.name = name || 'vue';
    }
    getName() {
        return this.name;
    }
}
//派生类继承抽象类
class React extends Vue {
    constructor(){
        super();
    }
    init(name: string): void {
        this.name = name;
    }
    setName(name: string) {
        this.name = name;
    }
}

const react = new React();
react.setName('leixw');
console.log(react.getName());