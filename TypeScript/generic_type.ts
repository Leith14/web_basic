// 动态类型
function leixw1(a:number,b:number):Array<number>{
  return [a, b];
}

function leixw2_str(a:string,b:string):Array<string>{
  return [a, b];
}
function leixw<T>(a: T, b: T): Array<T> {
  return [a, b];
}
// number
leixw<number>(1, 2); // 全称写法
leixw(1, 2);
leixw(true, false);
leixw("true", "false");

// type
type A<T> = string | number | T;
let a: A<undefined> = undefined;

// interface
// interface Data<T> {
//   msg: T;
// }
// let data: Data<string> = {
//   msg: "leixw",
// };

//泛型高级用法
function add1<T, K>(a: T, b: K): Array<T | K> {
  return [a, b];
}

add1(1, true);
// 添加泛型默认类型
function add2<T = number, K = number>(a: T, b: K): Array<T | K> {
  return [a, b];
}
add2(false, 1);

// 实战应用实例
const axios = {
  get<T>(url: string):Promise<T> {
    return new Promise((resolve, reject) => {
      let xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      };
      xhr.send(null);
    });
  },
};

interface Data {
  message:string
  code:number
}

axios.get<Data>('./data.json').then(res=>{
  console.log(res)
})