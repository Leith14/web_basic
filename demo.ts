class MyClass<T> {
    public value: T
    constructor(value: T) {
        this.value = value
    }

    do(input: T): T {
        console.log('处理数据', this.value)

        console.log('输入数据', input)
        return input
    }
}
const myStr = new MyClass<string>('hello')
myStr.do('input value')

const myNum = new MyClass<number>(213)
myNum.do(456)