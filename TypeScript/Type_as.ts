// let phone:number|string = 12345678901;
// 联合类型
let fn = function (type: number | boolean): boolean {
  return !!type;
};
let result: boolean = fn(false);
console.log(result);

// 交叉类型
interface Pepole {
  name: string;
  age: number;
}
interface Man {
  sex: number;
}
const leixw = (man: Pepole & Man): void => {
  console.log(man);
};
leixw({
  name: "leixw",
  age: 37,
  sex: 1,
});

// 类型断言
let fn1 = function (num: number | string): void {
  console.log((num as string).length);
};
fn1("123");

interface A {
  run: string;
}
interface B {
  build: string;
}
let fn2 = (type: A | B): void => {
  console.log((<A>type).run);
  console.log((type as A).run);
};
// 不要滥用类型断言
const fn3 = (type:any):boolean=>{
    return type as boolean
}
console.log(fn3(1));
