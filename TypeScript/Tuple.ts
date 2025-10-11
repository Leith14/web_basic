let arr1 = [1,false]
let arr2:[number,boolean] = [1,false]
const arr3:[number,boolean] = [1,false]
arr3[0] = 2
// arr3 = [3,true] // 不允许改变量
// 如果不想让改元组内的值，可用用readonly
const arr4:readonly [number,boolean] = [1,false]

const arr5:[x:number,y?:boolean] = [1]
const excel:[string,string,number][]=[
    ['leixw', 'male', 18],
    ['lilei', 'female', 20] 
]

type first = typeof arr2[0]
type lengt = typeof arr2['length']