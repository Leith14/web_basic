// any  unknown
//1. top type 顶级类型 any unknown
//2. Object
//3. Number String Boolean Symbol 
//4. number string boolean symbol
//5. 1，'abc' true false
//6. never
let a = 123; // anyscript中任何类型都可以赋值给any
a = 'str';
a = true;
a = {};
a = [];
a = Symbol();
let b = 5;
let u = 7; // unknown类型的特殊点：unknown只能赋值给any和unknown
//  u = 5 //报错 unknown不能赋值给number
// b = u
let leixw1 = { name: 'leixw', open: () => 123 };
// 报错 unknown类型不能访问属性
// leixw.name
// any类型可以访问任何属性
// unknown类型比any更安全
let leixw2 = { name: 'leixw', open: () => 123 };
console.log(leixw2.open());
export {};
//# sourceMappingURL=top_type.js.map