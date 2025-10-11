//1. 函数定义类型和返回值 | 箭头函数定义类型和返回值
//2. 函数默认的参数 | 可选参数
//3. 参数是一个对象如何定义
//4. 函数this类型
//5. 函数重载

interface User {
  name: string;
  age: number;
}
function add1(a: number = 10, b?: number): number {
  return a + (b || 0);
}

const add2 = (a: number, b: number): number => a + b;

console.log(add1(1,2));

function add3(user: User): User {
    return user

}
console.log(add3({name: 'leixw', age: 37}));

interface Obj {
    user:number[]
    add:(this:Obj,num:number)=>void
}
// ts 可以定义this的类型，在js中无法使用

let obj:Obj = {
    user: [1,2,3],
    // 必须是第一个参数定义this的类型
    add(this:Obj,num:number){this.user.push(num)},
}
obj.add(5)
console.log(obj);

let user:number[] = [1,2,3]
function findNum(add:number[]):number[];//如果传入一个number类型数组那就做添加
function findNum(id:number):number[];//如果传入一个id类型就是单个查询
function findNum():number[]//如果不传参数就是查询所有
function findNum(ids?:number|number[]):number[]{
    if(typeof ids === 'number'){
        return user.filter(item=>item===ids)
    }
    else if(Array.isArray(ids)){
        user.push(...ids)
        return user
    }
    else{
        return user
    }
}
console.log(findNum());
console.log(findNum(2));
console.log(findNum([4,5,6]));