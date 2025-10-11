type A = string & number
type B = void | null | never
// function loop():never{
//     while(true){}
// }

type C = '唱歌' | '跳舞' | 'rap' | '打篮球'
function kun(value:C){
    switch(value){
        case '唱歌':
            console.log('唱歌');
            break;
        case '跳舞':
            console.log('跳舞');
            break;
        case 'rap':
            console.log('rap');
            break;
        case '打篮球':
            console.log('打篮球');
            break;
        default:
            const error:never = value //穷尽性检查
            break;
    }
}