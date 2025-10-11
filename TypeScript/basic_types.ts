let notANumber: number = NaN;//Nan
let num: number = 123;//普通数字
let infinityNumber: number = Infinity;//无穷大
let decimal: number = 6;//十进制
let hex: number = 0xf00d;//十六进制
let binary: number = 0b1010;//二进制
let octal: number = 0o744;//八进制s

let str1:string = 'leixw'
let str2:string = `${num}`

let b:boolean = true;//布尔值
let n:null = null;//null
let u:undefined = undefined;//undefined
// "strict": true时报错 null不能赋值给undefined
//  但实际上在js中null和undefined是相等的
//  可以互相赋值
// n = u
// u = n

let void1:void = undefined;//void
//void, "strict": true时报错
// let void2:void = null;

function myFn():void{

}


console.log(str2)