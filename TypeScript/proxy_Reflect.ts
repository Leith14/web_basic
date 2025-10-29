// proxy 代理  13个方法 参数一模一样 es6里面新增的一个拦截器
// Refect 反射 13个方法 参数一模一样
// mobx observable

// let person = { name: "leixw", age: 18 };
// proxy 支持对象 数组 函数 set map
// person.name; //取值
// person.age = 17; //赋值
// let proxy = new Proxy(person, {
//     //取值
//     get(){

//     },
//     //赋值
//     // person age 19 person
//     set(target,key,value,receiver){
//         return true
//     },
//     // 拦截函数调用
//     apply(){},
//     //拦截 in 操作符
//     has(){},
//     // 拦截 for in
//     ownKeys(){},
//     // 拦截 new 操作符
//     construct(){},
//     // 拦截 delete 操作符
//     deleteProperty(){},

//  })

// let personProxy = new Proxy(person, {
//   get(target, key, receiver) {
//     if (target.age <= 18) {
//       return Reflect.get(target, key, receiver);
//     } else {
//       return "成年啦";
//     }
//   },
// });
// console.log(personProxy.age);
// console.log(Reflect.get(person, "name", person));
// console.log(Reflect.set(person, "name", "leijing", person));

// console.log(person);


// proxy 观察者模式
const list:Set<Function> = new Set();

const autorun = (cb:Function)=>{
  if(!list.has(cb)){
    list.add(cb);
  }
}
const observable = <T extends object>(params:T)=>{
  return new Proxy(
    params,{
      set(target,key,value,receiver){
        const result = Reflect.set(target,key,value,receiver);
        list.forEach(cb=>cb())
        return result
      }
    }
  )
}

const personProxy = observable({name:"leixw",attr:'威猛先生'})
autorun(()=>{
  console.log('有变化啦')
})

personProxy.attr = 'leijing'
personProxy.name = 'liulei'