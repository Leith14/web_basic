"use strict";
class MyClass {
    constructor(value) {
        this.value = value;
    }
    do(input) {
        console.log('处理数据', this.value);
        console.log('输入数据', input);
        return input;
    }
}
const myStr = new MyClass('hello');
myStr.do('input value');
const myNum = new MyClass(213);
myNum.do(456);
