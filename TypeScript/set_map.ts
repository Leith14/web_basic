// Set

let set: Set<number> = new Set([1, 2, 3, 4, 5, 6, 6, 6, 6]); //天然去重，引用类型除外
// set.add(7)
// console.log(set);
// console.log(set.has(7));
// set.delete(7)
// console.log(set);
// set.clear()
// console.log(set);

// Map的key可以是任意类型，引用类型也可以
let obj1 = { name: "leixw" };
let obj2 = { name: "leixw" };
let map: Map<object, any> = new Map();
map.set(obj1, "leixw");
map.set(obj2, "yangjing");
// for(let [key,value] of map){
//   console.log(key,value);
// }

// weakmap weakset 弱项，弱引用，不会被计入垃圾回收策略
// weakmap map的区别，weakmap的key只能是引用类型
let obj3: any = { name: "雷雪雯" }; // 1
let aahph: any = obj3; // 2
let weakmap: WeakMap<object, any> = new WeakMap();
weakmap.set(obj3, "leixw"); // 2
// obj3 = null; // -1
// aahph = null;
console.log(weakmap);

console.log(weakmap.get(obj3));
